$(function () {
    var path = location.href.split("/").pop();

    if (path == "" || path == "index.html") {
        path = "#home";
    }
    var target = $('nav a[href="' + path + '"]');
    target.addClass("active");
});

$(document).on("click", "ul li a", function () {
    $(this).addClass("active");
    $("ul li a")
        .not(this)
        .removeClass("active");
});
