$(document).ready(function(){
 /* Menu Toggler Click*/
	$('.menu-toggler').click(function(){
	 if($('.inner-width').hasClass('hide')){ 
		 $('.inner-width').removeClass('hide');
	 }
	 else{
		 $('.inner-width').addClass('hide');
	 }
  });
	/* ----Menu Toggler Click-----*/
	
 /* Active Class Add */
  $('.nav-buttons ul li').click(function(){
   $('.nav-buttons ul li').removeClass('active');
	  $(this).addClass('active')  
  });
/* Active Class Add */
});
