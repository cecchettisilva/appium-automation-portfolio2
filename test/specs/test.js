describe("suite", () => {
    it("test with accessibility id", async () => {
        
        const phoneApp = await $('~Phone') //accessibility id
        await browser.pause(5000)
        await phoneApp.click()    
        await browser.pause(5000)
        const moreOption = await $('~More options') //accessibility id
        await expect(moreOption).toBeExisting()
    })
})