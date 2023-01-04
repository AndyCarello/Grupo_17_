function mostrarDetalle(elemento) {
    let objetivo = document.getElementById(elemento.dataset.objetivo);
    objetivo.classList.toggle('oculto');
}

function ocultarMenu() {
    let elementos = document.getElementsByClassName("ocultable");
    for (elemento of elementos) {
        elemento.classList.toggle("menu-oculto")
    }
    
}