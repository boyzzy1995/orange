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
function notRead(){
  $("#btn-not-read").removeClass("btn btn-default");
  $("#btn-not-read").addClass("btn btn-danger");
  $("#btn-have-read").removeClass("btn btn-danger");
  $("#btn-have-read").addClass("btn btn-default");
}
function haveRead(){
  $("#btn-not-read").removeClass("btn btn-danger");
  $("#btn-not-read").addClass("btn btn-default");
  $("#btn-have-read").removeClass("btn btn-default");
  $("#btn-have-read").addClass("btn btn-danger");
}