'use strict';

export const WAIT = 15000;

export const addCustomCommands = browser => {

    browser.addCommand('nowWait', async (delay = WAIT) => {
        await browser.pause(delay);
    });

    browser.addCommand('waitForElemVisible', async (selector, delay = WAIT) => {
        await browser.waitForVisible(selector, delay);
    });

    browser.addCommand('authorize', async (email, password) => {
        await browser.url('https://www.ssls.com/');
        // go to auth page
        await browser.click('.flat-dark.ng-scope');
        await browser.waitForElemVisible('body > div.container > div > ui-view > div > div > h1');
        // enter email
        await browser.click('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(2) > div');
        await browser.keys(email);
        // enter password
        await browser.click('body > div.container > div > ui-view > div > ng-include > div > div > form > div:nth-child(3) > div > div > div.input-box.password');
        await browser.keys(password);
        // click "Login"
        await browser.click('.primary');
    });

};
