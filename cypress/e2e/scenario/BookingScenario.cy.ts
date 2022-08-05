/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

import BookingWorkflow from "../workflow/BookingWorkflow";  
import HomepageWorkflow from "../workflow/HompageWorkflow";

const username = "admin";
const password = "password";

describe("Validating rooms created", () => {
    it("should display the error message if empty", function () {
        HomepageWorkflow.login(username,password);
        BookingWorkflow.createRoom("237", "Family", "false", "125", ['Refreshments', 'Safe']);
        BookingWorkflow.createRoom("315", "Double", "false", "235", ['Refreshments', 'TV', 'Radio']);
        BookingWorkflow.validateXthRoom(2, "237", "Double", "false", "125", ['Refreshments', 'Safe']);
        BookingWorkflow.validateXthRoom(3, "315", "Double", "false", "235", ['Refreshments', 'TV', 'Radio']);
    });
});