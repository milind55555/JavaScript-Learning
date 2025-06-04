// Primitive DataType 
// 7 types : String,Number ,boolean ,null ,undefined ,symbol.BigInteger 
//             call by value
const value =100
const valueL=100.44

const isLoggedIn = false
const outtemp = null //empty value
let useremail ;//undefined
const id =Symbol('12333')
const someId = Symbol('123333')

console.log(id === someId);

// const bignumber =9999999999978n





// reference or non-Primitive  (Memory  reference allocated)
// Arrays,Objects,Functions

const heros =['saktiman','ironmen','captainAmerica']

//object
let myObj = {
    name:"Milind",
    age:21,

}

const myFunction = function(){
        console.log("Hello Brother");
        
}

console.log(typeof myFunction);
console.log(typeof heros);
