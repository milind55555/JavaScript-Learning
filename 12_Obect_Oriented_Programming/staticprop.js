class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Hello, I am ${this.username}`);
        
    }

   static createId(){
        return `123`
    }
}
const mili =new User("Milind");
// console.log(mili.createId()); // This will call the createId method from User class

class Teacher extends User{
    constructor(username,email){
        super(username); // Call the constructor of the parent class (User)
        this.email = email; 
    }

}

const phone=new Teacher("phone","phone.com")
// console.log(phone.createId())  //static methods are not inherited, so this will throw an error
