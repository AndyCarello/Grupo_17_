module.exports = {

    administrador: (req, res) => {
        res.send("Listar usuarios")
    },
    
    listarUsuarios: (req, res) => {
        res.send("Listar usuarios")
    },

    alternarPermisosAdmin: (req, res) =>{
        res.send("alternarPermisosAdmin")
    },

    listarIngredientes: (req, res) =>{
        res.send("listarIngredientes")
    },

    crearIngrediente: (req, res) =>{
        res.send("crearIngrediente")
    },

    actualizarIngrediente: (req, res) =>{
        res.send("actualizarIngrediente")
    },

    eliminarIngrediente: (req, res) =>{
        res.send("eliminarIngrediente")
    },

    listarCategorias: (req, res) =>{
        res.send("listarCategorias")
    },

    crearCategoria: (req, res) =>{
        res.send("crearCategoria")
    },

    actualizarCategoria: (req, res) =>{
        res.send("actualizarCategoria")
    },

    eliminarCategoria: (req, res) =>{
        res.send("eliminarCategoria")
    },

    listarProductos: (req, res) =>{
        res.send("listarProductos")
    }
}