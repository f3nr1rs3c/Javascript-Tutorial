{
    let a = 2;
    // x can be used here
}
// x cannot be used here

{
    var bs = 2;
    // b can be used here
}
// b can be used here

{
    const c = 3;
    // can be used here
}
// c cant be used here

// Local Scope
//code here can not use firstName
function testFn1(){
    let firstName = "StartUp";
    // code here can use firstName
}

//code here can not use firstName

//Function Scope
//code here can not use firstName
function testFn2(){
    let firstName = "StartUp"; //function scoped
    let secondName = "Academy"; //function scoped
    //code here can use firstName
    //code here can use secondName
}
// code here can not use firstName
// code here can not use secondName

// GLOBAL SCOPE

let firstName = "StartUp";
// code here can use firstName

function testFn3(){
    //code here can use firstName
}
/**************************************************/