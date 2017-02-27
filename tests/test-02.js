'user strict';

import {desktop} from '../webdriver';
import {expect} from 'chai';

const browser = desktop();
const email = 'my-test-email@gmail.com';
const password = 'gfhjkm20';

describe('test-02: Authorization page. Not registered user', () => {

    it('should try to authorize', async () => {
        await browser.authorize(`${email}`, `${password}`);
    });

    it('should have correct entered Email', async () => {
        await browser.waitForElemVisible('#noty_topCenter_layout_container');
        const enteredEmail = await browser.getValue('.form-control.ng-valid-email.ng-valid-pattern.ng-not-empty.ng-dirty.ng-valid.ng-valid-required.ng-touched');

        expect(enteredEmail).to.equal(email);
    });

    it('should have correct entered password', async () => {
        // click at the eye icon
        await browser.click('.btn-input.btn-input-block');
        const enteredPass = await browser.getValue('.form-control.ng-not-empty.ng-dirty.ng-valid-parse.ng-valid.ng-valid-required.ng-touched');

        expect(enteredPass).to.equal(password);
    });

    it('should have error massage', async () => {
        const text = await browser.getText('#noty_topCenter_layout_container');
        expect(text).to.equal('Uh oh! Email or password is incorrect');
    });
});
