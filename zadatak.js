var auto = {
    boja: 'crna',
    marka: {tip : 'BMW', model : 'ff30'},
    cijena: 22000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function (vrijeme){
       let tmpVrijeme = 0;
       while(this.brzina <= this.maxBrzina){
        this.brzina = this.brzina + 5;
        if (tmpVrijeme == vrijeme){
            break;
        }
        tmpVrijeme++; 
       }
        return this.brzina;
    },
    zakoci: function(vrijeme){
       while(this.brzina >=0){
        // smanjujemo brzinu
        this.brzina = this.brzina - 20;
        vrijeme--;
        if (vrijeme == 0){
            break;
        }
       }
       return this.brzina;
    },
    promijeniBoju: function (novaBoja){
        this.boja = novaBoja;
        return this.boja;
    }
};

console.log("auto JSON --> " + JSON.stringify(auto));

console.log("pocetna brzina: " + auto.brzina); //10

/*console.log("auto ce ubrzati na: " + auto.ubrzaj(2)); //25, jer vrijeme ide od 0
console.log("brzina nakon ubrzanja: " + auto.brzina); //25
console.log("auto ce ubrzati nakon 5 sek: " + auto.ubrzaj(5));*/

console.log("auto ce ubrzati nakon 55 sek na: " + auto.ubrzaj(41)); // jer je ovdje povecao na 220

console.log(auto.zakoci(11));

/* u ubrzaj funkciji smo unijeli dodatnu varijablu,
 uvijek je bolje izbjeci uvođenje novih varijabli kao je moguce */

 console.log( "trenutna boja auta je: " +
  auto.boja +
   ", a nakon promjene boje je " +
    auto.promijeniBoju("crvena"));

    console.log(auto.boja); //crvena

auto.boja = "zelena";
auto["boja"]="žuta";

console.log(auto.boja);