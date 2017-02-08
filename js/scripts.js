$(function() {

    function Telefon(marka, cena, kolor) {
        this.marka = marka; 
        this.cena = cena;
        this.kolor = kolor;
    }
    Telefon.prototype.printInfo = function() {
        console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
    }

    $("#zadanie_10_4").click(function() {
        var samsungGalaxyS6 = new Telefon("Samsung", 1998, "biały"),
            iPhone6S = new Telefon("Apple", 2250, "srebrny"),
            onePlusOne = new Telefon("OnePlus", 1500, "czarny");

        samsungGalaxyS6.printInfo();
        iPhone6S.printInfo();
        onePlusOne.printInfo();
    });
    
    function Button(text) {
        this.text = text || "Hello";
    }
    Button.prototype = {
        create: function() {
            var self = this;
            this.$element = $("<button>");
            this.$element.text(this.text);
            this.$element.click(function() {
                alert(self.text);
            });
            $("body").append(this.$element);
        }
    }
    
    $("#zadanie_10_5").click(function() {
        var btn1 = new Button("Hello!");
        btn1.create();
    });
    
    
});



