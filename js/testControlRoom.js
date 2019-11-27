var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://10.11.12.169:8002/api/v1/ExecuteMDX?%24expand=Axes(%24expand%3DHierarchies%2F%24ref%2CTuples(%24expand%3DMembers%2F%24ref))%2CCells",
  "method": "POST",
  "headers": {
    "Accepts": "accept: application/json;odata=nometadata",
    "content-type": "application/json",
    "authorization": "Basic QWRtaW46YXBwbGU=",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": "{\r\n    \"MDX\": \"SELECT {[DFM_Control].[Current Period]} ON ROWS, {[DFM_Value].[Value]} ON COLUMNS FROM [DFM_Control_Values]\"\r\n}"
}

$.ajax(settings).done(function (response) {
    var periodValue = response.Cells[0].Value;
    console.log(periodValue);
    $("#periodValue").val(periodValue);
});  
