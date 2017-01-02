(function($) {

    $.fn.batweather = function(options) {

        //Yo' defaults
        var defaults = {  
            enterOn: 'click', //timer, konami-code, click
            delayTime: 1000 //time before bat flys on timer mode
            };  
        
        //Extend those options
        var options = $.extend(defaults, options); 
	
        return this.each(function() {

			var _this = $(this);

			
			//Bat Weather Vars
			var batWeatherImageMarkup = '<img id="batWeather" style="display: none" src="img/batWeather.gif" />'
			var locked = false;
			
			//Append BatWeather and Style
			$('body').append(batWeatherImageMarkup);
			var batWeather = $('#batWeather').css({
				"position":"fixed",
				"bottom": "-1000px",
				"right" : "0",
				"display" : "block"
			});
			
			// Animating Code
			function init() {
				locked = true;

								
				// Movement Hilarity	
				batWeather.animate({
					"bottom" : "0"
				}, function() { 			
					$(this).animate({
						"bottom" : "130px"
					}, 100, function() {
						var offset = (($(this).position().left)+400);
						$(this).delay(300).animate({
							"right" : offset
						}, 2200, function() {
							batWeather = $('#batWeather').css({
								"bottom": "-1000px",
								"right" : "0"
							});
							locked = false;
						})
					});
				});
			}
			
			
			//Determine Entrance
			if(options.enterOn == 'timer') {
				setTimeout(init, options.delayTime);
			} else if(options.enterOn == 'click') {
				_this.bind('click', function(e) {
					e.preventDefault();
					if(!locked) {
						init();
					}
				})
			} else if(options.enterOn == 'konami-code'){
			    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
			    $(window).bind("keydown.batWeatherz", function(e){
			        kkeys.push( e.keyCode );
			        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
			        	init();
			        	$(window).unbind('keydown.batWeatherz');
			        }
			    }, true);
	
			}
			
        });//each call
    }//orbit plugin call
})(jQuery);

