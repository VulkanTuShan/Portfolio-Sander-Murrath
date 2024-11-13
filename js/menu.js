//Open the fly-out
document.getElementById("menu-toggle").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

//close the fly-out with overlay
document.getElementById("overlay").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

//close the fly-out with button
document.getElementById("menu-close").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});