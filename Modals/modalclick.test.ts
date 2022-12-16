import { test } from '@playwright/test';

test('click button', async ({ page }) => {
    
  await page.goto('https://automatenow.io/');
  await page.getByRole('link', { name: 'Sandbox' }).click();
  await page.getByRole('link', { name: 'Modals' }).click();
  await page.getByRole('button', { name: 'Simple Modal' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});
 /* test('Form filling', async ({ page }) => {
  await page.getByRole('button', { name: 'Form Modal' }).click();
  await page.getByLabel('Name(required)').click();
  await page.getByLabel('Name(required)').fill('Pritis');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('Pritish@gmail.com');
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('I love India');
  await page.getByRole('button', { name: 'Submit' }).click();
});*/
