// for javaScript
window.onload = function () {
    document.querySelector("h1").style.color = "blue";
};

console.log("Hello!!!");


// the registration form validation:
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform form validation and submit the data if valid
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name && email && password) {
        // Form is valid, perform registration logic or send data to server
        console.log('Registration successful!');
        // Optionally, redirect to a success page
    } else {
        // Form is not valid, show error messages or handle accordingly
        console.log('Please fill in all fields.');
    }
});


