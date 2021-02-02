const { UoGInfoRetreiver } = require('./UoGInfoRetreiver');

const searchForCourseKeywords = async function(message) {
    const cInfo = new UoGInfoRetreiver();
    var codes = message.match(/ (\D{3}|\D{4}) /g);
    var code;
    // console.log(codes);
    for (var i in codes) {
        var c = codes[i].toString().trim().toUpperCase();
        var cenum = cInfo.CourseSections[c];
        if (typeof cenum !== 'undefined') {
            code = cenum;
            break;
        }
    }

    if (typeof code === 'undefined') {
        return 'please provide what type of course you are looking for i.e.\nWhat cis course has a keyword in it.';
    }
    var keywords = message.match(/("|')(.*?)("|')/g);
    if (keywords == null || keywords.length === 0) {
        return 'please provide what keyword you are looking for i.e.\nWhat cis course has a "keyword" in it. or What cis course has a \'keyword\' in it.';
    }
    var retmsg = '';
    for (var j in keywords) {
        var key = keywords[j].toString();
        key = key.replace('"', '').replace('"', '').trim();
        key = key.replace('\'', '').replace('\'', '').trim();
        key = key.toLowerCase();

        var res = await cInfo.getSubjectCourses('2020-2021', code.code).then(result => {
            var keywordCources = [];
            for (var course in result) {
                try {
                    var found = false;
                    if (typeof result[course].description !== 'undefined') {
                        if (result[course].description.toLowerCase().includes(key)) {
                            keywordCources.push(result[course].courseCode.replace('*', ' '));
                            found = true;
                        }
                    }

                    if (typeof result[course].courseTitle !== 'undefined' && !found) {
                        if (result[course].courseTitle.toLowerCase().includes(key)) {
                            keywordCources.push(result[course].courseCode.replace('*', ' '));
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            var tempRetMsg = 'These courses have ' + key + ' mentioned: ';
            if (typeof keywordCources !== 'undefined' && keywordCources != null && keywordCources.length !== 0) {
                for (let k = 0; k < keywordCources.length; k++) {
                    tempRetMsg += keywordCources[k];
                    if (k === keywordCources.length - 2) {
                        tempRetMsg += ', and ';
                    } else if (k === keywordCources.length - 1) {
                        tempRetMsg += ';';
                    } else {
                        tempRetMsg += ', ';
                    }
                }
                return tempRetMsg;
            } else {
                return 'Could not find any courses that mentioned ' + key;
            }
        }).catch(err => {
            console.log(err);
            return 'An error occured while trying to rerive your information.';
        });

        if (typeof res !== 'undefined') {
            retmsg += res;
        }
    }
    if (retmsg === '') {
        return 'Please provide a valid query';
    }
    return retmsg;
};

module.exports = {
    searchForCourseKeywords
};
