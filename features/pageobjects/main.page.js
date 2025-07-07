const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnPractice () {
        return $('~Practice');
    }

    // Actions 
    async clickPractice() {
        await this.btnPractice.click(); 
    }
    async clickButton(btn) {
        btn==='Practice' && await this.btnPractice.click();
    }

}

module.exports = new MainPage();
