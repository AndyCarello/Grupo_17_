window.addEventListener('load', function() {
    

    let formulario = document.querySelector('form');
  
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      alert('hola');
    })
  
  });