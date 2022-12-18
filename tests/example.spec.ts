//example.spec.ts
import { test, expect, type Page } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import * as pageTitles from '../services/constants/pageTitles.json';

test.describe('Test example', () => {
  let homePage: HomePage;
  let homePageSteps: HomePageSteps;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    homePageSteps = new HomePageSteps(page, homePage);

    await page.goto('/', {
      waitUntil: 'networkidle',
    });
  });

  test('Check Home page title', async ({ }) => {
    await homePageSteps.checkPageTitle(pageTitles.homePageTitle)
  })
})
