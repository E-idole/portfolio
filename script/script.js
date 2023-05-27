$(document).ready(function() {
	if ($(".owl-carousel").length) {
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				992: {
					items: 1
				}
			}
		});
	}

	mobile();
});

function mobile() {
	let btnBurger = $('#burger-menu');
	let menuBurger = $('#mobile-header');
	let contactDesktop = $('header .contact');

	const srcCross = 'X.svg';
	const srcBurger = 'burger-menu.svg';

	let isIndex = $('.header').length;
	let isDetailPage = $('.detail').length;

	btnBurger.hide();
	menuBurger.hide();

	var screenWidth = $(window).width();
	if (screenWidth <= 728) {
		contactDesktop.hide();
		btnBurger.show();

		btnBurger.on('click', function() {
			if (menuBurger.is(':hidden')) {

				if(isIndex){
					btnBurger.attr("src", 'img/' + srcCross);
				} else if(isDetailPage) {
					btnBurger.attr("src", '../../img/' + srcCross);
				} else {
					btnBurger.attr("src", '../img/' + srcCross);
				}

				menuBurger.slideDown(300);
			} else {
				menuBurger.slideUp(300);

				if(isIndex){
					btnBurger.attr("src", 'img/' + srcBurger);
				} else if(isDetailPage) {
					btnBurger.attr("src", '../../img/' + srcBurger);
				} else {
					btnBurger.attr("src", '../img/' + srcBurger);
				}
			}
		});
	}

	$(window).resize(function() {
		var screenWidth = $(window).width();
		if (screenWidth <= 728) {
			contactDesktop.hide();
			btnBurger.show();
		} else {
			contactDesktop.show();
			btnBurger.hide();
			menuBurger.hide();
		}
	});
}
