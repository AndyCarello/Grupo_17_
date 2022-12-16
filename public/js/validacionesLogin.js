window.addEventListener('load', function(e){
    let formulario = document.getElementById("login-form");
    
    formulario.addEventListener("submit", function(event){
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
                       
        if (validator.isEmpty(email) || !validator.isEmail(email)) {
            event.preventDefault(); 
            alert("El campo 'correo electronico' debe contener una dirección de correo valida")
        }
        if (validator.isEmpty(password)) {
            event.preventDefault(); 
            alert("El campo 'contraseña' es obligatorio")
        }
    })
})