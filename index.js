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

    $(".icn_menu").click(function(){
        $(this).find(".burger").toggleClass("is-close");
        $(".menu-items.nav-menu").toggleClass("is-open");
        // this toggle class
        // navbar toggle class
        // body overflow hidden
    })
})