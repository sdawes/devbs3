// nav bar click on element to make active
$(".nav li").on("click", function(){
	$(".nav li").removeClass("active");
	$(this).addClass("active");
});

// hamburger animation
$(document).ready(function(){
	$('#hambuger').click(function(){
		console.log('Hambuger icon clicked');
		$(this).toggleClass('open');
	});
});
