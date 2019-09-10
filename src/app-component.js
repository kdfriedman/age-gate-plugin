import 'bootstrap';
import './scss/app.scss';
import { ModalComponent } from './views/modal-component';
import { StorageComponent } from './views/storage-component';
import { elementCollectionObject } from './config';
// use jquery to work with bootstrap modal element and use api methods
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

class AppComponent {
    constructor(elemCollectionObject) {
        this.elemCollectionObject = elemCollectionObject;
    }

    init() {
        const modalComponent = new ModalComponent(this.elemCollectionObject);
        modalComponent.initModal();

        const storageComponent = new StorageComponent(this.elemCollectionObject);
        storageComponent.initStorage();

        // wait till DOM has fully loaded to check for cookieState
        document.addEventListener('DOMContentLoaded', e => {
            if (storageComponent.cookieState) {
                //remove modal
                $(modalComponent.modal).removeClass("in");
                $(".modal-backdrop").remove();
                $(modalComponent.modal).hide();
            }
            if (!storageComponent.cookieState) {
                console.log('under age');
            }
        });
    }

}

const app = new AppComponent(elementCollectionObject);
app.init();