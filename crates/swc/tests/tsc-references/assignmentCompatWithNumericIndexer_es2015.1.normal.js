class A {
}
var a;
var b;
a = b;
b = a; // error
var b2;
a = b2;
b2 = a; // error
var Generics;
(function(Generics) {
    class A {
    }
    class B extends A {
    }
    function foo() {
        var a;
        var b;
        a = b; // error
        b = a; // error
        var b2;
        a = b2; // error
        b2 = a; // error
        var b3;
        a = b3; // ok
        b3 = a; // ok
    }
})(Generics || (Generics = {}));
