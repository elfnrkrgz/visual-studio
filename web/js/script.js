/*if(1){
 ifin içerisinde daima boolen olarak değer döndürülür.
}
*/

/*let ders = "web";
if (ders == "web"){

}
*/
/*
else{
 şart sağlanmazsa sağlanır.
}
*/
//switch-case yapısıda if else görevinde çalışarak döngüye devam eder.

console.log(" "+2+1); //21 string içerisinde metin olduğunda casting devam edilemeyeceği için NaN verir.
console.log(" "-2+1); // -1  string içerisinde metin olduğunda casting devam edilemeyeceği için NaN verir.
console.log(true+false); // true :1 false:0 ve sonuç 1
console.log("   -9   " -2); // -11
console.log("   -9   " +2); // -9  2
console.log(null+2); // 2 null convert işleminden sonra 0 değerini alır.
// null tip olarak object yer kaplar ve değiştirilemez. varlık kontrolünü undefined kontrolü yapılmalıdır.
// undefined convert işlemine tabi tutulduğunda NaN verir. Çevirebileceği bir number olamaz. Null gibi değildir.


let dogum = prompt("Doğum yılını giriniz:")
var yas;
yas=2021-dogum;
let ilk=7;
let orta=13;
let lise=15;
let üni=18;
if(yas==7){
    console.log("İlkokula gidiyorsunuz.")
}
else if (yas==13){
    console.log("Ortaokula gidiyorsunuz.")
}
else if(14>yas && yas<18){
    console.log("Liseye gidiyorsunuz.")
}
else(yas=>18)
    console.log("Üniversiteye gidiyorsunuz.")