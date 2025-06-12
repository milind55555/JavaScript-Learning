
fetch("https://catfact.ninja/fact")
.then(res => res.json())
.then(data => console.log(data))
.catch(()=> console.log('Error fetching data'));

async function getCatFact(){
  const data = await fetch("https://catfact.ninja/fact")
  const json= await data.json();
    console.log(json);

}
getCatFact();