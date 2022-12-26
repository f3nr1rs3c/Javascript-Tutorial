const personell = {
    firstName: "John",
    lastName: "Doe",
    fullNames: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Hilsen"
}
const fullNameOriginal = personell.fullNames();

console.log("Full Name Original: ", fullNameOriginal)

const fullNames = personell.fullNames.bind(member);
console.log("Member binded fullname: ", fullNames())

const fullNameOriginalWithBind = personell.fullNames.bind(personell);
console.log("Personell binded fullname:", fullNameOriginalWithBind());