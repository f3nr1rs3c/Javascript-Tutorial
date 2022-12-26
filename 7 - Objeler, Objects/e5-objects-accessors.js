// GETTER
/*let accessors = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    get ageGetter(){
        return this.age;
    }
}

const age = accessors.ageGetter;
console.log("Age:", age);*/

// SETTER 
let accessors = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    get ageGetter(){
        return this.age;
    },
    set ageSetter(age){
        this.age = age
    }
}

accessors.ageSetter = 50;

console.log("Age:", accessors.ageGetter);