import { $, expect, browser } from '@wdio/globals'
import Page from './page.js'

// Page Object responsável pela confirmação de criação da conta.

class AccountCreatedPage extends Page {

    get accountCreatedMessage() {
        return $('[data-qa="account-created"]')
    }

    get btnContinue() {
        return $('[data-qa="continue-button"]')
    }

    // Valida a mensagem de criação da conta.
    async assertAccountCreated() {
        await expect(this.accountCreatedMessage).toBeDisplayed()
        await expect(this.accountCreatedMessage).toHaveText('ACCOUNT CREATED!')
    }

    //Continua para a página inicial após a criação da conta.
    async clickContinue() {
        await this.btnContinue.click()

        await browser.waitUntil(
            async () => (await browser.getUrl()).replace(/#.*$/, '') === 'https://automationexercise.com/',
            {
                timeout: 15000,
                interval: 500,
                timeoutMsg: 'A página inicial não foi carregada após clicar em Continue.'
            }
        )
    }
}

export default new AccountCreatedPage()
