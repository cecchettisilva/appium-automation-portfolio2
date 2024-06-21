describe("Scrolling views", () => {

    it("verticial view", async () => {

        const search = await $('//android.view.View[@resource-id="com.google.android.apps.nexuslauncher:id/page_indicator"]')
        const time = await $('~Thursday, Jun 6')
        
        search.touchAction([
            'press',
            { action: 'moveTo', element: time },
            'release'
        ])

        await browser.pause(1000)
        await $('~API Demos').click()
        await browser.pause(2000) 
        await $('//android.widget.TextView[@text="Views"]').click()
        await browser.pause(1000)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Webview")')
        await browser.pause(1000)
        await expect($('//android.widget.TextView[@text="WebView"]')).toExist()
    })

    it.only("horizontal view", async () => {

        const search = await $('//android.view.View[@resource-id="com.google.android.apps.nexuslauncher:id/page_indicator"]')
        const time = await $('~Thursday, Jun 6')
        
        search.touchAction([
            'press',
            { action: 'moveTo', element: time },
            'release'
        ])

        await browser.pause(1000)
        await $('~API Demos').click()
        await browser.pause(2000) 
        await $('//android.widget.TextView[@text="Views"]').click()
        await browser.pause(1000)
        await $('//android.widget.TextView[@text="Gallery"]').click()
        await browser.pause(1000)
        await $('//android.widget.TextView[@text="1. Photos"]').click()
        await browser.pause(1000)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(5)')
        
    })
})