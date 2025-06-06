const name = "Milind"
const rep = 21;
console.log(name + rep +"Is Value of Name");

console.log(`Hello , My Name is ${name} and ${rep} is number`);


const GameName = new String("Milind-9999-6776")
console.log(GameName[0]);
console.log(GameName.__proto__);
console.log(GameName.charAt(9));
console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.indexOf("M"));

const newString = GameName.substring(0,4)
console.log(newString);

const another =GameName.slice(-8,4) //-negative 
console.log(another);

const s1= "    Kingdom   "
console.log(s1);
console.log(s1.trim()); // starting and ending spaces are removed

const url = "https://milind/milind%20jj"
console.log(url.replace('%20',"-"));
console.log(url.includes("milind"));


console.log(GameName.split("-")); //split based on -













