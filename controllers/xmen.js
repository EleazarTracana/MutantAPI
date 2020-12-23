const algorithms  = require("../algorithms/mutants"),
      helperStats = require("../helpers/stats"),
      Stats       = require("../models/StatsResponse"),
      dir         = require("../enums/directions");


      //public functions
module.exports = (db) => {
    var   functions   = {},
          collections = require("../database/collections")(db);
    const maxSec      = 4; //in case the mutant DNA requires more than 4 sequential letters this could be store in a database param

    functions.IsMutant =  (dnaSec) => {
        var  isMutant = false;
        if(dnaSec.length >= maxSec){
            isMutant = algorithms.Inline(dnaSec,dir.Horizontal);
            if(!isMutant){
                isMutant = algorithms.Inline(dnaSec,dir.Vertical);
                if(!isMutant){
                    isMutant = algorithms.LeftDownOblique(dnaSec);
                    if(!isMutant){
                        isMutant = algorithms.LeftUpOblique(dnaSec);
                        if(!isMutant){
                            isMutant = algorithms.RightDownOblique(dnaSec);
                            if(!isMutant){
                                isMutant = algorithms.RightUpOblique(dnaSec);
                            }
                        }
                    }
                }
            }
        }
        return isMutant;
    }
    functions.GetStats = (res) => {
        var Humans  = collections.Humans(),
            Mutants = collections.Mutants();
        Humans.countDocuments({},(error,countHumans) => {
        if(!error){
            Mutants.countDocuments({},(error,countMutants) => {
                if(!error){
                    var ratio    = helperStats.calculateRatio(countHumans,countMutants),
                        response = new Stats(countHumans,countMutants,ratio);
                    res.status(200).send(response)
                }else{
                    console.log(err);
                    //not implemented connection error handler
                }
            });
        }else{
            console.log(err);
            //not implemented connection error handler 
        }
    });
    }
    functions.InsertHuman = (dnaSec) => {
        var humans  = collections.Humans(),
        fields      = {dnaSecuence: dnaSec};
        humans.insertOne(fields,(err,result) => {
            if(!err){
                //insertion has been made
            }else{
                console.log(err);
                //not implemented connection error handler 
            }
        });
    }
    functions.InsertMutant = (dnaSec) => {
        var mutants  = collections.Mutants(),
        fields       = {dnaSecuence: dnaSec};
        mutants.insertOne(fields,(err,result) => {
            if(!err){
                //insertion has been made
            }else{
                console.log(err);
                //not implemented connection error handler 
            }
        })
    }
    return functions;
}
