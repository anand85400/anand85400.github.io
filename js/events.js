$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    $('.time').addClass('js--fadeInRight');
  	if ($('.box').hasClass('js--fadeInLeft')) {
  		$('.box').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}
    // if ($('.box').hasClass('box-left')) {
  	// 	$('.box').removeClass('box-left').addClass('box-right');
  	// }


  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {

  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }

  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


});
