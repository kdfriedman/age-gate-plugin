import { ModalComponent } from "./modal-component";

export class CookieComponent extends ModalComponent {
    constructor(elemCollection) {
        super(elemCollection);
        console.log(elemCollection);
    }
}