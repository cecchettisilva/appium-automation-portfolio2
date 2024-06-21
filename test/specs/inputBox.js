describe("suite", () => {
    it("test with input box", async () => {

        const chromeApp = await $('~Chrome') //accessibility id
        await browser.pause(3000)
        await chromeApp.click()    
        await browser.pause(3000)
        const searchBarClassName = await $('android.widget.EditText') //class name
        
        await searchBarClassName.addValue("Search test")
        await browser.pause(2000)
        expect(await searchBarClassName).toHaveText("Search test")
        await browser.pressKeyCode(66)
    })
})