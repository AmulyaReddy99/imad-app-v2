console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML='new value';

var img = document.getElementById('modi');
img.onclick = function(){
    img.style.marginRight = '100px';
};