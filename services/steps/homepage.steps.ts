import { expect } from '@playwright/test';
import { Page } from 'playwright';
import HomePage from '../pages/home.page';

export default class HomePageSteps {
    constructor(page: Page, homePage: HomePage) {
        this.page = page;
        this.homePage = homePage;
    }

    private page: Page;
    private homePage: HomePage;

    async checkPageTitle (title: string){
       await expect (this.page).toHaveTitle(title)
     }

}