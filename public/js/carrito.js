function agregarAlCarrito(elemento){
    //tomo el id del producto del atributo data-pid del boton agregar
    let idProducto = elemento.dataset.pid;
    let carrito = getCookie("carrito");
    if (carrito && carrito != "") {
        carrito = JSON.parse(carrito)
        posicionProducto = carrito.findIndex((prod => prod.id == idProducto))
        //si el producto esta en el carrito, le sumo uno a la cantidad y actualizo el carrito en esa posicion
        if (posicionProducto != -1){
            let producto = carrito[posicionProducto];
            producto.cantidad = String(parseInt(producto.cantidad) + 1);
            carrito[posicionProducto] = producto
        } else {
            //si el producto no esta en el carrito, lo agrego al final
            let producto = {
                id: idProducto,
                cantidad: "1"
                }
            carrito.push(producto)
        }
    } else {
        //si no habia carrito, lo genero
        carrito = []
        let producto = {
            id: idProducto,
            cantidad: "1"
            }
        carrito.push(producto)
    }
    //convierto el carrito a Json y grabo/actualizo la cookie
    setCookie("carrito", JSON.stringify(carrito), 1)
    alert("Producto agregado al carrito!");
}

//recibe un id de producto y devuelve cuantos hay en el carrito
function consultarCantidad(idProducto){
    let carrito = JSON.parse(getCookie("carrito"));
    let productoEncontrado = carrito.find(prod => idProducto == prod.id);
    return productoEncontrado.cantidad;
}

//Recibe un elemento input con un valor y asigna ese valor al producto que tiene en data-pid 
function actualizarCantidad(elemento) {
    let carrito = JSON.parse(getCookie("carrito"));
    let productoParaActualizar = parseInt(elemento.dataset.pid);
    let nuevaCantidad = parseInt(elemento.value);
    if(nuevaCantidad < 1 ){
        alert('La cantidad debe de ser mayor o igual a 1')
    }else{

        //genero un objeto para reemplazar en la cookie
        let data = {
            id : productoParaActualizar,
            cantidad: nuevaCantidad
        }
        //actualizo el producto en la cookie
        let posicionEnCarrito = carrito.findIndex(x => parseInt(x.id) == productoParaActualizar);
        carrito.splice(posicionEnCarrito, 1, data);
        setCookie("carrito", JSON.stringify(carrito), 1);
        alert("Cantidad actualizada!");
        window.location.reload(); 
    }
}
// recibe une etiqueta i con data-pid
function quitarDelCarrito(elemento) {
    let carrito = JSON.parse(getCookie("carrito"));
    let idAEliminar = elemento.dataset.pid;
    let posicionEnCarrito = carrito.findIndex(x => parseInt(x.id) == parseInt(idAEliminar));
    carrito.splice(posicionEnCarrito, 1);
    setCookie("carrito", JSON.stringify(carrito), 1);
    alert("Producto eliminado!")
    window.location.reload();

}