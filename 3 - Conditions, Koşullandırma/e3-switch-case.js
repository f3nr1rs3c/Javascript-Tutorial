const BirHafta = /*9 % 6 ||*/ new Date().getDay(); // Bugünün tarihi günü tanımlama
                    // 8 , 6ya bölünmesini arıyorsam hangi gün gelicek onu bulucağım.

let günler  = ""; // let'i string olarak tanımladık ki altta ki günleri string olarak yazabilelim diye.

// currentDayIndex == 0 // altta ki Case bu işlemi yapıyor.

switch (BirHafta){
    case 0:
        günler = "Pazar"; // Pazar
        break; // bir döngüyü veya condition'ı kesmek için kullanılan anahtar kelime
    case 1:
        günler = "Pazartesi"; // Pazartesi
        break;
    case 2:
        günler = "Salı"; // Salı
        break;
    case 3:
        günler = "Çarşamba"; // Çarşamba
        break;
    case 4: 
        günler = "Perşembe"; // Perşembe
        break;
    case 5:
        günler = "Cuma"; // Cuma
        break;
    case 6:
        günler = "Cumartesi"; // Cumartesi
        break;
    default: // Sorun olursa default yazsak case yerine sorun olmaz
        günler = "Pazart"; //Pazartesi
        break;
}
//console.clear(); // konsolu temizleme komutu
console.log("Bugün günlerden ne: ", günler);
