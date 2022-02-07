function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
    return descriptor.value;
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "head",
        "middle",
        "tail"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _taggedTemplateLiteral([
        "test",
        "and",
        ""
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
var A = // @target: es2015
/*#__PURE__*/ function() {
    "use strict";
    function A() {
        _classCallCheck(this, A);
        this.x = 1;
    }
    _createClass(A, [
        {
            key: "test",
            value: function test() {
                var _instance;
                var _obj, ref;
                _classStaticPrivateFieldSpecGet(A, A, _fieldFunc).call(A);
                (ref = (_obj = _classStaticPrivateFieldSpecGet(A, A, _fieldFunc)).call) === null || ref === void 0 ? void 0 : ref.call(_obj, A);
                var func = _classStaticPrivateFieldSpecGet(A, A, _fieldFunc);
                func();
                new (_classStaticPrivateFieldSpecGet(A, A, _fieldFunc))();
                var arr = [
                    1,
                    2
                ];
                (_instance = _classStaticPrivateFieldSpecGet(A, A, _fieldFunc2)).call.apply(_instance, [
                    A,
                    0
                ].concat(_toConsumableArray(arr), [
                    3
                ]));
                var b = _construct(_classStaticPrivateFieldSpecGet(A, A, _fieldFunc2), [
                    0
                ].concat(_toConsumableArray(arr), [
                    3
                ]));
                var str = _classStaticPrivateFieldSpecGet(A, A, _fieldFunc2).bind(A)(_templateObject(), 1, 2);
                _classStaticPrivateFieldSpecGet(this.getClass(), A, _fieldFunc2).bind(A)(_templateObject1(), 1, 2);
            }
        },
        {
            key: "getClass",
            value: function getClass() {
                return A;
            }
        }
    ]);
    return A;
}();
var _fieldFunc = {
    writable: true,
    value: function value() {
        this.x = 10;
    }
};
var _fieldFunc2 = {
    writable: true,
    value: function value(a) {
        for(var _len = arguments.length, b = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            b[_key - 1] = arguments[_key];
        }
    }
};