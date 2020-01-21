$(function() { // this will wait until the document is ready

	$('#myform').submit(function(event) { // this function will be executed when the form is submitted
		var errors = []; // create an array to store any potential errors

		var name = $('.required').val(); // get the value of the 'name' field
		if (!name.length) { // if the name does not have a length (i.e. the name is blank)
			errors.push('you must enter your name'); // add an error message to the end of the 'errors' array
		}

		if (errors.length) { // if the errors array has a length (i.e. there are errors present)
			var errorMsg = errors.join(', '); // join the array of errors to produce a single error message
			$('.error').html(errorMsg).show(500); // set the error message into the html and show the error to the user
			return false; // return false to prevent the form from being submitted
		}

	});

});