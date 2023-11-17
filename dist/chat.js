// $("#fixed-form-container").hide();
// $("#chat_button").click(function () {
//         $(this).next("#fixed-form-container div").slideToggle(600);
//         $(this).toggleClass("expanded");
//     });


$("#fixed-form-container").hide();
// $("#fixed-form-container .body").hide();
$("#chat_button").click(function () {
        // $(this).next("#fixed-form-container .body").slideToggle(300);
        // $(this).toggleClass("expanded");
        $("#fixed-form-container").slideToggle(300);
        // $("#fixed-form-container .body").slideToggle(300);
        $(this).toggleClass("expanded");
    });