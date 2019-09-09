// use jquery to work with bootstrap modal element and use api methods
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

export class ModalComponent {
    constructor(elemCollection) {
        this.elemCollection = elemCollection;
        this._body = this.elemCollection.bodyElement;
        this.modal = undefined;
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
        //$(this.modal).modal('hide'); 
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
                                        maxlength="2" min="1" max="12" pattern="^[0-9]*$" tabindex="1" id="month-input"
                                        name="monthinput" value="" size="2" aria-required="true">
                                </div>

                                <div class="col">
                                    <input type="text" class="form-control text-center" placeholder="DD" minlength="1"
                                        maxlength="2" min="1" max="31" pattern="^[0-9]*$" tabindex="2" id="day-input"
                                        name="dayinput" value="" size="2" aria-required="true">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control text-center" placeholder="YYYY" minlength="4"
                                        maxlength="4" min="1899" max="2019" pattern="^[0-9]*$" tabindex="3" id="year-input"
                                        name="yearinput" value="" size="4" aria-required="true">
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

        //append modal element to body before body's first child element
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

        //submit button element
        let submitBtn = form.querySelector('button');

        //test RegEx to prevent non-integar input
        monthInput.addEventListener('input', e => {
            let monthInputRegExTest = /^[0-9]{1,10}$/g;
            let isInputMonthValid = monthInputRegExTest.test(e.target.value);
            //if input isn't valid, handle event target element
            if (!isInputMonthValid) {
                this.handleInvalidInput(e);
            }
        });

        dayInput.addEventListener('input', e => {
            let dayInputRegExTest = /^[0-9]{1,10}$/g;
            let isInputDayValid = dayInputRegExTest.test(e.target.value);
            //if input isn't valid, handle event target element
            if (!isInputDayValid) {
                this.handleInvalidInput(e);
            }
        });

        yearInput.addEventListener('input', e => {
            let yearInputRegExTest = /^[0-9]{1,10}$/g;
            let isInputYearValid = yearInputRegExTest.test(e.target.value);
            //if input isn't valid, handle event target element
            if (!isInputYearValid) {
                this.handleInvalidInput(e);
            }
        });

        //add event listener to submit btn
        form.addEventListener('submit', e => {
            e.preventDefault();
            //hide modal on successful form validation 
            $(this.modal).modal('hide');
        });

    }

    handleInvalidInput(e) {
        e.target.value = '';
        e.preventDefault();
    }
}