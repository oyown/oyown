$(document).ready(function(){
    $(".to-do li").click(function(e){
        $(this).toggleClass("striked");
    })
})