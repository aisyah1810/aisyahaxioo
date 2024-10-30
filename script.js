// login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('button');
    
    loginButton.addEventListener('click', function() {
        const id = document.getElementById('id').value;
        const pw = document.getElementById('pw').value;

        // Validate input
        if (id === "" || pw === "") {
            alert("Please fill out both ID and Password.");
        } else {
            alert("Login successful!");
            // You can add further logic here, such as redirecting the user
        }
    });
});

$(document).ready(function() {
    $('#loginBtn').click(function() {
        const username = $('#username').val();
        const password = $('#password').val();

        // Validasi input
        if (username === "" || password === "") {
            alert("Please fill out both Username and Password.");
        } else {
            alert("Login successful!");
        }
    });
});