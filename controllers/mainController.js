const db = require('../database/models');
const { productList } = require('./productosController');
const sequelize = db.sequelize;
//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
let controller = {
    
    delivery: (req,res)=>{
        res.render("delivery", {
            title: "Delivery",
            estilos: [
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
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando pagina ¿Quienes somos?");
    },

    home: (req, res) => {

        db.Product.findAll({
            limit: 4,
            order: sequelize.random()
        })
        .then((productos) =>{

            res.render("index", {
            title: "Home",
            estilos: [
                "index.css",
                "footer.css",
                "style-solo-header.css"     
            ],
            productos: productos
        
        });

        console.log("Mostrando el Home");
    })

},


    contacto: (req, res) => {
        res.render("contacto", {
            title: "Contacto",
            estilos: [
                "index.css",
                "footer.css",
                "contacto.css",
                "style-solo-header.css"
            ]
        });
        console.log("Mostrando Contacto");
    },

    
//metodo "prueba"(http://localhost:3000/sequelize) donde si cambian la consulta y lo llaman desde el navegador les devuelve un json directamente con la respuesta.
    prueba: async(req,res)=> { 


        /* let data = await db.Cart.findAll({
            where: { user_id: 2},
            include: "products"
        }) */

        try {
            data = await db.Product.findByPk(1, {
                include: 'ingredients'
            })
        } catch (e) {
            console.log(e);
            console.log("La app sigue corriendo");
            return res.send("Capture el error y no rompio");
        }

        res.send(data);

    }
};

module.exports = controller; 