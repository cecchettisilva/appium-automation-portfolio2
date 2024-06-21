describe("suite", () => {
    it("test with xpath", async () => {
        
        const chromeApp = await $('~Chrome') //accessibility id
        await browser.pause(5000)
        await chromeApp.click()    
        await browser.pause(5000)
        const searchBarClassName = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]') //xpath
        const text = searchBarClassName.getText()
        console.log("Text here: " + text)
        expect(text).toHaveText("Search or type web address")
    })
})