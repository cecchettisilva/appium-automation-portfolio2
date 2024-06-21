describe("suite", () => {

    before(async () => {
        await browser.pause(5000)
    })

    it("test with UIAutomator", async () => {
        
        const chromeApp = await $('android=new UiSelector().textContains("Chrome")') //ui automator android
        await browser.pause(5000)
        await chromeApp.click()
    })
})