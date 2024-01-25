class Home {
    get womenTab() {
        return cy.get(`a[title="Women"]`)
    }

    clickOnWomenTab() {
        this.womenTab.click();
    }

    //moveOnWomenTab() {
        //this.womenTab.
    //}
}

export default new Home();