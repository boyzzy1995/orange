//让内容高度自适应方法，传递参数依次为基准高度，要改变的高度，基准高度的值。
function heightAuto(basicHeightId,changeHeightId,basicHeight){
  var _changeHeight=$(changeHeightId).height();
  if(parseInt(basicHeight)>parseInt(_changeHeight)){
    $(changeHeightId).css("height", basicHeight);
  }
} 
$(document).ready(function(){ 
 heightAuto("body","#mycontainer",$("body").height()-0.00*$("body").height());
 /*heightAuto("#itable","#mycontainer",$("#itable").height()+150);*/
      $("#picture").change(function(){
        var current_pic=this.files[0];
        preview_picture(current_pic);
      });
    });
function preview_picture(pic) {
  var r=new FileReader();
  r.readAsDataURL(pic);
  r.onload=function(e){
    $("#pic").attr("src",this.result).show();
  };
}
function changespan(){
  $("#inputtxt").css("display","inline-block");
  $("#labletxt").css("display","none");
  $("#spantxt").css("display","none");
  $("#inputtxt").focus();
}
function txtblur(){
  var temp_txt=$("#inputtxt").val();
  $("#labletxt").text(temp_txt);
  $("#inputtxt").css("display","none");
  $("#labletxt").css("display","inline-block");
  $("#spantxt").css("display","inline-block");
}
function show(){
  alert("1");
}
