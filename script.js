const btnAñadir = document.getElementById("añadir");
const productoInput = document.getElementById("producto");
const cantidadInput = document.getElementById("cantidad");
const precioUniInput = document.getElementById("precio-unitario");
const tbody = document.querySelector("tbody");
const total = document.getElementById("total");

// Calcula y actualiza el total sumando todos los productos
function actualizarTotalFactura() {
  let totalFactura = 0;
  const filas = tbody.querySelectorAll("tr");

  filas.forEach((fila) => {
    const precioTotalCelda = fila.querySelector(".precio-total");
    if (precioTotalCelda) {
      const precioTotal = parseFloat(precioTotalCelda.textContent);
      if (!isNaN(precioTotal)) {
        totalFactura += precioTotal;
      }
    }
  });

  total.textContent = totalFactura.toFixed(2);
}

// Añade nuevo producto a la factura
btnAñadir.addEventListener("click", () => {
  const producto = productoInput.value.trim();
  const cantidad = cantidadInput.value.trim();
  const precioUni = precioUniInput.value.trim();

  if (producto === "") {
    alert("Por favor, introduce un producto");
    return;
  }
  
  if (cantidad === "" || parseFloat(cantidad) <= 0) {
    alert("La cantidad debe ser mayor que 0");
    return;
  }
  
  if (precioUni === "" || parseFloat(precioUni) < 0) {
    alert("El precio debe ser un número positivo");
    return;
  }

  const fila = document.createElement("tr");
  const precioTotal = parseFloat(precioUni) * parseFloat(cantidad);

  const txtProducto = document.createElement("td");
  txtProducto.textContent = producto;

  const txtCantidad = document.createElement("td");
  txtCantidad.textContent = cantidad;

  const txtPrecioUni = document.createElement("td");
  txtPrecioUni.textContent = parseFloat(precioUni).toFixed(2) + " €";

  const txtPrecioTotal = document.createElement("td");
  txtPrecioTotal.className = "precio-total"; 
  txtPrecioTotal.textContent = precioTotal.toFixed(2);

  // Celda de acciones con botones
  const txtAcciones = document.createElement("td");
  txtAcciones.className = "acciones"; 
  
  // Botón Detalles
  const btnMostrar = document.createElement("button");
  btnMostrar.textContent = "Detalles";
  btnMostrar.className = "btn-detalles"; 
  
  // Botón Eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn-eliminar"; 
  
  txtAcciones.appendChild(btnMostrar);
  txtAcciones.appendChild(btnEliminar);

  fila.appendChild(txtProducto);
  fila.appendChild(txtCantidad);
  fila.appendChild(txtPrecioUni);
  fila.appendChild(txtPrecioTotal);
  fila.appendChild(txtAcciones);

  tbody.appendChild(fila);

  // Limpiar formulario
  productoInput.value = "";
  cantidadInput.value = "0";
  precioUniInput.value = "0";

  actualizarTotalFactura();

  // Eliminar fila
  btnEliminar.addEventListener("click", () => {
    fila.remove();
    actualizarTotalFactura();
  });

  // Mostrar detalles del producto
  btnMostrar.addEventListener("click", () => {
    alert(
      "Detalles:\n" +
        "Producto: " + producto + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Precio unitario: " + parseFloat(precioUni).toFixed(2) + " €\n" +
        "Precio total: " + precioTotal.toFixed(2) + " €"
    );
  });
});