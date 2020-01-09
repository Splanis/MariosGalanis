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

// Particles Background
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});