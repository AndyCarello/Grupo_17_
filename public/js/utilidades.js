/* //Toma el id de un div desde el data-objetivo de los 3 puntitos y
    le pone o le saca la clase oculto */
function mostrarDetalle(elemento) {
    let objetivo = document.getElementById(elemento.dataset.objetivo);
    objetivo.classList.toggle('oculto');
}

/* Busca todos los elementos con clase ocultable y les pone o saca la clase menu-oculto
    la clase siempre-desktop evita que queden ocultos cuando esta en desktop */
function ocultarMenu() {
    let elementos = document.getElementsByClassName("ocultable");
    for (elemento of elementos) {
        elemento.classList.toggle("menu-oculto")
    }
    
}