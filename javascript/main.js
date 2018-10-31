//change nav background color
var link = document.querySelectorAll('.tab-link a');

function changeColor () {
    this.classList.toggle('change-color');
};

for (i=0; i < link.length; i++) {
    link[i].addEventListener('mouseenter', changeColor);
    link[i].addEventListener('mouseleave', changeColor);
};

//location dropdown
var locationLink = document.querySelectorAll('.locations-tab');

function showDiv() {
    this.nextElementSibling.classList.toggle('show-div');
};

for (i=0; i < link.length; i++) {
 locationLink[i].addEventListener('click', showDiv);
};


//change section background color
var storyBlock = document.getElementsByTagName('section');

function changeOpacity () {
    this.classList.toggle('opacity');
};

for (i=0; i < storyBlock.length; i++) {
 storyBlock[i].addEventListener('mouseenter', changeOpacity);
 storyBlock[i].addEventListener('mouseleave', changeOpacity);
};
