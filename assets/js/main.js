// Adding smooth scroll behavior
$(document).ready(function () {
    // Adding smooth scrolling to nav links
    $('a').on('click', function () {
        if (this.hash !== "") {

            // Storing hash
            var hash = this.hash;

            // Animation of scrolling behaviour
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {
                window.location.hash = hash;
            });
        }
    });

    // Code taken from https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
    
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

    // Creating Accordion for Rules

    function accordionRules() {
        var acc = document.getElementsByClassName('accordion');
        var i;
        // Bucle For
        for (i = 0; i < acc.length; i++) {
            // Event listener when i click on accrodion class
            acc[i].addEventListener('click', function () {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                // Conditional If
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
        }
    }

    accordionRules();
});
