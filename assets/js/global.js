$(document).ready(function() {

	if (!$('html').hasClass('lt-ie9')) {
		document.addEventListener("touchstart", function(){}, true);
	}


	var page = $('#page');
	
	$('#utility-nav').on('click', 'a', function(event) {
		event.preventDefault();

		var panel = $(this).data('panel');

		if (panel == 'main-nav') {
			page.removeClass('is-showing-settings');
			page.addClass('is-showing-main-nav');
		} else if (panel === 'settings') {
			page.removeClass('is-showing-main-nav');
			page.addClass('is-showing-settings');
		}
	});

	$('#main-nav').on('click', '.btn-close', function() {
		page.removeClass('is-showing-main-nav');
	});

	$('#settings').on('click', '.btn-close', function() {
		page.removeClass('is-showing-settings');
	});
});