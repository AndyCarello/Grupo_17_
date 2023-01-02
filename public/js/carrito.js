function agregarAlCarrito(elemento){
    let idProducto = elemento.dataset.pid;
    let carrito = getCookie("carrito");
    if (carrito && carrito != "") {
        carrito = JSON.parse(carrito)
        posicionProducto = carrito.findIndex((prod => prod.id == idProducto))
        if (posicionProducto != -1){
            let producto = carrito[posicionProducto];
            producto.cantidad = String(parseInt(producto.cantidad) + 1);
            carrito[posicionProducto] = producto
        } else {
            let producto = {
                id: idProducto,
                cantidad: "1"
                }
            carrito.push(producto)
        }
    } else {
        carrito = []
        let producto = {
            id: idProducto,
            cantidad: "1"
            }
        carrito.push(producto)
    }
    setCookie("carrito", JSON.stringify(carrito), 1)
    carrito = getCookie("carrito");
    alert("Producto agregado al carrito!");
}

function consultarCantidad(idProducto){
    let carrito = JSON.parse(getCookie("carrito"));
    let productoEncontrado = carrito.find(prod => idProducto == prod.id);
    return productoEncontrado.cantidad;
}

function actualizarCantidad(elemento) {
    let carrito = JSON.parse(getCookie("carrito"));
    let productoParaActualizar = parseInt(elemento.dataset.pid);
    let nuevaCantidad = parseInt(elemento.value)
    let data = {
        id : productoParaActualizar,
        cantidad: nuevaCantidad
    }
    carrito.splice(carrito.findIndex(x => parseInt(x.id) == productoParaActualizar), 1, data);
    setCookie("carrito", JSON.stringify(carrito), 1);
    alert("Cantidad actualizada!")
    window.location.reload(); 
}

function quitarDelCarrito(elemento) {
    let carrito = JSON.parse(getCookie("carrito"));
    let idAEliminar = elemento.dataset.pid;
    carrito.splice(carrito.findIndex(x => parseInt(x.id) == parseInt(idAEliminar)), 1);
    setCookie("carrito", JSON.stringify(carrito), 1);
    alert("Producto eliminado!")
    window.location.reload();

}