import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
//@target: ES6
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    _create_class(C, [
        {
            key: Symbol.hasInstance,
            get: function get() {
                return "";
            }
        },
        {
            key: Symbol.hasInstance,
            set: // Should take a string
            function set(x) {}
        }
    ]);
    return C;
}();
(new C)[Symbol.hasInstance] = 0;
(new C)[Symbol.hasInstance] = "";
