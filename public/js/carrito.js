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
    let carrito = JSON.parse(getCookie("carrito"))
    let productoEncontrado = carrito.find(prod => idProducto == prod.id)
    return productoEncontrado.cantidad
}