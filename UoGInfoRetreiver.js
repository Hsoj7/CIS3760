/* eslint-disable prefer-const */
// npm install --save node-html-parser
const HtmlParser = require('node-html-parser');
const fetch = require('node-fetch');

class UoGInfoRetreiver {
    
    CourseSections = {
        ACCT: { code: 'acct', section: 'Accounting' },
        AGR: { code: 'agr', section: 'Agriculture' },
        ANAT: { code: 'anat', section: 'Anatomy' },
        ANSC: { code: 'ansc', section: 'Animal Science' },
        ANTH: { code: 'anth', section: 'Anthropology' },
        ARAB: { code: 'arab', section: 'Arabic' },
        ARTH: { code: 'arth', section: 'Art History' },
        ASCI: { code: 'asci', section: 'Arts and Sciences' },
        BIOC: { code: 'bioc', section: 'Biochemistry' },
        BIOL: { code: 'biol', section: 'Biology' },
        BIOM: { code: 'biom', section: 'Biomedical Sciences' },
        BOT: { code: 'bot', section: 'Botany' },
        BUS: { code: 'bus', section: 'Business' },
        CHEM: { code: 'chem', section: 'Chemistry' },
        CHIN: { code: 'chin', section: 'Chinese' },
        CLAS: { code: 'clas', section: 'Classical Studies' },
        CIS: { code: 'cis', section: 'Computing and Information Science' },
        COOP: { code: 'coop', section: 'Co-operative Education' },
        CROP: { code: 'crop', section: 'Crop Science' },
        CTS: { code: 'cts', section: 'Culture and Technology' },
        ECON: { code: 'econ', section: 'Economics' },
        EDRD: { code: 'edrd', section: 'Environmental Design and Rural Development' },
        ENGG: { code: 'engg', section: 'Engineering' },
        ENGL: { code: 'engl', section: 'English' },
        ENVM: { code: 'envm', section: 'Environmental Management' },
        ENVS: { code: 'envs', section: 'Environmental Sciences' },
        EQN: { code: 'eqn', section: 'Equine' },
        EURO: { code: 'euro', section: 'European Studies' },
        XSEN: { code: 'x___', section: 'External Courses' },
        FIN: { code: 'fin', section: 'Finance' },
        FRHD: { code: 'frhd', section: 'Family Relations and Human Development' },
        FARE: { code: 'fare', section: 'Food, Agricultural and Resource Economics' },
        FOOD: { code: 'food', section: 'Food Science' },
        FREN: { code: 'fren', section: 'French Studies' },
        GEOG: { code: 'geog', section: 'Geography' },
        GERM: { code: 'germ', section: 'German Studies' },
        GREK: { code: 'grek', section: 'Greek' },
        HIST: { code: 'hist', section: 'History' },
        HORT: { code: 'hort', section: 'Horticultural Science' },
        HTM: { code: 'htm', section: 'Hospitality and Tourism Management' },
        HROB: { code: 'hrob', section: 'Human Resources and Organizational Behaviour' },
        HK: { code: 'hk', section: 'Human Kinetics' },
        HUMN: { code: 'humn', section: 'Humanities' },
        INDG: { code: 'iindg', section: 'Indigenous Studies' },
        IPS: { code: 'ips', section: 'Interdisciplinary Physical Science' },
        ISS: { code: 'iss', section: 'Interdisciplinary Social Science' },
        UNIV: { code: 'univ', section: 'Interdisciplinary University' },
        IBIO: { code: 'ibio', section: 'Integrative Biology' },
        IDEV: { code: 'idev', section: 'International Development' },
        ITAL: { code: 'ital', section: 'Italian Studies' },
        LARC: { code: 'larc', section: 'Landscape Architecture' },
        LAT: { code: 'lat', section: 'Latin ' },
        LING: { code: 'ling', section: 'Linguistics' },
        MGMT: { code: 'mgmt', section: 'Management' },
        COST: { code: 'cost', section: 'Marketing and Consumer Studies' },
        MATH: { code: 'math', section: 'Mathematics' },
        MICR: { code: 'micr', section: 'Microbiology' },
        MCB: { code: 'mcb', section: 'Molecular and Cellular Biology' },
        MBG: { code: 'mbg', section: 'Molecular Biology and Genetics' },
        MUSC: { code: 'musc', section: 'Music' },
        NANO: { code: 'nano', section: 'Nanoscience' },
        NEUR: { code: 'neur', section: 'Neuroscience' },
        NUTR: { code: 'nutr', section: 'Nutrition' },
        OAGR: { code: 'oagr', section: 'Organic Agriculture' },
        ONEH: { code: 'oneh', section: 'One Health' },
        PATH: { code: 'path', section: 'Pathology' },
        PHRM: { code: 'phrm', section: 'Pharmacology' },
        PHIL: { code: 'phil', section: 'Philosophy' },
        PHYS: { code: 'phys', section: 'Physics' },
        PSGY: { code: 'psgy', section: 'Physiology' },
        PBIO: { code: 'pbio', section: 'Plant Biology' },
        POLS: { code: 'pols', section: 'Political Science' },
        POPM: { code: 'popm', section: 'Population Medicine' },
        PORT: { code: 'port', section: 'Portuguese' },
        PSYC: { code: 'psyc', section: 'Psychology' },
        REAL: { code: 'real', section: 'Real Estate and Housing' },
        SOC: { code: 'soc', section: 'Sociology' },
        SOAN: { code: 'soan', section: 'Sociology and Anthropology' },
        SPAN: { code: 'span', section: 'Spanish' },
        STAT: { code: 'stat', section: 'Statistics' },
        SART: { code: 'sart', section: 'Studio Art' },
        THST: { code: 'thst', section: 'Theatre Studies' },
        TOX: { code: 'tox', section: 'Toxicology' },
        VETM: { code: 'vetm', section: 'Veterinary Medicine' },
        WMST: { code: 'wmst', section: "Women's Studies" },
        ZOO: { code: 'zoo', section: 'Zoology' }
    }


