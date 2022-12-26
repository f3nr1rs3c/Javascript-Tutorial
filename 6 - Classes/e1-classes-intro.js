// Dipnot : Classlar büyük harfle başlar

/* class Person {
    constructor(){

    }
}

const person1 = new Person();
const person2 = new Person();
*/

//console.log(person1, person2);

// DEFINITION OF CLASSES WITH PARAMETRES

class Personel{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

const personel = new Personel("Joe", "Doe");
const person2 = new Personel("James", "Rachall");

console.log(personel, person2);
/**************************************************/
class MyName {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    logFirstName(){
        console.log("First name:", this.name); // böyle yaparak class içerisindeki isim ve soy ismi logluyoruz tanımlıyoruz.
    }

    logLastName() {
        console.log("Last name:", this.surname);
    }

    logFullName(){
        console.log("Full Name:", this.name, this.surname);
    }

}

const person3 = new MyName("Michael Jackson");
const person4 = new MyName("John Doe");

person3.logFirstName();
person3.logLastName();
person3.logFullName();