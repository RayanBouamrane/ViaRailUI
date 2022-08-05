/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

const roomsTab = "//a[contains(text(),'Rooms')]";
const reportTab = "//a[contains(text(),'Report')]";
const brandingTab = "//a[contains(text(),'Branding')]";
const homepageTab = "//a[contains(text(),'B&B Booking Management')]";
const messagesTab = "//a[contains(text(),'B&B Booking Management')]/../../div[3]/ul/li[1]";
const frontPageTab = "//a[contains(text(),'B&B Booking Management')]/../../div[3]/ul/li[2]";
const logoutButton = "//a[contains(text(),'B&B Booking Management')]/../../div[3]/ul/li[3]";

export default class BookingManagement {

    static clickRoomsTab() {
        cy.xpath(roomsTab).click();
        cy.log('Click Rooms');
        return this;
    }

    static clickReportTab() {
        cy.xpath(reportTab).click();
        cy.log('Click Report');
        return this;
    }

    static clickBrandingTab() {
        cy.xpath(brandingTab).click();
        cy.log('Click Branding');
        return this;
    }

    static clickHome() {
        cy.xpath(homepageTab).click();
        cy.log('Click Homepage');
        return this;
    }

    static clickMessages() {
        cy.xpath(messagesTab).click();
        cy.log('Click Messages');
        return this;
    }

    static clickFrontPage() {
        cy.xpath(frontPageTab).click();
        cy.log('Click Front Page');
        return this;
    }

    static clickLogout() {
        cy.xpath(logoutButton).click();
        cy.log('Click Logout');
        return this;
    }
 
}