    /*
    Usage:
    getSubjectCourses(year, subject).then(result => {
            // Do somthing with the result
        }).catch(err => {
            // Do somthing with the err
        });
    */
    async getSubjectCourses(year, subject) {
        let courses = [];
        let data = await fetch('https://www.uoguelph.ca/registrar/calendars/undergraduate/' + year + '/c12/c12' + subject + '.shtml')
            .then(res => res.text())
            .then(body => {
                let courses = [];
                var htmlDom = HtmlParser.parse(body);
                for (let course of htmlDom.querySelectorAll('.course')) {
                    let courseJSON = {
                        courseCode: '',
                        courseTitle: '',
                        avalibleSemesters: [],
                        courseCredit: 0.0,
                        description: '',
                        restrictions: '',
                        prereqs: [],
                        equates: [],
                        Department: ''
                    };
                    var c = course.structuredText;
                    var items = c.split('\n');

                    var courseDetails = items[0].split(' ');
                    courseJSON.courseCode = courseDetails[0];

                    // Adding rhe course title to the JSON
                    courseJSON.courseTitle = courseDetails[1];
                    for (let i = 2; i < courseDetails.length; i++) {
                        // Checking to see if the course title has ended by checking to see if word if the avalible semester
                        if (/(^W{1},?$|^S{1},?$|^F{1},?$|^U{1},?$)?(W{1},?$|S{1},?$|F{1},?$|U{1},?$)/.test(courseDetails[i])) {
                            // Adding avalibleSemesters
                            courseJSON.avalibleSemesters = courseDetails[i].split(',');
                            i = courseDetails.length;
                        } else {
                            courseJSON.courseTitle += ' ' + courseDetails[i];
                        }
                    }
                    courseJSON.courseCredit = parseFloat(courseDetails[courseDetails.length - 1].replace('[', '').replace(']', ''));

                    courseJSON.description = items[1];

                    for (let i = 2; i < items.length; i++) {
                        switch (items[i]) {
                        case 'Prerequisite(s):':
                            courseJSON.prereqs = items[i + 1].split(',');
                            i++;
                            break;
                        case 'Equate(s):':
                            courseJSON.equates = items[i + 1].split(',');
                            i++;
                            break;
                        case 'Restriction(s):':
                            courseJSON.restrictions = items[i + 1];
                            i++;
                            break;
                        case 'Department(s):':
                            courseJSON.Department = items[i + 1];
                            i++;
                            break;
                        default:
                            break;
                        }
                    }
                    courses.push(courseJSON);
                }
                // console.log(courses);
                return courses;
            });
        courses = data;
        return courses;
    }
}
module.exports.UoGInfoRetreiver = UoGInfoRetreiver;
