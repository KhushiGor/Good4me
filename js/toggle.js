 function showNavbar() {
    var x = document.getElementById("toggle");
    var y = document.getElementById("show-toggle");
    if (x.className == "toggle") {
      x.className += " close";
      y.className += " show-navbar";
    } else {
      x.className = "toggle";
      y.className = "navbar"
    }
  }