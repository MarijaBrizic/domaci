//5.zadatak

for(let i=0;i<=10;i++) {
    console.log(i);
}

let broj= 0
while(broj<11){
    console.log(broj);
    broj++;
}

//6.zadatak

for(let i=1;i<=20;i++) {
     if (i%3==0){
console.log(i);}
}

//7.zadatak
let umnozak = 1
for (let i =4;i<=8;i++){
    umnozak*=i;
}
console.log(umnozak);

//8.zadatak
for (let i =1;i<16;i+=2){
    console.log(i);
}

//9.zadatak
const niz= ["1","6","2","4","8"];
for (let i=0; i<niz.length;i++){
    console.log(niz[i])
}

//10.zadatak
for(let i=10;i>=1;i--) {
    console.log(i );
}

//11.zadatak 
for ( let i =1; i<=5; i++)  { 
    for (let a = 1;a<=5; a++) {
        console.log ( i + " x " + a + " = " + i *a); }
    }

// 12.zadatak 

const myArray = [2, "pozdrav", true, 5, "programiranje"];
for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "string") {
        console.log(myArray[i]);
    }
}