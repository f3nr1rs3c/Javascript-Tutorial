let degisken = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    nullable: null,
    undefinable: undefined,
    BigInt: BigInt(1761690617313248710501),
    fullName: function(){
        return this.firstName + " " + this.lastName
    },
    ageLogger: ()=>{ // Arrow Function olarak yaptık ve cevap 'undefined' diye çıkacaktır !
        console.log("Age:", this.age)
        return this.age;
        console.log("AGE OF JOHN DOE:", 50) // böyle yaparakta direk tanımlayabiliriz.
    }
}

const fullName = degisken.fullName();
console.log("Full Name:", fullName);

degisken.ageLogger();