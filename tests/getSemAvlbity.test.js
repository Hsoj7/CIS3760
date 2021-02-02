/* eslint-disable no-undef */
const { getSemAvlbity } = require('../getSemAvlbity');

test('Invaild code section', async () => {
    await expect(getSemAvlbity('blah', 1000)).resolves.toBe('Sorry could not find that course');
});

test('Invaild course code number', async () => {
    await expect(getSemAvlbity('cis', 3000)).resolves.toBe('Sorry could not find that course');
});

test('Test lowercase code section', async () => {
    await expect(getSemAvlbity('cis', 1000)).resolves.toBe('CIS*1000 is avalablie in the Summer, Fall, and Winter semester(s).');
});

test('Test uppercase code section', async () => {
    await expect(getSemAvlbity('CIS', 1000)).resolves.toBe('CIS*1000 is avalablie in the Summer, Fall, and Winter semester(s).');
});

test('Test a course avalible in the fall, winter, and summer semester', async () => {
    await expect(getSemAvlbity('CIS', 1000)).resolves.toBe('CIS*1000 is avalablie in the Summer, Fall, and Winter semester(s).');
});

test('Test a course only avalible in the fall, winter, and summer semester', async () => {
    await expect(getSemAvlbity('CIS', 1250)).resolves.toBe('CIS*1250 is avalablie in the Fall semester(s).');
});

test('Test a course only avalible in the winter semester', async () => {
    await expect(getSemAvlbity('CIS', 2170)).resolves.toBe('CIS*2170 is avalablie in the Winter semester(s).');
});

test('Test a course only avalible in the summer semester', async () => {
    await expect(getSemAvlbity('HIST', 2220)).resolves.toBe('HIST*2220 is avalablie in the Summer semester(s).');
});

test('Test a course avalible in the fall, and winter summer semester', async () => {
    await expect(getSemAvlbity('CIS', 3760)).resolves.toBe('CIS*3760 is avalablie in the Fall, and Winter semester(s).');
});

test('Test a course avalible in a unique semester', async () => {
    await expect(getSemAvlbity('CIS', 4450)).resolves.toBe('CIS*4450 is avalablie in the uniquly offered semester(s).');
});
