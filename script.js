$(function() {

	// Rendre pop-in cliquable
	$('.icon_container, .top_bar').on('mousedown', function (e) {
	    $(this).parent().addClass('active');

	    var oTop = e.pageY - $('.active').offset().top;
	    var oLeft = e.pageX - $('.active').offset().left;

	    $(this).parents().on('mousemove', function (e) {
	        $('.active').offset({
	            top: e.pageY - oTop,
	            left: e.pageX - oLeft
	        }).on('mouseup', function () {
	            $(this).removeClass('active');
	        });
	    });

	    return false;
	});

	$('.close_popin').click(function () {
		var t = $(this).parent()[0];
		console.log(t.getAttribute("class"));
		while(!t.getAttribute("class").includes("window")){
			t = $(t).parent()[0];
			console.log(t.getAttribute("class"));
		}
		t.setAttribute("hidden", "hidden");
	});


	// Horloge "barre des taches"
	function updateClock() {
		var now = new Date();
		time = now.getHours() + ':' + ((now.getMinutes()<10?'0':'') + now.getMinutes());
		$('.time').text(time);
		setTimeout(updateClock, 1000);
	}

	updateClock();
});
