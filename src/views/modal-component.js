// use jquery to work with bootstrap modal element and use api methods
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

export class ModalComponent {
    constructor(elemCollection) {
        this.elemCollection = elemCollection;
        this._body = this.elemCollection.bodyElement;
        this.modal = undefined;
        this.styleInputErrorMsg = false;
        this.errMsgElement = undefined;
        this.inputValueCounter = false;
    }

    initModal() {
        this.createModalElement();
        this.ActivateModalElement();
        this.validateAgeGateUserInput();
    }

    ActivateModalElement() {
        // wait until dom is fully loaded then show modal element
        document.addEventListener('DOMContentLoaded', e => {
            $(this.modal).modal({
                backdrop: 'static',
                keyboard: false
            });
        });
        // $(this.modal).modal('hide'); 
    }

    createModalElement() {
        // generate modal element
        this.modal = document.createElement('div');

        // add modal attributes, classes, and id to modal element
        this.modal.classList.add('modal', 'fade');
        this.modal.id = 'age-gate-modal';
        this.modal.tabIndex = '-1';
        this.modal.setAttribute('role', 'dialog');
        this.modal.setAttribute('aria-labelledby', 'age-gate-modal');
        this.modal.setAttribute('aria-hidden', 'true');

        //append modal inner elements
        this.modal.innerHTML =
            ` 
            <div id="modal-wrapper" class="modal-dialog modal-dialog-centered" role="document">
                <div id="modal-wrapper-inner" class="modal-content">
                <div class="modal-header">
                <div class="row">
                    <div id="company-logo-img" class=" logo-img text-center">
                        <img src="/../../images/company-logo.png" class="rounded" alt="Company Logo">
                    </div> 
                </div>
                <div class="row">
                    <p>Please enter your date of birth.</p>
                </div>               
                </div>
                <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control text-center" placeholder="MM" minlength="1"
                                        maxlength="2" min="2" max="12" pattern="^[0-9]*$" tabindex="1" id="month-input"
                                        name="monthinput" value="" size="2" aria-required="true">
                                </div>

                                <div class="col">
                                    <input type="text" class="form-control text-center" placeholder="DD" minlength="1"
                                        maxlength="2" min="2" max="31" pattern="^[0-9]*$" tabindex="2" id="day-input"
                                        name="dayinput" value="" size="2" aria-required="true">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control text-center" placeholder="YYYY" minlength="4"
                                        maxlength="4" min="1899" max="2019" pattern="^[0-9]*$" tabindex="3" id="year-input"
                                        name="yearinput" value="" size="4" aria-required="true">
                                </div>
                            </div>
                            <div id="remember-age-checkbox" class="row">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="remember-details">
                                    <label class="form-check-label" for="remember-details">Remember your age for next time.</label>
                                </div>
                            </div>
                            <div id="enter-btn" class="row">
                                <div class="col text-center">
                                    <button type="submit" value="submit" class="btn btn-primary age-submit">Enter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
    `;

        // append modal element to body before body's first child element
        this._body.insertBefore(this.modal, this._body.firstChild);
    }

    validateAgeGateUserInput() {
        // check if input contains only postive, non-floating, numbers

        // validate all form inputs
        let form = this.modal.querySelector('form');
        
        //form input elements
        let monthInput = form[0];
        let dayInput = form[1];
        let yearInput = form[2];

        // create input group to loop through on submit for handler functions
        let formInputElemGroup = [monthInput, dayInput, yearInput];

        // submit button element
        let submitBtn = form.querySelector('button');

        // validate all inputs
        form.addEventListener('input', e => {
            let inputRegExTest = /^[0-9]{1,10}$/g;
            let isInputValid = inputRegExTest.test(e.target.value);
            //if input isn't valid, handle event target element
            if (!isInputValid) {
                this.handleInvalidRegExInput(e);
                return false;
            }
            this.confirmInputValuesAreSuccessful(monthInput, dayInput, yearInput);            
        });        

        // handle form submit
        // validate inputs, test against RegEx, and run callback function
        form.addEventListener('submit', e => {
            e.preventDefault();
            //check if err message is present
            if (this.styleInputErrorMsg) {
                return false;
            }
            if (monthInput.value === '' || dayInput.value === ''  || yearInput.value === '') {
                this.handleSubmissionForEmptyInputs(formInputElemGroup);
                return false;
            }
            //check if input counter is true or equal to 3 completed inputs
            if (!this.inputValueCounter) {
                this.handleSubmissionForMissingValues(formInputElemGroup);
                return false; 
            }
            //hide modal on successful form validation 
            $(this.modal).modal('hide');
        });
    }

