
var c=50//global scope
let a=100
{
    //scope
}
if(true){
let a=10  //block scope
const b=20
var c =30//avoid var
console.log("INNER a :",a);

}

console.log(a);
// console.log(b);
console.log(c);




