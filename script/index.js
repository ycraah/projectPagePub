function mainSlideSwiper() {
	const mainSlide = new Swiper(".mainView .swiper", {
		direction: "vertical",
		mousewheel: true,

		pagination: {
			el: ".swiper-pagination",
			type: "bullets"
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
}

mainSlideSwiper();

function cardClickEvent() {
	$(".swiper-slide.card-slide ul li").click(function () {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
}

cardClickEvent();

function shopBoardCilckEvent() {
	$(".shopBoard__event-box ul li").click(function () {
		$(".shopBoard__event-box ul li").removeClass("active");
		$(this).addClass("active");
	});
}

shopBoardCilckEvent();

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
		autoplay: {
			delay: 2000
		},
		slidesPerView: 4,
		slidesPerGroup: 1,
	});
	swiperContainer.addEventListener("mouseenter", () => {
		productSlideSwiper.autoplay.stop();
	});

	swiperContainer.addEventListener("mouseleave", () => {
		productSlideSwiper.autoplay.start();
	});
}

productSlideSwiper();

function hotAndNewSlideSwiper() {
	const swiperContainer2 = document.querySelector(".hotAndNewSlide  .swiper");
	const hotAndNewSlideSwiper = new Swiper(".hotAndNewSlide .swiper", {
		// Optional parameters
		direction: "horizontal",
		loop: true,
		  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
		spaceBetween: 70,
		speed: 500,
		autoplay: {
			delay: 2000
		},
		slidesPerView: 4,
		slidesPerGroup: 1,
	});

	swiperContainer2.addEventListener("mouseenter", () => {
		hotAndNewSlideSwiper.autoplay.stop();
	});

	swiperContainer2.addEventListener("mouseleave", () => {
		hotAndNewSlideSwiper.autoplay.start();
	});
	
}

hotAndNewSlideSwiper();

function cardEventListener(){
	const cardBox = document.querySelector('.pokecard-box');
	const overlay = document.querySelector('.overlay')
	cardBox.addEventListener('mousemove', function(e){
		let x = e.offsetX;
		let y = e.offsetY;
		let rotateX = -1/10 * x + 20;
		let rotateY = 4/60 * y - 20;
		cardBox.style = `transform : perspective(350px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
		overlay.style = `background-position : ${x/5 + y/5}%`;
	});
	
	cardBox.addEventListener('mouseout', function(){
		overlay.style= 'filter : opacity(0)';
		cardBox.style= 'transform : perspective (350px) rotateX(0deg) rotateY(0deg)';
		cardBox.style= 'transition: all 1s;'
	})
}

cardEventListener();

function pokeActive(){
	const pokecardProduct = document.querySelector('.pokecardProduct');

	function titleActive(){
		$('.pokecardProduct img').addClass('active');
	};
	function textActive(){
		$('.pokecardProduct h1').addClass('active');
	};
	function btnActive(){
		$('.pokecardProduct .value-button').addClass('active');
	};
	
	pokecardProduct.addEventListener('mouseenter', function(){
		setTimeout(titleActive, 500);
		setTimeout(textActive, 1000);
		setTimeout(btnActive, 1500);
	});
}

pokeActive();

//캘린더

const calendarDays = document.getElementById('calendar-days');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  monthYear.textContent = `${year}년 ${month + 1}월`;
  
  // 첫 날의 요일과 마지막 날을 구한다
  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  // 달력을 초기화한다
  calendarDays.innerHTML = '';
  
  // 이전 달 빈칸 추가
  for (let i = 0; i < firstDayIndex; i++) {
    const emptyCell = document.createElement('span');
    calendarDays.appendChild(emptyCell);
  }

  // 날짜 추가
  for (let day = 1; day <= lastDate; day++) {
    const dayCell = document.createElement('span');
    dayCell.textContent = day;
    
    // 오늘 날짜 강조
    if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
      dayCell.classList.add('today');
    }
    
    calendarDays.appendChild(dayCell);
  }
}

// 이전 달로 이동
prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

// 다음 달로 이동
nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// 페이지 로드 시 달력 렌더링
renderCalendar(currentDate);
