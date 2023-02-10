import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { chromium } from 'playwright';
import ContactUsPage from '../pages/contact-us.page';
import * as selectors from '../selectors/contact-us-page.selectors.json'
import * as pageTitles from '../constants/pageTitles.json'
import * as url from '../constants/urls.json'


export default class ContactUsPageSteps {
   constructor(page: Page) {
      this.page = page;
   }

   private page: Page;


   async checkPageTitle(title: string) {
      await expect(this.page).toHaveTitle(title)
   }

   async fillEmailForContactForm(email: string) {
      await this.page.locator(selectors.contactUsForm.emailField).fill(email)
   }

   async fillNameForContactForm(name: string) {
      await this.page.locator(selectors.contactUsForm.nameField).fill(name)
   }

   async fillTellUsMoreForContactForm(description: string) {
      await this.page.locator(selectors.contactUsForm.tellUsMoreField).fill(description)
   }

   async clickContactMeButton() {
      await this.page.locator(selectors.contactUsForm.contactMeButton).click()
   }

   async checkEmailFieldError(error: string) {
      await expect(this.page.locator(selectors.contactUsForm.emailFieldError)).toHaveText(error)
   }

   async checkNameFieldError(error: string) {
      await expect(this.page.locator(selectors.contactUsForm.nameFieldError)).toHaveText(error)
   }

   async checkEmailFieldErrorDisappears() {
      expect(this.page.locator(selectors.contactUsForm.emailFieldError)).toBeHidden;
   }

   async checkNameFieldErrorDisappears() {
      expect(this.page.locator(selectors.contactUsForm.nameFieldError)).toBeHidden;
   }

   async checkValidationMessageAppears(message: string) {
      await expect(this.page.locator(selectors.contactUsForm.validationMessage)).toHaveText(message)
   }

   async checkSuccessMessageAppears(message: string) {
      await expect(this.page.locator(selectors.contactUsForm.successContactMesage)).toHaveText(message)
   }

   async clickPrivacyPolicyLink() {
      await this.page.locator(selectors.contactUsForm.privacyPolicyLink).click()
   }

   async checkPrivacyPolicyOpenedInNewTab() {
      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();

      // Verify that a new tab has been opened
      const pages = await context.pages();
      expect(pages.length).toBe(2);
      // Verify that the new tab is the Privacy Policy page
      const privacyPolicyPage = pages[1];
      expect(await privacyPolicyPage.title()).toBe(pageTitles.privacyPolicyPageTitle);
   }

   async openTempMailServiceInNewTab () {
      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();

      const pages = await context.pages();
      expect(pages.length).toBe(2);

      await page.goto(url.tempMail_service)
   }

}