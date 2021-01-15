function sendMail(contactForm) {
    emailjs.send("service_wmwdfad", "template_jaemmth", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "buy_ticket": contactForm.buyticket.value
    })
    .then (
        function(response) {
            alert('Message sent succesfully', response);
        },
        function(error) {
            alert('Something went wrong, try again', error);
        }
    );
    return false;
}