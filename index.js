function openNav() {
  document.getElementById("sidenav").style.width = "25em";
}
  
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

function loadSideNav() {
  var element = document.getElementById("sidenav");
  var xhttp = new XMLHttpRequest();
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
  var element = document.getElementById("topBar");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {element.innerHTML = this.responseText;}
      if (this.status == 404) {element.innerHTML = "Page not found.";}
    }
  }
  xhttp.open("GET", "./topBar.html", true);
  xhttp.send();
}

function setTitle() {
  var side = getElementById("sidenav").children[0];
  for (var i = 0; i < side.childElementCount; i++)
  {
    var link = side.children[i].children[0].attributes;
    if (link.href == "." + window.location.pathname)
    {
      document.getElementById("title").innerHTML = link.innerHTML;
    }
  }
}


window.onload = function () {
  loadSideNav();
  loadTopBar();
  setTitle();
}