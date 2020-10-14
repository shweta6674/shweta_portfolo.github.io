//js file for js properties in jquery


$(document).ready(function(){

/*blinking of my logo on naviagtion bar*/
function blink_text(){
	$('.logo').fadeOut(100);
	$('.logo').fadeIn(100);
}
setInterval(blink_text,1000);
		
/*Seeing the testimonial on hover on the text*/		
$(".journey").mouseenter(function() {
    $(".screen").stop().show();
});

$(".journey, .screen").mouseleave(function() {
  if(!$(".screen").is(':hover')){
    $(".screen").hide();
  }
});


 });
