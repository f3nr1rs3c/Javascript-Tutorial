let mesaj = `Hi,
StartUp
Academy`

console.log("Multi Line Text:", mesaj); // Uzun yazılar için kullanılır.


let mesaj2 = "Hi,\nStartUp\nAcademy";
console.log(mesaj2);

let name = "StartUP", surname = "Academy";
let mesaj3 = `Hello, ${name}`; // buraya ilk tanımlanan StartUP yani => name tanımlanıyor sonra dolar işaretinin olduğu yere onu bastırıyoruz ki tanımlıyor.
console.log("Interpolated BackTicks:", mesaj3);

let price = 10;
let units = 50;

let total = `Total: ${units * price}`; // HESAPLAMA YAPMA => Süslü parantex içerisinde işlem yapılır.

