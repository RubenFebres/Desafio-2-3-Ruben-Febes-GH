borde = document.querySelector("#escudo");

borde.addEventListener("click", () => {
  if (!borde.classList.contains("red")) {
    borde.classList.add("red");
  } else {
    borde.classList.remove("red");
  }
});
