$( document ).ready(function() {
		
/* FadeIn pagina bij openen */

	$('main').hide();
	$('main').fadeIn(2500);
	
	$('.fade').fadeTo(1000,1);

/* Einde fadeIn */

var vid = document.getElementById("trombone");
vid.loop = true;

/* Rotatie beelden */
				
	var images = new Array ('images/icons/icon2.png', 'images/icons/icon3.png', 'images/icons/icon4.png', 'images/icons/icon5.png', 'images/icons/icon6.png');
		var index = 1;
			function rotateImage(){
			$('#myImage').fadeOut('fast', function() {
			$(this).attr('src', images[index]);
				
			$(this).fadeIn('fast', function() {
			if (index === images.length-1){
			index = 0;
				}
			else{
			index++;
			 }
			});
			});
			} 
			
	setInterval (rotateImage, 2500);

/* Einde rotatie beelden */
				
});

/* MASONRY */

$(document).ready(function(){

  var $grid = $('.grid').imagesLoaded( function() {

    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
  });
});

var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

/* Scroll Down animation */

$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
	
});	