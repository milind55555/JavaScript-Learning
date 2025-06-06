const marvel_heroes = ["iroman","spiderman","Thor"]
const dc_heroes = ["flash","superhero","Batman"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const allheroes =marvel_heroes.concat(dc_heroes)
console.log(allheroes);


//spread
const allnew = [...marvel_heroes, ...dc_heroes]
console.log(allnew);

const another_array = [1,2,3,[4,5],[4,6,7,[8,9]]]
const real_arr = another_array.flat(Infinity)
console.log(real_arr);


console.log(Array.isArray("Milind"));
console.log(Array.from("Milind"));
console.log(Array.from({name:"Milind"})); //give {} as output

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));







