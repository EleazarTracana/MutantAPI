module.exports = {
    calculateRatio: (countHumans,countMutants) => {
        var percentage = 0.0;
        if(countMutants > 0 && countHumans > 0){
            if(countMutants > countHumans){
                percentage = (countMutants/countHumans)
           }else{
               percentage = ((countMutants/100) * countHumans)/100;
           }
        }
        return percentage;
    }
}