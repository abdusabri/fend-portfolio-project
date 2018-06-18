// function to switch header style when the page is scrolled
$(function () {
    var header = $(".header");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            header.removeClass('header').addClass("header-alt");
        } else {
            header.removeClass("header-alt").addClass('header');
        }
    });

    // smooth scrolling
    // credit https://css-tricks.com/snippets/jquery/smooth-scrolling/

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600, function () {
                        //i've commented this code to solve an issue with undesirable borders around
                        //some elements, apparently because of default focus styles. Although the code
                        //originally indicated that changing the focus of the target element is a must
                        //it works without issues, and i've tested it across multiple browsers, while
                        //effectively eliminating the border issues. So i guess with a more recent version
                        //of jquery changing the focus of the target element is not necessary

                        // Callback after animation
                        // Must change focus!
                        //var $target = $(target);
                        //$target.focus();
                        //if ($target.is(":focus")) { // Checking if the target was focused
                        //    return false;
                        //} else {
                        //    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        //    $target.focus(); // Set focus again
                        //};
                    });
                }
            }
        });
});
