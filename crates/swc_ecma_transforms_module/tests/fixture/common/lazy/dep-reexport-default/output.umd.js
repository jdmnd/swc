(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("foo"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "foo"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.input = {}, global.foo);
})(this, function(exports, _foo) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "default", {
        get: ()=>_foo.default,
        enumerable: true
    });
    _foo = _interopRequireDefault(_foo);
});
