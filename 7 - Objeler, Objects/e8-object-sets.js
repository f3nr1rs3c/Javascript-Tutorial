const letters = new Set(["a", "b", "c"]);

//console.log(letters1);

letters.add("d"); // Bu işlem metod oluşturma
letters.add("e");
letters.add("f");
letters.add("d"); // Bunu tanımlamıyor çünkü tanımlamıştı yukarıda.

//console.log(letters1);

// Values
const values = letters.values();
//console.log(valuesArr);

// Keys

const keysArr2 = letters.keys();
//console.log(keysArr2);

// Type & Instanceof

console.log(typeof letters);
// İkiside aynı sonuç yani => true olarak çıkacaktır.
console.log(letters instanceof Set); 
console.log(letters instanceof Object);
// Fakat bu işlemi yaptığımızda 'false' çıkacaktır.
console.log(letters instanceof Number);