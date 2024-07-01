// JavaScript source code
var counter = 1;
setInterval(function () {
    document.getElementById('B' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var mm2 = mm + 1;
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
var sOneMonthLater = yyyy2 + "-" + mm2 + "-" + dd;
document.getElementById("iDate").setAttribute("min", sToday);
document.getElementById("iDate").setAttribute("max", sOneMonthLater);

function resetForm() {
    document.getElementById("reserveform").reset();
    divobj = document.getElementById("finalMessage");
    divobj.style.display = 'none';
}
function submitForm() {
    var divObj = document.getElementById("finalMessage");
    divObj.style.display = "block";
    divObj.innerHTML = "Your booking for the " + document.getElementById("iDate").value + " has been made";
}
