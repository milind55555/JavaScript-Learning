const promiseOne=new Promise((resolve,reject)=>{
    //Do asynchronous task  DB call,API call,File read,cryptography,network call
    setTimeout(()=>{
        console.log("Async task Completed");
        resolve()
        
    },2000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed");
    
})



//Type 2 Promise
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Asyc Task Two Completed");
        resolve();
        
    },5000)

}).then(()=>{
    console.log("Async Two Resolved");
    
})


//3rd Type of Promise
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Milind",email:"milind2211@g.com"})//passing data/object
    },1000)
})

promiseThree.then((user)=>{
    console.log("User Data:", user);
})

//4th Type of Promise
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true
        if(!error){
            resolve({ username:"Suraj",email:"asvvv"})
        }else{
            reject("Error: Something went wrong")
        }
    },2000)
})

promiseFour
.then((user)=>{
    console.log("User Data:", user);
    return user.username;
})
.then((username)=>{
    console.log("Username:", username);
})
.catch((e)=>{
    console.log("Error:", e);
    
})
.finally(()=>{
    console.log("Promise is resolved or rejected!!");
    
})

//5th Type of Promise using async/await
const promiseFive=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let error =true
        if(!error){
            resolve({ username:"JAVASCRIPT",email:"ZORO"})
        }else{
            reject("Error: JS went wrong")
        }
    },2000)
});


async function consumePromiseFive() {
    try {
      const respone =await promiseFive;
    console.log("Response:", respone);  
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()


async function getAllUser(){
    try {
      const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await  response.json()
    console.log(data);   
    } catch (error) {
        log("Error fetching users:", error);
    }
   
} 
getAllUser()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log("Users:", data);
})
.catch((e)=>{
    console.log("Error fetching users:", e);
})




