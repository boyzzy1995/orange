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
(function(){
	var file={
		upload:function(e){
    		 var file = e.target.files[0];//获取File对象，这里是上传单张图片，[0]代表第一张图片。如果多张，就是一个var file = e.target.files;
    var type = file.type.split('/')[0];//按照惯例，不应该由前端判断格式，因为这里是根据后缀名判断的，修改后缀名仍旧可以上传，理应由后端根据文件格式来判断。
    if (type !='image') {
    	alert('请上传图片');
    	return;
    }
}
}
})