$(document).ready(function(){
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
        var toScroll = "." + $(this).attr("data-toscroll");
        $('html, body').animate({
            scrollTop: $(toScroll).offset().top - 120
        }, 2000);
    });
})