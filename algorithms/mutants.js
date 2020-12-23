const dir    = require("../enums/directions"), 
      helper = require("../helpers/algorithms");
      maxSec = 4; //in case the mutant DNA requires more than 4 sequential letters this could be store in a database param


    //public functions
module.exports = {
    Inline: (dnaSec,direction) => {
        const constantN  =  dnaSec.length;
        var   i = 0,
              isSecuence = false;
                do{
                    var counters = helper.CreateCounters(),
                        possibleToContinue = true,
                         j = 0; 
                    do{
                         if(direction == dir.Horizontal){
                            letter = dnaSec[i][j]
                         }else if(direction == dir.Vertical){
                            letter = dnaSec[j][i]
                         }
                         isSecuence = helper.ComputeCounters(letter,counters);
                         possibleToContinue = helper.IsPossibleToContinue(letter,counters,constantN,j+1);
                        j++;
                     }while(!isSecuence  && j < constantN && possibleToContinue);
                    i++;
                 }while(!isSecuence && i < constantN);
            return isSecuence;
    },
    RightUpOblique: (dnaSec) => {
        const constantN = dnaSec.length;
        var   i = constantN -1;
              isSecuence = false;
                do{
                    var counters = helper.CreateCounters(),
                        possibleToContinue = true;
                        j =  0,
                        y =  i;
                    do{
                        var letter = dnaSec[j][y];
                            isSecuence = helper.ComputeCounters(letter,counters);
                            possibleToContinue = helper.IsPossibleToContinue(letter,counters,constantN,j+1);
                            j++
                            y--
                    }while(!isSecuence && j < constantN && y >= 0 && possibleToContinue)
                    i--;
                }while(!isSecuence && i >= maxSec - 1);
            return isSecuence;
    },
    RightDownOblique: (dnaSec) => {
        const constantN = dnaSec.length;
        var i   = 1,
            isSecuence = false;
                do{
                    var counters = helper.CreateCounters(),
                        possibleToContinue = true,
                        j = i,
                        y = constantN - 1;
                    do{
                        var letter = dnaSec[j][y];
                            isSecuence = helper.ComputeCounters(letter,counters);
                            possibleToContinue = helper.IsPossibleToContinue(letter,counters,constantN,j+1);
                            j++
                            y-- 
                    }while(!isSecuence && y > 0 && j < constantN && possibleToContinue)
                    i++;
                }while(!isSecuence && i <= constantN - maxSec);
            return isSecuence;
    },
    LeftUpOblique: (dnaSec) => {
        const constantN = dnaSec.length;
        var   i = 1,
              isSecuence = false;
              do{
                var counters = helper.CreateCounters(),
                    possibleToContinue = true,
                    j = 0,
                    y = i;
                do{
                    var letter = dnaSec[j][y];
                        isSecuence = helper.ComputeCounters(letter,counters);
                        possibleToContinue = helper.IsPossibleToContinue(letter,counters,constantN,y+1);
                        j++;
                        y++;
                }while(!isSecuence && j < constantN  && y < constantN && possibleToContinue);
                i++;
              }while(!isSecuence && i <= constantN - maxSec);
        return isSecuence;
    },
    LeftDownOblique: (dnaSec) => {
        const constantN = dnaSec.length;
        var   i = 0;
              isSecuence = false;
              do{
                var counters = helper.CreateCounters(),
                    j = i,
                    y = 0;
                do{
                    var letter = dnaSec[j][y];
                    isSecuence = helper.ComputeCounters(letter,counters);
                    possibleToContinue = helper.IsPossibleToContinue(letter,counters,constantN,j+1);
                    j++;
                    y++;
                }while(!isSecuence && j < constantN  && y < constantN && possibleToContinue);
                i++;
              }while(!isSecuence && i <= constantN - maxSec);
        return isSecuence;
    },
}