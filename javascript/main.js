//change nav background color
//var li1 = document.getElementsByTagName('li')[3];
//var li2 = document.getElementsByTagName('li')[4];
//var li3 = document.getElementsByTagName('li')[8];
//var li4 = document.getElementsByTagName('li')[9];

//function changeColor () {
   //li2.classList.add('change-color');   
//};


//li1.addEventListener('mouseenter', changeColor);
//li2.addEventListener('mouseenter', changeColor);
//li3.addEventListener('mouseenter', changeColor);
//li4.addEventListener('mouseenter', changeColor);

//li1.addEventListener('mouseleave', changeColor);
//li2.addEventListener('mouseleave', changeColor);
//li3.addEventListener('mouseleave', changeColor);
//li4.addEventListener('mouseleave', changeColor);

//change section background color
//var storyBlock = document.getElementsByClassName('col-sm-6 col-md-4');

//console.log(storyBlock);

var link = document.getElementsByTagName('a');

function changeColor () {
    this.classList.toggle('change-color');
};

for (i=0; i < link.length; i++) {
    link[3].addEventListener('mouseenter', changeColor);
    link[3].addEventListener('mouseleave', changeColor);
};


for (i=0; i < link.length; i++) {
    link[4].addEventListener('mouseenter', changeColor);
    link[4].addEventListener('mouseleave', changeColor);
};

for (i=0; i < link.length; i++) {
    link[8].addEventListener('mouseenter', changeColor);
    link[8].addEventListener('mouseleave', changeColor);
};

for (i=0; i < link.length; i++) {
    link[9].addEventListener('mouseenter', changeColor);
    link[9].addEventListener('mouseleave', changeColor);
};