
import Page from "./page";


export class BasicAuthPage extends Page {

    get grats() {
        return $('.example p')
    } 

    async auth () {
        let authUrl = (await browser.getUrl()).split(/(https:\/\/)/gm)
        await browser.url(`${authUrl[1]}admin:admin@${authUrl[2]}`)
        return this
    }

    async open () {
        return super.open('basic_auth')
    }
}