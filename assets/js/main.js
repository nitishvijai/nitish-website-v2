$(document).ready(function () {
    // globals
    var visible = $('nav').is(":visible");

    //// fade elements in
    $('main').fadeIn(2000);
    $('#sep').fadeIn(2000);
    $('article').fadeIn(2000);
    $('p').fadeIn(2000);
    $('#essayBody').fadeIn(2000);

    $("#refresh").hover(function () {
        document.getElementById("refresh").innerHTML = "Refresh Page";
    },
        function () {
            document.getElementById("refresh").innerHTML = "<img src='./assets/favicon/favicon-96x96.png' id='logo' width='25px' height='25px' style='display: inline;'/>Nitish Vijai";
        });

    $("#name").hover(function () {
        document.getElementById("name").innerHTML = "Go Back Home";
    },
        function () {
            document.getElementById("name").innerHTML = "<img src='./assets/favicon/favicon-96x96.png' id='logo' width='25px' height='25px' style='display: inline;'/>Nitish Vijai";
        });

    // Contact Form Validation
    $('#fullName').on('input', function () {
        var input = $(this);
        var isName = input.val();
        if (isName) {
            input.removeClass("invalid").addClass("valid");
            $('#errName').removeClass("error_show").addClass("error");
        } else {
            input.removeClass("valid").addClass("invalid");
            $('#errName').removeClass("error").addClass("error_show");
        }
    });

    $('#emailadd').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var isEmail = re.test(input.val());
        if (isEmail) {
            input.removeClass("invalid").addClass("valid");
            $('#errMail').removeClass("error_show").addClass("error");
        } else {
            input.removeClass("valid").addClass("invalid");
            $('#errMail').removeClass("error").addClass("error_show");
        }
    });

    $('#subject').keyup(function (event) {
        var input = $(this);
        var message = input.val();
        if (message) {
            input.removeClass("invalid").addClass("valid");
            $('#errMesg').removeClass("error_show").addClass("error");
        } else {
            input.removeClass("valid").addClass("invalid");
            $('#errMesg').removeClass("error").addClass("error_show");
        }
    });

    $('#submitButton').click(function (event) {
        var name = $('#fullName').val();
        var email = $('#emailadd').hasClass('valid');
        var subject = $('#subject').val();

        if (name && email && subject) {
            alert('Your message has been sent to Nitish!');
        }
        else {
            // handle errors
            event.preventDefault();
            if (!name) {
                $('#errName').removeClass("error").addClass("error_show");
                $('#fullName').removeClass("valid").addClass("invalid");
            } else {
                $('#errName').removeClass("error_show").addClass("error");
                $('#fullName').removeClass("invalid").addClass("valid");
            }

            if (!email) {
                $('#errMail').removeClass("error").addClass("error_show");
                $('#emailadd').removeClass("valid").addClass("invalid");
            } else {
                $('#errMail').removeClass("error_show").addClass("error");
                $('#emailadd').removeClass("invalid").addClass("valid");
            }

            if (!subject) {
                $('#errMesg').removeClass("error").addClass("error_show");
                $('#subject').removeClass("valid").addClass("invalid");
            } else {
                $('#errMesg').removeClass("error_show").addClass("error");
                $('#subject').removeClass("invalid").addClass("valid");
            }
        }
    });

    $('#resetButton').click(function () {
        $('#errName').removeClass("error_show").addClass("error");
        $('#errMail').removeClass("error_show").addClass("error");
        $('#errMesg').removeClass("error_show").addClass("error");

        $('#fullName').removeClass("invalid").removeClass("valid");
        $('#emailadd').removeClass("invalid").removeClass("valid");
        $('#subject').removeClass("invalid").removeClass("valid");
    });

    $('#hbBtn').click(function() {
        $('nav').toggle();
        visible = $('nav').is(":visible");
    });

    $(window).on("orientationchange", function(event) {
        if (window.orientation == 0 || window.orientation == 180) {
            if (visible === false) {
                $('nav').hide();
            }
        }
        else if (window.orientation == -90 || window.orientation == 90){
            if (visible === false) {
                $('nav').show();
            }
        }
    });
});