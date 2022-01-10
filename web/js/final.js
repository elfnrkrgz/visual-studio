// var ders ="Ders"; 
// var deers ='Ders';
// var sayi = 1;
// var ondalik=1.15;
// var bool = true;  / false;


// var a;
// console.log("deger", typeof(a));   UNDEFİNED
// var aa = 5;
// console.log("değer " , typeof(aa));  NUMBER



// console.log("External"); 
// External basar

// let selam
// console.log(selam); SELAM'A NE ATANIRSA ONU BASAR EKRANA
// selam parametresinin değerini basar

// console.log("item", dizi[1]);
// dizinin 1. ifadesini gösterir

// // if-else

// let ders = "Web";

// if (ders == "Web"){
//      // ne olursa olsun true/false değer döndürür
//      console.log("DEĞER SAĞLANIYOR");
// }
// else{
//     // if sağlanmıyorsa buraya girer
//     console.log("DEĞER SAĞLANMIYOR");
// }


// // switch-case

// var gun = 2;
// switch(gun){
//     case 1:
//         console.log("1.numaralı")
//         break;
//     case 2: 
//     console.log("2.numaralı işlem ");  GÜN 2 OLDUĞUNDAN 2 numaraları case GeolocationPositionError.
//     break;
//     case 3:
//         console.log("3..numaralı")
//         break;
//     default:
//          break;
// }

// var gun = 2;
// switch(gun){
//     case 1:
//         console.log("1.numaralı")
//         break;
//     case 2: 
//     console.log("2.numaralı işlem "); //break konulmadığı için hem 2 numaralı işlem ekrana bastırılır hem de 3 numaralı işlem ekrana bastırılır.
//     case 3:
//         console.log("3.numaralı")
//         break;
//     default:
//          break;
// }

// console.log(""+2+1);
// // çıktı 21, + string ifadeleri birleştirir
// ilk elemana geldi baktı string  ve yanında + var ,o zaman ben stringlerle çalışıyorum dedi ve hepsini yanyana yazdı


// console.log(""-2+1);
// çıktı -1
//geldi ilk elemana baktı string, sonra yanına baktı - var o zaman matematiksel işlem olacak dedi ve gerisine öyle devam etti.


//console.log(""+2-1);
// string olarak başlar - görünce integer'a döner. Çıktı 1 olur

//console.log("naber"+(2+1));
// console.log(""(2+1)); ARTI OLMAZSA ıs not a function hatası verir.
//işlem önceliği olarak parantez içi yapıldı ve orası 3 oldu fakat 
//daha sonra geldi baktı string ifade ile başlıyor ve hemen yanında + var 
//o zaman dedi ki birleştirme yapıyoruz çıktı naber3 oldu


//console.log(true + false);
// true=1 false=0 alır ve toplar, çıktı 1


// console.log(8/"4");
// console.log(typeof(8/"4"));
// çıktı 2
//type number
//geldi baktı number var sonra dedi ki işlem yapmalıyım o zaman string ifadeyi number ifadeye cast etti.


//console.log("4px"-2);
// çıktı NaN çünkü string ifadeyi cast etmek için string ifadenin içine bakıyor fakat px kast edilemediğinden not a number diyor.


//console.log(" -9      "+2);
// string olarak devam eder. Çıktı -9      2

//console.log(" -9      "-2);
// çıktı -11

//console.log(null +2);
//null jsnin özel durumudur değeri 0 dır aynı zamanda jsnın açığı da denilebilir. Fakat undefined'ın bir sayısal karşılığı yoktur!!
// 0+2'den 2 çıkarır

//console.log(undefined +2);
// çıktı NaN: undefined'ın bir sayısal karşılığı yoktur!!

//let dgmyl = prompt(" Dogum yılınızı giriniz:");
// kullanıcıdan veri alır

// let array =[1,2,3,4,5];    burada bir array tanımlandı
// for (let i=0; i < array.length; i++){  bir for döngüsü içerisinde arrayin tüm elemanları alındı
//    console.log(array[i]);   arrayin tüm elemanları yazdırıldı.
// }
// Array'in elemanlarını yazdırır.



// let isim=["mustafa", "enes", "elif"];
// for (let j=0; j < isim.length; j++){
//     console.log(isim[j]);
//      // her adımda bir ismi ekrana basar. 0. indexte mustafa yazar gibi.
// }




// let arr =[1,2,3,4,5,6];

// for (let i =0; i<arr.length;i++){
//     if (arr[i]%2==0) {
//         console.log("çift: ",arr[i]);
//         // continue; yazılırsa diğer şeyleri atlar ve devam eder.
//     }
//     // else{
//     //     break; // for'dan çıkar BREAK konulduğunda şuan ekrana değerleri basmıyor çünkü direk olarak uymayan ilk değerle karşılaşınca döngüden çıkıyor.
//     // }
// }




