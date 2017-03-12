// // //counter code

// var button = document.getElementById('counter');

// button.onclick = function(){
//     //create request to the counter endpoint
//     var request = new XMLHttpRequest();
    
//     //capture the response and store the response in a variable
//     reqest.onreadystatechange = function(){
//         if(request.readyState === XMLHttpRequest.DONE){
//             if(request.status === 200){
//                 var counter = request.resposeText;
//                 var span = document.getElementById('count');
//                 span.innerHTML=counter.toString();
//             }
//         } 
//     };
//     //make the request
//     request.open('GET','http://amulyareddy99.imad.hasura-app.io/counter',true);
//     request.send(null);
// };

var button = document.getElementById('counter');
var counter = 0;
button.onClick = function(){
    counter = counter + 1;
    var span = documente.getElementById('count');
    span.innerHTML = counter.toString();
};
// //submit name
// var nameInput=document.getElementById('name');
// var name=nameInput.vlaue; 
// var submit=document.getElementById('submit_btn');
// submit.onclick = function(){
//     var names=['name1','name2','name3','name4'];
//     var list='';
//     for(var i=0;i<names.length;i++){
//       list+= '<li>' + names[i] + '</li>';
//     }
//     var ul = document.getElementById('namelist');
//     ui.innerHTML = list;
// }


// console.log('Loaded!');

// // var element = document.getElementById('main-text');
// // element.innerHTML = 'new value';

// var img = document.getElementById('modi');
// marginLeft = 0;
// function moveRight(){
//     marginLeft += 1;
//     img.style.marginLeft = marginLeft + 'px';
// }
// img.onclick = function(){
//     var interval= setInterval(moveRight,50);
// };