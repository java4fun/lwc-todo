// https://gist.github.com/rahulmalhotra/ac921c5a3a20ceed61a050b2e4650c54
// https://youtu.be/5ZQ7B77x06I?list=PLuL63vr-9xHwGyGXBZUlf_0xTFqA8fCKw

'use strict'

// * ES6 Promises

// * API Callout -> Request to the external server

// function apiCallout(message, successCallback, errorCallback) {
//     setTimeout(function() {
//         // * Assume my api callout is successful
//         successCallback(message);
//     }, 1000);
// };

// * Promise - An object which specifies the success or failure callback of an asynchronous operation

function apiCallout(message) {
    return new Promise(function(resolve, reject) {

        // * API Callout is successful
        setTimeout(function() {
            // if(message==='third') {
            //     reject('error in third callout');
            // }
            resolve(message);
        }, 1000);

        // * Successful
        // resolve();
        // * Error
        // reject();
    });
}

apiCallout('first')
.then(function(response) {
    console.log(response + ' callout performed');
    return apiCallout('second');
})
.then(function(response) {
    console.log(response + ' callout performed');
    return apiCallout('third');
})
.then(function(response) {
    console.log(response + ' callout performed');
    return apiCallout('fourth');
})
.then(function(response) {
    console.log(response + ' callout performed');
    return apiCallout('fifth');
})
// FAT arrow operator
.then(response => console.log(response + ' callout performed'))
.catch(function(error) {
    console.log('inside catch');
    console.log(error);
});

// * Simplify these promises - async await
async function multipleAPICallouts() {
    try {
        const result1 = await apiCallout('first');
        console.log(result1 + ' api callout performed');
        const result2 = await apiCallout('second');
        console.log(result2 + ' api callout performed');
        const result3 = await apiCallout('third');
        console.log(result3 + ' api callout performed');
        const result4 = await apiCallout('fourth');
        console.log(result4 + ' api callout performed');
        const result5 = await apiCallout('fifth');
        console.log(result5 + ' api callout performed');
    } catch(error) {
        console.log(error);
    }
}

multipleAPICallouts();

