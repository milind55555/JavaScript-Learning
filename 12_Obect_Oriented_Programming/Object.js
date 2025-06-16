function multiplyBy5(num){
    this.num = num; // 'this' refers to the instance of the function
    return num * 5;
}

multiplyBy5.power= 2

console.log(multiplyBy5(2));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // This will log the prototype of the function, which is an object with methods like apply, call, etc.


function createUser(username,score){
    this.username = username
    this.score = score; 
}

createUser.prototype.incrementScore = ()=>{
    this.score += 1; // This will not work as expected because 'score' is not defined in the scope of the function
}
createUser.prototype.printMe = ()=>{
    console.log(`Score is ${this.score}`);
    
}
const chai=new createUser("Chai", 10);
const tea=new createUser("Tea", 20);


chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

