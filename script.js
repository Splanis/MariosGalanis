// Active CSS NavBar Links
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

// Contact Form
$(function () {
    $('.contact-submit-btn').click(function (event) {
        event.preventDefault()

        var email = $('.email').val()
        var name = $('.name').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElement = $('.status')
        statusElement.empty()

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        if (!validateEmail(email)) {
            statusElement.append('<div>-Please enter a valid Email Address.</div>')
            event.preventDefault()
        } 

        if (subject.length <= 0) {
            statusElement.append('<div>-Please give a message subject.</div>')
            event.preventDefault()
        } 

        if (name.length <= 0) {
            statusElement.append('<div>-Please enter your name.</div>')
            event.preventDefault()
        }

        if (message.length <= 0) {
            statusElement.append('<div>-Please enter a message.</div>')
            event.preventDefault()
        }
    })
});