/*** Reset form Triggers ***/
$( '#button-reset-form' ).click(function(){
	$("input[type='radio'][name^='option']").prop('checked', false);
	
	$('[id^="answer"]').html('');
	$('#test-response').html('');
});

/**** Process the form with jQuery Form Malsup Plugin *****/
$('#testForm').ajaxForm(function() { 
	$('html,body').animate({
		scrollTop: $("#test-response").offset().top + 50},
	'slow');
	$('#test-response').html('<b>Wait an instant while we validate the information. <i class="fa fa-spinner fa-spin fa-2x"></i></b>')
	validation();
}); 



function validation(){
	
	var contador = 10;
	var message  = "";
		
	/*** 0 it's falling and 1 it's rising
	/** Option 1  => 1 **/
	if( $('input[name=option1]:checked', '#testForm').val() != 1){
		contador = contador-1;
	    $('#answer1').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer1').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 2  => 2**/
	if( $('input[name=option2]:checked', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer2').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer2').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 3  => 2**/
	if( $('input[name=option3]:checked', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer3').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer3').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 4  => 1**/
	if( $('input[name=option4]:checked', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer4').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer4').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 5  => 1**/
	if( $('input[name=option5]:checked', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer5').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer5').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 6  => 1**/
	if( $('input[name=option6]:checked', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer6').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer6').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 7  => 1**/
	if( $('input[name=option7]:checked', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer7').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer7').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 8  => 2**/
	if( $('input[name=option8]:checked', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer8').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer8').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 9  => 1**/
	if( $('input[name=option9]:checked', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer9').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer9').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 10  => 2**/
	if( $('input[name=option10]:checked', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer10').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer10').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/*** Switch for responses ***/
	if(contador == 10){
		message = '<b>Congratulations! <i class="fa fa-smile-o fa-2x"></i></b>';
	} else if (contador >= 5 && contador < 10){
		 message = '<b>Well done! <i class="fa fa-thumbs-o-up fa-2x"></i></b>';
	}else if(contador >= 1 && contador < 5){
		message = '<b>You need more practice <i class="fa fa-frown-o fa-2x"></i></b>';
	}else{
		message = '<b>Keep trying <i class="fa fa-thumbs-o-down fa-2x"></i></b>';	
	}
	
	/*** Print response on well ***/
	setTimeout(function(){
		$('#test-response').html('<div class="alert alert-success" role="alert"><p>You have answered correctly '+contador+' out of 10 questions<br>'+message+'</div>');
	}, 4000);
	
	
}