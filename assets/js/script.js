function myfunction() {
    var x = document.getElementById("passwd");
    var y = document.getElementById("showpass");
    if (x.type === "password") {
        x.type = "text";
        y.src = "../assets/img/showpass.png"
    } else {
        x.type = "password";
        y.src = "../assets/img/hidepass.png"
    }
}