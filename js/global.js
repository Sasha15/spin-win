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



		// quick search regex
		var qsRegex;
		var buttonFilter;

		// use value of search field to filter
		var $quicksearch = $('.quicksearch').keyup( debounce( function() {
			qsRegex = new RegExp( $quicksearch.val(), 'gi' );
			$container.isotope();
		}) );

		// debounce so filtering doesn't happen every millisecond
		function debounce( fn, threshold ) {
			var timeout;
			return function debounced() {
				if ( timeout ) {
					clearTimeout( timeout );
				}
				function delayed() {
					fn();
					timeout = null;
				}
				setTimeout( delayed, threshold || 100 );
			};
		}
		// ISOTOPE PLUGIN SCRIPT//

		// init Isotope
		var $container = $('.isotope').isotope({
			itemSelector: '.element-item',
			layoutMode: 'masonry',
			// masonry: {
			// 	columnWidth: 100,
			// 	  // fitWidth: true
			// },
			filter: function() {
				var $this = $(this);
				var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
				var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
				return searchResult && buttonResult;
			},
			getSortData: {
				date: '.date',
				popularity: '.popularity parseInt',
			}
		});

		// bind filter button click
		$('.filter-button').on('click', function() {
			buttonFilter = $(this).attr('data-filter');
			// use filterFn if matches value
			// filterValue = filterFns[filterValue] || filterValue;
			$container.isotope();
			return false;
		});

		// bind sort button click
		$('.sort-button').on('click', function() {
			var sortByValue = $(this).attr('data-sort-by');
			$container.isotope({
				sortBy: sortByValue
			});
			return false;
		});

		// change is-checked class on buttons
		$('.button-group .button').on('click', function() {
			$('.button-group').find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});

		//Isotope Load more button
		var initShow = 22; //number of items loaded on init & onclick load more button
		var counter = initShow; //counter for load more button
		var iso = $container.data('isotope'); // get Isotope instance

		loadMore(initShow); //execute function onload

		function loadMore(toShow) {
			$container.find(".hidden").removeClass("hidden");

			var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
				return item.element;
			});
			$(hiddenElems).addClass('hidden');
			$container.isotope('layout');

			//when no more to load, hide show more button
			if (hiddenElems.length == 0) {
				jQuery(".more-game").hide();
			} else {
				jQuery(".more-game").show();
			};

		}

		//append load more button
		$container.after('<a href="#" class="more-game"><span>More games</span></a>');

		//when load more button clicked
		$(".more-game").click(function() {
			if ($('.filter-button').data('clicked')) {
			//when filter button clicked, set initial value for counter
			counter = initShow;
			$('.filter-button').data('clicked', false);
			} else {
				counter = counter;
			};
			counter = counter + initShow;
			loadMore(counter);
			return false;
		});

		//when filter button clicked
		$(".filter-button").click(function() {
			$(this).data('clicked', true);
			loadMore(initShow);
		});

		//ISOTOPE PLUGIN SCRIPT END//



	});

}(jQuery));
