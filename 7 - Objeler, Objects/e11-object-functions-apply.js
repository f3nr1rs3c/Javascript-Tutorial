const call3 = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const user5 = {
    firstName: "John",
    lastName: "Doe"
}

const user4 = {
    firstName: "Micheal",
    lastName: "Davis"
}

const fullNameZero = call.fullName()
console.log(fullName0);
// Aralarındaki farka bakacağız.

const fullName3 = call.fullName.apply(user);
console.log(fullName1);

const fullName4 = call.fullName.apply(user2);
console.log(fullName2);


const call4 = {
     fullName3: function(city, country){
         return this.firstName + " " + this.lastName + ", " +city+ "/" +country
     }
 }

const user6 = {
    firstName: "Jhony",
    lastName: "Vice"
}

const ulke = {
    fullName5: function(city, country){
        return this.firstName + " " + this.lastName + ", " +city+ "/" +country
    }
}

const fullNameWithPlace2 = call3.fullName.apply(ulke, ["Istanbul", "Türkiye"])
console.log(fullNameWithPlace2);
