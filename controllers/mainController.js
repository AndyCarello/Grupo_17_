const db = require('../database/models');
const { productList } = require('./productosController');
const sequelize = db.sequelize;
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
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando Pagina de Delivery");
    },
    preguntasFrecuentes: (req,res)=>{
        res.render("preguntas-frecuentes", {
            title: "Preguntas frecuentes",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"          
            ]
        });
        console.log("Mostrando pagina Preguntas Frecuentes");
    },
    quienesSomos: (req, res) => {
        res.render("info", {
            title: "¿Quienes somos?",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando pagina ¿Quienes somos?");
    },

    home: (req, res) => {
        res.render("index", {
            title: "Home",
            estilos: [
                "index.css",
                "style-solo-header.css"     
            ]
        });
        console.log("Mostrando el Home");
    },

    contacto: (req, res) => {
        res.render("contacto", {
            title: "Contacto",
            estilos: [
                "index.css",
                "contacto.css",
                "style-solo-header.css"
            ]
        });
        console.log("Mostrando Contacto");
    },

    footer:(req,res) => {

        res.render("partials/footer" , {
            title: "Footer",
            estilos: [
                "syles.css",
                "footer.css"


            ]
    


        });
    },
//metodo "prueba"(http://localhost:3000/sequelize) donde si cambian la consulta y lo llaman desde el navegador les devuelve un json directamente con la respuesta.
    prueba:async(req,res)=> { 


        let data = await db.Cart.findAll({
            where: { user_id: 2},
            include: "products"
        })

        data = await db.Product.findByPk(1, {
            include: 'ingredients'
        })

        res.json(data)

    }
};

module.exports = controller; 