$(document).ready(function () {
	$("#signup-form").on("submit", function (event) {
		event.preventDefault();

		// Gather form data
		const formData = {
			email: $('input[name="email"]').val(),
			firstName: $('input[name="firstName"]').val(),
			lastName: $('input[name="lastName"]').val(),
		};

		// Send POST request to /users endpoint
		$.ajax({
			url: "/users",
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify(formData),
			success: function (response) {
				// Handle successful registration
				alert("Registration successful!");
			},
			error: function (jqXHR, textStatus, errorThrown) {
				// Handle errors
				console.error("Error:", textStatus, errorThrown);
				alert("An error occurred during registration.");
			},
		});
	});
});
