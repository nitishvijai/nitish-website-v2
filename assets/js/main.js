$(document).ready(function() {
    $("#refresh").hover(function(){
        document.getElementById("refresh").innerHTML = "Refresh Page";
    },
    function(){
        document.getElementById("refresh").innerHTML = "Nitish Vijai";
    });

    $("#name").hover(function(){
        document.getElementById("name").innerHTML = "Go Back Home";
    },
    function(){
        document.getElementById("name").innerHTML = "Nitish Vijai";
    });

    // Contact Form Validation
    $('#fullName').on('input', function(){
        var input = $(this);
        var isName = input.val();
        if (isName) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#emailadd').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var isEmail = re.test(input.val());
        if (isEmail) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#subject').keyup(function(event) {
        var input = $(this);
        var message = input.val();
        if (message) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#submitButton').click(function(event) {
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
            } else {
                $('#errName').removeClass("error_show").addClass("error");
            }

            if (!email) {
                $('#errMail').removeClass("error").addClass("error_show");
            } else {
                $('#errMail').removeClass("error_show").addClass("error");
            }

            if (!subject) {
                $('#errMesg').removeClass("error").addClass("error_show");
            } else {
                $('#errMesg').removeClass("error_show").addClass("error");
            }
        }
    });
});