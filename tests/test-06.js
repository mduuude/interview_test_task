'user strict';

import {desktop} from '../webdriver';
import {expect} from 'chai';

const browser = desktop();
const email = 'ssls.automation+4@gmail.com';
const password = '123456';

describe('test-06: My profile page. Client area', () => {

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

    it('should have correct text in profile', async () => {
        const supportPinText = await browser.getText('body > div.container > div > ui-view > div > div.page-content > div > div:nth-child(2) > div > form > div:nth-child(6) > div.description > span');
        const adress = await browser.getText('body > div.container > div > ui-view > div > div.page-content > div > div:nth-child(2) > div > form > div:nth-child(5) > div.description > span');
        const text = await browser.getText('.page-content .text');

        expect(text).to.eql([
            'Name', 'Vasya Pupkin',
            'Email', `${email}`,
            'Password', '*****',
            'Phone', '+380 57123456789',
            'Address', `${adress}`,
            'Support pin', `${supportPinText}`,
            'Newsletter', 'Include in mailing list']);
    });
});
