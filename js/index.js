// Scroll dos links no menu
// $('nav a').click(function(e){
// 	e.preventDefault();
// 	var id = $(this).attr('href'),
// 			menuHeight = $('header').innerHeight(),
// 			targetOffset = $(id).offset().top;
// 	$('html, body').animate({
// 		scrollTop: targetOffset - menuHeight
// 	});
// });

// Scroll dos icones na área "Sobre nós" do site
$('a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
	menuHeight = $('header').innerHeight(),
	targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

$(document).ready(function(){
	var zindex = 10;
	
	$("div.card2").click(function(e){
	  e.preventDefault();
  
	  var isShowing = false;
  
	  if ($(this).hasClass("show")) {
		isShowing = true
	  }
  
	  if ($("div.cards").hasClass("showing")) {
		// a card is already in view
		$("div.card2.show")
		  .removeClass("show");
  
		if (isShowing) {
		  // this card was showing - reset the grid
		  $("div.cards")
			.removeClass("showing");
		} else {
		  // this card isn't showing - get in with it
		  $(this)
			.css({zIndex: zindex})
			.addClass("show");
  
		}
  
		zindex++;
  
	  } else {
		// no cards in view
		$("div.cards")
		  .addClass("showing");
		$(this)
		  .css({zIndex:zindex})
		  .addClass("show");
  
		zindex++;
	  }
	  
	});
  });