let form = document.getElementById("form-actualizar-pass");
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let passwordNueva = document.getElementById('password-nueva').value;
    let passwordRepetir = document.getElementById('password-repetir').value;
    if (passwordNueva != passwordRepetir) {
        return alert("Las contraseñas no coinciden");
    } else {
        form.submit();
    }
})