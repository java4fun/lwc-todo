// https://gist.github.com/rahulmalhotra/360777be8204833c2c06c6269f4f1b97

'use strict'

// * Inheritance in Classes in ES6

// * Class is a user defined type with some data members and member functions

// * Good to keep all the reusable code in the parent class and re-use it in the child class

class Phone {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printName() {
        console.log(this.name);
    }

    printPrice() {
        console.log(this.price);
    }
}

// * Moving from Generalisation to Specialization

class TouchPhone extends Phone {

    constructor(name, price, touchSensitivity) {
        super(name, price);
        this.touchSensitivity = touchSensitivity;
    }

    printTouchSensitivity() {
        console.log(this.touchSensitivity);
    }
}

let iPhone = new TouchPhone('iPhone11', 200, 1.5);
iPhone.printName();
iPhone.printPrice();
iPhone.printTouchSensitivity();

console.log('---------------------------------');

let basicPhone = new Phone('Basic Phone', 100);
basicPhone.printName();
basicPhone.printPrice();