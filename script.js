
let mensaje = document.getElementById("mensaje");
let contador = document.getElementById("contador");
let contenedor = document.querySelector(".contenedor");

mensaje.addEventListener("input", function() {
    let cantidad = mensaje.value.length;

    contador.textContent = cantidad + " / 100";

    if (cantidad === 100) {
        contenedor.classList.add("rojo");
    } else {
        contenedor.classList.remove("rojo");
    }
});
