// https://gist.github.com/rahulmalhotra/e683c7ef5bc616ad77e023aa56ed9768
// https://youtu.be/_dCJrZ-pY-U?list=PLuL63vr-9xHwGyGXBZUlf_0xTFqA8fCKw
'use strict'

// * Asynchronous callouts in JS and Pyramid of Doom (before ES 6)

// * API Callout -> Request to the external server

function apiCallout(message, successCallback, errorCallback) {
    setTimeout(function() {
        // * Assume my api callout is successful
        successCallback(message);
    }, 1000);
};

// * Pyramid of Doom (chaining of async callouts)
apiCallout('first', function(response) {
    console.log(response + ' callout performed');
    apiCallout('second', function(response) {
        console.log(response + ' callout performed');
        apiCallout('third', function(response) {
            console.log(response + ' callout performed');
            apiCallout('fourth', function(response) {
                console.log(response + ' callout performed');
                apiCallout('fifth', function(response) {
                    console.log(response + ' callout performed');
                }, function(error) {
                    console.log(error);
                });
            }, function(error) {
                console.log(error);
            });
        }, function(error) {
            console.log(error);
        });
    }, function(error) {
        console.log(error);
    });
}, function(error) {
    console.log(error);
});

// * What will happpen in chaining of asynchronous callouts

// * JavaScript Promises - Simplify Asynchronous callouts or Pyramid of Doom using promises

