let obje = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    nullable: null,
    undefinable: undefined,
    BigInt: BigInt(91689068961860)
};

// Object.keys

const keysArr = Object.keys(obje);
console.log(keysArr);

//Object.values

const valuesArr = Object.values(obje);
console.log(valuesArr);