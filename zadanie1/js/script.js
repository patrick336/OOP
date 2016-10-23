
window.addEventListener('load',function(){
    
    
    function Telefon (marka,cena, kolor,wysw){
    this.marka = marka ;
    this.cena = cena;
    this.kolor = kolor;
    this.wysw = wysw || 'Brak danych od producenta.';
}


Telefon.prototype.printInfo = function () {
    return 'Marka telefonu to ' + this.marka+',<br>kolor to '+this.kolor+',<br> cena to '+this.cena+'.<br>'
            +'Dane wyświetlacza: '+this.wysw;
}


var SamsungGalaxyS6 = new Telefon ('Samsung','1 PLN w abonamencie','złoty','540 x 960 px (5,00") 220 ppi.');
var iPhon6s  = new Telefon('Apple', 2250,'srebrny');


function Kalkulator (marka,cena,kolor,wysw,pamiec) {
// konstruktor nie bierze udziału w dziedziczeniu.
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
    this.wysw = wysw || 'Brak danych od producenta.';
    this.pamiec = pamiec;
} 
    
    
 var cnt = document.getElementById('content');
 var cnt2 = document.getElementById('content2');

    cnt.innerHTML = SamsungGalaxyS6.printInfo();
    cnt2.innerHTML = iPhon6s.printInfo();

    
});