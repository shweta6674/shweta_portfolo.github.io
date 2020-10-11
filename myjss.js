

$(document).ready(function(){
 
function blink_text(){
	$('.logo').fadeOut(100);
	$('.logo').fadeIn(100);
}
setInterval(blink_text,1000);
			   
$(".journey").mouseenter(function() {
    $(".screen").stop().show();
});

$(".journey, .screen").mouseleave(function() {
  if(!$(".screen").is(':hover')){
    $(".screen").hide();
  }
});


 });