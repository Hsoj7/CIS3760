/* eslint-disable no-undef */
const { RequestProcessor } = require('../RequestProcessor');

test('Invaild command', async () => {
    var reqProc = new RequestProcessor();
    await expect(reqProc.handleUserMsg('blah', 1000)).resolves.toBe('blah is not a vaild command');
});

test('code code as a invaild command', async () => {
    var reqProc = new RequestProcessor();
    await expect(reqProc.handleUserMsg('CIS 3050', 1000)).resolves.toBe('CIS 3050 is not a vaild command');
});

test('no course code for course getting semesters', async () => {
    var reqProc = new RequestProcessor();
    await expect(reqProc.handleUserMsg('semester', 1000)).resolves.toBe('please provide a course code');
});

test('lowercase no space course code for course getting semesters', async () => {
    var reqProc = new RequestProcessor();
    await expect(reqProc.handleUserMsg('semester cis3050', 1000)).resolves.toBe('CIS*3050 is avalablie in the Fall semester(s).');
});

test('uppercase no space course code for course getting semesters', async () => {
    var reqProc = new RequestProcessor();
    await expect(reqProc.handleUserMsg('semester CIS3050', 1000)).resolves.toBe('CIS*3050 is avalablie in the Fall semester(s).');
});

test('uppercase w space course code for course getting semesters', async () => {
    var reqProc = new RequestProcessor();
    await expect(reqProc.handleUserMsg('semester CIS 3050', 1000)).resolves.toBe('CIS*3050 is avalablie in the Fall semester(s).');
});

test('uppercase w * course code for course getting semesters', async () => {
    var reqProc = new RequestProcessor();
    await expect(reqProc.handleUserMsg('semester CIS*3050', 1000)).resolves.toBe('CIS*3050 is avalablie in the Fall semester(s).');
});
