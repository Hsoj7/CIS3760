/* eslint-disable no-undef */
const { prerequisites } = require('../find-prereqs');

// eslint-disable-next-line new-cap
var x = new prerequisites();

describe('first set', () => {
    test('testing valid course code course code CIS*1000 which as no prereqs', async () => {
        const str = await x.findPrereq('CIS', '1000');
        expect(str).toBe('');
    });
    test('testing valid course code CIS*2500 which has a prereq', async () => {
        const str = await x.findPrereq('CIS', '2500');
        expect(str).toBe('CIS*1300');
    });
    test('testing valid course code CIS*3260 which has more than 1 prereq', async () => {
        const str = await x.findPrereq('CIS', '3260');
        expect(str).toBe('CIS*2750 + CIS*3250 + CIS*3760');
    });
    test('testing invalid course code ACCT*1000', async () => {
        const str = await x.findPrereq('ACCT', '1000');
        expect(str).toBe('ERROR: courseCode does not exist');
    });
    test('testing garbage input !js3*c', async () => {
        const str = await x.findPrereq('cis', 'c');
        expect(str).toBe('ERROR: courseCode does not exist');
    });
    test('testing empty string', async () => {
        const str = await x.findPrereq('');
        expect(str).toBe('Sorry could not find that course');
    });
});
