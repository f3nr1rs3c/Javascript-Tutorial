// CREATE MAP // Map objesi meyvelerin tanelerini ok şeklinde gösteriyor tabi bunları yaparken array olarak göstermektedir.

const fruits = new Map([
    ["apples", 500], // 500 olarak belirttik başta
    ["bananas", 300],
    ["oranges", 200],
    ["blueberry", 100],
])

//console.log(fruits); // çıkan sonuçta 'size' diye bir sonuç çıkacaktır size da yukarıda kaç tane array tanımlandıysa o sayısını belirtiyor. 4 tane tanımladık 4 tane belirtiyor.

// SET & OVERIDE => üzerine yazdırmak. (Ayarlamak)

fruits.set("kiwi", 100); // Kiwi yoktu üzerine ekledik 'set' ettik yani => ayarladık.
fruits.set("apples", 800); // yukarıda 500 iken 800'e güncellemiş bulunmaktayız.

console.log(fruits);

// GET => Almak

console.log("apples:", fruits.get("apples"));
console.log("bananas:", fruits.get("bananas"));
console.log("oranges:", fruits.get("oranges"));
console.log("kiwi:", fruits.get("kiwi")); // Yukarıda ki obje tanımladıktan sonra obje içerisinden bu komutları get yardımı ile aldık bir bütünden parçalayarak sıraladık yani.

// SIZE = BOYUT yani sayısal değeri kaç tane meyve var onları sayarak bize belirtti.

console.log(fruits.size); // bize şuan dediğim işlemi yaparak kaç tane meyve olduğunu belirtti.

// DELETE, HAS, CLEAR

console.log(fruits.delete("apples")); // OBJE içerisindeki 'apples' silmiş bulunmakta ve cevap olarakta 'True' vermektedir.
console.log(fruits.has("apples")); // OBJE içerisindeki 'apples' adlı array var mı diye bakıyor. Eğer var ise => 'True' veriyor, yoksa da 'False' veriyor.
// console.log(fruits.clear); // Komutu objeyi temizliyor direk objeyi de siliyor

