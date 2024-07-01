// JavaScript source code
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var mm2 = mm + 5;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}
if (mm2 > 12) {
    mm2 -= 12;
}
var yyyy2 = yyyy;
if (mm2 < mm) {
    yyyy2++;
}
if (mm2 < 10) {
    mm2 = "0" + mm2;
}
var sToday = yyyy + "-" + mm + "-" + dd;
var sFiveMonthLater = yyyy2 + "-" + mm2 + "-" + dd;
document.getElementById("idate").setAttribute("min", sToday);
document.getElementById("idate").setAttribute("max", sFiveMonthLater);

function submitfunction() {
    var name = document.getElementById("iname").value;
    var date = document.getElementById("idate").value;
    alert("Succesfully reserved a table on " + date + "\nThank you for dining with us " + name);
}
// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
/*<nav class="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
            <div class="container">
                <a class="navbar-brand" href="#top">
                    <img src="images/7.png" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-auto">
                        <a class="nav-link" href="#home">Home</a>
                        <a class="nav-link" href="#about-us">About us</a>
                        <a class="nav-link" href="#location">Contact us</a>
                        <a class="nav-link" href="#opening">Opening hours</a>
                        <a class="nav-link" href="#booking">Reserve a table</a>
                        <a class="nav-link" href="">Ernest</a>
                        <a class="nav-link" href="">Huang Wen</a>
                        <a class="nav-link" href="">Boon Leong</a>
                    </div>
                    <a class="btn btn-type" href="#">Back to Main Page</a>
                </div>
            </div>
        </nav>*/