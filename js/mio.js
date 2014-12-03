$(document).ready(function(){

	$('a').click(function(){
	$('html, body').animate({
	    scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 700);
	    return false;
	});  


});