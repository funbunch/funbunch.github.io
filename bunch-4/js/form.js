// form submit event
function prepareEventHandlers() {
	document.getElementById("form").onsubmit = function() {
		// prevent a form from submitting if no email.
		if (document.getElementById("guest_email").value == "") {
			document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
			// STOP the form from submitting
			return false;
		} else {
			// reset and allow the form to submit
			document.getElementById("errorMessage").innerHTML = "Success! Thanks for contacting me!";
			return true;
		}
	};
}

// when the document loads
window.onload =  function() {
	prepareEventHandlers();
};