    handleInvalidRegExInput(e) {
        e.target.value = '';
        e.preventDefault();
    }

    handleSubmissionForEmptyInputs(formInputElementGroup) {
        formInputElementGroup.forEach(input => {
            // alert user with red outline that their input is incorrect
            input.style.border = '2px solid red';
            this.styleInputErrorMsg = true;
        })
        // create err message element to notify user that they should reformat their input
        this.errMsgElement = document.createElement('div');
        this.errMsgElement.innerHTML = 'Please enter a valid month, day and year';
        this.errMsgElement.classList.add('err-msg');

        // append err message element to parent element
        formInputElementGroup[0].parentElement.appendChild(this.errMsgElement);
    }

    handleSubmissionForMissingValues(formInputElementGroup) {
        formInputElementGroup.forEach(input => {
            // alert user with red outline that their input is incorrect
            input.style.border = '2px solid red';
            this.styleInputErrorMsg = true;
        })
        // create err message element to notify user that they should reformat their input
        this.errMsgElement = document.createElement('div');
        this.errMsgElement.innerHTML = 'Please enter a valid date';
        this.errMsgElement.classList.add('err-msg');

        // append err message element to parent element
        formInputElementGroup[0].parentElement.appendChild(this.errMsgElement);
    }

    confirmInputValuesAreSuccessful(inputMonth, inputDay, inputYear) {
        //input counter to confirm input is fully 
        let inputSuccessCounter = 0;
        let inputElementGroup = [inputMonth, inputDay, inputYear];

        // loop through each input and test if input.value is equal to maxlength attr
        for (let i = 0; i < inputElementGroup.length; i++) {
            if (inputElementGroup[i].value.length === 
            parseInt(inputElementGroup[i].getAttribute('maxlength'))) {
                inputSuccessCounter += 1;
            }
        }
        if (this.styleInputErrorMsg) {
            if (inputSuccessCounter !== 3) {
                this.clearStyleInputErrorMessage(inputElementGroup, this.errMsgElement);
            }
        }
        inputSuccessCounter === 3 ? this.validateInputValuesForRegEx(inputElementGroup) : false;
    }

    validateInputValuesForRegEx(inputElementList) {
        let inputValueCounter = 0;
        for (let i = 0; i < inputElementList.length; i++) {
            if (inputElementList[i].value <= parseInt(inputElementList[i].getAttribute('max')) && 
            inputElementList[i].value >= parseInt(inputElementList[i].getAttribute('min'))) {
                inputValueCounter += 1;
            }
        }
        if (inputValueCounter !== 3) {
            this.styleInputErrorMessage(inputElementList);
            return false;
        }

        inputValueCounter === 3 ? this.inputValueCounter = true 
        : this.inputValueCounter = false;

    }

    styleInputErrorMessage(inputElemGroup) {
        inputElemGroup.forEach(input => {
            // alert user with red outline that their input is incorrect
            input.style.border = '2px solid red';
            this.styleInputErrorMsg = true;
        })
        // create err message element to notify user that they should reformat their input
        this.errMsgElement = document.createElement('div');
        this.errMsgElement.innerHTML = 'Please enter a valid date';
        this.errMsgElement.classList.add('err-msg');

        // append err message element to parent element
        inputElemGroup[0].parentElement.appendChild(this.errMsgElement);
    }

    clearStyleInputErrorMessage(inputElemGroup) {
        this.errMsgElement.innerHTML = '';
        this.errMsgElement.classList.remove('err-msg');
        this.inputValueCounter = false;

        inputElemGroup.forEach(input => {
            input.style.border = '2px solid white';
            this.styleInputErrorMsg = false;
        })
    }
}