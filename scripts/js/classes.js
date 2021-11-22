// https://gist.github.com/rahulmalhotra/2e697343b0cf999cd0c187da6d910575

'use strict'

// * Classes in ES6

// * Class is a user defined type with some data members and member functions

// * Before ES6

/*
function Car(name, speed) {
    this.name = name;
    this.speed = speed;
}
Car.prototype.showSpeed = function() {
    console.log(this.speed);
}
let audi = new Car('audi', 200);
audi.showSpeed();
*/

// * After ES6

class Car {

    // *** private variable
    #color

    constructor(name, speed, color) {
        this.name = name;
        this.speed = speed;
        this.#color = color;
    }

    showSpeed() {
        console.log(this.speed);
    }

    showColor() {
        console.log(this.#color);
    }
}

let audi = new Car('audi', 300, 'red');
audi.showSpeed();
console.log(audi.name);
console.log(audi.speed);
// * private var Not accessible
// console.log(audi.#color);
audi.showColor();