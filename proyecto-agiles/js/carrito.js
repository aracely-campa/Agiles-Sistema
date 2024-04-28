
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosCarrito();
    calcularTotal();
});

function mostrarProductosCarrito() {
    const contenedorCarrito = document.getElementById('carrito-items');
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    contenedorCarrito.innerHTML = ''; // Limpia el contenido actual
    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
        div.className = 'producto-en-carrito';
        div.innerHTML = `
        <div class="producto-imagen">
            <img src="${producto.imagen}" alt="Imagen de ${producto.titulo}" width="100" height="auto">
        </div>
        <div class="producto-info">
            <h4 class="producto-titulo">${producto.titulo}</h4>
            <p class="producto-precio">$${producto.precio}</p>
            <div class="producto-cantidad">
                <button onclick="cambiarCantidad(${index}, -1)">-</button>
                <span>${producto.cantidad}</span>
                <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </div>
            <button onclick="eliminarProducto(${index})" class="eliminar-producto">Eliminar</button>
        </div>
    `;
        contenedorCarrito.appendChild(div);
    });
}


function cambiarCantidad(index, delta) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    if ((carrito[index].cantidad + delta) > 0) {
        carrito[index].cantidad += delta;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarProductosCarrito(); // Recargar los productos en el DOM
        calcularTotal(); // Recalcular el total
    }
}

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarProductosCarrito(); // Recargar los productos en el DOM
    calcularTotal(); // Recalcular el total
}
function calcularTotal() {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
        console.log('Producto:', producto.titulo, 'Precio:', producto.precio, 'Cantidad:', producto.cantidad);  // Depuración
    });
    console.log('Total calculado:', total);  // Depuración
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}
document.getElementById('boton-pagar').addEventListener('click', function () {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    alert('Compra realizada');
});
