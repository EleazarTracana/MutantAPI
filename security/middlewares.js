const  ErrorResponse                        = require('../models/ErrorResponse'),
       Helper                               = require('../helpers/middleware');
module.exports = {
    IsMutantRequestValidation: (req,res,next) => {
        var {dna} = req.body,
            letters = "AGTC", // this value could be store in a database param
            errorMessage = "";
        if(!dna){
            errorMessage = "Required property is missing: dna";
        }else{
            if(dna instanceof Array){
                    var IsEquitable = Helper.checkLetterAndEquity(dna,letters);
                    if(IsEquitable){
                            next();
                    }else{
                        errorMessage = "String Array should be NxN and the accepted Array letters : AGTC";
                    }
            }else{
                errorMessage = "Bad format property, expected: String Array";
            }
        }
        if(errorMessage != ""){
            var response = new ErrorResponse(true,errorMessage);
            res.status(500).send(response);
        }
    }
}