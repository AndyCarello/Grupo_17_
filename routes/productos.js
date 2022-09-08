let express = require ('express');

let router = express.Router();

router.get("/producto", (req,res)=>{
    res.render("producto", {
        title: "Detalle de producto",
        estilos: [
            "style.css"        
        ]
    });
    console.log("producto");
});

module.exports = router;