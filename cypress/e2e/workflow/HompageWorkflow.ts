/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

import HomePage from "../page_objects/HomePage";

export default class HomepageWorkflow {

    static login(username: string, password: string) {
        HomePage
            .goToHomepage()
            .clickLetMeHack()
            .fillUsernameField(username)
            .fillPasswordField(password)
            .clickLogin();
    }
}