// https://gist.github.com/rahulmalhotra/2a5fdc8d375c5af46e1b953cb18d77bf

//  * Spread Operator in JavaScript ES6

function eats(fruit1, fruit2, fruit3) {
    console.log('Baby eats :- ', fruit1 + ', ' + fruit2 + ' and ' + fruit3);
}

let fruits = ['apple', 'mango', 'banana'];

// eats(fruits[0], fruits[1], fruits[2]);
eats(...fruits);

// * Rest Parameters
function car(name, ...features) {
    console.log('Features of Car ' + name + ' are:- ');
    features.forEach(feature => {
        console.log(feature);
    });
}

car('Audi', 'Great Speed', 'Good Color', 'Comfort', 'Good Looks');

let features = ['Great Speed', 'Good Color', 'Comfort', 'Good Looks'];
let moreFeatures = ['Great Mileage', 'Amazing Design'];

// Combine two array
// method 1
features.push(...moreFeatures);
console.log(features);

// method 2
let features = ['Great Speed', 'Good Color', 'Comfort', 'Good Looks'];
let moreFeatures = ['Great Mileage', 'Amazing Design', ...features];

console.log(moreFeatures);