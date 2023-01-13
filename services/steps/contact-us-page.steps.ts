import { expect } from '@playwright/test';
import { Page } from 'playwright';
import ContactUsPage from '../pages/contact-us.page';
import * as selectors from '../selectors/contact-us-page.selectors.json'

export default class ContactUsPageSteps {
   constructor(page: Page, contactUsPage: ContactUsPage) {
      this.page = page;
      this.contactUsPage = contactUsPage;
   }

   private page: Page;
   private contactUsPage: ContactUsPage;

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

   async clickPrivacyPolicyLink() {
      await this.page.locator(selectors.contactUsForm.privacyPolicyLink).click()
   }

}