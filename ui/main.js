//counter code

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //create request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store the response in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list='';
                    for(var i=0;i<names.length;i++){
                      list += '<li>' + names[i] + '</li>';
                    }
                    var ul = document.getElementById('namelist');
                    ul.innerHTML = list;
                    }
                } 
            };
    //make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.vlaue; 
    request.open('GET','http://amulyareddy99.imad.hasura-app.io/submit-name?name='+ name,true);
    request.send(null);
    
};
