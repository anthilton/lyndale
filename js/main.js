var offsetFromTop = 0;

$(document).ready(function(e){
    
    var modalValidator = $('#emailModalForm').parsley();
    var modalValidator = $('#send-email-form').parsley();
	var request;
    $('#send-email-form').on("submit",function(event){
		if(!modalValidator.isValid()){
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
					
		var request = $.ajax({
			type: 'POST',
			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			data: {
				'key': 'ovVqO3_aJHVaIpGZPHPn7A',
				'message': {
					'from_email': $('#email-address').val(),
					'to': [
						{
							'email': 'anthilton@gmail.com',
							'name': 'Anthony',
							'type': 'to'
						}
					],
				'autotext': 'true',
				'subject': 'Lyndale Website Email',
				'html': $('#modal-email-message').val()
			}
			}
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
	$('#emailModalForm').on("submit",function(event){
		if(!modalValidator.isValid()){
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
		
		$('#modal-email-sending').removeClass("hide");
					
		var request = $.ajax({
			type: 'POST',
			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			data: {
				'key': 'ovVqO3_aJHVaIpGZPHPn7A',
				'message': {
					'from_email': $('#modal-email-address').val(),
					'to': [
						{
							'email': 'anthilton@gmail.com',
							'name': 'Anthony',
							'type': 'to'
						}
					],
				'autotext': 'true',
				'subject': 'Lyndale Website Email',
				'html': $('#modal-email-message').val()
			}
			}
			});
	
	
		// Callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			clearModalEmailFields();
			$form.parsley().reset();
			$('#modal-email-sending').addClass("hide");
			$('#modal-email-sent').removeClass("hide");
			setTimeout(function(){
				$('#modal-email-sent').addClass("hide");
			}, 3000); 
		});

		// Callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			$('#modal-email-sending').addClass("hide");
			$('#modal-email-sent').addClass("hide");
		});
		
		// Callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// Reenable the inputs
			$inputs.prop("disabled", false);
		});
		
		event.preventDefault();
		
        
    });
    
    var fontTargets = ['h1','h2','h3','h4','h5','p'];
    var arrayLength = fontTargets.length;
    $('.text-increase .decrease').on("click",function(){
        for (var i = 0; i < arrayLength; i++) {
            var element = fontTargets[i];
            $('.font-resize '+element).each(function(){
                var $this = $(this);
                var fontSize = $this.css('font-size');
                fontSize = parseInt(fontSize);
                
                if(element === 'p' && fontSize > 10){
                    $this.css('font-size', --fontSize);
                }
                
                if(element === 'h2' && fontSize > 26){
                    $this.css('font-size', --fontSize);
                }
            });
        }
    });
    
    $('.text-increase .reset').on("click",function(){
        for (var i = 0; i < arrayLength; i++) {
            var element = fontTargets[i];
            $('.font-resize '+element).each(function(){
                var $this = $(this);
                   
                if(element === 'p'){
                    $this.css('font-size', 14);
                }
                
                if(element === 'h2'){
                    $this.css('font-size', 30);
                }
            });
        }
    });
    
    $('.text-increase .increase').on("click",function(){
        for (var i = 0; i < arrayLength; i++) {
            var element = fontTargets[i];
            $('.font-resize '+element).each(function(){
                var $this = $(this);
                var fontSize = $this.css('font-size');
                fontSize = parseInt(fontSize);
                
                if(element === 'p' && fontSize < 18){
                    $this.css('font-size', ++fontSize);
                }
                
                if(element === 'h2' && fontSize < 34){
                    $this.css('font-size', ++fontSize);
                }
            });
        }
    });
});


function clearModalEmailFields(){
	$("#modal-email-name").val("");
	$("#modal-email-address").val("");
	$("#modal-email-telephone").val("");
	$("#modal-email-message").val("");
};


function clearEmailFields(){
	$("#email-name").val("");
	$("#email-address").val("");
	$("#email-telephone").val("");
	$("#email-message").val("");
};