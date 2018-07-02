$(document).ready(function(){
const log = console.log
  	M.AutoInit();

  	// $(window).on("load", function() {
		preloaderFadeOutTime = 5000;
		function hidePreloader() {
		var preloader = $('.spinner-wrapper');
		preloader.fadeOut(preloaderFadeOutTime);
		}
		hidePreloader();
	// });

  	$('body').removeClass('fade-out');


	$('.parallax').parallax();
	$(function() {  
	    var glower = $('.logoglow');
		    window.setInterval(function() {  
		        glower.toggleClass('active');
		    }, 5000);
	});

	$.ajax({
		url: 'https://icanhazdadjoke.com/slack',
		method: 'GET',
		success: function(response){
			const data = response.attachments[0].text;
			log(data)
			$('.dadjoke').html("<h3>A random dad joke for you:</h3><br><p>"+data+"</p>")
		}
	})

})




