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
})