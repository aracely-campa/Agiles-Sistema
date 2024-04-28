

    document.querySelectorAll('.boton-item').forEach(boton => {
        boton.addEventListener('click', () => {
            const item = boton.closest('.item');
            const titulo = item.querySelector('.titulo-item').textContent;
            const precio = item.querySelector('.precio-item').textContent;
            const imagenSrc = item.querySelector('.img-item').src;

            const producto = { titulo, precio, imagen: imagenSrc, cantidad: 1 };
            agregarAlCarrito(producto);
        });
    });

    function agregarAlCarrito(producto) {
        let carrito = [];
        if (localStorage.getItem('carrito')) {
            carrito = JSON.parse(localStorage.getItem('carrito'));
        }
        
        const existente = carrito.find(p => p.titulo === producto.titulo);
        if (existente) {
            existente.cantidad += 1;
        } else {
            carrito.push(producto);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto añadido al carrito');
    }
