//让内容高度自适应方法，传递参数依次为基准高度，要改变的高度，基准高度的值。
function heightAuto(basicHeightId,changeHeightId,basicHeight){
  var _changeHeight=$(changeHeightId).height();
  if(parseInt(basicHeight)>parseInt(_changeHeight)){
    $(changeHeightId).css("height", basicHeight);
  }
} 
$(document).ready(function(){ 
    heightAuto("body","#mycontainer",$("body").height()-0.2*$("body").height());
    
    $("#checkbox0").click(function(){
    	if($("#checkbox0").prop("checked")){
    		$("input[type='checkbox']").prop("checked",true);
    	}else{
    		$("input[type='checkbox']").prop("checked",false); 
    	}
    })

});
function showmessage(){
  $(".bottom-word").css("display","block");
}