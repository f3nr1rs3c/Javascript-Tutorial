// DEFAULT FUNCTION DEFINITION

function isTrue(param){
    const bools1 = param === null || param === undefined || param === "";
    return !bools1;
}

/* console.log("null:", isTrue(null));
console.log("undefined:", isTrue(undefined));
console.log("Empty String:", isTrue(""));
console.log("Test:", isTrue("Test")); */


// INLINE FUNCTION DEFINITION

const isTrue2 = function(param){ // yukarıda ki fonksiyonun daha kısa halini denemekteyiz.
    const bools2 = param === null || param === undefined || param === ""; 
    return !bools2;
}

console.log("null:", isTrue2(null));
console.log("undefined:", isTrue2(undefined));
console.log("Empty String:", isTrue2(""));
console.log("Test:", isTrue2("Test"));

console.log("--------------------------------------");

// ARROW FUNCTION DEFINITION

const isTrue3 = (param) => {
    const bools3 = param === null || param === undefined || param === "";
    return !bools3;
}

console.log("null:", isTrue3(null));
console.log("undefined:", isTrue3(undefined));
console.log("Empty String:", isTrue3(""));
console.log("Test:", isTrue3("Test"));

// SELF-INVOKING FUNCTION

const bools4 = (function (param) {
    const bools4 = param === null || param === undefined || param === ""; 
    return !bools4;
})(undefined) // null veya undefined yaparsak false olucak

console.log(undefined, bools4); // true çıkacaktır.