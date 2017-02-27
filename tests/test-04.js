'user strict';

import {desktop} from '../webdriver';
import {expect} from 'chai';

const browser = desktop();
const email = '';
const password = '';

describe('test-04: Authorization page. Empty fields', () => {

    it('should try to authorize', async () => {
        await browser.authorize(`${email}`, `${password}`);
    });

    it('should have email error massage', async () => {
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(2) > div > div:nth-child(3)');
        const text = await browser.getText('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(2) > div > div:nth-child(3)');

        expect(text).to.equal('Oops, please\nenter your email');
    });

    it('should have password error massage', async () => {
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(3) > div > div > div.left-tooltip-box');
        const text = await browser.getText('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(3) > div > div > div.left-tooltip-box');

        expect(text).to.equal('Looks like you’ve\nmissed this one');
    });
});
