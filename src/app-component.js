import 'bootstrap';
import './scss/app.scss';
import { ModalComponent } from './views/modal-component';
import { CookieComponent } from './views/cookie-component';
import { elementCollectionObject } from './config'; 

class AppComponent {
    constructor(elemCollectionObject) {
        this.elemCollectionObject = elemCollectionObject;
    }

    init() {
        const modalComponent = new ModalComponent(this.elemCollectionObject);
        modalComponent.initModal();

        const cookieComponent = new CookieComponent(this.elemCollectionObject);
    }

}

const app = new AppComponent(elementCollectionObject);
app.init();