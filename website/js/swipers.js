new WOW().init();
$('.wrap_line_cont').addClass('run');


$('.down_layer').hover(
	function(){
		$(this).addClass('wave');
	},
	function(){
		$(this).removeClass('wave');
	}
)

var box2Swiper = new Swiper('.box2_swiper',{
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	allowTouchMove: false,
	watchOverflow: true,
	navigation: {
		prevEl: '.box2_prev .swiper-button-prev',
		nextEl: '.box2_next .swiper-button-next',
	},
	pagination: {
		el: '.box2_swiper_pagination',
		clickable: true,
	},
	on:{
		init: function(){
			swiperAnimateCache(this); 
			swiperAnimate(this); 
		}, 
		slideChangeTransitionEnd: function(){ 
			swiperAnimate(this); 
		} 
	}
})

var box3SwiperPagination = new Swiper('.box3_swiper_pagination',{

	slidesPerView: 'auto',
	spaceBetween: 10,
	freeMode: true,
	watchSlidesVisibility: true,
	watchOverflow: true,
	slideToClickedSlide: true,
	watchSlidesProgress: true,
	navigation: {
		prevEl: '.box3_pagination_prev',
		nextEl: '.box3_pagination_next',
	},
})
var box3Swiper = new Swiper('.box3_swiper',{
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	allowTouchMove: false,
	watchOverflow: true,
	thumbs: {
		swiper: box3SwiperPagination,
	},
	navigation: {
		prevEl: '.box3_prev .swiper-button-prev',
		nextEl: '.box3_next .swiper-button-next',
	},
	on:{
		init: function(){
			swiperAnimateCache(this);
			swiperAnimate(this);
		}, 
		slideChangeTransitionEnd: function(){ 
			swiperAnimate(this);
		} 
	}
})

$('.box3_role_change').on('click',function(){
	$(this).toggleClass('on');
	if($(this).hasClass('on')){
		$(this).siblings('.role_style1').hide();
		$(this).siblings('.role_style2').fadeIn();
		$(this).siblings('.box3_text').find('.mark_role').fadeIn();
	}else{
		$(this).siblings('.role_style1').fadeIn();
		$(this).siblings('.role_style2').hide();
		$(this).siblings('.box3_text').find('.mark_role').hide();
	}
});

$('.roleTextHide').on('click',function(){
	$(this).parent().siblings('.name_role').find('.roleTextShow').fadeIn();
	$(this).parent().fadeOut();
});
$('.roleTextShow').on('click',function(){
	$(this).parent().siblings('.box3_text').fadeIn();
	$(this).fadeOut();
});


var box4Swiper = new Swiper('.box4_swiper',{
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	allowTouchMove: false,
	watchOverflow: true,
	navigation: {
		prevEl: '.box4_swiper .swiper-button-prev',
		nextEl: '.box4_swiper .swiper-button-next',
	},
	on:{
		init: function(){
			swiperAnimateCache(this);
			swiperAnimate(this);
		}, 
		slideChangeTransitionEnd: function(){ 
			swiperAnimate(this);
		} 
	}
})

var box5Swiper = new Swiper('.box5_swiper',{
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	allowTouchMove: false,
	watchOverflow: true,
	navigation: {
		prevEl: '.box5_swiper .swiper-button-prev',
		nextEl: '.box5_swiper .swiper-button-next',
	},
	on:{
		init: function(){
			swiperAnimateCache(this);
			swiperAnimate(this);
		}, 
		slideChangeTransitionEnd: function(){ 
			swiperAnimate(this);
		} 
	}
})

$('.thumbnail_box').on('click',function(){
	var link = $(this).attr('link');
	$('.pop_bigPic_cont img').attr('src',link);
	$('#pop_bigPic').fadeIn();
});
