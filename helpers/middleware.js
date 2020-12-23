module.exports = {
    checkLetterAndEquity: (dna,letters) => {
        var y = dna.length,
        IsEquitable = true,
        i = 0,
        j = 0;
        while(i < dna.length && IsEquitable){
            var value = dna[i];
            if(value.length != y){
                IsEquitable = false;
            }
            j = 0;
            while(j < dna[i].length && IsEquitable){
                var IsValid = letters.split("").find(x => x == dna[i][j]);
                if(!IsValid){
                    IsEquitable = false;
                }
                j++;
            }
            i++;
        } 
        return IsEquitable;                
    }
}