// https://gist.github.com/rahulmalhotra/1d0caa80ea2936ea6d1c3b2e68509f39

'use strict'

// * Filter Javascript Array using filter()

// * Find element in JavaScript array using find()

let numbers = [10, 20, 30, 50, 80, 100, 120, 150];

// * Find a number which is greater than 75

function greaterThan75(arr) {
    let filteredArray = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>75) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

console.log(greaterThan75(numbers));

console.log('----------------------------');

// * Find function receives a comparator function
// * inside the parameter

function myComparator(number) {
    return number >= 30 && number <=120;
};

let result = numbers.find(myComparator);
console.log(result);

console.log('----------------------------');

// * Filter
let result1 = numbers.filter(myComparator);
console.log(result1);

