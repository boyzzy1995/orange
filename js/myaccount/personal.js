//让内容高度自适应方法，传递参数依次为基准高度，要改变的高度，基准高度的值。
function heightAuto(basicHeightId,changeHeightId,basicHeight){
  var _changeHeight=$(changeHeightId).height();
  if(parseInt(basicHeight)>parseInt(_changeHeight)){
    $(changeHeightId).css("height", basicHeight);
  }
} 
$(document).ready(function(){ 
    heightAuto("body","#mycontainer",$("body").height()-0.25*$("body").height());
});
function modify(){
	window.location.href="我的账户-修改个人信息.html";
}
function modifyPassword(){
	window.location.href="我的账户-修改登入密码.html";
}
function modifyPhNum(){
	window.location.href="我的账户-修改手机号.html";
} 