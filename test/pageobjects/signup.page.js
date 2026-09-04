import { $ } from '@wdio/globals'
import Page from './page.js'

// Page Object responsável pela página de criação da conta.
class SignupPage extends Page {

    // Account Information
    
    get accountInformationTitle() {
        return $('h2.title')
    }

    get radioMrs() {
        return $('input[name="title"][value="Mrs"]')
    }

    get inputAccountName() {
        return $('[data-qa="name"]')
    }

    get inputAccountEmail() {
        return $('[data-qa="email"]')
    }

    get inputPassword() {
        return $('[data-qa="password"]')
    }

    get selectBirthDay() {
        return $('select[data-qa="days"]')
    }

    get selectBirthMonth() {
        return $('select[data-qa="months"]')
    }

    get selectBirthYear() {
        return $('select[data-qa="years"]')
    }

    get checkboxNewsletter() {
        return $('#newsletter')
    }

    get checkboxOffers() {
        return $('#optin')
    }

    // Address Information

    get inputFirstName() {
        return $('[data-qa="first_name"]')
    }

    get inputLastName() {
        return $('[data-qa="last_name"]')
    }

    get inputCompany() {
        return $('[data-qa="company"]')
    }

    get inputAddress() {
        return $('[data-qa="address"]')
    }

    get inputAddress2() {
        return $('[data-qa="address2"]')
    }

    get selectCountry() {
        return $('[data-qa="country"]')
    }

    get inputState() {
        return $('[data-qa="state"]')
    }

    get inputCity() {
        return $('[data-qa="city"]')
    }

    get inputZipcode() {
        return $('[data-qa="zipcode"]')
    }

    get inputMobileNumber() {
        return $('[data-qa="mobile_number"]')
    }

    get buttonCreateAccount() {
        return $('[data-qa="create-account"]')
    }

    // Seleciona o dia, mês e ano da data de nascimento.
    async selectBirthDate(day, month, year) {
        await this.selectBirthDay.selectByAttribute('value', day)
        await this.selectBirthMonth.selectByVisibleText(month)
        await this.selectBirthYear.selectByAttribute('value', year)
    }

    // Preenche os dados da seção Account Information.
    async fillAccountInformation({ password, day, month, year }) {
        await this.radioMrs.click()
        await this.inputPassword.setValue(password)
        await this.selectBirthDate(day, month, year)
    }

    // Ativa as preferências opcionais da conta.
    async selectPreferences() {
        await this.checkboxNewsletter.click()
        await this.checkboxOffers.click()
    }

    // Preenche os dados de endereço da conta.
    async fillAddressInformation({
        firstName,
        lastName,
        company,
        address,
        address2,
        country,
        state,
        city,
        zipcode,
        mobileNumber
    }) {
        await this.inputFirstName.setValue(firstName)
        await this.inputLastName.setValue(lastName)
        await this.inputCompany.setValue(company)
        await this.inputAddress.setValue(address)
        await this.inputAddress2.setValue(address2)
        await this.selectCountry.selectByVisibleText(country)
        await this.inputState.setValue(state)
        await this.inputCity.setValue(city)
        await this.inputZipcode.setValue(zipcode)
        await this.inputMobileNumber.setValue(mobileNumber)
    }

    // Cria a conta após o preenchimento dos dados.
    async createAccount() {
        await this.buttonCreateAccount.click()
    }

    // Abre a página de criação da conta.
    open() {
        return super.open('signup')
    }
}

export default new SignupPage()
