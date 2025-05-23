const rsvpButton = document.getElementById('rsvp-button');
const validateForm = () => {
    let containsErrors = false; 
    let rsvpInputs = document.getElementById("contactform").elements;

    let person = {
        name: rsvpInputs[0].value,
        email: rsvpInputs[1].value,
        message: rsvpInputs[2].value 
    }
    
    // Loop through all inputs to validate them
    for (let i = 0; i < rsvpInputs.length; i++) {
        const input = rsvpInputs[i];
        
        // Skip the submit button
        if (input.type === 'submit') continue;
        
        // Check if input is too short
        if (input.value.length < 2) {
            containsErrors = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }

    if (!containsErrors) {
        toggleModal(person); 
    }
}

rsvpButton.addEventListener('click', validateForm);
 