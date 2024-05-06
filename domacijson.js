// kreiranje klase i instanciranje objekta


class Auto {
    constructor(marka) {
      this.marka = marka;
    }
    getImam() {
      return 'Imam auto marke' + this.marka ;
    }
  }
  
  class Model extends Auto {
    constructor(marka, model) {
      super(marka);
      this.model = model;
    }
    getImam() {
      return this.present() + ', model je' + this.model;
    }
  }
  var objektAuto = new Auto("Suzuki", "Swift");
console.log(objektAuto.getImam());


// kreiranje json datoteka i primjeri koristenja
const tecaj1 = {
    "ime_tecaja": "Web programiranje",
    "voditeljica": "Tina Vicković",
    "broj polaznika": 5,
    "grad" : "Split",
    "polaznici": ["Marija", "Diana", "Antonio", "Luka", "Petra"]
}
console.log(tecaj1);
console.log("ime_tecaja", tecaj1.ime_tecaja);

console.log(tecaj1);
console.log("polaznici", tecaj1.polaznici);

tecaj1.trajanje = "tri_mjeseca";
console.log("trajanje", tecaj1.trajanje);

const jsonString = JSON.stringify(tecaj1);
console.log(jsonString);


const jsonObjekt = JSON.parse(jsonString);
console.log(jsonObjekt);


// korištenje biblioteke po izboru
const script = document.createElement('script');
script.src = 'https://unpkg.com/lodash@4.17.21/lodash.min.js';

script.onload = function() {
  const osobe = [
    { ime: 'Maja', prezime: 'Matić', godine: 35 },
    { ime: 'Luka', prezime: 'Kezić', godine: 45 },
    { ime: 'Ivan', prezime: 'Jurić', godine: 26 },
    { ime: 'Stipe', prezime: 'Balošić', godine: 31 },
    { ime: 'Mate', prezime: 'Zelić', godine: 44 },
    { ime: 'Petar', prezime: 'Perić', godine: 19 },
    { ime: 'Kate', prezime: 'Anić', godine: 33 },
    { ime: 'Petra', prezime: 'Ivić', godine: 28 },
    { ime: 'Ana', prezime: 'Bokšić', godine: 39 }
  ];

  const starijeOsobe = _.filter(osobe, (osoba) => osoba.godine > 20);
  console.log('Starije osobe:', starijeOsobe);

  const sortiraneOsobe = _.sortBy(osobe, 'ime');
  console.log('Sortirane osobe:', sortiraneOsobe);

  const grupiraneOsobe = _.groupBy(osobe, 'godine');
  console.log('Grupirane osobe:', grupiraneOsobe);
};
document.head.appendChild(script);
