function sizeHandler() {
  if (window.innerWidth >= 1100) {
    document.body.style.backgroundColor = "teal";
  } else if (window.innerWidth >= 760) {
    document.body.style.backgroundColor = "tomato";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}
sizeHandler();
window.addEventListener("resize", sizeHandler);
