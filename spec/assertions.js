'use strict'

var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
        } else {
            console.log("yay")
        }
    },

    isFalse: function(assertionToCheck) {
        if (assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is truthy");
        } else {
            console.log("yay")
        }
    },

    returns: function(methodCall, expectedResult) {
        return methodCall === expectedResult
    }
};
