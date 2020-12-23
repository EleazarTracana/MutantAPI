module.exports = (app,db) => {
    const controller    = require("../controllers/xmen")(db),
          ErrorResponse = require("../models/ErrorResponse"),
          {IsMutantRequestValidation} = require("../security/middlewares");

    app.post("/xmen/mutant",IsMutantRequestValidation,(req,res,next) =>{
        var {dna}       = req.body;
        try{
           var isMutant    = controller.IsMutant(dna);
            if(isMutant){
                controller.InsertMutant(dna);
                res.status(200).send();
            }else{
                controller.InsertHuman(dna);
                res.status(403).send();
            }
        }catch(error){
            var result = new ErrorResponse(true,error)
            res.status(500).send(error);
        }
    });
    app.get("/xmen/stats",(req,res,next) =>{
        try{
            controller.GetStats(res);
        }catch(error){
            var result = new ErrorResponse(true,error)
            res.status(500).send(result)
        }
    });
}