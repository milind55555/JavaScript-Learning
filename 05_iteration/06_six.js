const coding =["java","js","cpp","py","c"]
const values=coding.forEach((item)=>{
// console.log(item);  //foreach doesn't return value give undefined
return item

})

console.log(values);



const mynum =[1,2,3,4,5,6,7,8,9,10]

const newNum=mynum.filter((num)=> num > 4) //give condition
console.log(newNum);

const newNum1 = []
mynum.forEach((num)=>{
    if(num > 4){
        newNum1.push(num)
        
    }

})
console.log(newNum1);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBook =books.filter((bk)=> bk.genre === 'History')
  const userBook1 = books.filter((bk)=> bk.publish >=2000)
  const userBook2 = books.filter((bk)=> {
    return  bk.publish >=2000  && bk.genre === 'History'}) //if scope is in filter use { with retur statement}
  console.log(userBook); 
  console.log(userBook1);
  console.log(userBook2);
  
  
  


