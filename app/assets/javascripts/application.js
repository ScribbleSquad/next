// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require fancybox/jquery.easing-1.3.pack.js
//= require fancybox/jquery.mousewheel-3.0.4.pack.js
//= require fancybox/jquery.fancybox-1.3.4.js
//= require_tree .

$(function() {
	
	$('.lrg').fancybox();
	
	$('.social-btn').addClass('open');
	
	$('.social-btn').toggle(function() {
		$('.social').stop(true, true).animate({height:'0px'},300);
		$('.social a').css('display','none');
		$('.open').removeClass('open').addClass('closed');
	}, function() {
		$('.social a').css('display','block');
		$('.social').stop(true, true).animate({height:'84px'},300);
		$('.closed').removeClass('closed').addClass('open');
	});
	
	var hoverThumbnail  = $('<span class="thumb" />');
	
	$('.port-items li a').append(hoverThumbnail);
	$('.port-items li a').not('.label').hover(hoverOn, hoverOff);
	
	
	function hoverOn() {
		$(this).find('.thumb').stop(true, true).fadeIn(500);	
	} 
	
	function hoverOff() {
		$(this).find('.thumb').stop(true, true).fadeOut(500);
	};
	
	$('.work').click(function(e) {
		e.preventDefault();
		goToByScroll('portfolio');
	})
	
	$('.contact').click(function(e) {
		e.preventDefault();
		goToByScroll('footer');
	});
	
	function goToByScroll(id){
	    $('html,body').animate({scrollTop: $("#"+id).offset().top},2000);
	};
	
	$('.footer').css('top','50px');
	$('.wrapper').css('padding-bottom','50px')
	
	$('.port-wrapper').prepend('<div class="prev-btn" />');
	$('.port-wrapper').append('<div class="next-btn" />')
	
	$('.prev-btn').css('display','block').text('\u00ab');
	$('.next-btn').css('display','block').text('\u00bb');
	
	$('.prev-btn').click(function() {
		$('.port-items').animate({left:'0px'},500);
	});
	$('.next-btn').click(function() {
		$('.port-items').animate({left:'-822px'},500);
	});
	
	$('.header').append('<div class="csoon" />');
	
	var notice = $('.csoon');
	
	$('.blog-link').click(function(e) {
		e.preventDefault();
		$(notice).css('background-position','0 0').stop(true,true).fadeIn(500);
		$(notice).stop(true,true).fadeOut(500);
	})
	
	$('.home').hover(function() {
		$(notice).css('background-position','-330px 0').stop(true,true).fadeIn(500);	
	}, function() {
		$(notice).stop(true,true).fadeOut(500);
	});
	
	$('.work').hover(function() {
		$(notice).css('background-position','-110px 0').stop(true,true).fadeIn(500);	
	}, function() {
		$(notice).stop(true,true).fadeOut(500);
	});
	
	$('.members').hover(function() {
		$(notice).css('background-position','0 0').stop(true,true).fadeIn(500);	
	}, function() {
		$(notice).stop(true,true).fadeOut(500);
	});
	
	$('.contact').hover(function() {
		$(notice).css('background-position','-220px 0').stop(true,true).fadeIn(500);	
	}, function() {
		$(notice).stop(true,true).fadeOut(500);
	});
	
});