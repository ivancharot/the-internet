import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'
import AddRemovePage from '../pageobjects/add_remove.page'

describe('My Login application', () => {
    it('should login with valid credentials', async function() {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

describe.only('Add/Remove Elements page', () => {
    //times to click on button
    const amountOfElements = 4

    beforeEach(async function() {
        await AddRemovePage.open()
        await AddRemovePage.addElements(amountOfElements)
    })

    it('button ADD should add elements with exact amount', async function() {
        await expect(AddRemovePage.addedElementsContainer).toHaveChildren(amountOfElements)
    })

    it.only('click on added elements to delete them', async function () {
        await AddRemovePage.deleteElements(amountOfElements)
        await expect(AddRemovePage.addedElementsContainer).toHaveChildren(0)
    })
})


