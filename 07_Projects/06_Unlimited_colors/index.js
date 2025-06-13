//random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const changeStartColor = () => {
  if(!intervalId){
    intervalId = setInterval(changeColor, 1000);
  }
 
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const changeStopColor = () => {
  clearInterval(intervalId);
  intervalId=null;
};

document.querySelector('#start').addEventListener('click', changeStartColor);
document.querySelector('#stop').addEventListener('click', changeStopColor);
