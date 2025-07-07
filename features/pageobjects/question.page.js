const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QuestionPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnA () {
        //const btnText = 'name == "Back"'
        // return $(`-ios predicate string:${btnText}`);
        // return $(`//XCUIElementTypeStaticText[@name="A\n4"]`);        
        // return $('~A/\n/Waltzing Matilda');
        return $('~Back');
    }

    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    async clickButton(btn) {
        console.log(`TEST ME PICHAI - ${btn}` ); 
        btn==='A' && await this.btnA.click();
        await this.btnA.click();
    }

}

module.exports = new QuestionPage();
