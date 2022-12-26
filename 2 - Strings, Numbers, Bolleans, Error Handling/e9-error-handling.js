// throw ile basılan her şey hatadır.

/*  THROW  */

//throw "500";
//throw 500;

/* throw {
    Message: "Something is wrong!",
    code: "ERR_SOMETHING_IS_WRONG",
    status : 400
} */

/* TRY CATCH */

try { // try içerisinde yazılan kodun hata alması durumunda catch isimli method çalışmaya başlayacaktır.
/*
  const x = 10;
  const y = 20;
  const z = 0;
  z = x + y;
*/
/* throw {
    Message: "Something is wrong!",
    code: "ERR_SOMETHING_IS_WRONG",
    status : 400
} */
}catch(err){
    console.warn(err); 
}

// console.error(); // hata şeklinde belirtiyor => kırmızı renkte
// console.log(); // normal bir şekilde hatayı belli ediyor => normal renkte
// console.warn(); // uyarı şeklinde belirtiyor. => sarı renkte

/* TRY CATCH FINALLY */

console.log("İşlem başladı!");

try { // try içerisinde yazılan kodun hata alması durumunda catch isimli method çalışmaya başlayacaktır.

    const x = 10;
    const y = 20;
    const z = x + y;
    // z = x + y;
    
     // console.log(z);

    throw {
      Message: "Something is wrong!",
      code: "ERR_SOMETHING_IS_WRONG",
      status : 400
  }
  }catch(err){
      console.warn(err); 
  } finally {
      console.log("Kodumuz çalıştı ve sonuçlar üstte listelendi!");
  }

  console.log("İşlem tamamlandı!");