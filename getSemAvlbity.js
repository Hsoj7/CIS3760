const { UoGInfoRetreiver } = require('./UoGInfoRetreiver');

const getSemAvlbity = async function(codeSection, codeNum) {
    const cInfo = new UoGInfoRetreiver();
    var section = codeSection.toString().toUpperCase();
    var cenum = cInfo.CourseSections[section];
    if (typeof cenum === 'undefined') {
        return 'Sorry could not find that course';
    }
    var courseCode = section + '*' + codeNum;
    return await cInfo.getSubjectCourses('2020-2021', cenum.code).then(result => {
        var fndCourse = result.find(e => e.courseCode === courseCode);
        if (typeof fndCourse !== 'undefined') {
            var semesters = '';
            for (let i = 0; i < fndCourse.avalibleSemesters.length; i++) {
                switch (fndCourse.avalibleSemesters[i].toString()) {
                case 'F':
                    semesters += 'Fall';
                    break;
                case 'S':
                    semesters += 'Summer';
                    break;
                case 'W':
                    semesters += 'Winter';
                    break;
                case 'U':
                    semesters += 'uniquly offered';
                    break;
                }
                if (i === fndCourse.avalibleSemesters.length - 1) {
                    semesters += ' ';
                } else if (i === fndCourse.avalibleSemesters.length - 2) {
                    semesters += ', and ';
                } else {
                    semesters += ', ';
                }
            }
            return courseCode + ' is avalablie in the ' + semesters + 'semester(s).';
        } else {
            return 'Sorry could not find that course';
        }
    }).catch(err => {
        console.log(err);
        return 'An error occured while trying to rerive your information.';
    });
};

module.exports = {
    getSemAvlbity
};
