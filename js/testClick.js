/*$(function() {

  $('input[name="butAssignProd"]').click(function() {
    alert('Hello...!');
  });

  //press enter on text area..

  $('#txtSearchProdAssign').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
      $('input[name = butAssignProd]').click();
      return false;
    }
  });

});*/

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault();
        if(this.name === "Month"){
            alert("Enter key was pressed");
        }
        
    }
}

