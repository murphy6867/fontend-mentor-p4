function validateEmail() {
    const emailCheck = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');

    if (!emailCheck.checkValidity()) {
        emailError.textContent = "Valid email required";
    } else {
        emailError.textContent = "";
    }
}

let uerEmail = document.getElementById('emailInput');
let emailParams = new URLSearchParams(window.location.search);
let email = emailParams.get('Email');
let decodedEmail = decodeURIComponent(email);
userEmail.textContent = decodedEmail;


const Dismissing = document.getElementById('Dismissing');
Dismissing.addEventListener('click', function() {
    window.location.href = 'index.html';
});
