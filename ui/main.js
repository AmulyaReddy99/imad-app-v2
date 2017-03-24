//username and password

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //create request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store the response in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                alert('logged in successfully');
                
            } else if(request.status == 403){
                 alert('username/password is incorrect');
            } else if(request.status == 500){
                alert('something went wrong on the server');
            }
                    }
                } 
            };
    //make the request
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    console.log(username);

    request.open('POST','http://amulyareddy99.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({username:"username", password:"password"}));
    
};

//submit name
// var submit = document.getElementById('submit_btn');
// submit.onclick = function(){
//---------------------------------------------------------
//     var names = request.responseText;
//     names = JSON.parse(names);
//     var list = '';
//     for(var i=0; i<names.length ; i++){
//         list+='<li>' + names[i] + '</li>';
//     }
//     var ul = document.getElementById('namelist');
//     ul.innerHTML = list;
//---------------------------------------------------------
//     var nameInput = document.getElementById('name');
//     var name = nameInput.vlaue; 
//     request.open('GET','http://amulyareddy99.imad.hasura-app.io/submit-name?name='+ name,true);
//     request.send(null);

// };

// var button = document.getElementById('counter');
// var counter = 0;
// button.onclick = function(){
//     counter = counter + 1;
//     var span = document.getElementById('count');
//     span.innerHTML = counter.toString();
// };

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