const form = document.getElementById("formSubasta");
const lista = document.getElementById("listaSubastas");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let fecha = document.getElementById("fecha").value;

    // VALIDACIONES
    if (producto.length < 3) {
        alert("El nombre debe tener mínimo 3 caracteres");
        return;
    }

    if (precio <= 0) {
        alert("El precio debe ser mayor a 0");
        return;
    }

    if (!fecha) {
        alert("Debe seleccionar una fecha");
        return;
    }

    let subasta = document.createElement("div");
    subasta.classList.add("subasta");

    subasta.innerHTML = `
        <h3>${producto}</h3>
        <p>Precio: $${precio}</p>
        <p>Fecha: ${fecha}</p>
    `;

    lista.appendChild(subasta);

    form.reset();
});