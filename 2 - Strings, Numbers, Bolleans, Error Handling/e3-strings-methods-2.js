
let str1 = "Test, StartUp Academy";
console.log(str1);

let newStr1 = str1.replace("Test", "Hi");
console.log(newStr1);

// REPLACE REGEX

let str2 = "Test, StartUp Academy, Test Successful"
console.log(str2);

let newStr2 = str2.replace(/TEST/ig, "Hi");
console.log(newStr2);

// TOUPPERCASE - YAZILARI BÜYÜTME

let str3 = "Hello World";
console.log("Normal Text:", str3);

let uppercase = str3.toUpperCase();
console.log("Uppercased Text", uppercase);

// CONCAT - YAZILARI BİRLEŞTİRME

let epsode1 = "Hello";
console.log("First Date:", epsode1);

let epsode2 = "World";
console.log("Last part:", epsode2);

let concatedStr = epsode1.concat(" ", epsode2);
console.log("Concated Str:", concatedStr);

let concatedStrWithOperator = epsode1 + " " + epsode2;
console.log("Concated Str With Operator:", concatedStrWithOperator);

// TRIM - STRİNG İÇERİSİNDE BULUNAN BAŞTAKİ VE SONDAKİ BOŞLUKLARI SİLİYOR - ORTAKİ BOŞLUĞU SİLMEZ.

let epsode3 = "  Hello,        World    ";
console.log("Str value:", epsode3);

let trimmed = epsode3.trim();
console.log("Trimmed Str value:", trimmed);

// PADS - BİR TEXTİN BAŞIN VEYA SONUNA BOŞLUK EKLER VEYA KARAKTER
// padStart

let epsode4 = "5";

console.log("Normal String:", epsode4);

let padded1 = epsode4.padStart(8, "x"); // X yerine herhangi bir şey de girersek çalışır, 8 yerine herhangi bir rakam yazarsak o kadar uzar

console.log("Padded String:", padded1);

//

let epsode5 = "5";

console.log("Normal String:", epsode5);

let padded2 = epsode5.padEnd(25, "x"); // 25 tane X EKLENDİ

console.log("Padded String:", padded2);

// FİNİSH