import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import SignupPage from '../pageobjects/signup.page.js'
import AccountCreatedPage from '../pageobjects/account-created.page.js'
import AccountDeletedPage from '../pageobjects/account-deleted.page.js'

describe('Cadastro e exclusão de usuário', () => {

    it('Deve cadastrar um novo usuário e excluir a conta com sucesso', async () => {

        // Acessa o fluxo de cadastro e valida o carregamento da página de criação da conta.
        await HomePage.open()
        await HomePage.clickSignupLogin()
        await LoginPage.signup('monicaeli', 'monicaeli@example.com')

        await expect(SignupPage.accountInformationTitle)
            .toHaveText('ENTER ACCOUNT INFORMATION')

        // Preenche os dados pessoais e configura as preferências da conta.
        await SignupPage.radioMrs.click()

        if (!(await SignupPage.inputAccountName.getValue())) {
            await SignupPage.inputAccountName.setValue('Monica Eli')
        }

        await expect(SignupPage.inputAccountEmail)
            .toHaveValue('monicaeli@example.com')

        await SignupPage.inputPassword.setValue('123456')
        await SignupPage.selectBirthDate('10', 'May', '1990')

        await SignupPage.checkboxNewsletter.click()
        await SignupPage.checkboxOffers.click()

        // Preenche os dados de endereço.
        await SignupPage.fillAddressInformation({
            firstName: 'Monica',
            lastName: 'Eli',
            company: 'ACME Corporation',
            address: '123 Main St',
            address2: 'Apt 4',
            country: 'United States',
            state: 'California',
            city: 'Los Angeles',
            zipcode: '90001',
            mobileNumber: '5551234'
        })

        await SignupPage.buttonCreateAccount.click()
        await AccountCreatedPage.assertAccountCreated()

        await AccountCreatedPage.clickContinue()
        await HomePage.assertLoggedInAs('monicaeli')
        await HomePage.deleteAccount()
        await expect(AccountDeletedPage.accountDeletedMessage)
            .toHaveText('ACCOUNT DELETED!')

        await AccountDeletedPage.clickContinue()

        // Valida que o usuário foi redirecionado para a página inicial após a exclusão da conta.
        await HomePage.assertUserIsLoggedOut()

    })
})