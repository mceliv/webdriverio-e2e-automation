import { $, expect } from '@wdio/globals'
import Page from './page.js'

// Page Object responsável pela confirmação de exclusão da conta.
class AccountDeletedPage extends Page {

    get accountDeletedMessage() {
        return $('[data-qa="account-deleted"]')
    }

    get btnContinue() {
        return $('[data-qa="continue-button"]')
    }

    // Valida a mensagem de exclusão da conta.
    async assertAccountDeleted() {
        await expect(this.accountDeletedMessage).toBeDisplayed()
        await expect(this.accountDeletedMessage).toHaveText('Account Deleted!')
    }

    // Continua após a exclusão da conta.
    async clickContinue() {
        await this.btnContinue.click()
    }
}

export default new AccountDeletedPage()
