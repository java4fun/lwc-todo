// https://gist.github.com/rahulmalhotra/0b5b83bcc3c6d2f0e3c8ce816cb398a9



// * Without using spread operator

// let fruits = ['Apple', 'Mango', 'Banana'];

// let fruitsCopy = fruits;

// console.log(fruits);
// console.log(fruitsCopy);

// console.log('--------------------------------');

// fruits[0] = 'Pear';
// console.log(fruits);
// console.log(fruitsCopy);




// * Using spread operator

// let fruits = ['Apple', 'Mango', 'Banana'];

// let fruitsCopy = [...fruits];
// let fruitsCopy =  JSON.parse(JSON.stringify(fruits));

// console.log(fruits);
// console.log(fruitsCopy);

// console.log('--------------------------------');

// fruits[0] = 'Pear';
// console.log(fruits);
// console.log(fruitsCopy);




// * Concatenating two arrays

// let fruits1 = ['Apple', 'Mango'];
// let fruits2 = ['Pear', ...fruits1, 'Banana'];
// console.log(fruits2);




// * Rest Parameter

// function display(a, b, ...abc) {
//     console.log(a);
//     console.log(b);
//     console.log(abc);
// }

// display(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




// * String to Array

// let countries = 'India USA Japan Australia Bangladesh';
// let countriesArray = countries.split(' ');
// console.log(countriesArray);




// * Array to String

// let countriesWithCommas = countriesArray.join(',');
// console.log(countriesWithCommas);
// console.log(typeof countriesWithCommas);

// let fruitsString = fruits.join('-');
// console.log(fruitsString);

