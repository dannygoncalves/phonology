/**** Process the form with jQuery Form Malsup Plugin *****/

$( '#button-reset-form' ).click(function(){
	$('select option:first-child').attr("selected", "selected");
	$('[id^="answer"]').html('');
	$('#test-response').html('');
});


$('#testForm').ajaxForm(function() {
	$('html,body').animate({
		scrollTop: $("#test-response").offset().top + 50},
	'slow');
	$('#test-response').html('<b>Wait an instant while we validate the information. <i class="fa fa-spinner fa-spin fa-2x"></i></b>')
	validation();
});



function validation(){

	var contador = 12;
	var message  = "";

	/** Option 1  => 3  (Question 1)**/
	if( $('#question1', '#testForm').val() != 2){
		contador = contador-1;
	    $('#answer1').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer1').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 2  => 3 (Question 5) **/
	if( $('#question2', '#testForm').val() != 3){
		contador = contador-1;
		$('#answer2').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer2').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 3  => 4 (Question 9)**/
	if( $('#question3', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer3').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer3').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 4  => 3 (Question 2)**/
	if( $('#question4', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer4').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer4').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 5  => 1 (Question 6)**/
	if( $('#question5', '#testForm').val() != 3){
		contador = contador-1;
		$('#answer5').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer5').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 6  => 1 (Question 10)**/
	if( $('#question6', '#testForm').val() != 3){
		contador = contador-1;
		$('#answer6').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer6').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 7  => 1 (Question 3)**/
	if( $('#question7', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer7').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer7').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 8  => 4 (Question 7)**/
	if( $('#question8', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer8').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer8').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 9  => 2 (Question 11)**/
	if( $('#question9', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer9').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer9').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 10  => 3 (Question 4)**/
	if( $('#question10', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer10').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer10').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 11  => 2 (Question 8)**/
	if( $('#question11', '#testForm').val() != 1){
		contador = contador-1;
		$('#answer11').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer11').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/** Option 12  => 2 (Question 12)**/
	if( $('#question12', '#testForm').val() != 2){
		contador = contador-1;
		$('#answer12').html("<i class='fa fa-close' style='color:red;'></i>");
	}else{
		$('#answer12').html("<i class='fa fa-check' style='color:green;'></i>");
	}

	/*** Switch for responses ***/
	if(contador == 12){
		message = '<b>Congratulations! <i class="fa fa-smile-o fa-2x"></i></b>';
	} else if (contador >= 7 && contador < 12){
		 message = '<b>Well done! <i class="fa fa-thumbs-o-up fa-2x"></i></b>';
	}else if(contador >= 1 && contador < 7){
		message = '<b>You need more practice <i class="fa fa-frown-o fa-2x"></i></b>';
	}else{
		message = '<b>Keep trying <i class="fa fa-thumbs-o-down fa-2x"></i></b>';
	}

	/*** Print response on well ***/
	setTimeout(function(){
		$('#test-response').html('<div class="alert alert-success" role="alert"><p>You have answered correctly '+contador+' out of 12 questions<br>'+message+'</div>');
	}, 4000);


}
