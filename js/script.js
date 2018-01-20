$(document).ready(function(){
	/*setInterval(function(){
		$('.bgi-1').fadeOut(3000);
		$('.bgi-2').fadeIn(3000);
	}, 2000);*/
	setInterval(function(){
		$( ".header-wrapper-bg" ).each(function( index ) {
	  		$(this).fadeToggle(3000);
		});
	}, 9000);


$('.burger').on('click', function(){
		$('.nav-list').toggleClass('open');
	});

$('.nav-item').on('click', function(){
	$('.drop-menu').toggleClass('open-menu');
})

/*
	$('.nav-link').on('click', function(){
		$(this).siblings('.drop-menu').toggleClass('open');
	});

	

			$('.nav-item').hover(function(){
				$('.drop-menu').addClass('open');
			},function(){
				$('.drop-menu').removeClass('open');

			});
*/
});