
import Page from './page'


export class SecurePage extends Page {
    get flashAlert () {
        return $('#flash');
    }
}


