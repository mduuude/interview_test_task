'use strict';

import {selenium} from './npm-args';
import seleniumStandalone from 'selenium-standalone';

export default function hooks(browser) {

    // start selenium standalone at localhost
    if (selenium === 'localhost') {
        before(done => {
            seleniumStandalone.start((error, child) => {
                if (error) {
                    throw new Error('Can not start selenium server\nTry "npm run selenium-install"');
                }
                seleniumStandalone.child = child;
                done();
            });
        });
    }

    // open browser
    before(async () => {
        await browser.init();
    });

    // close browser
    after(async () => {
        // do not display 'after hook' error if test already failed with selenium connection problem
        try {
            await browser.end();
        } catch (err) {
            return;
        }

        // stop selenium standalone after test
        if (selenium === 'localhost') {
            seleniumStandalone.child.kill();
        }
    });

}
