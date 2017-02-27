'user strict';

import {desktop} from '../webdriver';
import {expect} from 'chai';

const browser = desktop();
const email = 'ssls.automation+4@gmail.com';
const password = '123456';

describe('test-07: My profile page. Refresh support pin', () => {

    it('should authorize', async () => {
        await browser.authorize(`${email}`, `${password}`);
    });

    it('should press "View profile" in dropdown menu', async () => {
        // wait for element on the main page to load
        await browser.waitForElemVisible('body > div.container > div > div > div.heading-block.ng-scope > div.title-page-box');
        await browser.click('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > button');
        await browser.waitForElemVisible('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > ul');
        // click on View profile
        await browser.click('body > div.container > header > div.header.clear > div.user-box > div.log-box > div > ul > li:nth-child(5) > a');
        // wait for user information is visible
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > div.page-content > div > div:nth-child(2)');
        const url = await browser.getUrl();

        expect(url).to.equal('https://www.ssls.com/user/profile');
    });

    it('should click on support pin refresh', async () => {
        const pinTextOne = await browser.getText('body > div.container > div > ui-view > div > div.page-content > div > div:nth-child(2) > div > form > div:nth-child(6) > div.description > span');
        // click on refresh
        await browser.click('.btn.square.flat-dark.ng-pristine.ng-untouched.ng-valid.ng-not-empty');
        // await for the page refresh
        await browser.nowWait(1500);
        const pinTextTwo = await browser.getText('body > div.container > div > ui-view > div > div.page-content > div > div:nth-child(2) > div > form > div:nth-child(6) > div.description > span');

        expect(pinTextTwo).to.not.equal(pinTextOne);
    });
});
