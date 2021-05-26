
var element = document.body;
var pathSun = 'M 27 16.1 A 12 12 90 1 1 27 16 z';
var pathMoon = 'M27.038,16.081A12.025,12.025,0,1,1,13.957,3,9.353,9.353,0,0,0,27.038,16.081Z';
var darkmode = 0;


function moonClicked() {
    element.classList.toggle("dark-mode");


    //element.style.backgroundColor = "#2c2f37";
    //alert(document.body.style.color = "white");
    if (darkmode == 0){
      //Nightmode
      $("#moon").attr("d", pathSun);
      $("#moon").attr("visibility", 'hidden');
      $("#sun").attr("visibility", 'none');
      document.getElementById("LoginForm").style.background = "#191919";
      document.getElementById("forgot").style.color = "white";
      document.getElementById("input-text").style.color = "white";
      changeInputColor('white');
      //document.body.append(addCSS);
      $("#Pfad_25").attr("fill", '#191919');


      darkmode = 1;
    }
    else {
      //Daymode
      $("#moon").attr("d", pathMoon);
      $("#moon").attr("visibility", 'none');
      $("#sun").attr("visibility", 'hidden');
      document.getElementById("forgot").style.color = "grey";
       document.getElementById("LoginForm").style.background = "#fff";
       document.getElementById("input-text").style.color = "white";
       changeInputColor('black');
       $("#Pfad_25").attr("fill", 'white');
      darkmode = 0;
    }
}
function loginClicked() {
var loginx = document.getElementById("LoginForm");
    if (loginx.style.display === "none") {
      loginx.style.display = "block";
    } else {
      loginx.style.display = "none";
    }

}

function navClicked() {
  var x = document.getElementById("Navigation");


    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function changeInputColor(toColor){
  addCSS = document.createElement('style');
  addCSS.innerHTML = "::placeholder { color: " + toColor + "; }";
}


function LoginCheck(){
    if(document.getElementById('password').value == 0){
      alert("hi");
      document.getElementById("password").style.color = "grey";
    }
}
