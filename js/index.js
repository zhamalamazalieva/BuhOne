/*HERO SLIDER
============================================*/
$('.hero__slider').slick({
  dots: true,
  infinite: true,
	arrows: true,

  });

/*COLLEGUE SLIDER
===========================================*/
$('.collegue__slider').slick({
  dots:true,
  infinite:true,
  arrows:true,
  slidesToShow: 4,
  slidesToScroll: 1
})

/*REVIEWS SLIDER
===========================================*/
$('.reviews__slider').slick({
  dots:true,
  infinite:true,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'.arrow__prev',
  nextArrow:'.arrow__next'
})

/*ANIMATE WOW
===========================================*/
  new WOW().init();


/*TWEENMAX ANIMATE
===========================================*/
  TweenMax.from('.header__logo', 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    '.nav ul li',
    1,
    {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut,
    },
    0.08,
  );


  TweenMax.staggerFrom(
    '.header__top',
    1,
    {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut,
    },
    0.08,
  );