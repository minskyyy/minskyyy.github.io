
var element = document.body;
var pathSun = 'M 27 16.1 A 12 12 90 1 1 27 16 z';
var pathMoon = 'M27.038,16.081A12.025,12.025,0,1,1,13.957,3,9.353,9.353,0,0,0,27.038,16.081Z';
var darkmode = 0;

function init(){

document.getElementById("LoginForm").style.display = "none";
}

function moonClicked() {
    element.classList.toggle("dark-mode");


    //element.style.backgroundColor = "#2c2f37";
    //alert(document.body.style.color = "white");
