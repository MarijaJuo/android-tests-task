class HomeScreen {
    get button1() { return $('android=new UiSelector().resourceId("button-1")') }
    get button2() { return $('android=new UiSelector().resourceId("button-2")') }
    get header() { return $('android=new UiSelector().resourceId("header")') }
    get subheader() { return $('android=new UiSelector().resourceId("subheader")') }

    async clickButton1() { await this.button1.click() }
    async clickButton2() { await this.button2.click() }
    async clickButton3() { await $('android=new UiSelector().resourceId("button-3")').click() }
    async clickButton4() { await $('android=new UiSelector().resourceId("button-4")').click() }
    async clickButton5() { await $('android=new UiSelector().resourceId("button-5")').click() }
    async getHeaderText() { return await this.header.getText() }
    async getButton2Desc() { return await this.button2.getAttribute("content-desc") }
    async isSubheaderExisting() { return await this.subheader.isExisting() }
async getButton1Color() {
    const label = await this.button1.getAttribute('content-desc')
    return label.split(': ')[1]
}
}

module.exports = new HomeScreen()