import { test, expect } from '@playwright/test';

const BASE_URL = 'https://islandfeversvg.com/staging22';
const pages = [
  { name: 'Bequia Shuttle', path: '/bequia-shuttle' },
  { name: 'Mustique Shuttle', path: '/mustique-shuttle' },
  { name: 'Our Tours', path: '/our-tours' },
  { name: 'Our Fleet', path: '/our-fleet' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact', path: '/contact' },
];

async function authenticate(page) {
  // Check if we need to authenticate
  const passwordField = page.getByRole('textbox', { name: 'Password' });
  if (await passwordField.isVisible()) {
    console.log('Authentication required...');

    // Enter password
    console.log('Entering password...');
    await passwordField.fill('islandprogression');

    // Click submit button using the specific ID
    console.log('Clicking submit button...');
    const submitButton = page.locator('#wp-submit');
    await submitButton.waitFor({ state: 'visible', timeout: 60000 });
    await submitButton.click();

    // Wait for navigation with a reasonable timeout
    console.log('Waiting for navigation...');
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    // Verify we're authenticated by checking if we're redirected from the password page
    const currentUrl = page.url();
    if (currentUrl.includes('password-protected')) {
      throw new Error('Authentication failed - still on password page');
    }

    console.log('Authentication successful!');
  } else {
    console.log('Already authenticated');
  }
}

test.describe('Island Fevers SVG Website Tests', () => {
  test('Homepage loads correctly', async ({ page }) => {
    console.log('Navigating to homepage...');
    await page.goto(`${BASE_URL}/`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    await authenticate(page);

    // Verify the page loads
    await expect(page.locator('body')).toBeVisible();

    // Wait a moment for any animations to complete
    await page.waitForTimeout(1000);

  });

  for (const pageInfo of pages) {
    test(`Testing ${pageInfo.name} page`, async ({ page }) => {
      console.log(`Navigating to ${pageInfo.name} page...`);

      // Navigate to the page with optimized settings
      const targetUrl = `${BASE_URL}${pageInfo.path}`;
      console.log(`Target URL: ${targetUrl}`);

      await page.goto(targetUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      });

      await authenticate(page);

      // Verify the page loads
      await expect(page.locator('body')).toBeVisible();

      // Wait a moment for any animations to complete
      await page.waitForTimeout(1000);

      // Verify we're on the correct page
      const currentUrl = page.url();
      console.log(`Current URL: ${currentUrl}`);

      if (!currentUrl.includes(pageInfo.path)) {
        throw new Error(`Failed to navigate to ${pageInfo.name} page. Current URL: ${currentUrl}`);
      }

      console.log(`Taking screenshot of ${pageInfo.name} page...`);

      // Take screenshot and attach to test report
      await test.info().attach(`${pageInfo.name}`, {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png',
      });
    });
  }
});