// 1.adım: prompt ile kullanıcıdan ad bilgisi al ve ekrana yazdır
let nameRequest = prompt("Adınızı giriniz");
document.getElementById("myName").innerHTML = nameRequest.toUpperCase(); //isim büyük harfli olacak

//  2.adım: ekrana anlık saat bilgisini yazdır
setInterval(showTime,0);
function showTime() {
    let bugun = new Date();
    document.getElementById("myClock").innerHTML = bugun.toLocaleTimeString() + "," + gun;
}

//3.adım: ekrana gün bilgisini yazdır
const haftaninGunleri = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
];
const tarih = new Date();  
let gun = haftaninGunleri[tarih.getDay()];
document.getElementById("myClock").innerHTML = gun;

