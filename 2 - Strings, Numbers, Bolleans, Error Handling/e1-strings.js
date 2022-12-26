let text1 = "John Doe";
let text2 = 'John Doe';

//console.log(text1,text2);

// QUOTES

let text3 = "It's John's Car called \"Memo\""; // => Ters slash ile tırnağı tanımlayabiliriz.
let text4 = 'It\'s John\'s Car called "Memo"'; 
//console.log(text3, text4);

// Length

let text5 = "ABCDEFGHIJKLMNOPRSTUVYZ";

let length = text5.length;

//console.log(length);

// Strings as Objects

let text6 = "John"; // String oluşturduk
let text7 = new String("John"); // Yeni string olarak tanımladık

console.log("Normal String:", text6); // Normal halini yazdırdık
console.log("String as Object", text7); // Yeni stringi yazdırdık.
console.log("Index character:", text7[0]); // Stringde ki kaçıncı harf olduğu ile ilgili sayı verdik yani => 0
console.log("Normal Index Character:", text6[1]); // Normal stringde ki objeyi aldık


// FİNİSH