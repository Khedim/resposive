$(document).ready(function () {
    let lis = $(".information ul li");
    lis.each(function () {
        $(this).on("click", function () {
            lis.removeClass("selected");
            $(this).addClass("selected");
            $(".information .info-content div").hide();
            $("." + $(this).data("class")).fadeIn();
        });
    });
});