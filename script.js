$(document).ready(function(){
    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    var aboutBtn = document.getElementById("aboutBtn");
    aboutBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var aboutSection = document.getElementById("about");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    $(".card").hover(function(){
        $(this).css("transform", "translateY(-10px)");
    }, function(){
        $(this).css("transform", "translateY(0)");
    });
});

