const parametre1 = 16; // bu sayıları eşit yaparsak condition 2 çalışır
const parametre2 = 30;

// 16 < 30dan olarak belirtiyorz

// if normal çalışıyorken çalışmazsa else ile çalışmadığına dair bilgi verme yap
// else if kıyaslama

if (parametre1 < parametre2) {
    console.log("Condition 1");
} else if (parametre1 >= parametre2) {
    console.log("Condition 2");
} else if (parametre1 === parametre2) {
    console.log("Condition 3");
} else {
    console.log("Condition 4");
}


const parametre3 = "Deniz";
const parametre4 = "Can";

const can = 5;
const deniz = 15;

//let result = 0;

if (parametre3 === "Can") {
    result = can * 1;
    console.log("Can 1'de Görüldü");
} else if (parametre3 === "Deniz") {
    result = deniz * 1;
    console.log("Deniz 1'den Görüldü");
} else if (parametre4 === "Can") {
    result = can * 2;
    console.log("Can 2'de Görüldü");
} else if (parametre3 === "Deniz") {
    result = deniz * 1;
    console.log("Deniz 1'den Görüldü");
} else {
    result = deniz * 2;
    console.log("Deniz 2'de Görüldü");
}

//console.log(result);