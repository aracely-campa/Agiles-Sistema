
    document.querySelectorAll('.boton-item').forEach(boton => {
    boton.addEventListener('click', () => {
        const item = boton.closest('.item');
        const titulo = item.querySelector('.titulo-item').textContent;
        const precioTexto = item.querySelector('.precio-item').textContent;
        const precio = parseFloat(precioTexto.replace('$', '').replace(/\./g, ''));
        const imagenSrc = item.querySelector('.img-item').src;

        const producto = {
            titulo: titulo,
            precio: precio,
            imagen: imagenSrc,
            cantidad: 1
        };

        agregarAlCarrito(producto);
    });
});

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const existenteIndex = carrito.findIndex(p => p.titulo === producto.titulo);
    if (existenteIndex !== -1) {
        carrito[existenteIndex].cantidad += 1;
    } else {
        carrito.push(producto);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
