const db = require('../database/models');

module.exports = {

    administrador: (req, res) => {
        res.render("admin/index", {
            title: "Administrador del sitio",
            estilos: [
                "style.css",
                "footer.css"        
            ]
        })
    },
    
    listarUsuarios: (req, res) => {
        res.send("Listar usuarios")
    },

    alternarPermisosAdmin: (req, res) =>{
        res.send("alternarPermisosAdmin")
    },

    listarIngredientes: async (req, res) =>{
        let ingredientes = await db.Ingredient.findAll(); //traigo todos los ingredientes de la db
        res.render("admin/ingredientes/index", {
            title: "Administrador de Ingredientes",
            estilos: [
                "style.css",
                "footer.css"        
            ],
            ingredientes: ingredientes
        })
    },

    crearIngrediente: async (req, res) =>{
        try {
            let resultado = await db.Ingredient.create({
                name: req.body.nombre
            })
        } catch(e) {
            return res.send(e)
        }

        res.redirect("/admin/ingredientes")
    },

    actualizarIngrediente: async (req, res) =>{
        try {
            let resultado = await db.Ingredient.update({
                name: req.body.nombre
            },
            {
                where: {id: req.params.id}
            })
        } catch(e) {
            return res.send(e)
        }
        
        res.redirect("/admin/ingredientes")
    },

    eliminarIngrediente: async (req, res) =>{
        try {
            let resultado = await db.Ingredient.destroy({
                where: {
                    id: req.params.id
                } 
            })
        } catch(e) {
            return res.send(e)
        }
        
        res.redirect("/admin/ingredientes")
    },

    listarCategorias: async (req, res) =>{
        let categorias = await db.Category.findAll(); //traigo todas las categorias de la db
        res.render("admin/categorias/index", {
            title: "Administrador de Categorias",
            estilos: [
                "style.css",
                "footer.css"        
            ],
            categorias: categorias
        })
    },

    crearCategoria: async (req, res) =>{
        try {
            let resultado = await db.Category.create({
                name: req.body.nombre
            })
        } catch(e) {
            return res.send(e)
        }
        
        res.redirect("/admin/categorias")
    },

    actualizarCategoria: async (req, res) =>{
        try {
            let resultado = await db.Category.update({
                name: req.body.nombre
            },
            {
                where: {id: req.params.id}
            })
        } catch(e) {
            return res.send(e)
        }
        
        res.redirect("/admin/categorias")
    },

    eliminarCategoria: async (req, res) =>{
        try {
            let resultado = await db.Category.destroy({
                where: {
                    id: req.params.id
                } 
            })
        } catch(e) {
            return res.send(e)
        }
        
        res.redirect("/admin/categorias")
    },

    listarProductos: (req, res) =>{
        res.send("listarProductos")
    }
}