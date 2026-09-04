import { $, expect } from '@wdio/globals'
import Page from './page.js'

// Page Object responsável pela página inicial.
class HomePage extends Page {

    get btnSignupLogin() {
        return $('a[href="/login"]')
    }

    get loggedInAsMessage() {
        return $('a:has(i.fa-user) b')
    }

    get btnDeleteAccount() {
        return $('a[href="/delete_account"]')
    }

    get loginLink() {
        return $('a[href="/login"]')
    }

    // Acessa a página de Login / Signup.
    async clickSignupLogin() {
        await this.btnSignupLogin.click()
    }

    // Valida se o usuário está autenticado.
    async assertLoggedInAs(username) {
        await expect(this.loggedInAsMessage).toBeDisplayed()
        await expect(this.loggedInAsMessage).toHaveText(username)
    }

    // Exclui a conta do usuário autenticado.
    async deleteAccount() {
        await this.btnDeleteAccount.click()
    }

    async assertUserIsLoggedOut() {
        await expect(this.loggedInAsMessage).not.toBeDisplayed()
        await expect(this.loginLink).toBeDisplayed()
    }

    // Abre a página inicial.
    open() {
        return super.open('')
    }
}

export default new HomePage()
