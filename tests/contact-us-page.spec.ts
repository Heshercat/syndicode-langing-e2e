//example.spec.ts
import { test} from '@playwright/test';
import ContactUsPage from '../services/pages/contact-us.page';
import ContactUsPageSteps from '../services/steps/contact-us-page.steps';
import * as pageTitles from '../services/constants/pageTitles.json';
import * as pageUrls from '../services/constants/urls.json'

test.describe('Contact us page steps', () => {
  let contactUsPage: ContactUsPage;
  let contactUsPageSteps: ContactUsPageSteps;

  test.beforeEach(async ({ page }) => {
    contactUsPage = new ContactUsPage(page);
    contactUsPageSteps = new ContactUsPageSteps(page, contactUsPage);

    await page.goto(pageUrls.contactUs_page, {
      waitUntil: 'networkidle',
    });
  });

  test('Contact us page title is "Contact us - Syndicode"', async ({ }) => {
    await contactUsPageSteps.checkPageTitle(pageTitles.contactUsPageTitle)
  })

  test('Contact me form state is changed after the request is sent', async ({ }) => {
    
  })

})
