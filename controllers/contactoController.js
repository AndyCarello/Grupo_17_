//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    contacto: (req, res) => {
        res.render("contacto/contacto", {
            title: "Contacto",
            estilos: [
                "contacto.css"
                    
            ]
        });
        console.log("Mostrando Contacto");
    },
    
};

module.exports = controller;