// https://gist.github.com/rahulmalhotra/fcf8baeb3602c5bcdb74326a2e1ae9fb


let persons = [
    {
        name: 'Jin Yang',
        age: 20
    },
    {
        name: 'Richard',
        age: 25
    },
    {
        name: 'Monica',
        age: 26
    },
    {
        name: 'Erlich',
        age: 35
    },
    {
        name: 'Dinesh',
        age: 22
    },
    {
        name: 'Gilfoyle',
        age: 30
    }
];

// * Extra Code used in queries - Start

// JSON - JavaScript Object Notation

//  JSON.serialize() in Apex

// let personJSON = JSON.stringify(persons);

// console.log(personJSON);
// console.log(typeof personJSON);

// let persons1 = JSON.parse(personJSON);

// console.log(persons1);

// console.log(Array.isArray(persons1));

// JSON.deserialize() in Apex

// let personString = persons.join('-');

// console.log(personString);

// * Extra Code used in queries - End





// * Find function in JavaScript

// let resultantPerson;

// for(let i=0; i<persons.length; i++) {
//     if(persons[i].age < 30 && persons[i].age > 20) {
//         resultantPerson = persons[i];
//         break; 
//     }
// }

// console.log(resultantPerson);

// let result = persons.find(function(person) {
//     return person.age < 30 && person.age > 20
// });

// let result = persons.find(person => person.age < 30 && person.age > 20);

// console.log(result);





// * findIndex function in JavaScript

// let resultIndex = persons.findIndex(function(person) {
//     return person.name === 'Richard'
// });

// console.log(resultIndex);




// * Filter function in JavaScript

// let resultFilter = persons.filter(function(person) {
//     return person.age < 30 && person.age > 20
// });

// console.log(resultFilter);




// * Sort function in JavaScript

// let sortedPersons = persons.sort(function(person1, person2) {
// console.log('Comparing ' + person1.name + ' with ' + person2.name);
// * Keep first element before the second element
//     if(person1.age < person2.age) {
//         return -1;
//     }
// * Keep first element after the second element
//     else if(person1.age > person2.age) {
//         return 1;
//     } else {
//         return 0;
//     }
// });
// console.log(sortedPersons);





// * Splice function in JavaScript

// persons.splice(2, 2, { name: 'Russ Hanneman', age: 32 }, { name: 'Gavin Belson', age: 35 }, { name: 'Gavin Belson 1', age: 34 });
// console.log(persons);

// persons.splice(1, 2, { name: 'Gavin Belson', age: 35 });
// console.log(persons);





// * Map function in JavaScript

// let personNames = persons.map(function(value) {
//     return value.name;
// });
// console.log(personNames);

// let personsWithQuality = persons.map(function(value, index, persons) {
//     return {
//         ...value,
//         quality : 'Tech'
//     }
// });
// console.log(persons);
// console.log(personsWithQuality);




// * Reduce function in JavaScript
// {
//     age : 45
// }

// let totalAge = persons.reduce(function(accumulatedPerson, curentPerson) {
//     return { age : accumulatedPerson.age + curentPerson.age };
// });

// console.log(totalAge);

