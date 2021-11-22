// https://gist.github.com/rahulmalhotra/fec51bc49ca27a0fe56d61e9c6225b5b

'use strict'

// * Find element in JavaScript array using find()

let numbers = [10, 20, 30, 50, 80, 100];

// * Find a number which is greater than 75

function greaterThan75(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>75) {
            return arr[i];
        }
    }
}

console.log(greaterThan75(numbers));

console.log('----------------------------');

// * Find function receives a comparator function
// * inside the parameter

function myComparator(number) {
    return number > 75;
};

let result = numbers.find(myComparator);
console.log(result);

console.log('---------------------------');

let persons = [
    {
        name: 'Richard',
        age: 25
    },
    {
        name: 'Monica',
        age: 30
    }
];


// function myComparator1(person) {
//     return person.name === 'Richard';
// }

let myPerson = persons.find(person => person.name === 'Richard');
console.log(myPerson);

// * Find Index
let myPersonIndex = persons.findIndex(person => person.name === 'Rahul');
console.log(myPersonIndex);

