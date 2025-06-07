//if
if(true){
console.log("Executed");

}
if(false){
    console.log("Not executed!!");
    
}

const userLoggedIn =true
if(userLoggedIn){

}
if( 3 != "2"){
    console.log("executed as true");
    
}
if( 3 === "2"){
    console.log("not executed as false");
    
}

const temparature =51
if(temparature < 50){
    console.log("tem is less than 50");
    
}else{
console.log("tem is greater than 50");

}
// >,<.<=,>=,==, != ,===


const score =200
if(score > 100){
    var power='fly'
    console.log(`User Power: ${power}`);
    
}
console.log(`User Power: ${power}`);


const balance =1000
if(balance > 500) console.log("test"),console.log("test2"); //implicite scope

if(balance < 500){
    console.log("Less than 500");
    
}else if(balance < 750){
    console.log("less than 750");
    
}
else if(balance <900){
    console.log("less than 900");
    
}
else{
    console.log("less than 1200");
    
}


const userLoggedIn1 =true
const debitcart =true
const loggedInFromgoogle =false
const loggedInFromGmail =true
if(userLoggedIn1 && debitcart && 2==2){
    console.log("Buy courses");
    
}
if(loggedInFromGmail || loggedInFromgoogle){
    console.log("Login");
    
}






