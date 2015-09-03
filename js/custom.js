/**
 * Custom js for miscellaneous JS code
 * by Michael Lin
 */

$(".navbar-nav>li>a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
