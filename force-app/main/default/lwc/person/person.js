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

    details = 'Richard is the CEO and Founder of Pied Piper';
    showDetails = false;
    actionButtonLabel = 'Show Details'
    toggleDetails() {
        this.showDetails = !this.showDetails;
        this.actionButtonLabel = this.showDetails ? 'Hide Details' : 'Show Details';
        console.log(this.showDetails);
    }

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


