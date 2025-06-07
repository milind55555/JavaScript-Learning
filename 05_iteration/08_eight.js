const mynum = [1,2,3,4]

const initialvalue =0

const myTotal = mynum.reduce(function(acc,current){
    console.log(`acc is ${acc} and current is ${current}`);
    
    return acc + current
},initialvalue)
console.log(myTotal);

const mytotal1 =mynum.reduce( (acc,current)=> acc+current,0)
console.log(mytotal1);

const shoppingcart = [
    {
        itemName:"JS course",
        price:999
    },
    {
        itemName:"Java course",
        price:1999
    },
    {
        itemName:"SpringBoot course",
        price:2999
    },
    {
        itemName:"Python course",
        price:3999
    },
]
const totalShoppingPrice = shoppingcart.reduce((acc,current)=> acc+current.price,0)
console.log(totalShoppingPrice);




