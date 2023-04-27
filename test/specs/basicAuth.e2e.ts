import { BasicAuthPage } from "../pageobjects"

describe('Basic Auth', function() {
    const basicAuthPage = new BasicAuthPage()

    beforeEach(async function() {
        await basicAuthPage.open()
    })

    it('should auth with propper credentials', async function() {
        await basicAuthPage.auth()
        await expect(basicAuthPage.grats).toHaveTextContaining(
            'Congratulations! You must have the proper credentials.'
        )
    })
})