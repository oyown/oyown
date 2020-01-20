$(document).ready(function () {

    // initials
    var $window = $(window);
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    var API_KEY_AMZ = "https://abzlgn8azi.execute-api.us-east-1.amazonaws.com/oyn-cta-bar-api-STAGE_1/oyn-cta-bar-resource";
    var API_KEY_ATB = "https://api.airtable.com/v0/appLr6hjofLchsptr/Applicants?api_key=keyFeumDXxulyhMLA";


    // REMOVE THIS LATER
    $(".to-do li").click(function (e) {
        $(this).toggleClass("striked");
    })

    // Select 2
    $("select").each(function (e) {
        $(this).select2({
            minimumResultsForSearch: Infinity
        });
    })

    // sidebar for mobile
    $(".icn_menu").click(function () {
        $(this).find(".burger").toggleClass("is-close");
        $(".menu-items.nav-menu").toggleClass("is-open");
        // body overflow hidden
    })

    // navbar scroll to sections
    $("a[data-toscroll]").click(function () {

        // remove menu if responsive
        $(".menu-items.nav-menu.is-open").removeClass("is-open");
        $(".burger.is-close").removeClass("is-close");

        var toScroll = "." + $(this).attr("data-toscroll");
        $('html, body').animate({
            scrollTop: $(toScroll).offset().top - 120
        }, 2000);
    });

    // form submit
    $(".form-submit").click(function (e) {

        e.preventDefault();

        var parent = $(this).parent();

        var form_who = $(parent).find("select[name='who']").val(),
            form_need = $(parent).find("select[name='need']").val(),
            form_email = $(parent).find("input[type='email']").val();

        var data = {
            "who": form_who,
            "need": form_need,
            "email": form_email
        };

        $.ajax({
            type: "POST",
            url: API_KEY_AMZ,
            dataType: "json",
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),


            success: function () {
                // clear form and show a success message
                console.log("Successfull");
                // document.getElementById("contact-form").reset();
            },
            error: function () {
                // show an error message
                console.log("UnSuccessfull");
            }
        });
    })

    //scroll events
    $window.scroll(function(){
        var $scrollTop = $window.scrollTop();
    });

    //image flash
    $(".img-flash img")


    // MOBILE ONLY
    if (windowWidth <= 767) {

    }
})