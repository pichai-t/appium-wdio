const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

// Pages
const MainPage = require('../pageobjects/main.page');
const QuestionPage = require('../pageobjects/question.page');

// ------------------------------------
//  AUS CITIZENSHIP TEST'S STEPS - WIP*
// ------------------------------------

When(/^I click on (\w+) button$/, async (btn) => {
    if (btn === 'Practice') {
        await MainPage.clickButton(btn); //Practice(); 
    }
});

When(/^I select answer (\w+)$/, async (ans) => {
    if (ans === 'A') {        
        await QuestionPage.clickButton(ans); 
    }
});


