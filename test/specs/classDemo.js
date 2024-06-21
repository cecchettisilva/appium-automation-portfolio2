const ChromeObjects = require('../pageobjects/chromeObjects')

describe("suite", () => {
    it("test with class name", async () => {
        
        await ChromeObjects.openChrome.click()
        await browser.pause(5000)
        expect(await ChromeObjects.classText.getText()).toHaveText("Search or type web address")
    })
})