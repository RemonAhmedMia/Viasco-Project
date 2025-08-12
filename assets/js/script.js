/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Agrul - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */

(function($){
    "use strict"
    $(document).ready(function(){

        AOS.init({
            duration: 1500,
        });


        /* ==================================================
         /* ==================================================
            # Banner Carousel
         ===============================================*/

         const BannerOne = new Swiper('.banner-style-on-carousel', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: true,
            // effect: "fade",
            // fadeEffect: {
            //     crossFade: true
            // },
			// speed: 2000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
          
            // If we need pagination
            pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
        });


        /* ==================================================
            # Visa Carousel
         ===============================================*/
		const VisacategoryOne = new Swiper(".visa-category-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 3,
				}
			},
		});

         /* ==================================================
            # Team Carousel
         ===============================================*/
		const TeamStyleOne = new Swiper(".team-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
	
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 3,
				}
			},
		});


        /* ==================================================
            # Testimonial Carousel
         ===============================================*/
		const TestimonialStyleOne = new Swiper(".testimonial-style-three-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
	
			breakpoints: {
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 1,
				},
				1199: {
					slidesPerView: 2,
				}
			},
		});


        


        /* ==================================================
            # Client Carousel
         ===============================================*/
		const ClientStyleOne = new Swiper(".client-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
	
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 3,
				}
			},
		});


		/* ==================================================
            # Mixitup
         ===============================================*/

        //  var containerEl = document.querySelector('.mix-item-menu');

        //  var mixer = mixitup(containerEl);
          

        /* ==================================================
            # Venobox
         ===============================================*/

			new VenoBox({
				selector: '.my-video-links',
			});

			/* ==================================================
		    _Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 120,
						thickness: 10,
						lineCap: 'round',
						emptyFill: '#eeeeee',
						fill: {
							gradient: ['#E13833', '#F44336']
						}
					}).on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});

			$('.progressbar-two').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle-two').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle-two').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 100,
						thickness: 5,
						lineCap: 'round',
						emptyFill: '#acbdf9',
						fill: {
							gradient: ['#ffffff', '#ffffff']
						}
					}).on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});


			$('.progressbar-three').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle-three').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle-three').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 100,
						thickness: 3,
						lineCap: 'round',
						emptyFill: '#dddddd',
						fill: {
							gradient: ['#232323', '#214BE0']
						}
					}).on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});
		}

		animateElements();
		$(window).scroll(animateElements);

			

			/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.counter').counterUp({
			delay: 20,
			time: 3000
		});


		// =============Scroll Up Button Progress=======
		let progressPath = document.getElementById("progress-path");
        let progressWrap = document.getElementById("progress-wrap");
        let pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.webkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.webkitTransition =
        "stroke-dashoffset 10ms linear";
  
       const onScollEvent = function (event) {
         let scroll = window.scrollY;
         let height = document.body.scrollHeight - window.innerHeight;
         let progress = pathLength - (scroll * pathLength) / height;
         progressPath.style.strokeDashoffset = progress;

         let offset = 50;
         if (window.scrollY > offset) {
           progressWrap.classList.add("active-progress");
         } else {
           progressWrap.classList.remove("active-progress");
         }
       };


	   // ============= Progress=======
onScollEvent();
window.onscroll = onScollEvent;
progressWrap.onclick = function (event) {
  window.scroll({ top: 0, behavior: "smooth" });
  return false;
};
	

$(window).on('scroll',function(){
	let scroll = $(window).scrollTop();
	let oTop = $('.progress-bar').offset().top - window.innerHeight;
	if(scroll>oTop){
		$(".progress-bar").addClass("progressbar-active");
	}
	else{
		$(".progress-bar").removeClass("progressbar-active");
	}
});






    })
})(jQuery);