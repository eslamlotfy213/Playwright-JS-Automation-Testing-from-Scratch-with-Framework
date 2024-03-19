const {test, expect} =require('@playwright/test')


test.only("browser test case", async ({browser})=>
{
        const context = await browser.newContext(); 
        const page = await context.newPage();
        await page.goto("https://www.google.com/");

        await expect(page).toHaveTitle("Google");


});


test("page test case", async ({page})=>
{
        await page.goto("https://www.amazon.com/");

});