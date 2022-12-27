import { test } from "@playwright/test";

test("Slider Demo", async ({ page }) => {
    await test.step("Goto demo site", async () => {
        await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/slider/");

    });
    await test.step("handle slider", async () => {
        await page.waitForSelector("//div[@class='coolslider']//input[1]");
        const sliders = await page.locator("//div[@class='coolslider']//input[1]")
       
        let targetAmount = "26";
        let isCompleted = false;
        if (sliders) {
            while (!isCompleted) {
                let srcBound = await sliders.boundingBox();
                if (srcBound) {
                    await page.mouse.move(srcBound.x + srcBound.width / 2,
                        srcBound.y + srcBound.height / 2)
                    await page.mouse.down();
                    await page.mouse.move(srcBound.x + 291, srcBound.y + srcBound.height / 2);
                    await page.mouse.up();
                   
                    if (targetAmount) {
                     isCompleted = true;
                   }
                }
            }

        }



        await page.waitForTimeout(5000)
    });
})
