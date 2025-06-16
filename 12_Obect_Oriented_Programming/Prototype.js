let name="Milind    "
// consolelog(name.truelength()); // 6


let myhero=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"web",

    getSpiderPower:function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}

Object.prototype.milind=()=>{
    console.log(`Hello, I am Milind! in all Objects`);
}
Array.prototype.hello=()=>{
    console.log(`Hello, I am Milind! in Arrays`);
}
heropower.milind();
myhero.milind(); // This will work because all objects inherit from Object.prototype
myhero.hello(); // This will work because we added hello to Array.prototype
// heropower.hello();//Arrays prototype function in array only but object can inherit in arry,function,string


//Inheritence
const User={
    name:"Milind",
    email:'milind@example.com'
}
const Teacher={
    makeVideo:true
}
const TeacherSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeacherSupport
}
Teacher.__proto__ =User; // Setting TeacherSupport as the prototype of Teacher


//modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher); // Setting Teacher as the prototype of TeacherSupport


let anotherUsername = "Milind      "
String.prototype.truelength = function() {
    console.log(`${this}`);
    


    console.log(`${this.trim().length}`);// 'this' refers to the object on which the method is called
}
anotherUsername.truelength()
"bur jjj".truelength()

