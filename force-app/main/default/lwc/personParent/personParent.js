import { LightningElement } from 'lwc';

export default class PersonParent extends LightningElement {

    updateUser() {
        // call public method of child component
        this.template.querySelector('c-person').updateUser();
    }
}