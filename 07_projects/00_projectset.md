# Project 5 Solution

```JavaScript

console.log('Project 5');

let tag = document.createElement('h1');
tag.textContent = "";
document.querySelector('#insert').appendChild(tag);

let keyValue;

document.addEventListener(
  'keydown',
  function (e) {
    console.log(e);
    if(e.key != " "){
      keyValue = e.key;
    }
    else if(e.code){
      keyValue = e.code;
    }
    tagCreate();
  },
  false
);



const tagCreate = function(){
if (keyValue) {
  tag.textContent = keyValue;
}
document.querySelector('h1').innerHTML = keyValue;
}


```


# Project 6 Solution

```javascript

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



```