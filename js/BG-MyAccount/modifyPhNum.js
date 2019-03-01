//让内容高度自适应方法，传递参数依次为基准高度，要改变的高度，基准高度的值。
function heightAuto(basicHeightId,changeHeightId,basicHeight){
	var _changeHeight=$(changeHeightId).height();
	if(parseInt(basicHeight)>parseInt(_changeHeight)){
		$(changeHeightId).css("height", basicHeight);
	}
} 
$(document).ready(function(){ 
	heightAuto("body","#mycontainer",$("body").height()-0.15*$("body").height());
	$("#btnYzm").click(function(){
		if($(this).text()=="获取验证码"){
			var time=59;
			$(this).attr("disabled",true);
			$("#btnYzm").text('60秒后再次获取');
            var icount=setInterval(function(){
            	$("#btnYzm").text(time+'秒后再次获取');
            	if(time==0){
            		$("#btnYzm").text('获取验证码');
            		$("#btnYzm").attr("disabled",false);
            		clearInterval(icount);
            	}
            	time=time-1;
            },1000);
		}
	})
});
