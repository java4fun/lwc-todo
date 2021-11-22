// * Difference between let and var
// * let is the new var
// Src: https://gist.github.com/rahulmalhotra/045e790dea52f23debb3be28bcff7ea1
// **** let supports block and function scope
// **** var supports function scope, not block scope

// * Code:-
var person = 'Rahul';

function trailblazer() {
    var person = 'Trailblazer Rahul';
    console.log(person);
}

console.log(person);
trailblazer();
console.log(person);

/*
  Output with var:-
  Rahul
  Trailblazer Rahul
  Rahul
*/

/*
  Output when var is replaced with let:-
  Rahul
  Trailblazer Rahul
  Rahul
*/

// * Learnings:-
// * var keyword supports function scope
// * let keyword also supports function scope

// * Code:-
var person = 'Rahul';

console.log(person);

if(1===1) {
    var person = 'Trailblazer Rahul';
    console.log(person);
}

console.log(person);

/*
  Output with var:-
  Rahul
  Trailblazer Rahul
  Trailblazer Rahul
*/

/*
  Output when var is replaced with let:-
  Rahul
  Trailblazer Rahul
  Rahul
*/

// * Learnings:-
// * var keyword doesn't support block scope
// * let keyword supports block scope