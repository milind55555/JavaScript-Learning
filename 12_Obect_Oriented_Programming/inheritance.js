class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Hello, I am ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username); // Call the constructor of the parent class (User)
        this.email = email;
        this.password = password;
    }
    addCourse(){
       console.log(`Course added by ${this.username}`);
    }
}

const chai = new Teacher("chai","abs","123");
chai.addCourse();
chai.logMe();
const masalachai = new User("masalachi");
masalachai.logMe();
// masalachai.addCourse(); // This will throw an error because addCourse is not defined in User

console.log(chai === masalachai); // false, they are different instances
console.log(chai instanceof Teacher); // true, chai is an instance of Teacher
console.log(chai instanceof User); // true, chai is also an instance of User
console.log(masalachai instanceof Teacher); // false, masalachai is not an instance of Teacher
console.log(masalachai instanceof User); // true, masalachai is an instance of User
