/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-285.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is generic own accessor property of 'O', test TypeError is thrown when updating the [[Get]] attribute value of 'name' which is defined as non-configurable (15.4.5.1 step 5)
 */


function testcase() {

        var arrObj = [];

        function getFunc() {
            return 12;
        }
        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }
        Object.defineProperty(arrObj, "property", {
            get: getFunc,
            set: setFunc
        });
        try {
            Object.defineProperty(arrObj, "property", {
                get: function () {
                    return 36;
                }
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, "property", getFunc, setFunc, "setVerifyHelpProp", false, false);
        }
    }
runTestCase(testcase);
