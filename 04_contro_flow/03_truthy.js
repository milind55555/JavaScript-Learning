const userEmail = []
if(userEmail){
    console.log("User name email get");
    
}else{
console.log("Don't have user email");

}

//falsy value -> false , 0 ,-0,BigInt 0n, "",null,undefined,NaN
//truthy value-> true,[],"0",'false'," ",{},function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
    
}
const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

//Nullish coelescing operator (??):null ,undefined ->used for error handling
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
var1 = undefined ?? 10
var1 = null ?? 12 ?? 10
console.log(val1);


//termary Operator
// constion ? true : false
const teaprice=100
teaprice >=80 ? console.log("You can buy") :console.log("You can;t buy");


