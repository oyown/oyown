$(document).ready(function(){

    // initials
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();


    // REMOVE THIS LATER
    $(".to-do li").click(function(e){
        $(this).toggleClass("striked");
    })

    // Select 2
    $("select").each(function(e){
        $(this).select2({
            minimumResultsForSearch: Infinity
        });
    })

    // sidebar for mobile
    $(".icn_menu").click(function(){
        $(this).find(".burger").toggleClass("is-close");
        $(".menu-items.nav-menu").toggleClass("is-open");
        // body overflow hidden
    })

    // navbar scroll to sections
    $("a[data-toscroll]").click(function() {

        // remove menu if responsive
        $(".menu-items.nav-menu.is-open").removeClass("is-open");
        $(".burger.is-close").removeClass("is-close");

        var toScroll = "." + $(this).attr("data-toscroll");
        $('html, body').animate({
            scrollTop: $(toScroll).offset().top - 120
        }, 2000);
    });


    // MOBILE ONLY
    if(windowWidth <= 767){

    }
})