let person = {
    names: "John",
    lastName: "Doe",
    age2: 50,
    nullable: null,
    undefinable: undefined,
    BigInt: BigInt(91689068961860)

}

// Object Properties

const names = person.names;
console.log(names);

// List Notation

const lastName = person["lastName"];
console.log(names);

const key = "age2";

const age2 = person[key];

console.log(age2);
console.log("Name", person.names);
console.log("Surname", person["lastName"]);
console.log("Age:", person[key]);