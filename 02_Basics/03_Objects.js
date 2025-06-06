// singleton
// Object.create()

//object literals


const mySym1 = Symbol("key")
const JSUser = {
    name:"milind",
    "fullname":"milind Hanchate",
    [mySym1]:"mykey1",
    age:21,
    state:"Maharasjshtra",
    email:"abs@gmail.com",
    isLoggenIn:false,
    lastLogin:["Monday","tuesday"]
 }

 console.log(JSUser.email);
 console.log(JSUser["email"]);
 console.log(JSUser["fullname"]);
 console.log(JSUser[mySym1]);


 JSUser.email ="Sanji@abc.com"
//  Object.freeze(JSUser) //can't change object field
 JSUser.email ="Naruto@abc.com"

 console.log(JSUser.email);
 

 
 JSUser.greeting = function(){
    console.log("Hello JS User!!!");
    
 }

 JSUser.greeting2 = function(){
    console.log(`Hello JS User!!!,${this.name}`);
    
 }


 console.log(JSUser.greeting());
  console.log(JSUser.greeting2());

 
 
 