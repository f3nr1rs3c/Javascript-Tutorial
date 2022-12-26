function Şahıs(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName + " " + this.lastName; // buradan fonksiyonun birbiri ile eşitliğini gösteriyoruz.
    }
}

const şahıs1 = new Şahıs("John", "Doe", 20); // Tanımlıyoruz.
const şahıs2 = new Şahıs("Michele", "Davis", 32); // Tanımlıyoruz.

console.log(şahıs1.fullName(), şahıs1.age); // Konsola bastırıyoruz.
console.log(şahıs2.fullName(), şahıs2.age); // Konsola bastırıyoruz.