'user strict';

import {desktop} from '../webdriver';
import {expect} from 'chai';

const browser = desktop();
const email = 'invalid.pass@@gmail.com';
const password = 'gfhjkm20';

describe('test-03: Authorization page. Invalid email', () => {

    it('should try to authorize', async () => {
        await browser.authorize(`${email}`, `${password}`);
    });

    it('should have correct entered Email', async () => {
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(2) > div > div:nth-child(2)');
        const enteredEmail = await browser.getValue('.form-control.ng-invalid.ng-valid-pattern.ng-not-empty.ng-dirty.ng-invalid-email.ng-valid-required.ng-touched');

        expect(enteredEmail).to.equal(email);
    });

    it('should have correct entered password', async () => {
        // click at the eye icon
        await browser.click('.btn-input.btn-input-block');
        const enteredPass = await browser.getValue('.form-control.ng-not-empty.ng-dirty.ng-valid-parse.ng-valid.ng-valid-required.ng-touched');

        expect(enteredPass).to.equal(password);
    });

    it('should have error massage', async () => {
        const text = await browser.getText('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(2) > div > div:nth-child(2)');

        expect(text).to.equal('Uh oh! This\nisn’t an email');
    });
});
