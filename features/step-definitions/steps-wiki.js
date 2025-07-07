const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

// Pages
const WikiMainPage = require('../pageobjects/wiki-main.page');

Given(/^I am on the (\w+) screen$/, async (page) => {
    console.log(`On the ${page} screen`); 
});

// ------------------------------------
// W I K I P E D A I - ' S - S T E P S 
// ------------------------------------
When(/^I click on (\w+) link$/, async (link) => {
    if (link === 'Next') {
        await WikiMainPage.clickNext();       
    }
});

When(`I click on Get started link`, async () => {
    await WikiMainPage.clickGetStarted();
});

When(`I click on Search Box`, async () => {    
    await WikiMainPage.clickSearchBox();
});

When(`I enter {string} into Search Box`, async (txt) => {    
    await WikiMainPage.setTextValue("Search Box", txt);
});


When(`I click on the first item of search result`, async () => {
    // [When] Describes the action or event that triggers the scenario.
    await WikiMainPage.clickFirstResult();
    await new Promise(resolve => setTimeout(resolve, 10000));
});

Then(`I should see {string} on the search result screen`, async (expectedText) => {
    // [Then] Describes the expected outcome or result of the scenario.

    await WikiMainPage.shouldSeeTextOnscreen(expectedText);

});