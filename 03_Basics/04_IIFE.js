//Immediately Invoked Function Expression(IIFE)

(function chai(){ //named iife
    console.log("DATABASE connected!!!");
    
})(); //withouting calling , it works call immediately ()()

// (()=>{
//     console.log(`DB connected!!`);  //error due semiclon in 1st 
    
// })()

( ()=>{//unnamed iffe
    console.log("DB connected!");
    
})();

( (name)=>{
    console.log(`My name is ${name}`);
    
})("Milind");