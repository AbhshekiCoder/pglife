window.addEventListener("load", function() {
    var signup_form = document.getElementById("signup-form");
    signup_form.addEventListener("submit", function (event) {
        var XHR = new XMLHttpRequest();
        var form_data = new FormData(signup_form);
        XHR.addEventListener("load",  signup_success);
        XHR.addEventListener("error", on_error);
        XHR.open("POST", "api/signup_submit.php");
        XHR.send(form_data);

        event.preventDefault();


    });
});    

var signup_success = function (event){
    var response = JSON.parse(event.target.responseText);
    if (response.success) {
        alert(response.message);
        window.location.href = "index.php";
    } else {
        alert(response.message);
    }
};

var on_error = function (event) {
    alert('oops! something went wrong');
};