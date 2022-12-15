window.onload = function(){


    let form = document.querySelector('.flex');
    
    

    form.addEventListener("submit" , (event)=>{


        let errores = [];
        let nombre = document.querySelector("#nombre");
        let precio = document.querySelector("#precio");
        let descripcion = document.querySelector("#comentario");
        let categoria = document.querySelector("#categoria");
        


        if(nombre.value == "" ){

            errores.push("nombre no puede estar vacio");
            
        }
        if(nombre.value.length < 5){

            errores.push("El nombre no puede tener menos de 5 caracteres");
        }
        
        if(precio.value == ""){

            errores.push("precio no puede estar vacio");
        }
        if(descripcion.value == ""){

            errores.push("descripcion no puede estar vacio");
        }
        if(descripcion.value.length < 20){

            errores.push("La descripcion debe tener como minimo 20 caracteres");
        }
        if(categoria.value == ""){

            errores.push("categoria no puede estar vacio");
        }
       
        if(errores.length > 0){
            event.preventDefault();
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for( let i = 0; i < errores.length; i++){

                ulError.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }



    })


}