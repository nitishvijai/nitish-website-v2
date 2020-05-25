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
});