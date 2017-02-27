'use strict';

import {desktop} from '../webdriver';
import {expect} from 'chai';

const browser = desktop();
const email = 'ssls.automation+4@gmail.com';
const password = '123456';

describe('test-01: Authorization page (Welcome back!)', () => {

    it('should open home page', async () => {
        await browser.url('https://ssls.com');
        const title = await browser.getTitle();

        expect(title).to.equal('SSL Certificates. Buy Cheap SSL Certs from $4.99/yr');
    });

    it('should open authorization page', async () => {
        await browser.click('.flat-dark.ng-scope');
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > div > h1');
        const url = await browser.getUrl();

        expect(url).to.equal('https://www.ssls.com/authorize');
    });

    it('should enter email', async () => {
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(2) > div');
        // click at email field
        await browser.click('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(2) > div');
        await browser.keys(email);
        const enteredEmail = await browser.getValue('.form-control.ng-untouched.ng-valid-email.ng-valid-pattern.ng-not-empty.ng-dirty.ng-valid.ng-valid-required');

        expect(enteredEmail).to.equal(email);
    });

    it('should enter password', async () => {
        await browser.click('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(3) > div > div > div.input-box.password');
        await browser.keys(password);
        const enteredPass = await browser.getValue('.form-control.ng-untouched.ng-not-empty.ng-dirty.ng-valid-parse.ng-valid.ng-valid-required');
        // click at the eye icon
        await browser.click('.btn-input.btn-input-block');

        expect(enteredPass).to.equal(password);
    });

    it('should authorize and open Home Page', async () => {
        await browser.click('.primary');
        await browser.waitForElemVisible('body > div.container > div > div > div.heading-block.ng-scope > div.title-page-box');
        const url = await browser.getUrl();

        expect(url).to.equal('https://www.ssls.com/');
    });

    it('should have login in the header', async () => {
        const login = await browser.getText('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > a');
        expect(login).to.equal(email);
    });

    it('should have dropdown menu in the header', async () => {
        await browser.click('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > button');
        const dropdown = await browser.isVisible('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > ul');

        expect(dropdown).to.be.true;
    });

});
