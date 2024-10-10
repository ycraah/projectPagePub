function displayInfoBox(){
	$(".privacy-info-box").click(function(event){
		event.stopPropagation();
		$(this).next().toggleClass("active");
	});
	$(".popup-info-box").click(function(event){
		event.stopPropagation();
	});
	$("body").click(function(){
		$(".privacy-info-box").next().removeClass("active");
	});
}

displayInfoBox();