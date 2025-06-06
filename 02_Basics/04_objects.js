// const tinderuser = new Object();  //sigleton object
const tinderUser = {}
 tinderUser.id = 1122
 tinderUser.name = "Shyam"
 tinderUser.loggedIn = false

console.log(tinderUser); //empty object


const regularUser  ={
    email:"abc@cp",
    fullname:{
        userfullname:{
            firstname:"Milind",
            lastname:"Hanchate"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1:"a",2:"b",3:"c"}
const obj2 ={4:"d",5:"e",6:"f"}
const obj5 ={4:"d",5:"e",6:"f"}
 
const obj3 = { obj1,obj2,obj5}
const obj4 = Object.assign({},obj1,obj2,obj5)
//using spread operator
const obj6 ={...obj1,...obj2,...obj5}
console.log(obj6);

console.log(obj3);
console.log(obj4);

const users = [
    {
        id:1,
        email:"abc@fm"
    },
    {

    },
    {

    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('loggdin'));





