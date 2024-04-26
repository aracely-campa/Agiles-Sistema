document.addEventListener('DOMContentLoaded', () => {
    const agregarAlCarritoBotones = document.getElementsByClassName('boton-item');
    Array.from(agregarAlCarritoBotones).forEach((button) => {
        button.addEventListener('click', agregarAlCarrito);
    });

    function agregarAlCarrito(event) {
        const button = event.target;
        const item = button.closest('.item');
        const titulo = item.querySelector('.titulo-item').innerText;
        const precio = item.querySelector('.precio-item').innerText;
        const imagenSrc = item.querySelector('.img-item').src;

        const producto = {
            titulo: titulo,
            precio: precio,
            imagenSrc: imagenSrc,
            cantidad: 1
        };

        guardarProductoEnCarrito(producto);
    }

    function guardarProductoEnCarrito(producto) {
        let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];
        const existeProducto = carrito.find(p => p.titulo === producto.titulo);

        if (existeProducto) {
            existeProducto.cantidad += 1;
        } else {
            carrito.push(producto);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
});