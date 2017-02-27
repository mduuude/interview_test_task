'user strict';

import {desktop} from '../webdriver';
import {expect} from 'chai';

const browser = desktop();
const email = 'ssls.automation+4@gmail.com';
const password = '123456';

describe('test-05: Log Out', () => {

    it('should authorize', async () => {
        await browser.authorize(`${email}`, `${password}`);
    });

    it('should open Home Page after authorization', async () => {
        await browser.waitForElemVisible('body > div.container > div > div > div.heading-block.ng-scope > div.title-page-box');
        const url = await browser.getUrl();

        expect(url).to.equal('https://www.ssls.com/');
    });

    it('should logout and open authorization page', async () => {
        await browser.click('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > button');
        await browser.waitForElemVisible('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > ul');
        // click on "Log Out'"
        await browser.click('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > ul > li:nth-child(7)');
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > div > h1');
        const url = await browser.getUrl();

        expect(url).to.equal('https://www.ssls.com/authorize');
    });

    it('should have "LOG IN" text in auth button', async () => {
        const text = await browser.getText('.flat-dark.ng-scope');
        expect(text).to.equal('LOG IN');
    });
});
