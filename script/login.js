function loginFocusing() {
	const idInput = $(".id-box input");
	const pwInput = $(".pw-box input");
	$(".id").click(function(){
		$(idInput).focus();
	});
  $(idInput).focus(function() {
    $(".id").addClass("active");
  });

  $(idInput).blur(function() {
    if (idInput.val().trim() === '') {
      $(".id").removeClass("active");
    }
  });

	$(".pw").click(function(){
		$(pwInput).focus();
	});
  $(pwInput).focus(function() {
    $(".pw").addClass("active");
  });

  $(pwInput).blur(function() {
    if (pwInput.val().trim() === '') {
      $(".pw").removeClass("active");
    }
  });
}

loginFocusing();