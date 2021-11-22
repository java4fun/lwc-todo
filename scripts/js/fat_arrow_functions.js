// https://gist.github.com/rahulmalhotra/cdf53541bbebcefa2d9b44609abb83c6

'use strict'

// * Fat Arrow Functions in JavaScript

// * Method 1
function perimeterOfACircle1(radius) {
    const PI = 3.14;
    return 2 * PI * radius;
}

console.log(perimeterOfACircle1(10));

// * Method 2
let perimeterOfACircle2 = function(radius) {
    const PI = 3.14;
    return 2 * PI * radius;
}

console.log(perimeterOfACircle2(10));

// * Method 3
let perimeterOfACircle3 = (radius) => {
    const PI = 3.14;
    return 2 * PI * radius;
}

console.log(perimeterOfACircle3(10));

// * Method 4
let perimeterOfACircle4 = radius => 2 * 3.14 * radius;

console.log(perimeterOfACircle4(10));

// * Method 5
let perimeterOfARectangle = (length, breadth) => 2 * (length + breadth);

console.log(perimeterOfARectangle(10, 20));