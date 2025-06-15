// const user={  //object literal
//     username:"Milind",
//     loginCount:6,
//     signedIn:true,
//     getUserdetail:function(){
//         console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);
//         console.log(this);
        
        
//     }
// }

// console.log(user.username);
// user.getUserdetail()
// console.log(this);





function User(username,loginCount,signedIn){ //constructor function
    this.username= username,
    this.loginCount=loginCount,
    this.signedIn=signedIn

    this.greeting =function(){
        console.log(`Hello ${this.username}, you have logged in ${this.loginCount} times. Signed In: ${this.signedIn}`);
        console.log(this); // 'this' refers to the current instance of User
        
    }

    // return this;

}
const UserOne =new User("Milind",6,true); //creating an instance of User
const UserTwo =new User("Suraj",3,false); //creating another instance of User
console.log(UserOne.constructor);
console.log(UserTwo.greeting()); //calling the greeting method on UserTwo
//new is a keyword that creates a new object and sets the prototype of the new object to the constructor function's prototype