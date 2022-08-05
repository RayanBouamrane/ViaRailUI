/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

import BookingManagement from "../page_objects/BookingManagement";

export default class BookingWorkflow {

    static createRoom(roomNumber: string, roomType: string, roomAccessibility: string, roomPrice: string, roomDetails: string[]) {
        BookingManagement
            .fillRoomNumber(roomNumber)
            .selectRoomType(roomType)
            .selectAccessibility(roomAccessibility)
            .fillRoomPrice(roomPrice)
            // .clickRoomDetails(roomDetails)
            .clickCreateRoom();
    }

    static validateXthRoom(row: number, roomNumber: string, roomType: string, roomAccessibility: string, roomPrice: string, roomDetails: string[]) {
        BookingManagement
            .validateXthRoomNumber(row, roomNumber)
            .validateXthRoomType(row, roomType)
            .validateXthRoomAccessibility(row, roomAccessibility)
            .validateXthRoomPrice(row, roomPrice)
            // .validateXthRoomDetails(row, roomDetails);
    }
}