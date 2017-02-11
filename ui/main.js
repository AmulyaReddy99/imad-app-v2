console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'new value';

var img = document.getElementById('modi');
marginLeft = 0;
function moveRight(){
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval= setInterval(moveRight,100);
};