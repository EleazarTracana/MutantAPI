module.exports = {
        ComputeCounters: (letter,counters) => {
            var   Letters = "ACGT";   //if the letters can change this could be store in a database param
                  Letters = Letters.replace(letter,"");
                  counters[letter]++;
                  Letters.split("").forEach(value => {
                  if(counters[value] > 0){
                       counters[value] = 0
                   }
             });
            return counters[letter] == maxSec;
        },
        IsPossibleToContinue: (letter,counters,length,indexAct) => {
            var result   = length - indexAct,
                computed = ((result + counters[letter]) >=4); 
            return computed;
        },
        CreateCounters: () => {
            return {    //if the letters can change this could be store in a database param
                "A": 0,
                "C": 0,
                "G": 0,
                "T": 0
            }
        }
}