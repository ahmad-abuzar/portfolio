document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const templateParams = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        // Use the new EmailJS method: emailjs.sendForm
        emailjs.sendForm(
            "service_077ffgp",        // Your Service ID
            "template_q6ffpje",       // Your Template ID
            contactForm,              // Pass the form element itself
            "uCXEZpn-pm_elbP3O"      // Your Public Key
        )
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset();
        })
        .catch((err) => {
            console.error("EmailJS error:", err);
            alert("Failed to send message. Check console for details.");
        });
    });
});
