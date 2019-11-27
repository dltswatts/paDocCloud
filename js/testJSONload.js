//var port = document.getElementById("port").value;
var urld = "data/paDoc_pro.json";
var urlu = "data/update.json"

var adminServer = '192.92.2.12';
var apiPort = '8051';

/*$('#paDocSetup').on("click", function(){
    var ajaxhttp = new XMLHttpRequest();
    var port = document.getElementById("port").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var encryptedUserData = username + ":" + password;
//    var encryptedUserData = username + ":" + password + ":" + "DC";
    ajaxhttp.open("GET", urld, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onload = function(){
        if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
            var jcontent = JSON.parse(ajaxhttp.responseText);
            var baseUrl = 'http://' + adminServer + ':' + port + '/api/v1/Processes';
            for(var i = 0; i < jcontent.length; i++){
                var proName = jcontent[i].Name;
                execCreate(baseUrl, encryptedUserData, proName, JSON.stringify(jcontent[i]));    
            }
        }
    }
    ajaxhttp.send();
});

$('#paDocDelete').on("click", function(){
    var ajaxhttp = new XMLHttpRequest();
    var port = document.getElementById("port").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var encryptedUserData = username + ":" + password;
//    var encryptedUserData = username + ":" + password + ":" + "DC";
    ajaxhttp.open("GET", urld, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onload = function(){
        if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
            var jcontent = JSON.parse(ajaxhttp.responseText);
            var baseUrl = 'http://' + adminServer + ':' + port + '/api/v1/Processes';
            for(var i = 0; i < jcontent.length; i++){
                var proName = jcontent[i].Name;
                execDelete(baseUrl, encryptedUserData, proName);    
            }
        }
    }
    ajaxhttp.send();
});*/

$('#paDocUpdate').on("click", function(){
    alert('You clicked!');
//    var ajaxhttp = new XMLHttpRequest();
//    var port = document.getElementById("port").value;
//    var username = document.getElementById("username").value;
//    var password = document.getElementById("password").value;
//    var processUpdate = document.getElementById("proUp").value;
//    var encryptedUserData = username + ":" + password;
////    var encryptedUserData = username + ":" + password + ":" + "DC";
//    ajaxhttp.open("GET", urlu, true);
//    ajaxhttp.setRequestHeader("content-type", "application/json");
//    ajaxhttp.onload = function(){
//        if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
//            var jcontent = JSON.parse(ajaxhttp.responseText);
//            var baseUrl = 'http://' + adminServer + ':' + port + '/api/v1/Processes';
//            for(var i = 0; i < jcontent.length; i++){
//                var proName = jcontent[i].Name;
//                execUpdate(baseUrl, encryptedUserData, processUpdate, JSON.stringify(jcontent[i]));    
//            }
//        }
//    }
//    ajaxhttp.send();
});

/*function execCreate(baseUrl, encryptedUserData, proName, jsonData){    
           $.ajax(
            {
              "async": true,
              "crossDomain": true,
              "url": baseUrl,
              "method": "POST",
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
}

function execDelete(baseUrl, encryptedUserData, proName){    
           $.ajax(
            {
              "async": true,
              "crossDomain": true,
              "url": baseUrl + '%28%27' + proName + '%27%29',
              "method": "DELETE",
              "headers": {
                "authorization": 'Basic ' + btoa(encryptedUserData),                
//                "authorization": 'CAMNamespace ' + btoa(encryptedUserData),
                "content-type": "application/json",
                "cache-control": "no-cache",
              },
              "processData": false
//              "data": jsonData
//              "success": function(statusText, xhr){
//                  var code = xhr.status;
//                  console.log(code);
//              }
            }
            ).done(function (response) {
                console.log(response);
                $("#proList").empty();
            }); 
}

function execUpdate(baseUrl, encryptedUserData, processUpdate, jsonData){    
           $.ajax(
            {
              "async": true,
              "crossDomain": true,
              "url": baseUrl+ '%28%27' + processUpdate + '%27%29',
              "method": "PATCH",
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
                      successUp(processUpdate);
//                  } else {
//                      failure(proName);
//                  }
              },
              "error": function(data, statusText, xhr){
                  var code = xhr.status;
                  console.log(code);
                  failureUp(processUpdate);
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
}*/

/*function success(proName){
    var output = '<li>' + proName + '<i class="green checkmark icon"></i></li>';
    $('#proList').append(output); 
}

function failure(proName){
    var output = '<li>' + proName + '<i class="red remove icon"></i></li>';
    $('#proList').append(output); 
}

function successUp(processUpdate){
    var outputUp = '<li>' + processUpdate + '<i class="green checkmark icon"></i></li>';
    $('#proListUp').append(outputUp); 
}

function failureUp(processUpdate){
    var outputUp = '<li>' + processUpdate + '<i class="red remove icon"></i></li>';
    $('#proListUp').append(outputUp); 
}*/