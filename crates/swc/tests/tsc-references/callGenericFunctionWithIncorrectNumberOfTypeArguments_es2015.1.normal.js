// type parameter lists must exactly match type argument lists
// all of these invocations are errors
function f(x, y) {
    return null;
}
var r1 = f(1, '');
var r1b = f(1, '');
var f2 = (x, y)=>{
    return null;
};
var r2 = f2(1, '');
var r2b = f2(1, '');
var f3;
var r3 = f3(1, '');
var r3b = f3(1, '');
class C {
    f(x, y) {
        return null;
    }
}
var r4 = new C().f(1, '');
var r4b = new C().f(1, '');
var i;
var r5 = i.f(1, '');
var r5b = i.f(1, '');
class C2 {
    f(x, y) {
        return null;
    }
}
var r6 = new C2().f(1, '');
var r6b = new C2().f(1, '');
var i2;
var r7 = i2.f(1, '');
var r7b = i2.f(1, '');
