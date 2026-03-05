const HomeScreen = require('../../pages/HomeScreen.page')
const { expect } = require('@wdio/globals')

describe('Homework tests', () => {
    beforeEach(async () => {
        const header = await HomeScreen.header
        await header.waitForExist({ timeout: 10000 })
        await expect(header).toBeDisplayed()
    })

    afterEach(async () => {
       await HomeScreen.clickButton5() // reset app for test independence
    })

it('Button 1 should change color when clicked', async () => {
    const initialColor = await HomeScreen.getButton1Color()
    await HomeScreen.clickButton1()
    await browser.waitUntil(
        async () => {
            const colorAfterClick = await HomeScreen.getButton1Color()
            return colorAfterClick !== initialColor
        },
        { timeout: 5000, timeoutMsg: 'Button color did not change' }
    )
    const colorAfterClick = await HomeScreen.getButton1Color()
    await expect(colorAfterClick).not.toEqual(initialColor)
})

    it('Button 2 - should increment its value', async () => {
        const before = await HomeScreen.getButton2Desc()
        await HomeScreen.clickButton2()

        await browser.waitUntil(
            async () => {
                const after = await HomeScreen.getButton2Desc()
                return after !== before
            },
            { timeout: 5000 }
        )

        const after = await HomeScreen.getButton2Desc()
        await expect(after).not.toEqual(before)
    })

    it('Button 3 - should change the header text', async () => {
        const before = await HomeScreen.getHeaderText()
        await HomeScreen.clickButton3()
        const after = await HomeScreen.getHeaderText()
        await expect(after).not.toEqual(before)
    })

    it('Button 4 - should toggle subheader', async () => {
        const isSubheaderInitiallyExisting = await HomeScreen.subheader.isExisting()
        await expect(isSubheaderInitiallyExisting).toBe(false)

        await HomeScreen.clickButton4()
        const isSubheaderExisting = await HomeScreen.isSubheaderExisting()
        await expect(isSubheaderExisting).toBe(true)

        await HomeScreen.clickButton4()
        const isSubheaderAfterToggle = await HomeScreen.subheader.isExisting()
        await expect(isSubheaderAfterToggle).toBe(false)
    })

 it('Button 5 - should reset app state', async () => {
     const initialState = {
         header: await HomeScreen.getHeaderText(),
         button2: await HomeScreen.getButton2Desc(),
         button1Color: await HomeScreen.getButton1Color(),
         subheader: await HomeScreen.subheader.isExisting()
     }
     await HomeScreen.clickButton1()
     await HomeScreen.clickButton2()
     await HomeScreen.clickButton3()
     await HomeScreen.clickButton4()
     await HomeScreen.clickButton5()
     const stateAfterReset = {
         header: await HomeScreen.getHeaderText(),
         button2: await HomeScreen.getButton2Desc(),
         button1Color: await HomeScreen.getButton1Color(),
         subheader: await HomeScreen.subheader.isExisting()
     }
     await expect(stateAfterReset).toEqual(initialState)
 })
})