// https://gist.github.com/rahulmalhotra/2d5705c605236d599cf9ec21072ad111

// * Default parameters in ES6 functions

// * Default values before ES6
// function add(a, b) {
//     b = b ? b : 2;
//     console.log(a+b);
// }

// * Default value using ES6 syntax
function add(a, b = 2) {
    console.log(a+b);
}

add(3);

// * Default value to an object being passed as a parameter using ES6 syntax
function personAge(age, { firstName = 'Richard', lastName = 'Hendricks' } = {}) {
    console.log(firstName + ' ' + lastName + ' is ' + age + ' years old');
}

personAge(20);

// *** DOES NOT WORK ***
// function personAge(age, { firstName = 'Richard', lastName = 'Hendricks' } ) {
//     console.log(firstName + ' ' + lastName + ' is ' + age + ' years old');
// }