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
    
    listarUsuarios: async (req, res) =>{
        try {
            let usuarios = await db.User.findAll(); //traigo todos los ingredientes de la db
            res.render("admin/usuarios/index", {
                title: "Administrador de Usuarios",
                estilos: [
                    "style.css",
                    "footer.css"        
                ],
                usuarios: usuarios
            })
        }catch(e) {
            return res.send(e)
        }
    },

    alternarPermisosAdmin: async (req, res) =>{
        try {
            let usuario = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (usuario.is_admin){
                let resultado = await db.User.update(
                    {
                        is_admin: 0
                    },
                    {
                        where: {
                            id: req.params.id
                        }
                    }
                )
            } else {
                let resultado = await db.User.update(
                    {
                        is_admin: 1
                    },
                    {
                        where: {
                            id: req.params.id
                        }
                    }
                )
            }
        } catch (e) {
            return res.send(e)
        }
        res.redirect("/admin/usuarios")
    },

    eliminarUsuario: async (req, res) =>{
        try {
            let resultado = await db.User.destroy({
                where: {
                    id: req.params.id
                } 
            })
        } catch(e) {
            return res.send(e)
        }
        res.redirect("/admin/usuarios")
    },

    listarIngredientes: async (req, res) =>{
        try {
            let ingredientes = await db.Ingredient.findAll(); //traigo todos los ingredientes de la db
            res.render("admin/ingredientes/index", {
                title: "Administrador de Ingredientes",
                estilos: [
                    "style.css",
                    "footer.css"        
                ],
                ingredientes: ingredientes
            })
        }catch(e) {
            return res.send(e)
        }
    },

    crearIngrediente: async (req, res) =>{
        try {
            let resultado = await db.Ingredient.create(
                {
                    name: req.body.nombre
                }
            )
        } catch(e) {
            return res.send(e)
        }
        res.redirect("/admin/ingredientes")
    },

    actualizarIngrediente: async (req, res) =>{
        try {
            let resultado = await db.Ingredient.update(
                {
                    name: req.body.nombre
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        } catch(e) {
            return res.send(e)
        }
        res.redirect("/admin/ingredientes")
    },

    eliminarIngrediente: async (req, res) =>{
        try {
            let resultado = await db.Ingredient.destroy(
                {
                    where: {
                        id: req.params.id
                    } 
                }
            )
        } catch(e) {
            return res.send(e)
        }
        res.redirect("/admin/ingredientes")
    },

    listarCategorias: async (req, res) =>{
        try {
            let categorias = await db.Category.findAll(); //traigo todas las categorias de la db
            res.render("admin/categorias/index", {
                title: "Administrador de Categorias",
                estilos: [
                    "style.css",
                    "footer.css"        
                ],
                categorias: categorias
            })
        } catch(e) {
            return res.send(e)
        } 
    },

    crearCategoria: async (req, res) =>{
        try {
            let resultado = await db.Category.create(
                {
                    name: req.body.nombre
                }
            )
        } catch(e) {
            return res.send(e)
        }
        res.redirect("/admin/categorias")
    },

    actualizarCategoria: async (req, res) =>{
        try {
            let resultado = await db.Category.update(
                {
                    name: req.body.nombre
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        } catch(e) {
            return res.send(e)
        }
        res.redirect("/admin/categorias")
    },

    eliminarCategoria: async (req, res) =>{
        try {
            let resultado = await db.Category.destroy(
                {
                    where: {
                        id: req.params.id
                    } 
                }
            )
        } catch(e) {
            return res.send(e)
        }
        res.redirect("/admin/categorias")
    },

    listarProductos: async (req, res) =>{
        try {
            let productos = await db.Product.findAll(); //traigo todos los productos de la db
            res.render("admin/productos/index", {
                title: "Administrador de Productos",
                estilos: [
                    "style.css",
                    "footer.css"        
                ],
                productos: productos
            })
        } catch(e) {
            return res.send(e);
        }
    },

    eliminarProducto: async (req, res) => {
        try {
            let resultado = await db.Product.destroy(
                {
                    where: {id:req.params.id}
                }
            ) 
        } catch(e) {
            return res.send(e);
        }
        res.redirect("/admin/productos")
    }
}