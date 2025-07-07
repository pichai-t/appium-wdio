const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WikiMainPage extends Page {

    static iOSClassChainTxt = '-ios class chain';

    /**
     * define selectors using getter methods
     */
    get btnNext () {
        const xpathNext = '//XCUIElementTypeStaticText[@name="Next"]';
        return $(xpathNext);
    }
    get btnGetStarted () {
        const getStartedString = '**/XCUIElementTypeStaticText[`name == "Get started"`]';
        const classChainGetStarted = `-ios class chain:${getStartedString}`;
        return $(classChainGetStarted);
    }
    get searchBox () {
        const accessibilityIdSearchWikipedia = '~Search Wikipedia';
        return $(accessibilityIdSearchWikipedia);
    }
    get firstSearchItem() {
        const firstSearchResult = '**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeOther[1]';
        const classChainFirstSearchResult = `-ios class chain:${firstSearchResult}`;
        return $(classChainFirstSearchResult);
    }

    // Actions:    
    async clickNext() {
        await this.btnNext.click(); 
    }
    async clickGetStarted() {
        await this.btnGetStarted.click(); 
    }
    async clickSearchBox() {
        await this.searchBox.click();
    }

    async setTextValue(target, txt) {
        if (target === "Search Box") {
            await this.searchBox.setValue(txt + "\n");
        }
    }  
    async clickFirstResult() {
        await this.firstSearchItem.click();
    }

    async shouldSeeTextOnscreen(expectedText) {
        const myTextOnScreen = `name == "${expectedText}"`;        
        const elem = await $(`-ios predicate string:${myTextOnScreen}`);
        await expect(elem).toExist();
    }

}

module.exports = new WikiMainPage();

