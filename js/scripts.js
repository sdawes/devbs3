// nav bar click on element to make active
$(".nav li").on("click", function(){
	$(".nav li").removeClass("active");
	$(this).addClass("active");
});

