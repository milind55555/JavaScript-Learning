//array
const myArr = [0,1,2,3,4,5,true,"Milind"]
const heros = ["superman","spiderman"]
const arr1 =new Array("Brother","Betryal")
console.log(myArr[6]);
console.log(arr1[0]);

//array method
myArr.push(100)
myArr.push(101)
myArr.pop()

myArr.unshift(188) //add 1st index
myArr.shift() //remove last element

console.log(myArr.includes('kk'));

const newArr1 = myArr.join()


console.log(myArr);
console.log(newArr1);
console.log(typeof newArr1);


//slice -do not change original array (last index is exclude),splice=>  last index include ,change in original array

console.log("A  ", myArr);
const myn1 =myArr.slice(1,4);
console.log(myn1);
console.log("B ",myArr);


console.log("A  ", myArr);
const myn2 =myArr.splice(1,4);
console.log(myn2);
console.log("B ",myArr);







