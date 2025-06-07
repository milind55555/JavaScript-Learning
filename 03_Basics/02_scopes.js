
var c=50//global scope
let a=100
{
    //scope
}
if(true){
let a=10  //block scope
const b=20
var c =30//avoid var
console.log("INNER a :",a);

}

console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username="Atharva"
    function two(){//closure child can access parent attribute username ca acsse
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website); //error occured due to scope 
    two()
    
}
one();

if(true){
    const username="Milind"
    if(username === "Milind"){
        const website = "youtube"
        console.log(website+username);
        
    }
    // console.log(website);//error due to scope 
    
}
// console.log(username);//scopre is end if else

//+++++++ interesting +++++//

console.log(addOne(2));//no error 
function addOne(num){
        return num+1
}

// console.log(addTwo(4));//error got
const addTwo =function(num){
    return num+2
}

console.log(addTwo(4));











