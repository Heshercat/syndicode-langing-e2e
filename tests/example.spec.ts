//example.spec.ts
import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../services/pages/home.page';
test('Navigate to Google', async ({ page }) => {
  await page.goto('https://google.com/');
  const url = await page.url();
  expect(url).toContain('google');
});
test('Search for Playwright', async ({ page }) => {
  await page.goto('https://google.com/');
  let exampletest = new HomePage(page);
  await exampletest.typeSearchText();
  await exampletest.pressEnter();
  const text = await exampletest.searchResult();
  await console.log(text);
  expect(text).toContain('Playwright: Fast and reliable');
});