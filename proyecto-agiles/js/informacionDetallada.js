// JavaScript para mostrar/ocultar la descripción al hacer clic en el botón "Agregar al Carrito"
function mostrarDescripcion(boton) {
    var descripcion = boton.parentNode.querySelector('.descripcion');
    if (descripcion.style.display === 'none') {
        descripcion.style.display = 'block';
    } else {
        descripcion.style.display = 'none';
    }
}