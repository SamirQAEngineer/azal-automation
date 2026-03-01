const { test, expect } = require('@playwright/test');

test.describe('AZAL Booking Smoke Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.azal.az/en/', { waitUntil: 'domcontentloaded' });
    });

    test('Successful Flight Search Flow', async ({ page }) => {

       
        const cookieBtn = page.getByText('I accept all cookies');
        if (await cookieBtn.isVisible().catch(() => false)) {
            await cookieBtn.click();
        }

        
        await page.getByRole('textbox', { name: 'From' }).click();
        await page.getByRole('button', { name: /Baku/i }).click();

        
        await page.getByRole('textbox', { name: 'To' }).click();
        await page.getByRole('button', { name: /Istanbul/i }).click();

        
        const searchButton = page.getByRole('button', { name: 'Search' });
        await expect(searchButton).toBeVisible();
        await expect(searchButton).toBeEnabled();
    });

    test('Payment Mocking - Demo Local Mock', async ({ page }) => {

        await page.route('**/fake-payment', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ success: true })
            });
        });

       
        const response = await page.evaluate(async () => {
            return fetch('/fake-payment', { method: 'POST' })
                .then(res => res.status);
        });

        expect(response).toBe(200);
    });

});