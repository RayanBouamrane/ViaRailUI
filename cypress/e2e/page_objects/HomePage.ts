/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

const letMeHackButton = "//button[contains(text(),'Let me hack!')]";
const usernameField = "//input[@placeholder='Username']";
const passwordField = "//input[@placeholder='Password']";
const loginButton = "//button[contains(text(),'Login')]";

export default class HomePage {

    static clickLetMeHack() {
        cy.xpath(letMeHackButton).click();
        cy.log('Click "Let me hack!"');
        return this;
    }

    static fillUsernameField(username: string) {
        cy.xpath(usernameField).clear();
        cy.xpath(usernameField).type(username);
        cy.log('Fill username with ${username}');
        return this;
    }

    static fillPasswordField(password: string) {
        cy.xpath(passwordField).clear();
        cy.xpath(passwordField).type(password);
        cy.log('Fill password');
        return this;
    }

    static clickLogin() {
        cy.xpath(loginButton).click();
        cy.log('Click login');
        return this;
    }

}