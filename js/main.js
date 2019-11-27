//var urls = "data/paDoc_pro.json"
var urls = "data/paDoc_pro_short.json"
var urld = "data/update.json";
var adminServer = document.getElementById("AdServer").value;
var TM1Server = document.getElementById("TM1Server").value;

$('.dropdown-toggle').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true,true).slideDown(300);
});

$('.dropdown-toggle').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true,true).slideUp(200);
});

window.onload=function(){
    document.getElementById("paDocSetup").addEventListener("click", paDocSetup);
    document.getElementById("paDocUpdate").addEventListener("click", paDocUpdate);
    document.getElementById("paDocDelete").addEventListener("click", paDocDelete);
}
    
function login(adminServer,TM1Server) {
   var xhr = new XMLHttpRequest();
//   var adminServer = document.getElementById("AdServer").value;
//   var TM1Server = document.getElementById("TM1Server").value;
   var TM1Port = '9510';
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   xhr.open("POST", "http://" + adminServer + ":"+TM1Port+"/tm1web/dwrx/jsonp/TM1Service/login", true);
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhr.onload = function() {
      var response = JSON.parse(xhr.responseText).reply;

      if(response != null) {
         var sessionToken = response.sessionToken;
         console.log("Session token: " + sessionToken);
 //        alert("Session Token is " + sessionToken);
         
      }
      else {
//         console.error("Login failed.");
         console.log(response);
//         alert("Login failed");
      }
   }

   var params = "param0="+adminServer+"&param1="+apiPort+"&param2="+username+"&param3="+password;

   xhr.send(params);
    console.log(params);

}

function paDocSetup(){
    var ajaxhttp = new XMLHttpRequest();
    var adminServer = document.getElementById("AdServer").value;    
    var apiPort = document.getElementById("TM1Server").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var encryptedUserData = username + ":" + password; 
//    var encryptedUserData = username + ":" + password + ":" + "DC";
    ajaxhttp.open("GET", urls, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onload = function(){
        if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
            var jcontent = JSON.parse(ajaxhttp.responseText);
            var baseUrl = 'http://' + adminServer + ':' + apiPort + '/api/v1/Processes';
            for(var i = 0; i < jcontent.length; i++){
                var proName = jcontent[i].Name;
                execCreate(baseUrl, encryptedUserData, proName, JSON.stringify(jcontent[i]));
                console.log(baseUrl, proName)
            }
        }
    }
    ajaxhttp.send();
};

function paDocDelete(){
    var ajaxhttp = new XMLHttpRequest();
    var adminServer = document.getElementById("AdServer").value;
    var apiPort = document.getElementById("TM1Server").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var encryptedUserData = username + ":" + password;
//    var encryptedUserData = username + ":" + password + ":" + "DC";
    ajaxhttp.open("GET", urld, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onload = function(){
        if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
            var jcontent = JSON.parse(ajaxhttp.responseText);
            var baseUrl = 'http://' + adminServer + ':' + apiPort + '/api/v1/Processes';
            for(var i = 0; i < jcontent.length; i++){
                var proName = jcontent[i].Name;
                execDelete(baseUrl, encryptedUserData, proName);    
            }
        }
    }
    ajaxhttp.send();
};

function paDocUpdate(){
    var ajaxhttp = new XMLHttpRequest();
    var adminServer = document.getElementById("AdServer").value;
    var apiPort = document.getElementById("TM1Server").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
//    var encryptedUserData = username + ":" + password + ":" + "DC";
    var encryptedUserData = username + ":" + password;
    ajaxhttp.open("GET", urld, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onload = function(){
        if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
            var jcontent = JSON.parse(ajaxhttp.responseText);
            var baseUrl = 'http://' + adminServer + ':' + apiPort + '/api/v1/Processes';
            for(var i = 0; i < jcontent.length; i++){
                var proName = jcontent[i].Name;
                execUpdate(baseUrl, encryptedUserData, proName, JSON.stringify(jcontent[i])); 
 //               console.log(baseUrl + '(' + proName + ')', proName, JSON.stringify(jcontent[i]))
            }
        };
    }
    ajaxhttp.send();
};

function execCreate(baseUrl, encryptedUserData, proName, jsonData){    
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
                  if(code == 201){
                      success(proName);
                  } else {
                      failure(proName);
                  }
              },
              "error": function(data, statusText, xhr){
                  var code = xhr.status;
                  console.log(baseUrl, proName);
//                  failure(proName);
              }
            }
            ).done(function (response) {
                console.log(response);
               if(xhr.status == 201){
                  var output = '<li>' + proName + '<i class="green checkmark icon"></i></li>'; 
               } else {
                  var output = '<li>' + proName + '<i class="red remove icon"></i></li>';   
               }
                
                $('#proList').append(output);               
            }); 
};

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
              "processData": false,
              "data": jsonData,
              "success": function(statusText, xhr){
                  var code = xhr.status;
                  console.log(code);
              }
            });
};

function execUpdate(baseUrl, encryptedUserData, proName, jsonData){
            var urlUp = baseUrl + '%28%27' + proName + '%27%29';
           $.ajax(
            {
              "async": true,
              "crossDomain": true,
              "url": urlUp,
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
                  if(code == 201){
                      success(proName);
                  } else {
                      failure(proName);
                      console.log("failed", code)
                  }
              },
              "error": function(data, statusText, xhr){
                  var code = xhr.status;
                  console.log(urlUp, code);
//                  failure(proName);
              }
            }
            ).done(function (response) {
                console.log(response);
               if(xhr.status == 201){
                  var output = '<li>' + proName + '<i class="green checkmark icon"></i></li>'; 
               } else {
                  var output = '<li>' + proName + '<i class="red remove icon"></i></li>';   
               }
                
                $('#proListUp').append(output);               
            }); 
};