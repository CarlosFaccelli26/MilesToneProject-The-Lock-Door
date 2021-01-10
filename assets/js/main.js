
// Changing background color of navar when scrolling
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 80);
});


// Creating Accordion for Rules
var acc = document.getElementsByClassName('accordion');
var i;
    // Bucle For
for (i = 0; i < acc.length; i++) {
    // Event listener when i click on accrodion class
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        // Conditional If
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}