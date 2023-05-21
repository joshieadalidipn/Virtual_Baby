document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        var email = document.getElementById("email").value;
        var password = document.getElementById("pwd").value;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/auth/login", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var jwtToken = xhr.responseText;
                localStorage.setItem("jwt", jwtToken);
                console.log(jwtToken)
            }
        };
        var data = JSON.stringify({"email": email, "password": password});
        xhr.send(data);
    });
});
