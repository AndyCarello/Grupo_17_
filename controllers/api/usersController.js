const db = require('../../database/models');

//Exporto mi controlador de API de Usuarios
module.exports = {

    /* 
        Defino metodo list y detail del controlador
        Los metodos son async porque llevan un await para esperar la base de datos
     */

    list: async (req, res) => {
        const data = await db.User.findAndCountAll({
            //Con attributes elijo que campos quiero traer
            attributes: [
                'id',                
                //renombro columna con [original, alias] es como el AS de sql
                [
                    //fn('CONCAT', 'string1..N, col('campodetabla')..N) es igual al CONCAT de SQL
                    db.sequelize.fn('CONCAT', db.sequelize.col('name'), ' ', db.sequelize.col('lastname')), 
                    'name'
                ],
                'email',
                //req.headers.host me trae servidor (y puerto) del request
                [
                    db.sequelize.fn('CONCAT', 'http://', req.headers.host, '/api/users/', db.sequelize.col('id')), 
                    'url'
                ]
            ]
        });
        res.send(data)
    },

    detail: async (req, res) => {
        //A findByPK le paso un primer parametro que es el ID y despues el objeto de opciones
        const data = await db.User.findByPk(req.params.id, {
            // Incluyo al modelo relacionado de esta forma para poder elegir que campos quiero
            include: {
                model: db.Neighborhood,
                as: 'neighborhood',
                //no quiero que me muestre ningun campo directo en la lista de atributos porque les antepone el nombre de la association
                attributes: []
            },
            //RAW hace que al incluir sean atributos del mismo objeto y no un objeto anidado
            raw: true,
            //atributos para mi findByPK. Usnado inlcude/exclude me trae TODOS y no solo los que yo defina
            attributes: {
                //incluyo columna del include de la association pero la renombro con [original, alias]
                include: [
                    [
                        db.sequelize.col('neighborhood.name'), 
                        'neighborhood'
                    ]
                ],
                //excluyo datos sensibles y tambien los que no quiero mostrar de mi findByPK
                exclude: [
                    'is_admin',
                    'password',
                    'neighborhood_id'
                ]
            }
        })
        res.send(data)

    }
}