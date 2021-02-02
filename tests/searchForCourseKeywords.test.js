/* eslint-disable no-undef */
const { searchForCourseKeywords } = require('../searchForCourseKeywords');

test('Invaild input', async () => {
    await expect(searchForCourseKeywords('blah')).resolves.toBe('please provide what type of course you are looking for i.e.\nWhat cis course has a keyword in it.');
});

test('Invaild section input', async () => {
    await expect(searchForCourseKeywords(' blah ')).resolves.toBe('please provide what type of course you are looking for i.e.\nWhat cis course has a keyword in it.');
});

test('No valid keyword provided', async () => {
    await expect(searchForCourseKeywords(' hist ')).resolves.toBe('please provide what keyword you are looking for i.e.\nWhat cis course has a "keyword" in it. or What cis course has a \'keyword\' in it.');
});

test('No found keyword "', async () => {
    await expect(searchForCourseKeywords(' cis "sytems"')).resolves.toBe('Could not find any courses that mentioned sytems');
});

test('No found keyword \'', async () => {
    await expect(searchForCourseKeywords(' cis \'sytems\'')).resolves.toBe('Could not find any courses that mentioned sytems');
});

test('Single keyword found "', async () => {
    await expect(searchForCourseKeywords(' cis "game"')).resolves.toBe('These courses have game mentioned: CIS 4820;');
});

test('Single keyword found \'', async () => {
    await expect(searchForCourseKeywords(' cis \'game\'')).resolves.toBe('These courses have game mentioned: CIS 4820;');
});

test('3 keyword found "', async () => {
    await expect(searchForCourseKeywords(' cis "object"')).resolves.toBe('These courses have object mentioned: CIS 2430, CIS 3750, and CIS 3760;');
});

test('Double keyword found "', async () => { // find double
    await expect(searchForCourseKeywords(' cis "game"')).resolves.toBe('These courses have game mentioned: CIS 4820;');
});

test('lots of keyword found "', async () => {
    await expect(searchForCourseKeywords(' cis "intro"')).resolves.toBe('These courses have intro mentioned: CIS 1000, CIS 1050, CIS 1200, CIS 1250, CIS 1300, CIS 1500, CIS 1910, CIS 2170, CIS 2430, CIS 2520, CIS 2750, CIS 2910, CIS 3190, CIS 3700, CIS 3750, CIS 4010, CIS 4030, CIS 4150, CIS 4520, CIS 4720, CIS 4780, and CIS 4800;');
});

test('single keywords found "', async () => { // find double
    await expect(searchForCourseKeywords(' cis "game" "game"')).resolves.toBe('These courses have game mentioned: CIS 4820;These courses have game mentioned: CIS 4820;');
});

test('single title keyword found "', async () => { // find double
    await expect(searchForCourseKeywords(' cis "Introduction to Computer Applications"')).resolves.toBe('These courses have introduction to computer applications mentioned: CIS 1000;');
});
