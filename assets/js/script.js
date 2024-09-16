borde = document.querySelector("#escudo");

borde.addEventListener("click", () => {
  if (!borde.classList.contains("red")) {
    borde.classList.add("red");
  } else {
    borde.classList.remove("red");
  }
});

const stickers = document.querySelector("#form");
let respuesta = document.querySelector(".Respuesta2");
stickers.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = event.target;

  const sticker1 = Number(data.sticker1.value);
  const sticker2 = Number(data.sticker2.value);
  const sticker3 = Number(data.sticker3.value);

  const resultado = sticker1 + sticker2 + sticker3;

  if (resultado > 10) {
    respuesta.innerText = "Llevas demasiados stickers";
  } else {
    respuesta.innerText = "Llevas " + resultado + " stickers";
  }
});

vaciar.addEventListener("click", () => {
  respuesta.innerText = "";
});

let password1 = "911";
let password2 = "714";
let respuesta2 = document.querySelector(".codigoacceso");

const codigo = document.querySelector("#credenciales");

codigo.addEventListener("submit", (event) => {
  event.preventDefault();
  const data2 = event.target;

  const digito1 = data2.codigo1?.value;
  const digito2 = data2.codigo2?.value;
  const digito3 = data2.codigo3?.value;

  const acceso = digito1 + digito2 + digito3;

  if (acceso == password1) {
    respuesta2.innerText = "Password 1 corecta";
  } else if (acceso == password2) {
    respuesta2.innerText = "Password 2 correcta";
  } else {
    respuesta2.innerText = "Password incorrecta";
  }
});
