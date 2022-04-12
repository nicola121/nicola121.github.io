function openNav() {
  document.getElementById("sidenav").style.width = "25em";
}
  
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

function loadSideNav() {
  element = document.getElementById("sidenav");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {element.innerHTML = this.responseText;}
      if (this.status == 404) {element.innerHTML = "Page not found.";}
    }
  }
  xhttp.open("GET", "./sidenav.html", true);
  xhttp.send();
}

function loadTopBar() {
  element = document.getElementById("topBar");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {element.innerHTML = this.responseText;}
      if (this.status == 404) {element.innerHTML = "Page not found.";}
    }
  }
  xhttp.open("GET", "./topBar.html", true);
  xhttp.send();
}


document.onload = (){
  loadTopBar();
  loadSideNav();
}