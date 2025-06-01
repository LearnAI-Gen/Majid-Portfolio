$(document).ready(function() {
    // Smooth scrolling for navbar links
    $(".scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Portfolio filter
    $(".filter-btn").on('click', function() {
        var filter = $(this).attr('data-filter');
        $(".filter-btn").removeClass('active');
        $(this).addClass('active');
        if (filter == 'all') {
            $('.portfolio-item').fadeIn(500);
        } else {
            $('.portfolio-item').hide();
            $('.portfolio-item.' + filter).fadeIn(500);
        }
    });

    // Show portfolio items on load
    $('.portfolio-item').fadeIn(500);

    // Back to Top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
});