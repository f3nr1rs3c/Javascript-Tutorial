function Kişi(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Kişi.prototype.nationality = "Türkiye"; // Uyruk tanımladık.
Kişi.prototype.fullName = function(){ // burda fullName'i fonksiyon olarak içte tanımlıyoruz.
    return this.firstName + " " + this.lastName;
}

const kişi = new Kişi("Henry", "Joe", 27);

console.log(kişi.firstName, kişi.lastName, kişi.age, kişi.nationality); // İsim, Soyisim, Yaş, Uyruk tanımlıyor.
console.log(kişi.fullName()); // Sadece ismi tanımlıyor.