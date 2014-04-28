$(document).ready(function(){

var $window = $(window);
var velocity = 0.3;
var velocityContenido = 0.6;
var initPosLogo = 266;

	function update(){ 
	  	var pos = $window.scrollTop();
  	
	  	$window.scroll(function(){
	  		var $logo = $("#logo-intro");
	 		// will animate automatically
			$logo.animate({top: '-300px'},2500, function(){

				$("#page-header").slideDown("slow", function(){
					$("main").fadeIn("fast");
				});
			});

			var pos = $window.scrollTop();
		  	// console.log(pos);
		  	$('.js-bg-img').each(function() { 
			  	var $element = $(this); 
			  	var height = $element.height(); 
			  	$(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
		  	});
	  		
		});
	  	

  
	};



$window.bind('scroll', update);

});