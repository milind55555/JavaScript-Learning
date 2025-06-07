// for of 
["","",""]
[{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greeting ="Welcome to website!!"
for (const greet of greeting) {
    console.log(`Char is ${greet}`);
    
}

//Maps
const map =new Map()
map.set('IN','India')
map.set('UK','United Kingdom')
map.set('US','United State')
map.set('Ch','China')
map.set('RS','Russia')
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

for (const key of myObj) {
    console.log(key);
    
}
