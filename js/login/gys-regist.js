$(document).ready(function(){
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
})
