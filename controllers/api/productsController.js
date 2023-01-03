const db = require('../../database/models');
const Category = require('../../database/models/Category');
const sequelize = db.sequelize;



const apiControllerProducts = {


    list: async (req, res) => {
        const data = await db.Product.findAndCountAll({
            
            include:  "category",

            attributes: [
                'product.id',                  
                [
                    db.sequelize.fn('CONCAT', db.sequelize.col('product.name')), 
                    'name'
                    
                ], 
                [
                    db.sequelize.fn('CONCAT', db.sequelize.col('description')), 
                    'description'
                ],
                'price',   
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
        const data = await db.Product.findByPk(req.params.id, {
            
            include: [
                 
                "category",
                "ingredients"
            ],
                   
            attributes: {               
                include: [
                    [
                        db.sequelize.fn('CONCAT', 'http://', req.headers.host, '/img/', db.Sequelize.col('image')), 
                        'url'
                    ],
                ],
                
     
            }
        })
        res.send(data)

    }

}


module.exports = apiControllerProducts;









  