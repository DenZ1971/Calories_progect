/*===================================*
	01. SHOP QUICK VIEW JS
	*===================================

	var owl = $('.owl-thumbs-slider');
    owl.owlCarousel({
        loop: false,
        items: 4,
		dots: false,
		margin: 10,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
    });
	
	$('.plus').on('click', function() {
		if ($(this).prev().val()) {
			$(this).prev().val(+$(this).prev().val() + 1);
		}
	});
	$('.minus').on('click', function() {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
	});
	
	if ($(window).width() >= 768) {
	 var firstImgHeight = $(".pr_detail").height();
	 var divWidth = $(".pr_detail").width();
	 $("#product_img").elevateZoom({
		 cursor: "crosshair",
		 scrollZoom: false, 
		 easing : true,
		 gallery:'pr_item_gallery',
		 // zoomWindowOffetx: 30, 
		 // zoomWindowWidth:divWidth,
		 // zoomWindowHeight:firstImgHeight,
		 // borderSize: 0,
			zoomType: "inner",
		 galleryActiveClass: "active"
	 }); 
	}
	else {
		$("#product_img").elevateZoom({
			cursor: "crosshair",
			easing : true,  
			gallery:'pr_item_gallery',
			zoomType: "inner",
			galleryActiveClass: "active"
		 }); 
	}*/
	setTimeout(function(){
		$('.carousel_slide1').each( function() {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots : $carousel.data("dots"),
				loop : $carousel.data("loop"),
				margin: $carousel.data("margin"),
				mouseDrag: $carousel.data("mouse-drag"),
				touchDrag: $carousel.data("touch-drag"),
				items : 1,
				autoHeight: $carousel.data("autoheight"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplay : $carousel.data("autoplay"),
				animateIn : $carousel.data("animate-in"),
				animateOut: $carousel.data("animate-out"),
				autoplayTimeout : $carousel.data("autoplay-timeout"),
				smartSpeed: $carousel.data("smart-speed"),
			});
			// var t = $(".testimonial_wrap")
			// $carousel.on('changed.owl.carousel', function(event) {
				// t.hasClass("active") ? t.removeClass("active") : (t.addClass("active"), setTimeout(function() {
					// t.removeClass("active")
				// }, 500))
			// })
		});
	},300);