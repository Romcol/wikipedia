$(function() {
	$('.window').on('mousedown', function (e) {

	    $(this).addClass('active');
	    
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
});