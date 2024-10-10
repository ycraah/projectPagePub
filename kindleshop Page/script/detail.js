let number = 0;	
function increase() {
	number++;
	document.getElementById('number').textContent = number;
}
function decrease() {
	if(number <= 0){
		number == 0;
		return;
	} 
	number--;
	document.getElementById('number').textContent = number;
}

function productSlideSwiper() {
	const swiperContainer = document.querySelector(".productSlide  .swiper");
	const productSlideSwiper = new Swiper(".productSlide .swiper", {
		direction: "horizontal",
		loop: true,
		  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
		spaceBetween: 70,
		speed: 500,
		slidesPerView: 4,
		slidesPerGroup: 1,
	});
}

productSlideSwiper();

function scrollBlock(){
	    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();
        if (scrollPosition > 590) {
            $('.cardDesc__card-purchase-box').addClass('scroll-block');
        } else {
            $('.cardDesc__card-purchase-box').removeClass('scroll-block');
        }
    });
}

scrollBlock();