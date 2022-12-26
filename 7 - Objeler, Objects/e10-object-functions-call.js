const call = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const user = {
    firstName: "John",
    lastName: "Doe"
}

const user2 = {
    firstName: "Micheal",
    lastName: "Davis"
}

// CALL => BİR OBJE ÜZERİNDEKİ METHODU DİĞER OBJEDE KULLANMAMIZ SAĞLAYAN KOD

const fullName0 = call.fullName()

console.log(fullName0);
// Aralarındaki farka bakacağız.

const fullName1 = call.fullName.call(user);

console.log(fullName1);

const fullName2 = call.fullName.call(user2);
console.log(fullName2);


const call2 = {
    fullName3: function(city, country){
        return this.firstName + " " + this.lastName + ", " +city+ "/" +country
    }
}

const user3 = {
    firstName: "Jhony",
    lastName: "Vice"
}

const fullNameWithPlace = call2.fullName3.call(user3, "Istanbul", "Turkey")
console.log(fullNameWithPlace);


console.log("---------------------------------------------");