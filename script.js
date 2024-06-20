var typed = new Typed(".text", {
    strings: ["Web Developer", "Data Science Enthusiast", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function handleSubmit(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Get form inputs
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;

    // You can perform further validation here if needed

    // Display the "Form submitted" pop-up message
    alert('Form submitted successfully!\nName: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message);

    // Optionally, you can reset the form after submission
    document.getElementById('myForm').reset();

    // Return false to prevent the default form submission
    return false;
}




