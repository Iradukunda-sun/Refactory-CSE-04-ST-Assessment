document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission for validation

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        showError(fullName, 'Full Name is required');
        isValid = false;
    } else {
        clearError(fullName);
    }

    // Validate Gender
    const gender = document.getElementById('gender');
    if (gender.value === '') {
        showError(gender, 'Gender is required');
        isValid = false;
    } else {
        clearError(gender);
    }

    // Validate Date of Birth
    const dateOfBirth = document.getElementById('dateOfBirth');
    if (dateOfBirth.value === '') {
        showError(dateOfBirth, 'Date of Birth is required');
        isValid = false;
    } else {
        clearError(dateOfBirth);
    }

    // Validate Nationality
    const nationality = document.getElementById('nationality');
    if (nationality.value.trim() === '') {
        showError(nationality, 'Nationality is required');
        isValid = false;
    } else {
        clearError(nationality);
    }

    // Validate Phone Number
    const phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber.value.trim() === '') {
        showError(phoneNumber, 'Phone Number is required');
        isValid = false;
    } else {
        clearError(phoneNumber);
    }

    // Validate Email
    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
        showError(email, 'Invalid Email Address');
        isValid = false;
    } else {
        clearError(email);
    }

    // Validate Emergency Phone Number
    const emergencyPhone = document.getElementById('emergencyPhone');
    if (emergencyPhone.value.trim() === '') {
        showError(emergencyPhone, 'Emergency Phone Number is required');
        isValid = false;
    } else {
        clearError(emergencyPhone);
    }

    // Validate Passport Number
    const passportNumber = document.getElementById('passportNumber');
    if (passportNumber.value.trim() === '') {
        showError(passportNumber, 'Passport Number is required');
        isValid = false;
    } else {
        clearError(passportNumber);
    }

    // Validate Visa Document
    const visaDocument = document.getElementById('visaDocument');
    if (visaDocument.files.length === 0) {
        showError(visaDocument, 'Visa Document is required');
        isValid = false;
    } else {
        clearError(visaDocument);
    }

    // Validate Departure City
    const departureCity = document.getElementById('departureCity');
    if (departureCity.value.trim() === '') {
        showError(departureCity, 'Departure City is required');
        isValid = false;
    } else {
        clearError(departureCity);
    }

    // Validate Destination City
    const destinationCity = document.getElementById('destinationCity');
    if (destinationCity.value.trim() === '') {
        showError(destinationCity, 'Destination City is required');
        isValid = false;
    } else {
        clearError(destinationCity);
    }

    if (isValid) {
        this.submit();  // Submit the form if all fields are valid
    }
});

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.innerText = message;
    errorSpan.style.color = 'red';
}

function clearError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.innerText = '';
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
