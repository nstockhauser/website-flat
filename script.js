document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = '';

    // Simple validation for demonstration purposes
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else if (username !== 'user' || password !== 'password') {
        errorMessage.textContent = 'Invalid username or password.';
    } else {
        alert("Login successful!");
        // In a real-world application, you would redirect to a new page or do some other action here
    }
});
