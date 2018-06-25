$(document).ready(function(){
    $(".nav .burger").click(function(){
        $(".nav .burger").toggleClass("active");

        $(".nav").toggleClass("nav-links-active" );

    });
});