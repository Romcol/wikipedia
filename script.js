$(function() {

	$('.top_bar, .icon').on('mousedown', function (e) {

	    $(this).parent().addClass('active');
	    
	    var oTop = e.pageY - $('.active').offset().top;
	    var oLeft = e.pageX - $('.active').offset().left;

	    console.log('mouseup');
	    
	    $(this).parents().on('mousemove', function (e) {

	        $('.active').offset({

	            top: e.pageY - oTop,
	            left: e.pageX - oLeft

	        }).on('mouseup', function () {

	            $(this).removeClass('active');

	        });
	        
	    });
	});

	function updateClock() {
    var now = new Date();
    time = now.getHours() + ':' + ((now.getMinutes()<10?'0':'') + now.getMinutes());
    $('.time').text(time);
    setTimeout(updateClock, 1000);
	}

	updateClock();

	var tab = [];

	tab['discover'] = 'DISCOVER';
	tab['poste_travail'] = 'POSTE DE TRAVAIL';
	tab['corbeille'] = 'CORBEILLE';

	var active = [];

	function manage_window(id)
	{
		$('#'+id+'_window').show();
		$('.window').removeClass('window_above');
		$('#'+id+'_window').addClass('window_above');

		if(!active[id])
		{
			$('.bottom_container').append('<div class="bottom" id="'+id+'_bottom">'+tab[id]+'</div>');
		}

		$('.bottom').removeClass('bottom_above');
		$('#'+id+'_bottom').addClass('bottom_above');

		active[id] = true;

		$('#'+id+'_window'+' .close').on('click', function (e) {
			console.log('test');
			$('#'+id+'_window').hide();
			$('#'+id+'_bottom').remove();
			active[id] = false;
			e.stopPropagation();
		});

		$('#'+id+'_window'+' .reduce').on('click', function (e) {
			$('#'+id+'_window').hide();
			$('#'+id+'_window').removeClass('window_above');
			$('#'+id+'_bottom').removeClass('bottom_above');
			e.stopPropagation();
		});

		$('#'+id+'_bottom').on('click', function(e){
			$('#'+id+'_window').show();
			$('.window').removeClass('window_above');
			$('#'+id+'_window').addClass('window_above');
			$('.bottom').removeClass('bottom_above');
			$('#'+id+'_bottom').addClass('bottom_above');

		});

		$('#'+id+"_window").on('click', function(e){
			$('.window').removeClass('window_above');
			$('#'+id+'_window').addClass('window_above');
			$('.bottom').removeClass('bottom_above');
			$('#'+id+'_bottom').addClass('bottom_above');
		});
	}


	$('.icon').on('dblclick', function (e) {
		var id = $(this).attr('id');
		manage_window(id);
	});




});