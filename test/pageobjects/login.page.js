import { $ } from '@wdio/globals'
import Page from './page.js';

// Page Object responsável pela página de Login e início do cadastro.
class LoginPage extends Page {

    // Define os seletores utilizando getters.
    get inputSignupName() {
        return $('[data-qa="signup-name"]');
    }

    get inputSignupEmail() {
        return $('[data-qa="signup-email"]');
    }

    get btnSignup() {
        return $('button[data-qa="signup-button"]');
    }

    // Inicia o cadastro informando nome e e-mail.
    async signup(name, email) {
        await this.inputSignupName.setValue(name);
        await this.inputSignupEmail.setValue(email);
        await this.btnSignup.click();
    }

    // Abre a página de Login.
    open() {
        return super.open('login');
    }
}

export default new LoginPage();