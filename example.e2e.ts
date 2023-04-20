import { LoginPage, 
    SecurePage, 
    AddRemovePage, 
    BasicAuthPage } from './test/pageobjects'


describe('My Login application', () => {
    const loginPage = new LoginPage()
    const securePage = new SecurePage()
    it('should login with valid credentials', async function() {
        await loginPage.open()
        await loginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(securePage.flashAlert).toBeExisting()
        await expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

describe('Add/Remove Elements page', () => {
    const addRemovePage = new AddRemovePage()
        //times to click on button
    const amountOfElements = 4

    beforeEach(async function() {
        await addRemovePage.open()
        await addRemovePage.addElements(amountOfElements)
    })

    it('button ADD should add elements with exact amount', async function() {
        await expect(addRemovePage.addedElementsContainer).toHaveChildren(amountOfElements)
    })

    it('click on added elements to delete them', async function () {
        await addRemovePage.deleteElements(amountOfElements)
        await expect(addRemovePage.addedElementsContainer).toHaveChildren(0)
    })
})

describe('Basic Auth', function() {
    const basicAuthPage = new BasicAuthPage()

    beforeEach(async function() {
        await basicAuthPage.open()
    })

    it('should auth with propper credentials', async function () {
        await basicAuthPage.auth()
        await expect(basicAuthPage.grats).toHaveTextContaining(
            'Congratulations! You must have the proper credentials.'
        )
    })
})
