/*
input: a course code string formatted like CIS*3150

output cases:
1. the course code was found and prereqs were returned
2. the course code was found but course contains no prereqs. empty string was returned
3. the course code was not found and "ERROR: courseCode does not exist" was returned

To call the function from another .js file, this is what I used:

// const { prerequisites } = require('./find-prereqs');

// let x = new prerequisites();
// let value = x.findPrereq("CIS*3150");
// value.then(function(result){
//     //DO SOMETHING WITH result
// });
*/

const { UoGInfoRetreiver } = require('./UoGInfoRetreiver');

class prerequisites {
    // function that returns prerequisites given a course code
    async findPrereq(codeSection, codeNum) {
        var info = new UoGInfoRetreiver();
        var section = codeSection.toString().toUpperCase();
        var cenum = info.CourseSections[section];
        if (typeof cenum === 'undefined') {
            return 'Sorry could not find that course';
        }
        var courseCode = section + '*' + codeNum;
        // calls the getSubjectCourses file with dates and course code to get list of courses.
        return await info.getSubjectCourses('2020-2021', cenum.code).then(result => {
            var data = result;
            let i = 0;
            let found = 0;
            let prereqString;
            while (data[i] != null) {
                // Find the course code we passed into the function in the .json file
                if (data[i].courseCode.localeCompare(courseCode) === 0) {
                    found = 1;
                    // case where the course has no prereqs
                    if (data[i].prereqs.length < 1) {
                        prereqString = '';
                    } else { // case where the course has prereqs
                        let j = 0;
                        prereqString = '';
                        // returns object, turn object into a string with +'s in between courses if there is more than 1
                        while (data[i].prereqs[j]) {
                            prereqString += data[i].prereqs[j];
                            if (data[i].prereqs[j + 1] != null) {
                                prereqString += ' +';
                            }
                            j++;
                        }
                    }
                }
                i++;
            }

            // if we get to this point and found = 0, the course code pass into the function is not included in the .json file
            if (found === 0) {
                prereqString = 'ERROR: courseCode does not exist';
            }

            return prereqString;
        }).catch(err => {
            // returned error, don't terminate program, try to recover by returning empty string. If this function ever returns empty, input was most likely wrong
            console.log('ERROR: try/catch in find-prereqs returned: ' + err);
            return '';
        });
    }
}

module.exports.prerequisites = prerequisites;
