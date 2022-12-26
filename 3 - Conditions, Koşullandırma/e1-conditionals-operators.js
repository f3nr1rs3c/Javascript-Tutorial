/* Tanımlamalarda sonuçlar yani "12" aynıysa hepsiyle eşittir. */

// const nedir : Değer olarak sabit olarak tanımlanan ve kod blog boyunca değişmeyen ve değiştirilemeyen değişkenler olarak tanımlanır.
// === nedir : Üç eşittir kullandığınızda iki değerin hem tipini hem de değerini karşılaştırırken iki eşittir ise değerlerin tiplerini eşitleyerek sadece değer karşılaştırması yapar.
// == eşitlemedir , eşit ise true değilse false çıkıcaktır.

/* is equal */ // => Eşittir.

const param1 = 12;
const param2 = 12;
const param3 = "12"; 
const param7 = 13;

console.log("Same type", param1 == param2); // Cevap 'True' çıkması gerekmektedir.
console.log("Different Type:", param1 == param3);
console.log("Different Value:", param1 == param7);

/* is equal with type */ // => tip ile eşittir.

// verilen sayı veya string aynı olduğu sürece eşitlenir fakat farklı olursa eşitlenmez.

const param4 = 15;
const param5 = 15;
const param6 = "15";
const param8 = 16;

console.log("Same type:", param4 === param5);
console.log("Different type:", param4 === param6);
console.log("Different Value:", param4 == param8);

/* not equal with */ // => Eşit değil

const param9 = 12;
const param10 = 12;
const param11 = "12"; 
const param12 = 13;

console.log("Same type", param9 != param10); // Cevap 'False' çıkması gerekmektedir.
console.log("Different Type:", param9 != param11); // Cevap 'False' çıkması gerekmektedir.
console.log("Different Value:", param9 != param12); // Cevap 'True' çıkması gerekmektedir.

/* not equal with type */ // => tiple eşit değil.

const param13 = 15;
const param14 = 15;
const param15 = "15";
const param16 = 16;

console.log("Same type:", param13 !== param14); // false dicektir.
console.log("Different type:", param13 !== param15); // true dicektir.
console.log("Different Value:", param13 !== param16); // true dicektir.

// logical Operators => "> <" küçüktür büyüktür işaretidir. => Sayıların büyük küçük uyumu tamamlar.

const param17 = 15;
const param18 = 16;
const param19 = 17;

console.log(param17 < param18); // true çıkacaktır.
console.log(param18 > param17); // true çıkacaktır.
console.log(param17 <= param18); // true çıkacaktır.
console.log(param18 >= param17); // true çıkacaktır.

// AND OPERATÖRÜ => BÜYÜK KÜÇÜK DÜZENİNİ AYARLIYOR
// OR OPERATÖRÜ => EŞİTLEME TRUE VE FALSE VARSA TRUE 
// NOT OPERATOR => OPERATÖR YOK
const boolean = !(param17 < param18) && !(param18 > param17) // şuan true çıkıcaktır. // false yapmak istiyorsak parantezlerin başına ! koyarak false yapabiliriz.
const boolean2 = !(param17 < param18) || !(param18 > param17) // ne kadar ! olsada or operatorü true olarak yazdırır.
const boolean3 = (param17 < param18);

console.log("LOGICAL OPERATOR AND:", boolean);
console.log("LOGICAL OPERATOR OR:", boolean2); //OR OPERATORÜ birinden biri true olarak belirtir ise onu true olarak yazdırıyor.
console.log("NOT OPERATOR", boolean3);

//Tenary IF

// ? yas 18 ise true olacak diye belirtmekte 

const age = 21;

let votable = (age < 18)
    ? false
    : age > 20
        ? "Adult" // yetişkin
        : true;

console.log("Oy kullanılabilir mi:", votable);