let uerEmail = document.getElementById('emailInput');
let emailParams = new URLSearchParams(window.location.search);
let email = emailParams.get('Email');
let decodedEmail = decodeURIComponent(email);
userEmail.textContent = decodedEmail;


const Dismissing = document.getElementById('Dismissing');
Dismissing.addEventListener('click', function() {
    window.location.href = 'index.html';
});
