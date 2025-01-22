function stopPropagation(){
	$(".dropDownItems").click(function(event){
		event.stopPropagation();
	});
	$(".top-bar__search-bar").click(function(event){
		event.stopPropagation();
	});
}

stopPropagation();

function clickMenu() {
	$(".cMtg").click(function () {
		$(".showItems").removeClass("active");
		$(".mtg").addClass("active");
	});

	$(".cPoke").click(function () {
		$(".showItems").removeClass("active");
		$(".poke").addClass("active");
	});

	$(".cEtc").click(function () {
		$(".showItems").removeClass("active");
		$(".etc").addClass("active");
	});

	$(".cRelative").click(function () {
		$(".showItems").removeClass("active");
		$(".relative").addClass("active");
	});

	$(".cShopInfo").click(function () {
		$(".showItems").removeClass("active");
		$(".shopInfo").addClass("active");
	});
}

clickMenu();

function clickIcons() {
	$(".top-bar__icon-box .fa-bars").click(function(event) {
		event.stopPropagation();
		$(".top-bar__search-bar").removeClass("active");
		$(".dropDownItems").toggleClass("active");
	});
	
	$(".top-bar__icon-box .fa-magnifying-glass").click(function(event){
		event.stopPropagation();
		$(".dropDownItems").removeClass("active");
		$(".top-bar__search-bar").toggleClass("active");
	});
	
	$("body").click(function(){
		$(".top-bar__search-bar").removeClass("active");
		$(".dropDownItems").removeClass("active");
	});
}

clickIcons();