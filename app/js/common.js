$(function() {

	$('.navigation-toggle').click(function(){
    $(this).toggleClass('navigation-toggle-active');
		$(this).next().slideToggle(500);
  })

});
