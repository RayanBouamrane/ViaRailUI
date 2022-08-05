/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

import BookingWorkflow from "../workflow/BookingWorkflow";
import HomepageWorkflow from "../workflow/HompageWorkflow";

const username = "admin";
const password = "password";

describe("Validating rooms created", () => {
    it("should display the error message if empty", function () {
        HomepageWorkflow.login(username, password);
        BookingWorkflow.clearAllRooms();
        BookingWorkflow.createRoom("237", "Family", "false", "125", ['Refreshments', 'Safe']);
        BookingWorkflow.createRoom("315", "Double", "false", "235", ['TV', 'Radio']);
        BookingWorkflow.validateXthRoom(1, "237", "Family", "false", "125", ['Refreshments', 'Safe']);
        BookingWorkflow.validateXthRoom(2, "315", "Double", "false", "235", ['TV', 'Radio']);
    });
});