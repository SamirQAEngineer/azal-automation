class SearchPage {
    constructor(page) {
        this.page = page;

        this.fromInput = page.locator('input').nth(0);
        this.toInput = page.locator('input').nth(1);
        this.searchButton = page.locator('button[type="submit"]');
        this.acceptButton = page.locator('button:has-text("Accept"), button:has-text("Agree")');
    }

    async handleCookies() {
        try {
            await this.acceptButton.first().click({ timeout: 5000 });
        } catch (e) {
           
        }
    }

    async searchFlights(origin, destination) {
        await this.page.waitForTimeout(3000);

        await this.fromInput.click();
        await this.fromInput.fill(origin);
        await this.page.keyboard.press('Enter');

        await this.toInput.click();
        await this.toInput.fill(destination);
        await this.page.keyboard.press('Enter');

        await this.searchButton.click();
    }
}

module.exports = { SearchPage };