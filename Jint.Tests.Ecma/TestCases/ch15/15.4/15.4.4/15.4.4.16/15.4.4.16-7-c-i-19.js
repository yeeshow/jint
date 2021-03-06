/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-7-c-i-19.js
 * @description Array.prototype.every - element to be retrieved is own accessor property without a get function that overrides an inherited accessor property on an Array-like object
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return typeof val === "undefined";
        }

        var obj = { length: 2 };
        Object.defineProperty(obj, "1", {
            set: function () { },
            configurable: true
        });
        try {
            Object.prototype[1] = 10;
            return Array.prototype.every.call(obj, callbackfn) && accessed;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
