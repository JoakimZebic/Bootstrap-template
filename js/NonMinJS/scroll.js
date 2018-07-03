$(document).ready(function(){
	$('a[href^="#"]:not([data-toggle="tab"])').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		var scroll;

		if($(window).scrollTop()==0){
			scroll =  ($target.offset().top) - 2
		}else{
			scroll =  ($target.offset().top) - 2
		}
		$('html, body').stop().animate({
			'scrollTop': scroll
		}, 450, 'swing', function () {
			//window.location.hash = target;
		});
	});
});