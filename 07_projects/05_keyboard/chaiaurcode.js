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
