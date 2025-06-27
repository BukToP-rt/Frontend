document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let isFormValid = true;

    const errorMessage = document.getElementById("errorMessage")

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!nameInput.value.trim()) {
        nameError.textContent = "This field is required.";
        errorMessage.textContent = "Please fill in all required fields";
        nameInput.classList.add("invalid");
        isFormValid = false;
    } else {
        nameInput.classList.remove("invalid");
        nameError.textContent = "";
    }

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!emailInput.value.trim()) {
        emailError.textContent = "This field is required.";
        errorMessage.textContent = "Please fill in all required fields";
        emailInput.classList.add("invalid");
        isFormValid = false;
    } else {
        emailInput.classList.remove("invalid");
        emailError.textContent = "";
    }

    const phoneInput = document.getElementById("phoneNumber");
    const phoneError = document.getElementById("phoneError");
    if (!phoneInput.value.trim()) {
        phoneError.textContent = "This field is required.";
        errorMessage.textContent = "Please fill in all required fields";
        phoneInput.classList.add("invalid");
        isFormValid = false;
    } else {
        phoneInput.classList.remove("invalid");
        phoneError.textContent = "";
    }

    if (isFormValid) {
        errorMessage.textContent = "";
        document.getElementById('contactForm').close()
        document.getElementById('windowReceived').showModal()
 
    }

});