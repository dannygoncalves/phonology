/**** Process the form with jQuery Form Malsup Plugin *****/

$( '#button-reset-form' ).click(function(){
	$("input[name^='option']").val( 0 );
	
	$('[id^="answer"]').html('');
	$('#test-response').html('');
});


$('#testForm').ajaxForm({
	beforeSubmit: function(a){
		if( !validarCampos() ){
			return false;
		}
		
		$('html,body').animate({
			scrollTop: $("#test-response").offset().top + 50},
		'slow');
		$('#test-response').html('<b>Wait an instant while we validate the information. <i class="fa fa-spinner fa-spin fa-2x"></i></b>')
		validation();	
      },	
}); 


/** Image click event **/
$( '.img-selector' ).click(function(){
	var id = $(this).attr( "id" );
	
	var res = id.split("_");
	
	$('#1_'+res[1]).removeClass("active");
	$('#2_'+res[1]).removeClass("active");
	
	var question = id.split("_q");
	
	/** Add selection **/
	$( "#option"+question[1] ).val( id[0] );
	
	/** Add class active **/
	$(this).addClass("active");
	
});


function validarCampos(){
	var error = 0;
	var first_encounter = "";
	$( "input[name^='option']" ).each(function( index ) {
		if( $( this ).val() == 0){
			var id = $( this ).attr("id");
			var res = id.split("option");
			$('#message'+res[1]).css("background-color","yellow");
			$('#message'+res[1]).html("Choose an option");
			setTimeout(function(){
				$('#message'+res[1]).html('');
				$('#message'+res[1]).css("background-color","none");
			}, 4000);
			error = error + 1;
			if(first_encounter == ""){
				first_encounter = "message"+res[1];
			}
		}
	})
	if(error > 0){
		$('html,body').animate({
			scrollTop: $( '#'+first_encounter ).offset().top - 50},
		'slow');
		return false;
	}
	return true;
}


function validation(){
	
	var contador = 11;
	var message  = "";
		
	/** Option 1  => 1 **/
	if( $('input[name=option1]', '#testForm').val() != 2){
		contador = contador-1;
	    $('#answer1').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer1').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 2  => 2 **/
	if( $('input[name=option2]', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer2').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer2').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 3  => 1 **/
	if( $('input[name=option3]', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer3').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer3').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 4  => 2 **/
	if( $('input[name=option4]', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer4').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer4').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 5  => 1 **/
	if( $('input[name=option5]', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer5').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer5').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 6  => 1 **/
	if( $('input[name=option6]', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer6').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer6').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 7  => 2 **/
	if( $('input[name=option7]', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer7').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer7').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 8  => 1 **/
	if( $('input[name=option8]', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer8').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer8').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 9  => 1 **/
	if( $('input[name=option9]', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer9').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer9').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 10  => 2 **/
	if( $('input[name=option10]', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer10').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer10').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/** Option 11  => 2 **/
	if( $('input[name=option10]', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer11').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer11').html("<i class='fa fa-check' style='color:green;'></i>");
	}
	
	/*** Switch for responses ***/
	if(contador == 11){
		message = '<b>Congratulations! <i class="fa fa-smile-o fa-2x"></i></b>';
	} else if (contador >= 5 && contador < 11){
		 message = '<b>Well done! <i class="fa fa-thumbs-o-up fa-2x"></i></b>';
	}else if(contador >= 1 && contador < 5){
		message = '<b>You need more practice <i class="fa fa-frown-o fa-2x"></i></b>';
	}else{
		message = '<b>Keep trying <i class="fa fa-thumbs-o-down fa-2x"></i></b>';	
	}
	
	/*** Print response on well ***/
	setTimeout(function(){
		$('#test-response').html('<div class="alert alert-success" role="alert"><p>You have answered correctly '+contador+' out of 11 questions<br>'+message+'</div>');
	}, 4000);
	
	
}