//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
let controller = {
    test: (req,res)=>{
        res.render("test", {
            title: "Test SUCRE PASTELERIA",
            estilos: [
                "style.css",
                "footer.css"        
            ]
        });
        console.log("Mostrando que esta funcionando");
    },
    delivery: (req,res)=>{
        res.render("delivery", {
            title: "Delivery",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando Pagina de Delivery");
    },
    preguntasFrecuentes: (req,res)=>{
        res.render("preguntas-frecuentes", {
            title: "Preguntas frecuentes",
            estilos: [
                "style.css"          
            ]
        });
        console.log("preguntas frecuentes");
    },
    quienesSomos: (req, res) => {
        res.render("info", {
            title: "¿Quienes somos?",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando ¿Quienes somos?");
    }
};

module.exports = controller; 