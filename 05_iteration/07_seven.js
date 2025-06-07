const mynum=[1,2,3,4,5,6,7,8,9,10]

const newnum = mynum.map((num)=> num + 10) //automatic return new array
const newnum1 = mynum.map((num)=> { return num + 10})
console.log(newnum);
console.log(newnum1);

//chaining
const af=mynum
        .map((num)=> num * 10 )
        .map((num)=> num +1)
        .filter((num)=> num >= 40)  


        console.log(af);
        