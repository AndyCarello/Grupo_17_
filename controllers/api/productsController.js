const db = require('../../database/models');



const apiControllerProducts = {


    list: async (req, res) => {
        const data = await db.Product.findAndCountAll({
            
            attributes: [
                'id',                  
                [
                    
                    db.sequelize.fn('CONCAT', db.sequelize.col('name')), 
                    'name'
                    
                ], 
                [
                    db.sequelize.fn('CONCAT', db.sequelize.col('description')), 
                    'description'
                ],
                'price',   
                [
                    db.sequelize.fn('CONCAT', 'http://', req.headers.host, '/api/products/', db.sequelize.col('id')), 
                    'url'
                ],  
            ]
        });
        res.send(data)
    },

    detail: async (req, res) => {
        const data = await db.Product.findByPk(req.params.id, {
            include: {
                model: db.Category,
                as: 'category',
                
                attributes: []
            },
            raw: true,            
            attributes: {               
                include: [
                    [
                        db.sequelize.col('category.name'), 
                        'category'
                    ]
                ],           
                exclude: [
                    'is_admin',
                    'password',
                    
                ]
            }
        })
        res.send(data)

    }

}


module.exports = apiControllerProducts;









