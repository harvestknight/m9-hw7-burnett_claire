//change nav background color

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