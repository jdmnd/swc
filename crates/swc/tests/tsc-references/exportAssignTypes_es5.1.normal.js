// @Filename: expString.ts
var x = "test";
// @Filename: expNumber.ts
var x = 42;
// @Filename: expBoolean.ts
var x = true;
// @Filename: expArray.ts
var x = [
    1,
    2
];
// @Filename: expObject.ts
var x = {
    answer: 42,
    when: 1776
};
// @Filename: expAny.ts
var x;
// @Filename: expGeneric.ts
function x(a) {
    return a;
}
// @Filename: consumer.ts
var iString = require("./expString");
var v1 = iString;
var iNumber = require("./expNumber");
var v2 = iNumber;
var iBoolean = require("./expBoolean");
var v3 = iBoolean;
var iArray = require("./expArray");
var v4 = iArray;
var iObject = require("./expObject");
var v5 = iObject;
var iAny = require("./expAny");
var v6 = iAny;
var iGeneric = require("./expGeneric");
var v7 = iGeneric;
module.exports = x;
export { };
