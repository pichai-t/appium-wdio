const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

// ------------------------------------
//  C O M M O N - S T E P S 
// ------------------------------------

When(`I wait for {int} seconds`, async (numSeconds) => {
   await new Promise(resolve => setTimeout(resolve, numSeconds*1000));
});
