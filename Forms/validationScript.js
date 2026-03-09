    // JavaScript code for form validation

    let myForm = document.getElementById("myForm");
    let inputField = document.getElementById("inputField");

    // Regular expression pattern for alphanumeric input
      let inputRegex = /^[a-zA-Z0-9]+$/;

	// Prevent form from submitting
     myForm.addEventListener("submit", function(event){
        event.preventDefault();

        // Retrieve the input field value
        let myInput = inputField.value;

        // Check if the input value matches the pattern
        if (inputRegex.test(myInput)) {
            // Valid input: display confirmation and submit the form
            alert("Input successful!")
        } else {
            // Invalid input: display error message
            alert("Error! Please submit only alphanumeric!")
        }
        })
