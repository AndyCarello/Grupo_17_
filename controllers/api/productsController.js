const db = require('../../database/models');
const Category = require('../../database/models/Category');



const apiControllerProducts = {


    list: async (req, res) => {
        const data = await db.Product.findAndCountAll({
            
            include: [{ association: "category" }],

            attributes: [
                'Product.id',                  
                [
                    
                    db.sequelize.fn('CONCAT', db.sequelize.col('Product.name')), 
                    'name'
                    
                ], 
                [
                    db.sequelize.fn('CONCAT', db.sequelize.col('description')), 
                    'description'
                ],
                'price',   
                [
                    db.sequelize.fn('CONCAT', 'http://', req.headers.host, '/api/products/', db.sequelize.col('Product.id')), 
                    'url'
                ],
               
            ]
        });
        res.send(data)
    },

    detail: async (req, res) => {
        const data = await db.Product.findByPk(req.params.id, {
            
            include: [
                {
                    model: db.Category,
                    as: 'category',
                    attributes: []


                },
                {

                    model: db.Ingredient,
                    as: 'ingredients',
                    
                    attributes: []
                }
       
            ],
        
            raw: true,            
            attributes: {               
                include: [
                    [
                        db.sequelize.col('category.name'), 
                        'category'
                        
                    ],   
                    [
                        db.sequelize.fn('CONCAT', '/public/img/', db.Sequelize.col('image')), 
                        'url'
                    ],
                    [
                        db.sequelize.col('ingredients.name'), 
                        'Ingrediente'
                        
                    ],
                    [
                        db.sequelize.col('ingredients.id'), 
                        'ID-ingrediente'
                        
                    ],   
                          
                    
                    
                ],
                
                
                
            }
        })
        res.send(data)

    }

}


module.exports = apiControllerProducts;









  