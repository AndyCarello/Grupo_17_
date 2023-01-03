/* Funciones de cookies que tome prestadas de w3school */

/* genero una cookie. Recibe el nombre que le quiero dar,
 el valor y cuantos dias va a durar */
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* consulto una cookie. Recibe el nombre y devuelve el valor */

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* Elimino una cookie. Recibe el nombre, le asigna un valor vacio y vencimiento pasado
despues redirige a la home  */

function deleteCookie(cname) {
    const d = new Date("2000-01-01T00:00:00");
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + '="";' + expires + ';path=/';
    window.location.href = "/";
}
