describe("suite", () => {
    it("test with multiple list", async () => {
        expectedList = ['Monday, Jun 3', '17°C', 'Messages', 'Chrome']
        actualList = []

        const listValues = await $$('android.widget.TextView')

        for(ele of listValues){
            actualList.push(await ele.getText())
        }

        await expect(actualList).toEqual(expectedList)
    })
})