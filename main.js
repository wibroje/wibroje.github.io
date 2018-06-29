$(document).ready(function(){
const log = console.log

  	M.AutoInit();

	$('.parallax').parallax();
	$(function() {  
	    var glower = $('#logoglow');
		    window.setInterval(function() {  
		        glower.toggleClass('active');
		    }, 2500);
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




