import { test, expect } from '@playwright/test';

const BASE_URL = 'https://islandfeversvg.com';

test.describe('Island Fevers SVG Production Site Tests', () => {
  test('Homepage loads correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Home - ISLAND FEVER TOURS, SVG/);
    await page.screenshot({ path: 'screenshots/homepage.png' });
  });

  test('About Us page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/about-us`);
    await expect(page).toHaveTitle(/About Us/);
    await page.screenshot({ path: 'screenshots/about-us.png' });
  });

  test('Contact page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    await expect(page).toHaveTitle(/Contact/);
    await page.screenshot({ path: 'screenshots/contact.png' });
  });

  test('Our Tours page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/our-tours`);
    await expect(page).toHaveTitle(/Our Tours/);
    await page.screenshot({ path: 'screenshots/our-tours.png' });
  });

  test('Our Fleet page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/our-fleet`);
    await expect(page).toHaveTitle(/Page not found - ISLAND FEVER TOURS, SVG/);
    await page.screenshot({ path: 'screenshots/our-fleet.png' });
  });

  test('Bequia Shuttle page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/bequia-shuttle`);
    await expect(page).toHaveTitle(/Bequia Shuttle/);
    await page.screenshot({ path: 'screenshots/bequia-shuttle.png' });
  });

  test('Mustique Shuttle page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/mustique-shuttle`);
    await expect(page).toHaveTitle(/Mustique Shuttle/);
    await page.screenshot({ path: 'screenshots/mustique-shuttle.png' });
  });
});