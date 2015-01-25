// JavaScript Document
$(document).ready(function(){
  $("#footerMenu").click(function(){
  $(".footer-menu").toggle();
 
  });
});

var lis=$(".sec-imgBox");
	for(var i = 0;i<lis.length;i++){
		if(i%2 == 0){
			lis.eq(i).css({"right":"1000px"});
			lis.eq(i).animate({"right":"0px"},200*i+1000,"swing");
		}else{
			lis.eq(i).css({"left":"1000px"});
			lis.eq(i).animate({"left":"0px"},200*i+1000,"swing");
		}
	}