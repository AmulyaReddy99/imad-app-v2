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
                
            } else if(request.status === 403){
                 alert('username/password is incorrect');
            } else if(request.status === 500){
                alert('something went wrong on the server');
            }
            
        }
 
};
    //make the request
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    console.log(username);
    console.log(password);
    request.open('POST','http://amulyareddy99.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username:"username", password:"password"}));
    
};
