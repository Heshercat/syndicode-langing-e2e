import { expect } from '@playwright/test';
import { Page } from 'playwright';
import ContactUsPage from '../pages/contact-us.page';

export default class ContactUsPageSteps {
    constructor(page: Page, contactUsPage: ContactUsPage) {
        this.page = page;
        this.contactUsPage = contactUsPage;
    }

    private page: Page;
    private contactUsPage: ContactUsPage;

    async checkPageTitle (title: string){
       await expect (this.page).toHaveTitle(title)
     }

}