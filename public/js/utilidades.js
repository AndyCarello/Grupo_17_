function mostrarDetalle(elemento) {
    let objetivo = document.getElementById(elemento.dataset.objetivo);
    objetivo.classList.toggle('oculto');
}