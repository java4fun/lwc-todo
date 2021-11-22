// https://gist.github.com/rahulmalhotra/75982ffe2ac15a9481e7e8ddfd7dfd17
// https://youtu.be/agEki62bmN4?list=PLuL63vr-9xHwGyGXBZUlf_0xTFqA8fCKw

'use strict'

// * Proxy in JavaScript

/*
*   Proxy object enables you to intercept and customize the
*   operations performed on objects
*/


let person = {
    firstname: 'Richard',
    lastname: 'Hendricks',
    age: 25
};

console.log(person);
console.log(person.firstname);

// person.age = 300;
// console.log(person);

console.log('---------------------');

let goodPerson = new Proxy(person, {

    get: function(target, prop, receiver) {
        // getter method is been intercepted
        console.log(prop + ' is being accessed');
        if(prop === 'allowedtovote') {
            if(target.age >= 18) {
                return true;
            } else {
                return false;
            }
        } else if(prop === 'fullname') {
            return target.firstname + ' ' + target.lastname;
        } else if(!(prop in target)) {
            throw new ReferenceError('Unknown property:- ' + prop);
        }
        return Reflect.get(target, prop, receiver);
        // Use Reflect instead following
        // return target[prop];
    },

    set: function(target, prop, value) {
        if(prop === 'age' && value > 200) {
            throw new Error('Age is not valid');
        }
        return Reflect.set(target, prop, value);
        // Use Reflect instead following
        // target[prop] = value;
        // return true;
    }
});

// console.log(goodPerson.hello);

console.log('-------------------');

console.log(goodPerson.allowedtovote);
console.log(goodPerson.fullname);

console.log('-------------------------');

goodPerson.age = 15;
console.log(goodPerson);
console.log(goodPerson.allowedtovote);  // proxy property added to person object
console.log(goodPerson.fullname);
console.log(goodPerson.hello);   // hello is undefined

console.log(goodPerson);
console.log(goodPerson.firstname);
console.log(goodPerson.lastname);
console.log(goodPerson.age);

console.log('---------------------');

try {
    goodPerson.age = 250;
} catch(e) {
    console.log(e.message);
}

console.log(goodPerson);
console.log(goodPerson.age);

