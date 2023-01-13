//example.spec.ts
import { test } from '@playwright/test';
import ContactUsPage from '../services/pages/contact-us.page';
import ContactUsPageSteps from '../services/steps/contact-us-page.steps';
import * as pageTitles from '../services/constants/pageTitles.json';
import * as pageUrls from '../services/constants/urls.json'
import * as testData from '../services/test-data/random-test-data'
import * as errors from '../services/constants/fieldValidationErrors.json'

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

  test('There is an error "The field is required." if Name field is empty', async ({ }) => {
    await contactUsPageSteps.fillEmailForContactForm(testData.randomCorrectStructuredEmail)
    await contactUsPageSteps.clickContactMeButton()
    await contactUsPageSteps.checkNameFieldError(errors.fieldEmptyError)
  })

  test('There is an error "The field is required." if Email field is empty', async ({ }) => {
    await contactUsPageSteps.fillNameForContactForm(testData.randomName)
    await contactUsPageSteps.clickContactMeButton()
    await contactUsPageSteps.checkEmailFieldError(errors.fieldEmptyError)
  })

  test('There is an error "The e-mail address entered is invalid." if Email doesnt contain "@"', async ({ }) => {
    await contactUsPageSteps.fillEmailForContactForm(testData.randomEmailWithoutAmpersand)
    await contactUsPageSteps.fillNameForContactForm(testData.randomName)
    await contactUsPageSteps.clickContactMeButton()
    await contactUsPageSteps.checkEmailFieldError(errors.invalidEmailError)
  })

  test('There is an error "The e-mail address entered is invalid." if Email doesnt contain the part before "@"', async ({ }) => {
    await contactUsPageSteps.fillEmailForContactForm(testData.randomEmailWithoutPartBeforeAmpersand)
    await contactUsPageSteps.fillNameForContactForm(testData.randomName)
    await contactUsPageSteps.clickContactMeButton()
    await contactUsPageSteps.checkEmailFieldError(errors.invalidEmailError)
  })

  test('There is an error "The e-mail address entered is invalid." if Email doesnt contain the part after "@"', async ({ }) => {
    await contactUsPageSteps.fillEmailForContactForm(testData.randomEmailWithoutPartAfterAmpersand)
    await contactUsPageSteps.fillNameForContactForm(testData.randomName)
    await contactUsPageSteps.clickContactMeButton()
    await contactUsPageSteps.checkEmailFieldError(errors.invalidEmailError)
  })

  test('Email validation error disappears after user enters a valid data and clicks Contact Me button', async ({ }) => {
    await contactUsPageSteps.fillNameForContactForm(testData.randomName)
    await contactUsPageSteps.clickContactMeButton()
    await contactUsPageSteps.fillEmailForContactForm(testData.randomCorrectStructuredEmail)
    await contactUsPageSteps.fillNameForContactForm(testData.randomName)
    await contactUsPageSteps.checkEmailFieldErrorDisappears()
  })

  test('Name validation error disappears after user enters a valid data and clicks Contact Me button', async ({ }) => {
    await contactUsPageSteps.fillEmailForContactForm(testData.randomCorrectStructuredEmail)
    await contactUsPageSteps.clickContactMeButton()
    await contactUsPageSteps.fillNameForContactForm(testData.randomName)
    await contactUsPageSteps.fillEmailForContactForm(testData.randomCorrectStructuredEmail)
    await contactUsPageSteps.checkEmailFieldErrorDisappears()
  })

  // test ('By clicking Privacy Policy button, Privacy Policy page is opened in the new tab', async ({ }) => {
  //   await contactUsPageSteps.clickPrivacyPolicyLink()
  //   // Start waiting for new page before clicking. Note no await.


  // })

})
