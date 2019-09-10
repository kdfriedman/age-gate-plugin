import { ModalComponent } from "./modal-component";

// use jquery to work with bootstrap modal element and use api methods
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

export class StorageComponent extends ModalComponent {
    constructor(elemCollection) {
        super(elemCollection);
        this._body = this.elemCollection.bodyElement;
        this.isInputCheckBoxChecked = undefined;
        this.cookieState = '';
    }

    initStorage() {
        this.checkIfCookieExists();
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
        this._body.addEventListener("checkBoxState", e => {
            //update inputbox state
            this.isInputCheckBoxChecked = e.detail.checkboxInputElement.checked;
            if (!this.isInputCheckBoxChecked) {
                return false;
            }
        });
    }

    validateCheckBoxInputOnSubmit() {
        //check if inputbox has been selected and run handler
        this._body.addEventListener('ageValidationInput', e => {
            if (!this.isInputCheckBoxChecked) {
                return false;
            }
            this.generateCookieToStoreAgeValue(e);
        });
    }

    generateCookieToStoreAgeValue(...events) {
        if (events[0].detail.age < 21) {
            this.createCookieData(events[0].detail.age);
        }
        if (events[0].detail.age >= 21) {
            this.createCookieData(events[0].detail.age);            
        }
    }

    createCookieData(age) {
        document.cookie = `ageGateValue=${age}`;
    }

    checkIfCookieExists() {
        if (document.cookie.split(';').filter((item) => item.trim()
        .startsWith('ageGateValue=')).length) {
            //find index of cookie
            let cookieIndexdocument = document.cookie.indexOf('Value=');
            //pass index into substring as starting index to return cookie value
            let ageValCookie = document.cookie.substring(cookieIndexdocument);
            let slicedCookie = ageValCookie.slice(6);

            //convert cookie vale into number for check
            let ageValIntValue = parseInt(slicedCookie);
            console.log(ageValIntValue);

            if (ageValIntValue <= 21) {
                console.log('under 21')
                this.cookieState = 'under';
            }
            if (ageValIntValue >= 21) {
                console.log('over 21')
                this.cookieState = 'over';
                // clear modal
            }
        } 
        else {
            console.log('cookie does not exist');
        }
    }
    
}