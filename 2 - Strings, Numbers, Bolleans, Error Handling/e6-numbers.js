let num1 = 5;
let num2 = NaN;

console.log("Value:", num1);
console.log("Type of num1:", typeof num1);

console.log("Value:", num2);
console.log("Type of num2:", typeof num2);

let num3 = Infinity; // Sonsuzluk kodu yani sonsuza kadar sayı 
console.log("Value:", num3);
console.log("Type of num3:", typeof num3);

let num4 = -Infinity; //
console.log("Value:", num4);
console.log("Type of num4:", typeof num4);

// Number as Object

let num5 = new Number(12); // new komudu class oluşturma

console.log("Value:", num5);
console.log("Type of num5:", typeof num5);


let num6 = new Number(-10); 

console.log("Value:", num6);
console.log("Type of num6:", typeof num6);

let num7 = new Number(Infinity);

console.log("Value:", num7);
console.log("Type of num7:", typeof num7);

let num8 = new Number(-Infinity);

console.log("Value:", num8);
console.log("Type of num8:", typeof num8);

let num9 = new Number(NaN);

console.log("Value:", num9);
console.log("Type of num9:", typeof num9);

/* ----------------------------------------- */

// HESAPLAMA İŞLEMİ
let num10 = new Number(2 * 5); // Bu şekilde parantez içerisinde işlem yapılabilir.

console.log("Value:", num10);
console.log("Type of num10:", num10);

// STRİNG İŞLEMİ
let num11 = new Number("Metin"); // Çıktı NaN olarak çıkıcaktır çünkü Number diye oluşturduk sayısal değer sadece

console.log("Value:", num11);
console.log("Type of num11:", num11);

// INFİNİTY İŞLEMİ
let num12 = new Number(2 / 0); // Infinity elde edicez konsol üzerinde

console.log("Value:", num12);
console.log("Type of num12:", num12);