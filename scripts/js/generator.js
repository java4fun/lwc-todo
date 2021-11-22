// https://gist.github.com/rahulmalhotra/3737387c312bfab4c3b93ce4197ea5da
// 

'use strict'

// * Generator Functions in JavaScript

/*
*   Generator Functions are the functions
*   that can be exited and later re-entered
*/

function* salesforceClouds() {

    console.log('1');
    console.log('2');
    yield 'Sales Cloud';

    console.log('3');
    console.log('4');
    yield 'Service Cloud';

    console.log('5');
    console.log('6');
    yield 'Community Cloud';

    console.log('7');
    console.log('8');
    yield 'Health Cloud';
}

const forceClouds = salesforceClouds();

// * Generator Object -> Has two properties :- value, done

console.log(forceClouds.next());
console.log(forceClouds.next());
console.log(forceClouds.next());
console.log(forceClouds.next());
console.log(forceClouds.next());
console.log('-----------------------------------------------');

// * Have to give each customer a unique token

function* generateToken() {
    let tokenNumber = 1;
    while(tokenNumber <= 10) {
        yield tokenNumber;
        tokenNumber++;
    }
}

const getToken = generateToken();

console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
console.log(getToken.next());
