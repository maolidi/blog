$(function(){
	$("#rl td").click(function(){
		if($(this).hasClass("border")){
			$(this).removeClass("border");
		} else{
			$(this).addClass("border");
		}
	})

	$(".lishi_2").click(function(){
		$(".cx_b").removeClass("cx_b");
		$(this).addClass("cx_b");
	})
})