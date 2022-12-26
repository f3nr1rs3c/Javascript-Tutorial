// return => geri dönüş demek

function multiply(p1,p2){
    console.log("Multication started")
    const multiplied = p1 * p2;
    return multiplied;
}

console.log("Multiplication not started");

let result = multiply(10,12);

console.log("Multiplication of 10 and 12:", result);



console.log("--------------------------------------");



function fullNameGenerator(firstName, lastName){
    return firstName + " " + lastName;
}

let text = "Hi, I'm " + fullNameGenerator("David", "Harvard");

console.log(text);

/*

let kullaniciAdi = 'Lewis';

function mesajGonder(){
    let mesaj = 'Hello' + kullaniciAdi;
    console.log(mesaj);
}

mesajGonder();

*/

/*

var nick = 'Joe';

function kullanici(){
    var message = 'Selam, ' + nick;
    console.log(message);
}

*/

/*

DiscordApplication();

let pass1 = 5;
let pass2 = 10;

function matematik(){
    let aritmatik = pass1 * pass2;
    console.log(aritmatik);
}

matematik();
*/