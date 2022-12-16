import type { Locator, Page } from  '@playwright/test';

export default class HomePage{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }

}