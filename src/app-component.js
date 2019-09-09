import 'bootstrap';
import './scss/app.scss';
import { ModalComponent } from './views/modal-component';
import { elementCollectionObject } from './config'; 

class AppComponent {
    constructor(elemCollectionObject) {
        this.elemCollectionObject = elemCollectionObject;
    }

    init() {
        const modalComponent = new ModalComponent(this.elemCollectionObject);
        modalComponent.initModal();
    }

}

const app = new AppComponent(elementCollectionObject);
app.init();