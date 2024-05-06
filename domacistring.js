//Zadatak 1 funkcija koja vraca obrnuti string

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('Abc123deF')); 

//Zadatak 2 funkcija koja vraća najduži string
var niz = ['kiwi', 'kruska', 'naranca', 'crvenanaranca'];
    ln = niz.reduce((r,s) => r > s.length ? r : s.length, 0);

const result = niz.filter(pl => pl.length == ln);

console.log(result); 

//Zadatak 3 funkcija koja ispisuje broj ponavljanja svakog znaka stringa
function getFrequency(str) {
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
  };
  
  console.log(getFrequency('program'));
  