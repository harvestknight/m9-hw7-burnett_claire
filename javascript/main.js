//change nav background color

var link = document.querySelectorAll('.tab-link a');

function changeColor () {
    this.classList.toggle('change-color');
};

for (i=0; i < link.length; i++) {
    link[i].addEventListener('mouseenter', changeColor);
    link[i].addEventListener('mouseleave', changeColor);
};

console.log(link)


//location dropdown
var bioDiv = document.getElementsByClassName('hide-div');

function showDiv() {
    this.nextElementSibling.classList.toggle('show-div');
};


//change section background color
var storyBlock = document.getElementsByTagName('section');

function changeOpacity () {
    this.classList.toggle('opacity');
};

for (i=0; i < storyBlock.length; i++) {
    storyBlock[1].addEventListener('mouseenter', changeOpacity);
    storyBlock[1].addEventListener('mouseleave', changeOpacity);
};

for (i=0; i < storyBlock.length; i++) {
    storyBlock[2].addEventListener('mouseenter', changeOpacity);
    storyBlock[2].addEventListener('mouseleave', changeOpacity);
};

for (i=0; i < storyBlock.length; i++) {
    storyBlock[3].addEventListener('mouseenter', changeOpacity);
    storyBlock[3].addEventListener('mouseleave', changeOpacity);
};

for (i=0; i < storyBlock.length; i++) {
    storyBlock[4].addEventListener('mouseenter', changeOpacity);
    storyBlock[4].addEventListener('mouseleave', changeOpacity);
};

for (i=0; i < storyBlock.length; i++) {
    storyBlock[5].addEventListener('mouseenter', changeOpacity);
    storyBlock[5].addEventListener('mouseleave', changeOpacity);
};

for (i=0; i < storyBlock.length; i++) {
    storyBlock[6].addEventListener('mouseenter', changeOpacity);
    storyBlock[6].addEventListener('mouseleave', changeOpacity);
};

