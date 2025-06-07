//for 

for (let i = 0; i <= 10; i++) {  //ctrl + D for changing variable
    const element = i;
    if(element == 5){
        console.log("number is five");
        
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop:${i}`);
    
    for (let j = 0; j <= 10; j++) {
       console.log(`inner loop: ${j} and inner loop is ${i}`);
       
        
    }
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop:${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`inner loop: ${j} and inner loop is ${i}`);
    console.log(i + '*' + j + ' == '+ i*j);
    

       }  
}


let myarr =["flash","superman","batman"]
console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
    
    
}

// break,continue
for (let index = 1; index <= 20; index++) {

    if(index == 2){
        console.log("2 detected");
        
        continue
    }
    if(index == 5){
        console.log("5 detected");
        
        break
    }
console.log(`Value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log("5 detected");  //one skip
        
        continue
    }
    
console.log(`Value of i is ${index}`);
    
}