// // array tanımlama şekilleri;

// let names = new Array("ahmet","mehmet");
// console.log(names);

// let name = ["ahmet","mehmet",1,2];
// console.log(name);

// let f = [];
// f[0] = "ahmet";
// f[1] = "mehmet";



// let isim=[1,2,3];  //Dizi tanımladık örnek için.
// console.log(isim);

// isim.push("serkan");  //tanımlanmış array sonuna serkan değeri ekler.
// console.log(isim);

// isim.unshift("serkan");  //tanımlanmış array başına serkan değeri ekler.
// console.log(isim);

// isim.splice(0,2); // tanımlanmış array'in 0. indexten başlar ve 2 tane eleman siler.
// console.log(isim); // dizinin başındaki serkan , 1 kısımlarını sildi.

// isim.splice(2,0,5);
// console.log(isim); //2.indeksin yerine 5 ekler ve 2. indeksi sağa kaydırır.

// isim.splice(2,0,"Elif");
// console.log(isim); //2.indeksin yerine Elif ekler ve 2. indeksi sağa kaydırır.



// let nn = ["ali","veli","ayşe","ahmet"];

// nn.splice(1,0, "hakan"); 
// console.log(nn);
// // // veli yerine hakan yazar ve veliyi bir sağa kaydırır.

// nn.splice(1,1, "mustafa", "elif");
// console.log(nn);
// // //  siler ve oraya hakan elif ekler.




// let arr = [1,2,5];  //1,2,3,5
// arr.splice(-1,0,3);
// console.log(arr);
// // Tersten bakmaya başlar. 2 yerine 3 koyar.


// let str = "test";
// let arrstr = ["t","e","s","t"];
// console.log(arrstr.slice(1,3));
// // başlangıç ve bitiş indexi verilir (bitiş indexi dahil olmaz). Yani 1. indexten 3. indexe kadar ama 3. index içinde yok.. Yani sadece e s verir. Bize yine dizi halinde verir. Yani bu kısmı kopyalayarak bize yeni bir dizi oluşturur.

// let str = "test";
// let arrstr = ["t","e","s","t"];
// console.log(str.slice(1,3));
// // // çıktısı es olur. çünkü bu özellik hem arraylerde hem string ifadelerde kullanılabilir.
// //Ama string ifadelere yapıldığında  geri dizi olarak dönmez!!

// let str = "test";
// let arrstr = ["t","e","s","t"];
// console.log(arrstr.slice(1));
// // herhangi bir bitiş değeri verilmediği için başlangıçtan sona kadar alır.
// // 1 yerine -1 koyulursa sonda başladığı için sadece son değeri verir

// nm.pop();
// // dizinin sondaki elemanını siler
// nm.shift();
// // dizinin baştaki elemanını siler

// let nm = new[12,16,18,20];
// delete nm[2];
// console.log(nm);
// // çıktısı [12,16,empty,20] olur. Dizinin hane sayısını değiştirmez.

// let nm = [12,16,18,20];
// let is =["paris","ist"];
// let _c = nm.concat(is);
// // İki diziyi birleştirir

// let _ss = num.sort();
// // dizinin elemanlarını küçükten büyüğe doğru sıralar.

// let _as = alf.sort();
// // dizinin elemanlarını alfabetik sıraya göre dizer

// let _rnum = rnum.reverse();
// // dizinin sıralamasını terse çevirir.

// let _search = iss.indexOf("viyana");
// // viyana'nın olduğu index numarasını verir. eğer arama için array'de olmayan bir değer verilirse -1 verir.

// console.log(nm.includes(1));
// // eğer array içinde aradığımız değer varsa true verir.

// let string_sayi=5;
// let aaa = string_sayi.toString();
// console.log(aaa);
// console.log(typeof(aaa));
// // // sayı değil kelime değeri verir.

// let j=[1,23,3]
// let nnnn = j.join("-");
// console.log(nnnn);
// console.log(typeof(nnnn));
// // // array içindeki ,'leri - çevirir.
// // JOIN kullanımında dizi stringe çeviriliyor typeof olarak.

// arr_isim.forEach(item => item);
// // for ile aynı işlevde. item => item metod.

// let arr_isim = ["ali", "veli", "ayşe"];
// function blala () {
//     return 0;
// }
// arr_isim.forEach(item => console.log (item));
// // // çıktısı for gibi satırlara ali veli ayşe basar.

// let userss = [   {id:1, name:"ali"},   {id:1, name:"aliiiii"},   {id:2, name:"Ahmet"},   {id:3, name:"mehmet"}]
// let res_find = userss.find(e => e.id == 1);
// console.log(res_find);
// // array içindeki objelerden şartı sağlayan ilk kaydı getirir. burada id'si 1 olan ilk şeyi yani ali kelimesini getirir.


// !!!!!!!!! ANLAMADIM !!!!!!!!

