function Telefon(marka, cena, kolor) {
    this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var samsungGalaxyS6 = new Telefon("Samsung", 1998, "biały"),
    iPhone6S = new Telefon("Apple", 2250, "srebrny"),
    onePlusOne = new Telefon("OnePlus", 1500, "czarny");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();