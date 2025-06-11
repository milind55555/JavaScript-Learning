const form=document.querySelector('form');
// this will give empty
// const height= parseInt(document.querySelector("#height").value);

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height=parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const results=document.querySelector("#results");

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML="Please enter valid input height";
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML="Please enter valid input weight";
  }else{
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    
    if(BMI < 18.6){
      results.innerHTML='Under Weight'
    }else if(BMI >= 18.6 && BMI <24.9){
      results.innerHTML='Normal range'
    }else{
      results.innerHTML='OverWeight'
    }
  }


})