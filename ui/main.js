console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'new value';

function moveLeft(){
    marginRight=0;
    marginRight+=10;
    img.style.marginRight = marginRight + 'px';
}

var img = document.getElementById('modi');
img.onclick = function(){
    var interval= setInterval(moveLeft,100)
    img.style.marginRight = '100px';
};