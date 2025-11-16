// Initialize EmailJS
(function(){
    emailjs.init("service_077ffgp"); // Replace with your EmailJS public key
})();

// Select the contact form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Prepare the form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send the email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form
        }, function(error) {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS error:', error);
        });
});
