
import Page from './page'


export class AddRemovePage extends Page {

    get addButton () {
        return $('.example>button')
    }

    get addedElementsContainer () {
        return $('#elements')
    }

    get addedElements () {
        return this.addedElementsContainer.$$('.added-manually')
    }

    async addElements (howMany: number = 1) {
        while (await this.addedElements.length!=howMany) {
            await this.addButton.click()
        }
        return this
    }

    async deleteElements (howMany: number = 1) {
        const elementsToStay = await this.addedElements.length-howMany
        while (await this.addedElements.length!=elementsToStay) {
            await this.addedElements[0].click()
        }   
        return this
    }

    async open() {
        return super.open('add_remove_elements/')
    }
}