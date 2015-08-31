  $(function() {

	var pastDraggable = "";
	$( ".draggable" ).draggable({

	});	

	
	$( ".concepts" ).droppable({
		accept: ".terms",
		drop: function( event, ui ){
			
			//** SET COLOR FOR DROPPED **/
			$( this ).addClass( "ui-state-highlight" );
		
			
			// GET id of droppable element
			var id_droppable = $( this ).attr("id");
			// GET id of draggable element			
			var id_draggable = ui.draggable.attr("id");			

			var drop = id_droppable.split("_accept");
			if(drop[0] == id_draggable){
				$( '#'+drop[0]+'_accept_answer' ).val( 1 );
			}else{
				$( '#'+drop[0]+'_accept_answer' ).val( 0 );
			}
			
		}, 
		out: function( event, ui ) {
			$( this ).removeClass( "ui-state-highlight" );
			//Get the current draggable object
			var currentDraggable = $(ui.draggable).attr('id');

			//Store the current draggable object
			if( pastDraggable == currentDraggable ){
				pastDraggable = "";
			}
			var quantity = $( this ).data("quantity");
			quantity = quantity - 1;
			$( this ).data("quantity", quantity);
			// if( $( this ).data("quantity") == 0 ){
				var id = "#"+$(this).attr( "id" )+"_answer";
				$( id ).val("");
			// }
			
		}
    });
	
	
	
	/** Process the form **/
	$( '.btn-success' ).click(function(){
		var contador = 10;
		var empty = 0;
		$( ".answers" ).each(function( index ) {
			// console.log( index + ": " + $( this ).val() );
			if( $( this ).val() == "" ){
				console.log( index + ": " + $( this ).val() );
				empty = empty + 1;
			}
			
		});
		console.log(empty);
		
		/** IF at least one term is not linked display alert **/
		if(empty > 0 ){
			bootbox.alert("You must link each term to a corresponding concept", function() {
			});
			return false;
		}
		
		/** Animate and show process message **/
		$('html,body').animate({
			scrollTop: $("#test-response").offset().top + 50},
		'slow');
		$('#test-response').html('<b>Wait an instant while we validate the information. <i class="fa fa-spinner fa-spin fa-2x"></i></b>');
		
		
		/*** Check answers ***/
		$( ".answers" ).each(function( index ) {
			if( $( this ).val() == 0 ){
				// console.log( index + ": " + $( this ).val() );
				var id = $( this ).attr("id");
				var term = id.split("_accept_answer");
				$( '#'+term[0] ).removeClass("bg-primary").addClass( "bg-danger" );
				contador = contador - 1;
			}else{
				var id = $( this ).attr("id");
				var term = id.split("_accept_answer");
				$( '#'+term[0] ).removeClass("bg-primary").addClass( "bg-success" );
			}
			
		});
		
		
		// /*** Switch for responses ***/
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
		
	});
	
	
	$( '#button-reset-form' ).click(function(){
		 location.reload();
	});
	
	
  });