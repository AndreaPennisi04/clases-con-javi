// Crear un input donde una persona escriba un texto y cuando aprete
//el boton me muestre lo escrito abajo. hace una captura del texto
//Capturando eventos desde el DOM

function cargarTexto() {
  let texto = document.getElementById("texto").value;
  document.getElementById("resultado").innerHTML = texto;
}

let carga = document.getElementById("cargar");
carga.onclick = cargarTexto;
