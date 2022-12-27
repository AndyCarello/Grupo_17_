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
            raw: true
        })
        res.send(data)
    },

    detail: async (req, res) => {
        const data = await db.Product.findByPk(req.params.id, {
            
            include: [
                 
                "category",
                "ingredients"
            ],
        
            raw: true,            
            attributes: {               
                include: [
                    [
                        db.sequelize.col('category.name'), 
                        'category'
                        
                    ],   
                    [
                        db.sequelize.fn('CONCAT', 'http://', req.headers.host, '/public/img/', db.Sequelize.col('image')), 
                        'url'
                    ],
                    [
                        db.sequelize.col('ingredients.name'),
                        'Ingrediente'
                        
                    ],
                    [
                        db.sequelize.col('ingredients.id'), 
                        'id-ingrediente'
                        
                    ],   
                          
                    
                    
                ],
                
                
                
            }
        })
        res.send(data)

    }

}


module.exports = apiControllerProducts;









  