// Dates 
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate);

let myCreatedDate = new Date(2004,8,5)
let mydate1 = new Date("2004-09-05")
console.log(myCreatedDate.toDateString());
console.log(mydate1.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //In minute

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    weekday:"long",
    
})








