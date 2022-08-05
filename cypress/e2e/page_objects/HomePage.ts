/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

const homeURL = "https://automationintesting.online/#/admin/";

const letMeHackButton = "//button[contains(text(),'Let me hack!')]";
const usernameField = "#username";
const passwordField = "#password";
const loginButton = "#doLogin";

export default class HomePage {

    static goToHomepage() {
        cy.visit(homeURL);
        return this;
    }

    static clickLetMeHack() {
        cy.xpath(letMeHackButton).click();
        cy.log('Click "Let me hack!"');
        return this;
    }

    static fillUsernameField(username: string) {
        cy.get(usernameField).clear();
        cy.get(usernameField).type(username);
        cy.log('Fill username with ${username}');
        return this;
    }

    static fillPasswordField(password: string) {
        cy.get(passwordField).clear();
        cy.get(passwordField).type(password);
        cy.log('Fill password');
        return this;
    }

    static clickLogin() {
        cy.get(loginButton).click();
        cy.log('Click login');
        return this;
    }
}