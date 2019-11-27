var urld = "data/update.json";

var adminServer = '192.92.2.10';
var apiPort = '8004';

$('#paUpdate').on("click", function(){
    alert('You clicked!')
/*    var ajaxhttp = new XMLHttpRequest();
    var port = document.getElementById("port").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
//    var encryptedUserData = username + ":" + password + ":" + "DC";
    var encryptedUserData = username + ":" + password;
    ajaxhttp.open("PUT", urld, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onload = function(){
        if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
            var jcontent = JSON.parse(ajaxhttp.responseText);
            var baseUrl = 'http://' + adminServer + ':' + port + '/api/v1/Processes';
            for(var i = 0; i < jcontent.length; i++){
                var proName = jcontent[i].Name;
                execCreate(baseUrl, encryptedUserData, proName, JSON.stringify(jcontent[i]));    
            }
        };
    }
    ajaxhttp.send();*/
});

function execCreate(baseUrl, encryptedUserData, proName, jsonData){    
           $.ajax(
            {
              "async": true,
              "crossDomain": true,
              "url": baseUrl,
              "method": "PUT",
              "headers": {
                "authorization": 'Basic ' + btoa(encryptedUserData),                
//                "authorization": 'CAMNamespace ' + btoa(encryptedUserData),
                "content-type": "application/json",
                "cache-control": "no-cache",
              },
              "processData": false,
              "data": jsonData,
              "success": function(data, statusText, xhr){
                  var code = xhr.status;
                  console.log(code);
//                  if(code == 201){
                      success(proName);
//                  } else {
//                      failure(proName);
//                  }
              },
              "error": function(data, statusText, xhr){
                  var code = xhr.status;
                  console.log(code);
                  failure(proName);
              }
            }
            ).done(function (response) {
                console.log(response);
//               if(xhr.status == 200){
//                  var output = '<li>' + proName + '<i class="green checkmark icon"></i></li>'; 
//               } else {
//                  var output = '<li>' + proName + '<i class="red remove icon"></i></li>';   
//               }
//                
//                $('#proList').append(output);               
            }); 
};