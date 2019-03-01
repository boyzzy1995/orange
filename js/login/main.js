$(document).ready(function(){

});

function lchangediv(){
	$("#btn-regist").removeAttr("disabled");
	$("#btn-regist").addClass("btn-not-click");
	$("#btn-login").removeClass("btn-not-click");
	$("#btn-login").addClass("btn-click");
	$("#btn-login").attr("disabled",true);
	$("#content-login").css("display","block");
	$("#content-regist").css("display","none");
	$(".regist-body").removeClass("regist-body");
	$(".regist-body").addClass("login-body");
	$("html").css("height","100%");
}
function rchangediv(){
	$("#btn-login").removeAttr("disabled");
	$("#btn-login").addClass("btn-not-click");
	$("#btn-regist").removeClass("btn-not-click");
	$("#btn-regist").addClass("btn-click");
	$("#btn-regist").attr("disabled",true);
	$("#content-login").css("display","none");
	$("#content-regist").css("display","block");
	/*$(".login-body").removeClass("login-body");*/
	$(".login-body").addClass("regist-body");
	$("html").css("height","1073px");
}
function nextpage(){
	window.location.href="../../page/供应商注册.html";
}