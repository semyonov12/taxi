$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});

$('.reviews__slider').slick({
	slidesToShow: 1,
});

$(window).load(function () {
	setTimeout(function () {
		$(".car__shine").addClass('show');
	}, 1000);
});