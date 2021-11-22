// https://gist.github.com/rahulmalhotra/ae0da7989edf431a341c4da80a30cc23

'use strict'

// * Modules in ES6 - Libraries which consist of re-usable functions/properties

// addition is alias for add
import { add as addition, mul, div } from 'modules/calculator.js';

import { pi, projectName } from 'modules/constant.js';

// can't import the export default function, use below method instead
import myFunction from 'modules/calculator.js';

console.log(myFunction(3,2));  // call the default function

console.log('------------------------');

console.log(addition(3, 2));
console.log(myFunction(3, 2));
console.log(mul(3, 2));
console.log(div(3, 2));

console.log('-------------------');

console.log(pi);
console.log(projectName);

console.log('-------------------');

// pi = 2.80;    // defined as 'let' becomes 'const'
// console.log(pi);