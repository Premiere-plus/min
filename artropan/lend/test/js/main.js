
var upEl = $('.up__el');

var up = $('.up');



$(upEl).click(function() {

    $("html, body").animate({ scrollTop: 0 }, 600);

    return false;

});



$(window).scroll(function() {

    var height = $('section.header').outerHeight();

    ($(this).scrollTop() > height)

        ? up.addClass('active')

        : up.removeClass('active');

});



// smooth scroll

$(function() {

	$(document).ready(function(){

    $('a[href*="#"]').click( function(){ 

	  var scroll_el = $(this).attr('href'); 

	        if ($(scroll_el).length != 0) { 

	      $('html, body').animate({ scrollTop: $(scroll_el).offset().top + 50}, 1000); 

	        }

	      return false; 

	    });

	});

});
$(function() {
	$('.reviews__list').slick({
	    infinite: true,
	    slidesToScroll: 1,
	    slidesToShow: 3,
	    dots: true,
	    centerMode: true,
	    variableWidth: true,
	    // стартовий слайд
	    initialSlide: 1,
	    responsive: [
	    	{
	            breakpoint: 1750,
	            settings: {
	              slidesToShow: 3,
	              centerMode: true,
	              initialSlide: 1
	            } 
	        },
	    	{
	            breakpoint: 1302,
	            settings: {
	              slidesToShow: 3,
	              centerMode: true,
	              initialSlide: 1
	            } 
	        },
	        {
	            breakpoint: 1024,
	            settings: {
	              slidesToShow: 2,
	              centerMode: false,
	              initialSlide: 0
	            } 
	        },
	        {
	            breakpoint: 768,
	            settings: {
	              slidesToShow: 1,
	              centerMode: false
	            } 
	        },
	        {
	            breakpoint: 479,
	            settings: {
	              slidesToShow: 1,
	              centerMode: false
	            } 
	        }
	    ]
  	});

  	
    $('.reviews__more').on('click', function() {
        $(this).parent().find('.reviews__body').toggleClass('open');
        $(this).parent().toggleClass('open');
        $(this).toggleClass('open');
    });

    // видаляємо класи open при прокрутці слайду
    $('.reviews__list').on('afterChange', function(event, slick, currentSlide){
      $(this).find('.slick-slide').not('.slick-active').find('.open').removeClass('open');
    });

});


function normalPrice() {
		let oldPrice = document.querySelector(".x_price_previous").textContent.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.');
		let newPrice = document.querySelector(".x_price_current").textContent.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.');

		let oldPriceLast = document.querySelectorAll(".x_price_previous");
		for (let i = 0; i < oldPriceLast.length; i++) {
			oldPriceLast[i].textContent = oldPrice;
		}
		let newPriceLast = document.querySelectorAll(".x_price_current");
		for (let i = 0; i < newPriceLast.length; i++) {
			newPriceLast[i].textContent = newPrice;
		}
}
normalPrice()