/* NUMBER METHODLARI */

// toString(); // Metodu sayıyı metne dönüştürme
// toExponential(); // Metodu verilen sayı kadar aynı sayıyı ekliyor.
// toFixed(); Metodu bir sayıyı bir dizeye dönüştürür.
// toLocaleString(); Metodu dil biçimini kullanarak bir sayıyı dize olarak döndürür.
// toPrecision(); Metodu bir sayıyı belirli bir uzunlukta biçimlendirir.
// valueOf(); Metodu bir sayının object üzerinden değerini okuma.
// parseINT => Herhangi bir sayıdan asıl sayı İNT kısmını alan bir methodttur. Yani küsüratlı sayının başını mesela "654".40613671 yerini alıyor.
// parseFloat => Bir sayıdan ondalıklı kısımları yani küsüratları alıyor.


/* EXAMPLES - Örnekler */

// toString => Metodu sayıyı metne dönüştürme.

let sayı = 129;
let yazı = sayı.toString();

console.log("Value:", sayı);
console.log("String Value:", yazı);


// toExponential => Metodu verilen sayı kadar aynı sayıyı ekliyor.
let numb1 = 10;
console.log("Value:", numb1);

let numb2 = numb1.toExponential(2); 
console.log("Exponential of fragment 2:", numb2);

let numb3 = numb1.toExponential(3);
console.log("Exponential of fragment 3:", numb3);

let numb4 = numb1.toExponential(4);
console.log("Exponential of fragment 4:", numb4);

let numb5 = numb1.toExponential(5);
console.log("Expontial of fragment 5:", numb5);

// toFixed => Bir sayıyı bir dizeye dönüştürür.

let numb6 = 96.273283723;
console.log("Value:", numb6);

let numb7 = numb6.toFixed(0);
console.log("Fixed 0 value:", numb7);

let numb8 = 96.273283723;
console.log("Value:", numb8);

let numb9 = numb6.toFixed(3);
console.log("Fixed 3 value:", numb7);

// toPrecision => Belli sayı dizinleri belli bir sayıya fixliyor. Bu sınırı kendimiz belirliyoruz.

let numb10 = 96.5; //  Daha büyük bir sayı koyarsak e koyarak sayıyı büyütür.
console.log("Value:", numb10);

let numb11 = numb10.toPrecision();
console.log("Precision auto value:", numb11);

let numb12 = numb10.toPrecision(4);
console.log("Precision auto value:", numb12);

// valueOf() => Bir sayının object üzerinden değerini okuma.

let numb13 = new Number(96000.5); //  
console.log("Value:", numb13);

let numb14 = numb13.valueOf();
console.log("Value of number object:", numb14);

// parseINT => Herhangi bir sayıdan asıl sayı İNT kısmını alan bir methodttur.

let numb15 = 645.296151; // yani sadece 645 alıp küsüratını almıyor.
console.log("Value:", numb15);

let numb16 = parseInt(numb15);
console.log("Parsed integer value:", numb16);

let string = "645.296151"; // yani sadece 645 alıp küsüratını almıyor.
console.log("Value:", string);

let string2 = parseInt(string);
console.log("Parsed integer value:", string2);

// parseFloat => Bir sayıdan ondalıklı kısımları yani küsüratları alıyor.

let numb17 = "-15.9628161";
console.log("Value:", numb17);

let numb18 = parseFloat(numb17);
console.log("Parsed float value:", numb18);

