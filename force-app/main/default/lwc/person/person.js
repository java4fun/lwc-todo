import { api, LightningElement, track } from 'lwc';

export default class Person extends LightningElement {


    /*
    * @track - make data member reactive
    * @api - make data member public
    */

    @track
    user = {
        firstName: 'Richard',
        lastName: 'Hendricks'
    };

    @api
    location;

    // @track
    // users = [];

    @api
    updateUser() {
        // this.user = {
        //     firstName: 'Gavin',
        //     lastName: 'Belson'
        // }

        this.user.firstName = 'Gavin';
    }
}


