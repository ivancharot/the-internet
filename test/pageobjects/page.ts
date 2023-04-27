
export default class Page {
    open(path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
