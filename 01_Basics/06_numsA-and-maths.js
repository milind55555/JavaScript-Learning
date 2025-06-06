const score = 100
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof balance);

console.log(balance.toFixed(2));

const otherNum = 23.8899
console.log(otherNum.toPrecision(3));

const hundred =10000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString("en-IN"));


//Maths  default library included math library
console.log(Math);
console.log(Math.abs(-445));
console.log(Math.round(4.6));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.7));
console.log(Math.min(6,34,3,6,1,9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
 














