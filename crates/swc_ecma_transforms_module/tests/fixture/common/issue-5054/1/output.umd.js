(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("foo"), require("bar"), require("baz"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "foo",
        "bar",
        "baz"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.input = {}, global.foo, global.bar, global.baz);
})(this, function(exports, _foo, _bar, _baz) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            get: all[name],
            enumerable: true
        });
    }
    _export(exports, {
        default: ()=>_default,
        y: ()=>y
    });
    _foo = _interopRequireDefault(_foo);
    _baz = _interopRequireWildcard(_baz);
    var _default = {
        foo: _foo.default,
        baz: _baz,
        baz: _baz
    };
    const x = {
        foo: _foo.default,
        bar: _bar.bar,
        baz: _baz
    };
    const y = {
        foo: _foo.default,
        bar: _bar.bar,
        baz: _baz
    };
});
