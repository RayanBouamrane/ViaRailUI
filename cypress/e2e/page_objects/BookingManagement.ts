/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

const roomsTab = "//a[contains(text(),'Rooms')]";
const reportTab = "//a[contains(text(),'Report')]";
const brandingTab = "//a[contains(text(),'Branding')]";
const homepageTab = "//a[contains(text(),'B&B Booking Management')]";
const messagesTab = "//a[contains(text(),'B&B Booking Management')]/../../div[3]/ul/li[1]";
const frontPageTab = "#frontPageLink";
const logoutButton = "//a[contains(text(),'Logout')]";

const roomNumber = "#roomName";
const roomType = "#type";
const roomAccessibility = "#accessible";
const roomPrice = "#roomPrice";
const roomDetailsWiFi = "//label[contains(text(),'WiFi')]";
const roomDetailsTV = "//label[contains(text(),'TV')]";
const roomDetailsRadio = "//label[contains(text(),'Radio')]";
const roomDetailsRefreshments = "//label[contains(text(),'Refreshments')]";
const roomDetailsSafe = "//label[contains(text(),'Safe')]";
const roomDetailsViews = "//label[contains(text(),'Views')]";
const createRoom = "#createRoom";

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
        cy.get(frontPageTab).click();
        cy.log('Click Front Page');
        return this;
    }

    static clickLogout() {
        cy.xpath(logoutButton).click();
        cy.log('Click Logout');
        return this;
    }

    static fillRoomNumber(roomNumberString: string) {
        cy.get(roomNumber).clear();
        cy.get(roomNumber).type(roomNumberString);
        cy.log('Fill room number with ${roomNumberString}');
        return this;
    }

    static selectRoomType(roomTypeString: string) {
        cy.get(roomType).select(roomTypeString, { force: true }).should('have.value', roomTypeString);
        cy.log('Selected ${roomTypeString} as room type');
        return this;
    }

    static selectAccessibility(roomAccessibilityString: string) {
        cy.get(roomAccessibility).select(roomAccessibilityString, { force: true }).should('have.value', roomAccessibilityString);
        cy.log('Selected ${roomAccessibilityString} as accessibility');
        return this;
    }

    static fillRoomPrice(roomPriceString: string) {
        cy.get(roomPrice).clear();
        cy.get(roomPrice).type(roomPriceString);
        cy.log('Fill room price with ${roomPriceString}');
        return this;
    }

    static clickWiFi() {
        cy.xpath(roomDetailsWiFi).click();
        cy.log('Selected WiFi');
        return this;
    }

    static clickTV() {
        cy.xpath(roomDetailsTV).click();
        cy.log('Selected TV');
        return this;
    }

    static clickRadio() {
        cy.xpath(roomDetailsRadio).click();
        cy.log('Selected Radio');
        return this;
    }

    static clickRefreshments() {
        cy.xpath(roomDetailsRefreshments).click();
        cy.log('Selected Refreshments');
        return this;
    }

    static clickSafe() {
        cy.xpath(roomDetailsSafe).click();
        cy.log('Selected Safe');
        return this;
    }

    static clickViews() {
        cy.xpath(roomDetailsViews).click();
        cy.log('Selected Views');
        return this;
    }

    static clickRoomDetails(roomDetails: string[]) {
        if (roomDetails.find(element => element == "WiFi")) { this.clickWiFi() }
        if (roomDetails.find(element => element == "TV")) { this.clickTV() }
        if (roomDetails.find(element => element == "Radio")) { this.clickRadio() }
        if (roomDetails.find(element => element == "Refreshments")) { this.clickRefreshments() }
        if (roomDetails.find(element => element == "Safe")) { this.clickSafe() }
        if (roomDetails.find(element => element == "Views")) { this.clickViews() }
        return this;
    }

    static clickCreateRoom() {
        cy.get(createRoom).click();
        cy.log('Click Create Room');
        return this;
    }

    static validateXthRoomNumber(row: number, roomNumberString: string) {
        let path: string = "#room" + (row - 1) + " > .col-sm-1:nth-child(1)";
        cy.get(path).contains(roomNumberString);
        return this;
    }

    static validateXthRoomType(row: number, roomTypeString: string) {
        let path: string = "#room" + (row - 1) + " > .col-sm-2:nth-child(2)";
        cy.get(path).contains(roomTypeString);
        return this;
    }

    static validateXthRoomAccessibility(row: number, roomAccessibilityString: string) {
        let path: string = "#room" + (row - 1) + " > .col-sm-2:nth-child(3)";
        cy.get(path).contains(roomAccessibilityString);
        return this;
    }

    static validateXthRoomPrice(row: number, roomPriceString: string) {
        let path: string = "#room" + (row - 1) + " > .col-sm-1:nth-child(4)";
        cy.get(path).contains(roomPriceString);
        return this;
    }

    static validateXthRoomDetails(row: number, roomDetailsList: string[]) {
        let path: string = "#room" + (row - 1) + " > .col-sm-5";
        for (let i = 0; i < roomDetailsList.length; i++) {
            cy.get(path).contains(roomDetailsList[i]);
        }
        return this;
    }

    static deleteXthRoom(row: number) {
        let path: string = "#room" + (row - 1) + " > .col-sm-1:nth-child(6)";
        cy.get(path).click();
        cy.log('Deleted room in row ${row}');
        return this;
    }
}