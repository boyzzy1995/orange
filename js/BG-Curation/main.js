//让内容高度自适应方法，传递参数依次为基准高度，要改变的高度，基准高度的值。
function heightAuto(basicHeightId,changeHeightId,basicHeight){
  var _changeHeight=$(changeHeightId).height();
  if(parseInt(basicHeight)>parseInt(_changeHeight)){
    $(changeHeightId).css("height", basicHeight);
  }
} 
function footerAuto(){
$("#footer-div1").css("width",$("#picture4").width());
$("#footer-div1").css("margin-left",150);
}
$(document).ready(function(){ 
    heightAuto("body","#mycontainer",$("body").height()-0.15*$("body").height());
    footerAuto();
    $("#picture").change(function(){
        var current_pic=this.files[0];
        preview_picture(current_pic);
      });
});
function openPcWeb(){
  $("#btn-not-read").removeClass("btn btn-default");
  $("#btn-not-read").addClass("btn btn-danger");
  $("#btn-have-read").removeClass("btn btn-danger");
  $("#btn-have-read").addClass("btn btn-default");
  $("#mobile_web").css("display","none");
  $("#pc_web").css("display","block");
  $("#tip-words").text("轮播图建议尺寸：1080*120px");
  
}
function openMobileWeb(){
  $("#btn-not-read").removeClass("btn btn-danger");
  $("#btn-not-read").addClass("btn btn-default");
  $("#btn-have-read").removeClass("btn btn-default");
  $("#btn-have-read").addClass("btn btn-danger");
  $("#mobile_web").css("display","block");
  $("#pc_web").css("display","none");
  $("#tip-words").text("轮播图建议尺寸：750*270px");
}
function preview_picture(pic) {
  var r=new FileReader();
  r.readAsDataURL(pic);
  r.onload=function(e){
    $("#pic").attr("src",this.result).show();
  };
}