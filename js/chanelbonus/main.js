//让内容高度自适应方法，传递参数依次为基准高度，要改变的高度，基准高度的值。
function heightAuto(basicHeightId,changeHeightId,basicHeight){
  var _changeHeight=$(changeHeightId).height();
  if(parseInt(basicHeight)>parseInt(_changeHeight)){
    $(changeHeightId).css("height", basicHeight);
  }
} 
$(document).ready(function(){ 
    heightAuto("body","#mycontainer",$("body").height()-0.2*$("body").height());
});
function guidercash(){
  $("#guider-cash").removeClass("btn btn-default");
  $("#guider-cash").addClass("btn btn-danger");
  $("#history-push").removeClass("btn btn-danger");
  $("#history-push").addClass("btn btn-default");
  $("#cash-push").removeClass("btn btn-danger");
  $("#cash-push").addClass("btn btn-default");
  
  $("#cash").css("display","block");
  $("#history").css("display","none");
  $("#push").css("display","none");
  $("#selectGuider").css("display","none");
}
function historypush(){
  $("#guider-cash").removeClass("btn btn-danger");
  $("#guider-cash").addClass("btn btn-default");
  $("#history-push").removeClass("btn btn-default");
  $("#history-push").addClass("btn btn-danger");
  $("#cash-push").removeClass("btn btn-danger");
  $("#cash-push").addClass("btn btn-default");

  $("#history").css("display","block");
  $("#cash").css("display","none");
  $("#push").css("display","none");
  $("#selectGuider").css("display","block");
  
}
function cashpush(){
  $("#guider-cash").removeClass("btn btn-danger");
  $("#guider-cash").addClass("btn btn-default");
  $("#history-push").removeClass("btn btn-danger");
  $("#history-push").addClass("btn btn-default");
  $("#cash-push").removeClass("btn btn-default");
  $("#cash-push").addClass("btn btn-danger");
  
  $("#push").css("display","block");
  $("#cash").css("display","none");
  $("#history").css("display","none");
  $("#selectGuider").css("display","none");
}