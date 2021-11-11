import BasePage from "./basePage";

class IndexPage extends BasePage {

    open() {
        super.open('/');
        return this;
    }

    locator = {
        SIGN_IN_BUTTON: "a.login",
    }

    get signInButton () { return $(this.locator.SIGN_IN_BUTTON) }

    goToSignInPage() {
        this.signInButton.click();
        return this;
    }
}

export default new IndexPage();