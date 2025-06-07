const user={
    username:"Milind",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);//show context
        
        
    }

}
user.welcomeMessage()
user.username="Pavan"
user.welcomeMessage()

console.log(this);

function chai(){
    const username="milind"
    console.log(this.username);//work only on object
    
}
chai()


const chai1 =function(){
   const username="milind"
    console.log(this.username);//work only on object

}
chai1()


const chai2 = ()=>{ //arrow function
     const username="milind"
    console.log(this);//work only on object
}
chai2()

const adddtwo=(n1,n2)=>{
    return n1+n2
}
console.log(adddtwo(2,4));

const adddtwo1 = (n1,n2)=> n1+n2 //explicite function
console.log(adddtwo1(2,4));

const adddtwo2 = (n1,n2)=> (n1+n2)  // {} return should complusary
console.log(adddtwo1(2,4));

const ads=(n1,n2)=> ({username:"milind"})
console.log(ads(1,2));


const myArrar=[1,2,2,4,5,6,8]
myArrar.forEach(()=>{
    
})





