$(document).ready(function(){
/*** Active Menu ***/
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);

	switch (filename){
	
		case '':
			$('ul.nav a[href="./"]').parent().addClass('active');
		break;
		
		
		/*** Case Materials ***/
		case 'books.html':
		case 'videos.html':
		case 'book1.html':
		case 'book2.html':
		case 'book3.html':
		case 'book4.html':
		case 'book5.html':
		case 'book6.html':
		case 'book7.html':
			$('ul.nav li#materials-nav').addClass('active');
		break;
		
		/*** Case Practice ***/
		case 'memorize.html':
		case 'mental_linkages.html':
		case 'images_sounds.html':
		case 'lets_study.html':
		case 'repetition.html':
		case 'sounds_patterns.html':
		case 'analysis.html':
			$('ul.nav li#practice-nav').addClass('active');
		break;
		
		/*** Case Theory ***/
		case 'phonological_aspects.html':
		case 'phonology.html':
		case 'phoneme_allophones.html':
		case 'minimal_pairs.html':
		case 'the_syllable.html':
		case 'assimilation.html':
		case 'coalescence.html':
		case 'elision.html':
		case 'suprasegmentals.html':
		case 'stress.html':
		case 'intonation.html':
			$('ul.nav li#theory-nav').addClass('active');
		break;

		
		
	}

});