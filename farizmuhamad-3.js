function changeIcon() {
    var icon = document.getElementById("original-icon");
    if (icon.classList.contains("bi-toggle-off")) {
        icon.classList.remove("bi-toggle-off");
        icon.classList.add("bi-toggle-on");
    } else {
        icon.classList.remove("bi-toggle-on");
        icon.classList.add("bi-toggle-off");
    }
};