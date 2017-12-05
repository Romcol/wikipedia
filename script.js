$(function() {

    $('.top_bar, .icon').on('mousedown', function (e) {

        $(this).parent().addClass('active');

        var oTop = e.pageY - $('.active').offset().top;
        var oLeft = e.pageX - $('.active').offset().left;

        $(this).on('mouseup', function(e){
            $(this).parent().removeClass('active');
        });

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
    tab['q1'] = 'QUESTION 1';
    tab['q2'] = 'QUESTION 2';
    tab['q3'] = 'QUESTION 3';


    var active = [];

    function manage_window(id)
    {
        if(id == 'discover')
        {
            document.onmousemove = false;
            $(".spanstyle").hide();
        }

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
            $('#'+id+'_window').hide();
            $('#'+id+'_bottom').remove();
            active[id] = false;
            e.stopPropagation();
        });

		$('.icon').on('dblclick', function (e) {
			var id = $(this).attr('id');
			if(id == 'wiki')
			{
				manage_window('erreur');
			}
			else{
				manage_window(id);
			}
		});

		$('#'+id+'_window'+' .button_close').on('click', function (e) {
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

    $(".start").click(function(e){
        $('#monkey').show(0).delay(2000).hide(0);
    });

//POSTE DE TRAVAIL

    const text1 = `
Christian Vandendorpe, « Le phénomène Wikipédia : une utopie en marche », Le
Débat 2008/1 (n° 148), p. 17-30.
DOI 10.3917/deba.148.0017

Bernard Jacquemin, « Chapitre 7. Un dispositif de collaboration : l'exemple de
Wikipédia », in Violaine Appel et al., Les dispositifs d’information et de
communication, De Boeck Supérieur « Culture & Communication », 2010 (),
p. 117-136.
DOI 10.3917/dbu.masso.2010.01.0117 

Emmanuel Ruzé, « Nouvelles des archives. Une approche quantitative des archives
numériques d'un projet encyclopédique, Wikipédia », Entreprises et histoire 2011/2
(n° 63), p. 86-99.
DOI 10.3917/eh.063.0086

Pierre-Carl Langlais, « La négociation contre la démocratie : le cas Wikipedia »,
Négociations 2014/1 (n° 21), p. 21-34.
DOI 10.3917/neg.021.0021

“It’s a Man’s Wikipedia? Assessing Gender Inequality in an Online Encyclopedia.” Leigniz Institute for the Social Sciences. https://arxiv.org/pdf/1501.06307.pdf 

https://www.courrierinternational.com/article/egalite-ou-sont-les-femmes-sur-wikipedia

http://mashable.france24.com/monde/20161208-wikipedia-bbc-inegalites-hommes-femmes 

http://www.slate.fr/story/96963/wikipedia
				`;

    const text2 = `
Rien à signaler`;

    const text3 = `
Fadyl, Marlène, William et Romain : Traitement des données et développement web

Marion et Thibault : Recherche documentaire, éditorialisation et rédaction du contenu

Emmanuelle, Rozenn et Ninon : Création de l’interface graphique
`;

    $("#desktop_source").click(function() {
        $( "#area" ).val(text1);
    });

    $("#desktop_audio").click(function() {
        $( "#area" ).val(text2);
        $( "#area" ).slideUp();
        $( "#area" ).slideDown();
    });

    $("#desktop_contributors").click(function() {
        $( "#area" ).val(text3);
    });

//END - POSTE DE TRAVAIL

});