let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/
let img=document.querySelector('img');
img.onclick=function(){
    if(img.getAttribute("src") === "images/firefox-icon.png")
        img.setAttribute('src',"images/photo2.jpeg");

    else 
        img.setAttribute('src',"images/firefox-icon.png");
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }