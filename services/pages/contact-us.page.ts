import type { Locator, Page } from  '@playwright/test';

export default class ContactUsPage{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }

}