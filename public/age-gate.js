!function(e){function t(t){for(var i,o,s=t[0],l=t[1],d=t[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(c&&c(t);h.length;)h.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={0:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;r.push([5,1]),n()}({4:function(e,t,n){},5:function(e,t,n){"use strict";n.r(t);n(1),n(4);var i=n(0),a=n.n(i);window.jQuery=a.a,window.$=a.a;class r{constructor(e){this.elemCollection=e,this._body=this.elemCollection.bodyElement,this.modal=void 0,this.styleInputErrorMsg=!1,this.errMsgElement=void 0,this.inputValueCounter=!1,this.inputCheckBoxState=!1}initModal(){this.createModalElement(),this.ActivateModalElement()}ActivateModalElement(){document.addEventListener("DOMContentLoaded",e=>{a()(this.modal).modal({backdrop:"static",keyboard:!1}),this.validateAgeGateUserInput()})}createModalElement(){this.modal=document.createElement("div"),this.modal.classList.add("modal","fade"),this.modal.id="age-gate-modal",this.modal.tabIndex="-1",this.modal.setAttribute("role","dialog"),this.modal.setAttribute("aria-labelledby","age-gate-modal"),this.modal.setAttribute("aria-hidden","true"),this.modal.innerHTML=' \n            <div id="modal-wrapper" class="modal-dialog modal-dialog-centered" role="document">\n                <div id="modal-wrapper-inner" class="modal-content">\n                <div class="modal-header">\n                <div class="row">\n                    <div id="company-logo-img" class=" logo-img text-center">\n                        <img src="/../../images/company-logo.png" class="rounded" alt="Company Logo">\n                    </div> \n                </div>\n                <div class="row">\n                    <p>Please enter your date of birth.</p>\n                </div>               \n                </div>\n                <div class="modal-body">\n                        <form>\n                            <div class="row">\n                                <div class="col">\n                                    <input type="text" class="form-control text-center" placeholder="MM" minlength="2"\n                                        maxlength="2" min="0" max="12" pattern="^[0-9]*$" tabindex="1" id="month-input"\n                                        name="monthinput" value="" size="2" aria-required="true">\n                                </div>\n\n                                <div class="col">\n                                    <input type="text" class="form-control text-center" placeholder="DD" minlength="2"\n                                        maxlength="2" min="0" max="31" pattern="^[0-9]*$" tabindex="2" id="day-input"\n                                        name="dayinput" value="" size="2" aria-required="true">\n                                </div>\n                                <div class="col">\n                                    <input type="text" class="form-control text-center" placeholder="YYYY" minlength="4"\n                                        maxlength="4" min="1899" max="2019" pattern="^[0-9]*$" tabindex="3" id="year-input"\n                                        name="yearinput" value="" size="4" aria-required="true">\n                                </div>\n                            </div>\n                            <div id="remember-age-checkbox" class="row">\n                                <div class="form-check">\n                                    <input type="checkbox" class="form-check-input" id="remember-details">\n                                    <label class="form-check-label" for="remember-details">Remember your age for next time.</label>\n                                </div>\n                            </div>\n                            <div id="enter-btn" class="row">\n                                <div class="col text-center">\n                                    <button type="submit" value="submit" class="btn btn-primary age-submit">Enter</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class="modal-footer"></div>\n                </div>\n            </div>\n    ',this._body.insertBefore(this.modal,this._body.firstChild)}validateAgeGateUserInput(){let e=this.modal.querySelector("form"),t=e[0],n=e[1],i=e[2],a=[t,n,i],r=(e.querySelector("button"),e.querySelector("input[type='checkbox']"));this.inputCheckBoxState=r.checked,e.addEventListener("input",e=>{if(!/^[0-9]{1,10}$/g.test(e.target.value))return this.handleInvalidRegExInput(e),!1;this.confirmInputValuesAreSuccessful(t,n,i)});let o=new CustomEvent("checkBoxState",{detail:{inputCheckBoxEvent:"checkBoxState",checkboxInputElement:r}});r.addEventListener("change",e=>{this._body.dispatchEvent(o)}),e.addEventListener("submit",e=>(e.preventDefault(),!this.styleInputErrorMsg&&(""===t.value||""===n.value||""===i.value?(this.handleSubmissionForEmptyInputs(a),!1):this.inputValueCounter?void this.handleCompletedBirthdayInput(t.value,n.value,i.value,o,r):(this.handleSubmissionForMissingValues(a),!1))))}handleCompletedBirthdayInput(e,t,n,i,r){let o=new Date(n,e,t),s=Date.now()-o.getTime(),l=new Date(s),d=Math.abs(l.getUTCFullYear()-1970),c=new CustomEvent("ageValidationInput",{detail:{ageValidationInputMessage:"age validation input status",checkboxInputElement:r,age:d}});if(Math.abs(l.getUTCFullYear()-1970)<21)return this._body.dispatchEvent(i),this._body.dispatchEvent(c),this.handleUnder21YearsOfAgeInput(),console.log("less than 21"),!1;Math.abs(l.getUTCFullYear()-1970)>=21&&(a()(this.modal).modal("hide"),this._body.dispatchEvent(i),this._body.dispatchEvent(c))}handleUnder21YearsOfAgeInput(){let e=this.modal.querySelectorAll("div"),t=[];for(let n of e)n.className.includes("row")&&t.push(n);t[1].innerHTML='<p class="under-21-msg">Woah, slow down there. You must be of legal drinking age to enter our site.</p>',t[2].innerHTML="",t[3].innerHTML="",t[4].innerHTML=""}handleInvalidRegExInput(e){e.target.value="",e.preventDefault()}handleSubmissionForEmptyInputs(e){e.forEach(e=>{e.style.border="2px solid red",this.styleInputErrorMsg=!0}),this.errMsgElement=document.createElement("div"),this.errMsgElement.innerHTML="Please enter a valid month, day and year",this.errMsgElement.classList.add("err-msg"),e[0].parentElement.appendChild(this.errMsgElement)}handleSubmissionForMissingValues(e){e.forEach(e=>{e.style.border="2px solid red",this.styleInputErrorMsg=!0}),this.errMsgElement=document.createElement("div"),this.errMsgElement.innerHTML="Please enter a valid date",this.errMsgElement.classList.add("err-msg"),e[0].parentElement.appendChild(this.errMsgElement)}confirmInputValuesAreSuccessful(e,t,n){let i=0,a=[e,t,n];for(let e=0;e<a.length;e++)a[e].value.length===parseInt(a[e].getAttribute("maxlength"))&&(i+=1);this.styleInputErrorMsg&&3!==i&&this.clearStyleInputErrorMessage(a,this.errMsgElement),3===i&&this.validateInputValuesForRegEx(a)}validateInputValuesForRegEx(e){let t=0;for(let n=0;n<e.length;n++)e[n].value<=parseInt(e[n].getAttribute("max"))&&e[n].value>=parseInt(e[n].getAttribute("min"))&&(t+=1);if(3!==t)return this.styleInputErrorMessage(e),!1;this.inputValueCounter=3===t}styleInputErrorMessage(e){e.forEach(e=>{e.style.border="2px solid red",this.styleInputErrorMsg=!0}),this.errMsgElement=document.createElement("div"),this.errMsgElement.innerHTML="Please enter a valid date",this.errMsgElement.classList.add("err-msg"),e[0].parentElement.appendChild(this.errMsgElement)}clearStyleInputErrorMessage(e){this.errMsgElement.innerHTML="",this.errMsgElement.classList.remove("err-msg"),this.inputValueCounter=!1,e.forEach(e=>{e.style.border="2px solid white",this.styleInputErrorMsg=!1})}}window.jQuery=a.a,window.$=a.a;class o extends r{constructor(e){super(e),this._body=this.elemCollection.bodyElement,this.isInputCheckBoxChecked=void 0,this.cookieState=""}initStorage(){this.checkIfCookieExists(),this.checkIfDOMIsLoaded()}checkIfDOMIsLoaded(){document.addEventListener("DOMContentLoaded",e=>{this.validateCheckBoxInputOnChange(),this.validateCheckBoxInputOnSubmit()})}validateCheckBoxInputOnChange(){this._body.addEventListener("checkBoxState",e=>{if(this.isInputCheckBoxChecked=e.detail.checkboxInputElement.checked,!this.isInputCheckBoxChecked)return!1})}validateCheckBoxInputOnSubmit(){this._body.addEventListener("ageValidationInput",e=>{if(!this.isInputCheckBoxChecked)return!1;this.generateCookieToStoreAgeValue(e)})}generateCookieToStoreAgeValue(...e){e[0].detail.age<21&&this.createCookieData(e[0].detail.age),e[0].detail.age>=21&&this.createCookieData(e[0].detail.age)}createCookieData(e){document.cookie=`ageGateValue=${e}`}checkIfCookieExists(){if(document.cookie.split(";").filter(e=>e.trim().startsWith("ageGateValue=")).length){let e=document.cookie.indexOf("Value="),t=document.cookie.substring(e).slice(6),n=parseInt(t);console.log(n),n<=21&&(console.log("under 21"),this.cookieState="under"),n>=21&&(console.log("over 21"),this.cookieState="over")}else console.log("cookie does not exist")}}const s={bodyElement:document.getElementsByTagName("BODY")[0]||document.body};window.jQuery=a.a,window.$=a.a;new class{constructor(e){this.elemCollectionObject=e}init(){const e=new r(this.elemCollectionObject);e.initModal();const t=new o(this.elemCollectionObject);t.initStorage(),document.addEventListener("DOMContentLoaded",n=>{"over"===t.cookieState&&(a()(e.modal).removeClass("in"),a()(".modal-backdrop").remove(),a()(e.modal).hide()),"under"===t.cookieState&&(console.log("under age"),e.handleUnder21YearsOfAgeInput())})}}(s).init()}});