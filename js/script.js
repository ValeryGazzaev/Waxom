jQuery(document).ready(function(){
	$('.header-top .nav-menu-btn').click(function(){
		$(this).next('div').slideToggle('fast');
	});
});
