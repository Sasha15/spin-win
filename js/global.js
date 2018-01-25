;
(function ($) {

	// Scripts which runs after DOM load
	function menuAnimation(){
		$('.menu-icon').click(function(){
			if($(window).width()<641){
				$('.sandwich-icon').toggleClass('open');
				$('.top-bar').slideToggle();
			}
		})
	}
	$(document).ready(function () {

		//Remove placeholder on click
		$("input,textarea").each(function () {
			$(this).data('holder', $(this).attr('placeholder'));

			$(this).focusin(function () {
				$(this).attr('placeholder', '');
			});

			$(this).focusout(function () {
				$(this).attr('placeholder', $(this).data('holder'));
			});
		});

		//Make elements equal height
		$('.matchHeight').matchHeight();

		menuAnimation();

		//Language Selector script
		$('.language-dropdown a').click(function(){
			$('.language-selector li').removeClass('active');

			var target = $(this).data('lang');
			console.log(target);
			$('.language-selector').find('#'+target).addClass('active')
		})

		//Banner slider script
		$('.banner-slider').slick({
			dots: false,
			arrows: false,
			infinite: true,
			fade: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 6000,
		});

		//Payment logos slider scrpt
		$('.footer__payment--slider').slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 6000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
					{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});

		//Winners slider script
		$('.winners-slider').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
					{
					breakpoint: 800,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
					{
					breakpoint: 550,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
					{
					breakpoint: 370,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		// Promotion slider script
		$('.promotion-slider').slick({
			dots: true,
			arrows: false,
			infinite: true,
			fade: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		});


	});

}(jQuery));
