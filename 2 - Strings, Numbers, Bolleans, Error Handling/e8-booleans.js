// javascript içerisinde bulunmayan herhangi bir şey false olarak isimlendiriyor.
// undefined, null, NaN ve 0 gibi değerler her zaman 'false' olarak tanımlanır.

let bool1 = true;
let bool2 = false;

console.log("True:", bool1);
console.log("False:", bool2);

let bool3 = Boolean(undefined); // false olarak çıkıcaktır.
console.log("Value of bool3:", bool3);

let bool4 = Boolean(null); // false olarak çıkıcaktır.
console.log("Value of bool4:", bool4);

let bool5 = Boolean(NaN); // false olarak çıkıcaktır.
console.log("Value of bool5:", bool5);

let bool6 = Boolean(0); // false olarak çıkıcaktır.
console.log("Value of bool6:", bool6);

let bool7 = Boolean(-0); // false olarak çıkıcak.
console.log("Value of bool7:", bool7);

let bool8 = Boolean(1); // true olarak çıkıcak.
console.log("Value of bool8:", bool8);

let bool9 = Boolean(-1); // true olarak çıkıcak.
console.log("Value of bool9:", bool9);

let bool10 = Boolean(""); // içi boş string false olarak çıkıcak.
console.log("Value of bool10:", bool10);

let bool11 = Boolean("17"); // içi dolu string true olarak çıkıcak.
console.log("Value of bool11:", bool11);

// Boolean as objects

let bool12 = new Boolean(12); // new class oluşturup gösterme, obje olarak oluşturma. // true olarak çıkıcaktır.
console.log("Value of bool12:", bool12);

let bool13 = new Boolean(-0); // false olarak çıkıcaktır.
console.log("Value of bool13:", bool13);

let bool14 = new Boolean(0); // false olarak çıkıcaktır.
console.log("Value of bool14:", bool14);

let bool15 = new Boolean(1); // true olarak çıkıcaktır.
console.log("Value of bool15:", bool15);

let bool16 = new Boolean(-1); // true olarak çıkıcaktır.
console.log("Value of bool16:", bool16);

let bool17 = new Boolean("Test"); // true olarak çıkıcaktır.
console.log("Value of bool17:", bool17);

let bool18 = new Boolean(""); // false olarak çıkıcaktır.
console.log("Value of bool18:", bool18);

let bool19 = new Boolean(undefined); // false olarak çıkıcaktır.
console.log("Value of bool19:", bool19);

let bool20 = new Boolean(null); // false olarak çıkıcaktır.
console.log("Value of bool20:", bool20);

let bool21 = new Boolean(NaN); // false olarak çıkıcaktır.
console.log("Value of bool21:", bool21);

