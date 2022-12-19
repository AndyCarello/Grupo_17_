window.addEventListener('load', function () {

  let formulario = document.querySelector('#formularioRegistro');

  let campoEmail = document.querySelector('#email');
  let campoPassword = document.querySelector('#password');
  let campoNombre = document.querySelector('#nombre');
  let campoApellido = document.querySelector('#Apellido');
  let campoFechadenacimiento = document.querySelector('#Fechadenacimiento');
  let campoTelefono = document.querySelector('#telefono');
  let campoLocalidad = document.querySelector('#localidad');
  let campoCalleyaltura = document.querySelector('#calleyaltura');

  let validEmail= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; //validacion de mail


  formulario.addEventListener('submit', (e) => {

      let errores = [];

      if (campoEmail.value == "") {
          errores.push('El campo de email debe de estar completo')
      } else if (!validEmail.test(campoEmail.value)) { //Validacion de Email
          errores.push('No es un Email valido');
      }                                                     

      if (campoPassword.value == "") {
          errores.push('El campo de password debe de estar completo')
      }else if(campoPassword.value.length < 8){
          errores.push('Debe de contener mas de 8 caracteres');
      }

      if (campoNombre.value == "") {
          errores.push('El campo de apellido debe de estar completo')
      }else if(campoNombre.value.length < 2){
          errores.push('El nombre debe de contener mas de 2 caracteres');
      }

      if (campoApellido.value == "") {
          errores.push('El campo de apellido debe de estar completo')
      }else if(campoApellido.value.length < 2){
          errores.push('El apellido debe de contener mas de 2 caracteres');
      }

      if (campoFechadenacimiento.value == "") {
          errores.push('El campo de fecha de nacimiento debe de estar completo')
      }

      if (campoTelefono.value == "") {
          errores.push('El campo de telefono debe de estar completo')
      }

      if (campoLocalidad.value == "") {
          errores.push('El campo de localidad debe de estar completo')
      }

      if (campoCalleyaltura.value == "") {
          errores.push('El campo de calle y altura debe de estar completo')
      }

      if (errores.length > 0) {
          e.preventDefault();
          let ulErrores = document.querySelector('.errores');
          ulErrores.innerHTML = "";
          for (let i = 0; i < errores.length; i++) {
              ulErrores.innerHTML += "<li>" + errores[i] + "</li>";

          }
      }
  })
});