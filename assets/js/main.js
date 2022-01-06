$(function(){
        $("a").on('click', function(event) {
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

        $(window).on("scroll", function () {
          if ($(window).scrollTop() > $("#quienessomos").offset().top - 50) {
            $("nav").addClass("active");
          } else {
            $("nav").removeClass("active");
          };
        });
      });
