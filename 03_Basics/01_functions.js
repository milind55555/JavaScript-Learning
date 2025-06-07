
function sayMayName(){
    console.log("M");
    console.log("I");
    console.log("L");
    console.log("I");
    console.log("N");
    console.log("D");
      
}

sayMayName();

// function addtwoNumber(number1,number2){//parameter{
    
//     console.log(number1+number2);
    
// }
function addtwoNumber(number1,number2){//parameter{
    
    // let result =number1+number2
    return number1+number2
    console.log("Milind");
    
    
}
// const result =addtwoNumber(1,"2");//argument
const result =addtwoNumber(1,3);

console.log("Result: ",result);

function loginuserMessage(username){
    if(username === undefined){
        console.log("Please enter username!!");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginuserMessage("Milind"));

console.log(loginuserMessage("Milind"));


function calculateCartprice(val1,val2,...num1){//rest operator numbeer to array 
    return num1;
}
console.log(calculateCartprice(200,300,600,2000));

const user={
    username:"Milind",
    price:"free"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// console.log(handleObject(user));
handleObject({
    username:"YOYO",
    price:"free"
})
const newArr = [100,200,300]
function returnarr(getArray){
    return getArray[0]
}
console.log(returnarr(newArr))















