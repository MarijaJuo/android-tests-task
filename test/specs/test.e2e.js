const { expect, $ } = require('@wdio/globals')

describe('React Native Buttons Tests', () => {

it('Button 1 - should be clickable', async () => {

    const button1 = await $('android=new UiSelector().resourceId("button-1")')

    await button1.waitForExist({ timeout: 10000 })

    await expect(button1).toBeDisplayed()

    await button1.click()

})


it('Button 2 - should increment its value', async () => {

    const button2 = await $('android=new UiSelector().resourceIdMatches(".*button-2")')

    await button2.waitForExist({ timeout: 10000 })

    const before = await button2.getAttribute("content-desc")

    await button2.click()

    await browser.waitUntil(async () => {
        const after = await button2.getAttribute("content-desc")
        return after !== before
    }, {
        timeout: 5000,
        timeoutMsg: 'Button 2 value did not change after click'
    })

})

    it('Button 3 - should change the header text', async () => {

        const header = await $('android=new UiSelector().resourceId("header")')
        const button3 = await $('android=new UiSelector().resourceId("button-3")')

        const before = await header.getText()

        await button3.click()

        const after = await header.getText()

        await expect(after).not.toEqual(before)
    })


    it('Button 4 - should toggle subheader', async () => {

        const button4 = await $('android=new UiSelector().resourceId("button-4")')

        await button4.click()

        const subheader = await $('android=new UiSelector().resourceId("subheader")')

        await expect(subheader).toBeExisting()

        await button4.click()

    })


    it('Button 5 - should reset app state', async () => {

        const button1 = await $('android=new UiSelector().resourceId("button-1")')
        const button2 = await $('android=new UiSelector().resourceId("button-2")')
        const button5 = await $('android=new UiSelector().resourceId("button-5")')
        const header = await $('android=new UiSelector().resourceId("header")')

        await button1.click()
        await button2.click()

        await button5.click()

        await expect(header).toHaveText('Welcome!')
    })

})