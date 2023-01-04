const db = require('../../database/models');
const Category = require('../../database/models/Category');
const sequelize = db.sequelize;



const apiControllerProducts = {


    list: async (req, res) => {
        const data = await db.Product.findAndCountAll({
            
            //Incluyo el modelo relacionado
            include:  "category",

            //Con attributes elijo que campos quiero traer
            attributes: [
                'product.id',   
                //renombro columna con [original, alias] es como el AS de sql               
                [
                    db.sequelize.fn('CONCAT', db.sequelize.col('product.name')), 
                    'name'
                    
                ], 
                [
                    db.sequelize.fn('CONCAT', db.sequelize.col('description')), 
                    'description'
                ],
                'price',   
                //req.headers.host me trae servidor
                [
                    db.sequelize.fn('CONCAT', 'http://', req.headers.host, '/api/products/', db.sequelize.col('product.id')), 
                    'url'
                ],
            
            ],
        });
        data.categorias = await db.Product.findAll({
            include: "category",
            attributes: [
                [sequelize.fn("COUNT" , sequelize.col("Product.id")) , 'cant_prod']
            ],
            group: 'category_id',
            // raw: true
        });
        data.ultimoProducto = await db.Product.findOne({
            order: [["id", "DESC"]]
        });
        res.send(data);
    },

    detail: async (req, res) => {
        //A findByPK le paso un primer parametro que es el ID y despues el objeto con los modelos relacionados y los atributos
        const data = await db.Product.findByPk(req.params.id, {
            
            //Incluyo el modelo relacionado
            include: [
                 
                "category",
                "ingredients"
            ],
                   
            //Con attributes elijo que campos quiero traer
            attributes: {               
                include: [
                    [
                        //req.headers.host me trae servidor
                        db.sequelize.fn('CONCAT', 'http://', req.headers.host, '/img/', db.Sequelize.col('image')), 
                        'url'
                    ],
                ],
                
     
            }
        })
        res.send(data)

    }

}

//Exporto mi controlador 
module.exports = apiControllerProducts;









  