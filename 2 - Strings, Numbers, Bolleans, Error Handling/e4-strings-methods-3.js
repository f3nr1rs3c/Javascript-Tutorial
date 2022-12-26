// INDEX OF - STRİNGDE ARAMA YAPMA - BAŞTAN ARAMAYA BAŞLIYOR

let yazi = "Search in the string"; // Burda ki 'The' adlı yazıyı
console.log("Full Text:", yazi);

let index1 = yazi.indexOf("the"); // burda ki kod ile bul dedik
console.log("The Index:", index1);

let index2 = yazi.indexOf("the", 12); // burda ise bulmaya çalıştırıyoruz fakat yazı 10 karakterde ama 12 dediğimiz için -1 hatası vermektedir.
console.log("The index after 12 char:", index2);

// LASTOFINDEX - SONDAN ARAMAYA BAŞLIYOR

let yazi2 = "Search in the string";

let index3 = yazi2.lastIndexOf("in");

let index4 = yazi2.lastIndexOf("the", 12);

console.log("Full Text:", yazi2);
console.log("Last Index:", index3);
console.log("Skip 12 chars from reverse, Index:", index4);

// Search - String üzerinde arama yapıyor

let yazi3 = "Search in the string";
let found1 = yazi3.search("the");

console.log("Full Text:", yazi3);
console.log("Found Position: ", found1);


// Match - Stringleri tek bir array'e topluyor

let yazi4 = "Test string for matching Regex format";
let matched1 = yazi4.match(/for/ig); //ig küçük büyük farketmiyor arıyor, eğer sadece i olursa büyük forları aricak, ya da g olsaydı sadece küçük forları aricak

console.log("Matched arr:", matched1);

// Includes - True ya da False yani var ya da yok diyor

let yazi5 = "Hello World, welcome to universe";
let includes1 = yazi5.includes("World");

console.log("Full Text:", yazi5);
console.log("is includes: ", includes1);

// StartsWith

let yazi6 = "Hi, StartUp Academy";
let StartsWith = yazi6.startsWith("Hi"); // Eğer string 'Hi' ile başlıyor ise 'true' başlamıyor ise 'false' başlicak
let startsWith2 = yazi6.startsWith("Hi", 6);

console.log("Full Text:", yazi6);
console.log("is started with: ", StartsWith);
console.log("is started with after 6 char skipped:", startsWith2);

//ENDSWİTH

let yazi7 = "Hi, StartUp Academy 2";
let endsWith1 = yazi7.endsWith("Academy"); // Eğer string 'Hi' ile başlıyor ise 'true' başlamıyor ise 'false' başlicak
let endsWith2 = yazi7.endsWith("Academy", 6);

console.log("Full Text:", yazi7);
console.log("is ended with: ", endsWith1);
console.log("is ended with after 6 char skipped:", endsWith2);

// FİNİSH