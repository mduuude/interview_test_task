'use strict';

import {selenium, smlog} from './npm-args';
import {addCustomCommands} from './commands';
import addHooks from './hooks';
import {remote} from 'webdriverio';

const CHROME = {
    browserName: 'chrome',
    version: '53.0'
};

const addOptions = opts => {
    return Object.assign(CHROME, {chromeOptions: opts});
};

const UA = {
    chromeLinux: 'user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
};

const SIZE = {
    desktop: 'window-size=1366,768',
};

export const getWebDriver = browser => {
    const client = remote({
        desiredCapabilities: browser,
        host: selenium,
        logLevel: smlog,
        path: '/wd/hub',
        port: 4444
    });

    // add custom commands to browser
    addCustomCommands(client);
    addHooks(client);

    return client;
};

export const desktop = () => {
    addOptions({
        args: [
            SIZE.desktop,
            UA.chromeLinux
        ]
    });

    return getWebDriver(CHROME);
};
