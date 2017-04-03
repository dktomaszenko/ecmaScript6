var foo = [1, 2, 3];
var obj = {
    foo // oznacza 'foo: foo'
};
console.log(obj.foo); // [1,2,3]

//----------------------------------------
var f1 = () => 12;
var f2 = x => x * 2;
var f3 = (x, y) => {
    var z = x * 2 + y;
    y++;
    x *= 3;
    return (x + y + z) / 2;
};

//--------------------------------------------
var a = [1, 2, 3, 4, 5];
a = a.map(v => v * 2);
console.log(a);

//--------------------------------
var a = ["a", "b", "c", "d", "e"];
for (var idx in a) {
    console.log(idx);
}
// 0 1 2 3 4
for (var val of a) {
    console.log(val);
}

