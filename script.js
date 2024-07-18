
document.addEventListener("DOMContentLoaded", (event) => {
const form = document.getElementById("registration-form");
feedbackDiv = document.getElementById("form-feedback");

form.addEventListener('submit', function (event){
    event.preventDefault()

    const userName = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    const messages = [];
    if (userName.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }
    if (!email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push("Please enter a valid email")
    }
    if (password.length < 8) {
        isValid = false;
        messages.push("Your password must be at least 8 characters long")
    }
    
    feedbackDiv.style.display = 'block';
    if(isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    }else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545"
    }
    });
});
