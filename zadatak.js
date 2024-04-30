var auto = {
    boja: 'crna',
    marka: {tip : 'BMW', model : 'ff30'},
    cijena: 22000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function (vrijeme){
        return vrijeme * 5;
    },
    zakoci: function(vrijeme){
        return vrijeme/5;
    },
    promijeniBoju: function (novaBoja){
        this.boja = novaBoja;
        return this.boja;
    }
};

console.log("auto JSON --> " + JSON.stringify(auto));