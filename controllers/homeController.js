//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    home: (req, res) => {
        res.render("./home/index", {
            title: "Home",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando el Home");
    },
    
};

module.exports = controller;