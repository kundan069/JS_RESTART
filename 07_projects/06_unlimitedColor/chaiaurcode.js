let randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"

  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }

  document.querySelector('body').style = "background-color: " + color;
};

  let intervalId = null;
  document.querySelector('#start').addEventListener('click',function(){
    intervalId = setInterval(randomColor,100)
  },false)
  document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
  },false)

