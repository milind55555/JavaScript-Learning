const coding =["java","js","cpp","py","c"]
coding.forEach( function (item){
    console.log(item);
    
})
// coding.forEach( function (item){
//     console.log(item);         callback function(a){log(a)}
    
// })

coding.forEach( (item)=>{
console.log(item);

})

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
console.log(item,index,arr);

})

const mycoding=[
    {
        lng:"javascript",
        lngfile:"js"
    },
    {
        lng:"C++",
        lngfile:"CPP"
    },
    {
        lng:"Python",
        lngfile:"py"
    },
]


mycoding.forEach((item)=>{
console.log(item.lngfile);

})