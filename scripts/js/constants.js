// https://gist.github.com/rahulmalhotra/7a3444ecfae2d6f75f5b146a009d68a2

// * Constants in Javascript

// * Initialize a constant while defining it
const MONUMENT = 'Taj Mahal';
console.log(MONUMENT);

// * Constant can only be initialized once, at the time of definition
// MONUMENT = 'Lal Quila';
// console.log(MONUMENT);

// * We can assign an object to a constant
const USER = {
    firstName : 'Rahul',
    lastName : 'Malhotra'
};

console.log(USER);

// USER = {
//     firstName : 'Richard',
//     lastName : 'Hendricks'
// };

/*
*   If a constant is an object, then I cannot update that whole constant
*   but we can update the properties of that constant
*/

USER.firstName = 'Richard';
USER.lastName = 'Hendricks';

console.log(USER);