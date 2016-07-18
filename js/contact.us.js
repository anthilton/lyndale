$(document).ready(function(){
	var normalValidator = $('#send-email-form').parsley();
	var request;
	$('#send-email-form').on("submit",function(event){
		if(!normalValidator.isValid()){
			return false;
		}
		
		if (request) {
			request.abort();
		}
		
		var $form = $(this);
	
		// Let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
	
		// Serialize the data in the form
		var serializedData = $form.serialize();
		
		$inputs.prop("disabled", true);
		
		$('#email-sending').removeClass("hide");
		
		var data = "msgName=" + $("#email-name").val() + "&msgTextArea=" + $('#email-message').val() + "&msgEmailAddress=" + $('#email-address').val() + "&msgContactNumber=" + $('#email-telephone').val();
    
		var request = $.ajax({
            type: "POST",
            url: "send_email.php",
            data: data
        });
	
		// Callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			clearEmailFields();
			$form.parsley().reset();
			$('#email-sending').addClass("hide");
			$('#email-sent').removeClass("hide");
			setTimeout(function(){
				$('#email-sent').addClass("hide");
			}, 3000); 
		});

		// Callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			$('#email-sending').addClass("hide");
			$('#email-sent').addClass("hide");
		});
		
		// Callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// Reenable the inputs
			$inputs.prop("disabled", false);
		});
		
		event.preventDefault();
		
        
    });
});


function clearEmailFields(){
	$("#email-name").val("");
	$("#email-address").val("");
	$("#email-telephone").val("");
	$("#email-message").val("");
};