// let sayii=[1,2,3,4,5,6];
// let ssss = sayii.some(x =>x>3);
// console.log(ssss);
// // // değeri 3'ten büyük olan değerleri getirir.


// let sayii=[1,2,3,4,5,6];
// let inn = sayii.includes(5);
// console.log(inn);
// // // değeri 5 olanı varsa getirir.

// !!!!!!! ANLAMADIM !!!!!!!

// let ev = sayii.every(x=>x>3);
// // bütün itemlere tek tek bakar hepsi şartı sağlıyor mu diye kontrol eder.

// let kkk = userss.filter(e => e.id == 1);
// // array içindeki objelerden şartı sağlayan tüm kayıtları getirir.

// // const newStr = (str) => str.Length < 2 ? str : str.slice(0,2) + str.slice(-2);
// // 2 ve daha fazla harften olanları baştan ve sondan 2 karakter getirecek. Tek harfleri direkt getirecek.

// // const newStr = (str) => str.Length <= 0 ? "hata" : str.slice(0,str.Length/2);
// // herhangi kelimenin yarısını getiren kod. kelime girilmediyse kelime girmesini isteyecek.

// // const concat = (str1,str2) => str1.slice(1) + str2.slice(2);
// // 1.den 1.yi atla gerisini yaz, 2.den 2.yi atla gerisini yaz. ikisini birleştir.

// // const near = (num1, num2) => (100-num1) < (100-num2) ? num1 : num2;
// // 100'den küçük  2 sayıdan hangisi 100'e yakınsa onu verecek

// const kontrol = (str, char) => str.split('').filter(x=>x === char).length;
// const dogruluk =  (str, char) => kontrol(str,char)>2 && kontrol(str, char)<=4;
// // bu fonksiyon 1. kelimede 2. harfin kaç tane old bul. bu değer 2 ve 4 arasındaysa true dönecek.

// // // const count = (arr) => arr.filter(x => x %2 === 0).length
// // dizide kaç tane çift sayı old verir

// let uzunluk = ["mustafa", "ahmet"].map(item=> item.length);
// console.log(uzunluk);
// // kelime uzunluğuna göre sayıya çevirip dizi oluşturur.

// let aaabb = a.split(',');
// // splitin içi boş olursa tüm harfleri ayrı index olarak alır ve array oluşturur.

// let bbbb = aaarr.reduce((sum, current)=>sum+current, 0);
// // bir başlangıç değeri verilir (en sağdaki 0) ve onun üzerine arraydeki sayıları ekler, toplar. sonuç verir.

// let a= [1,2,3];
// //console.log(...a);
// // // dizinin içinden itemleri çıkartır.
// console.log([...a, 4]);
// // // yazılırsa kendi dizini oluşturmuş olursun. dizi=> 1 2 3 4

// function showNmae(first, last, ...titles){
//     console.log(first + last);
//     console.log(titles[0]);
//     console.log(titles[1]);
// }
// showNmae("a", "b", "c", "d");
// // rest olarak kullanıldığında daima fonksiyonun sonuna gelir. a ve b ...titles içine atar ve yeni dizi oluşturur. a yeni dizinin 1. elemanı, b yeni dizinin 2. elemanı olur.

// orders.filter(x=>x.orderId == '234' && !x.delivered)
// orders.forEach(x=> {
//     x.totals = x.items.reduce((a, i)=> a + i.price, 0)
// })
// // kısıtları belirler. orderId'si 234 ve sonucu false olanları çıkartır.

// let pers = {    name:"isim",    age: 20,    count: function()   {
//         return this.age;
//         // this obje içindekileri gösterir.
//     }
// }
// pers.name;
// // ismi alır

// document.getElementById("write").innerText ="Yazı";
// // id'si write olan yere değer atar

// var oku = document.getElementById("read").innerText;
// // text'i okur.

// document.getElementsByTagName
// // html dökümanında ne kadar input varsa bu fonksiyonla alınabilir.

// var read = document.querySelector(".class_ismi")
// // bir class seçeceğimi söylemem gerekiyor

// var check = document.getElementById("attr");
// check.checked = true;
// // checkbox tıklı halde gelir.

// // select başı
// var country = document.getElementById("country");
// // select sonu
// // options başı
// var list = document.createElement("options");
// // elemen türünü verirsin. dinamik olarak gelen değerleri girer

// list.setAttribute("value", 2);
// list.innerText = "İstanbul";
// // options sonu
// // optionsu selecte bağlamak gerekir yoksa çalışmaz.
// country.appendChild(list);
// // options selecte bağlandı

// let events = document.getElementById("event");
// // click olayı yakalanmalı
// events.addEventListener('click', ()=>{
//     let txt = document.getElementById("eventText");
//     txt.innerText = "Sample Button";
// });
// // click olayı (parametre) yakalanır. coolbag function (metod) tanımlanır. butona tıklanınca yazı yazar.