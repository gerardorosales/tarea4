$(document).ready(function(){

	$('a').click(function(){
	$('html, body').animate({
	    scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 700);
	    return false;
	});  


	$('#cor').click(function(evento){
     	$('.mapa').html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.858789263273!2d-64.18027143047176!3d-31.418016461123887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29b727ae33f%3A0xecb8325f8a2fb0f1!2sBar+de+la+Galeria!5e0!3m2!1ses!2sar!4v1417580816965' width='400' height='350' frameborder='0' style='border:0'></iframe>");

     });


	$('#caba').click(function(evento){

     	$('.mapa').html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.620381055642!2d-58.391800168147405!3d-34.59631698553235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x981f9d481d941910!2sGaler%C3%ADa+Bond+Street!5e0!3m2!1ses!2sar!4v1417580954609' width='400' height='350' frameborder='0' style='border:0'></iframe>");

     });

	$('#tuc').click(function(evento){

   	$('.mapa').html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.050619919322!2d-65.20449496871696!3d-26.83834223331036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xdcb8c93f65adfc13!2sInsignia!5e0!3m2!1ses!2sar!4v1417578939098' width='400' height='350' frameborder='0' style='border:0'></iframe>");
    });

	$('#mdq').click(function(evento){

     	$('.mapa').html("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.9719726530575!2d-57.54859968833265!3d-38.0011142064865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xec95ed02a17193f4!2sGaler%C3%ADa+Rivadavia!5e0!3m2!1ses!2sar!4v1417581023210' width='400' height='350' frameborder='0' style='border:0'></iframe>");

     });


});