function myFunction() {
    var x = document.getElementById("nov");
    if (x.className === "item") {
      x.className += " responsive";
    } else {
      x.className = "item";
    }
  }