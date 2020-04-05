function expand(id) {
  document.querySelector("#" + id).classList.add("expand");
}

function shrink(id) {
  document.querySelector("#" + id).classList.remove("expand");
}

function lslide(id) {
  document.querySelector("#" + id).classList.add("lslide");
}

function rslide(id) {
  document.querySelector("#" + id).classList.add("rslide");
}
