import { AddRemovePage } from "../pageobjects"

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