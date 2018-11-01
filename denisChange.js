console.log('Begin');
window.onload = (function() {
	//denisChange 
	var main = function($) { 
		console.log('run');
		var self = $.denisChange = new function(){};
		
		$.extend(self, {
			videos: [
				'https://drive.google.com/file/d/1XAxM2sMbvfC4JQydbvkVSlnZX_e_DNR3/preview'
			],
			denisChangeImgs : [
				'https://image.ibb.co/cpApa0/denis-Emoji.png',
				'https://image.ibb.co/h6JaF0/denis-Kart.jpg',
				'https://image.ibb.co/cUHD2f/denisEtq.png',
				'https://image.ibb.co/c8gvF0/denis-Office.png',
				'https://image.ibb.co/dRTmNf/denis-Incrivel.png',
				'https://image.ibb.co/mYMj8L/denis-Joke-Fail.png',
				'https://image.ibb.co/mKg6Nf/denis-Rolando-Lero.png',
				'https://image.ibb.co/dhUt2f/denis-Heli.png',
				'https://image.ibb.co/caM6Nf/denis-Jackson.png',
				'https://image.ibb.co/f4SP8L/denis-Gerente-Outback.png',
				'https://image.ibb.co/no50hf/denis-Gump.png',
				'https://image.ibb.co/fSvcTL/denis-Gesso.png',
				'https://image.ibb.co/fzDaF0/denis-Uber.jpg'
			],
			handleVideos : function (lstVideos, time){
				$.each($('video'), function(i, item){
					if($.inArray($(item).attr('src'), lstVideos) == -1){
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							$iframe = $('<iframe class="video-stream html5-main-video" style="z-index: 100000;">');
							//Replace
							$iframe.css('width', w + 'px').css('height', h + 'px');
							$iframe.attr('src', lstVideos[Math.floor(Math.random() * lstVideos.length)]); 
							$(item).replaceWith($iframe);
						}else {
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
						
										$iframe = $('<iframe class="video-stream html5-main-video" style="z-index: 100000;">');
										//Replace
										$iframe.css('width', w + 'px').css('height', h + 'px');
										$iframe.attr('src', lstVideos[Math.floor(Math.random() * lstVideos.length)]); 
										$(item).replaceWith($iframe);
									}
								});
						}
					}
				});
			},
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							$(item).siblings('source').remove();
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
										$(item).siblings('source').remove();
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.denisChangeImgs, 3000);
			self.handleVideos(self.videos, 3000);
		});
	};

	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
			main(jQuery);
	}else {
		main(jQuery);
	}
 })();
 
 