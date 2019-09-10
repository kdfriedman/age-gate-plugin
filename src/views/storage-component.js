import { ModalComponent } from "./modal-component";

export class StorageComponent extends ModalComponent {
    constructor(elemCollection) {
        super(elemCollection);
        this._body = this.elemCollection.bodyElement;
    }

    initStorage() {
        this.checkIfDOMIsLoaded();
    }

    checkIfDOMIsLoaded() {
        // check if DOM has been fully loaded before running storage function
        document.addEventListener('DOMContentLoaded', e => {
            this.validateCheckBoxInputOnChange();
            this.validateCheckBoxInputOnSubmit();
        });
    }

    validateCheckBoxInputOnChange() {
        this._body.addEventListener("ageValidationInput", e => {
            let isInputCheckBoxChecked = e.detail.checkboxInputElement.checked;
            console.log(isInputCheckBoxChecked);
            
            if (!isInputCheckBoxChecked) {
                console.log('checkbox is not selected');
                return false;
            }
            this.storeLocalStorageObject();
        });
    }

    validateCheckBoxInputOnSubmit() {
        this._body.addEventListener('checkBoxState', e => {
            console.log(e.detail.inputCheckBoxState);
        });
    }

    storeLocalStorageObject() {

    }
}