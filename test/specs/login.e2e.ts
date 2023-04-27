import { LoginPage, 
    SecurePage} from '../pageobjects'


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

