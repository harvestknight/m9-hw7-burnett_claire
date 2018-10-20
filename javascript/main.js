var li1 = document.getElementsByTagName('li')[3];
var li2 = document.getElementsByTagName('li')[4];
var li3 = document.getElementsByTagName('li')[8];
var li4 = document.getElementsByTagName('li')[9];

console.log(li1, li2, li3, li4);

function changeColor () {
   li2.classList.add('change-color');   
};


li1.addEventListener('mouseenter', changeColor);
li2.addEventListener('mouseenter', changeColor);
li3.addEventListener('mouseenter', changeColor);
li4.addEventListener('mouseenter', changeColor);

li1.addEventListener('mouseleave', changeColor);
li2.addEventListener('mouseleave', changeColor);
li3.addEventListener('mouseleave', changeColor);
li4.addEventListener('mouseleave', changeColor);