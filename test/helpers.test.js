const assert         = require('assert'),
      helperAlg      = require('../helpers/algorithms'),
      helperStats    = require('../helpers/stats'),
      helperMid      = require('../helpers/middleware');

    it('CreateCounters   - Returns Object',() => {
        expectingObject = {  
            "A": 0,
            "C": 0,
            "G": 0,
            "T": 0
        }
        var result = helperAlg.CreateCounters();
        assert.deepStrictEqual(result,expectingObject);
    })
    it('ComputedCounters - Secuence founded',() => {
        counter = {  
            "A": 3,
            "C": 0,
            "G": 0,
            "T": 0
        }
        var result = helperAlg.ComputeCounters("A",counter);
        assert.strictEqual(result,true);
    })
    it('ComputedCounters - Secuence not founded',() => {
        counter = {  
            "A": 0,
            "C": 1,
            "G": 0,
            "T": 0
        }
        var result = helperAlg.ComputeCounters("C",counter);
        assert.strictEqual(result,false);
    })
    it('GetRatio         - Humans > Mutants',() => {
        var result = helperStats.calculateRatio(100,40),
            manualBool = (result == 0.40);
        assert.deepStrictEqual(manualBool,true);
    })
    it('GetRatio         - Mutants > Humans',() => {
        var result = helperStats.calculateRatio(40,120),
            manualBool = (result == 3.00);
        assert.strictEqual(manualBool,true);
    })
    it('GetRatio         - No Mutants',() => {
        var result = helperStats.calculateRatio(40,0),
            manualBool = (result == 0.0);
        assert.strictEqual(manualBool,true);
    })
    it('GetRatio         - No Humans',() => {
        var result = helperStats.calculateRatio(0,60),
            manualBool = (result == 0.0);
        assert.strictEqual(manualBool,true);
    })
    it('CheckLettersAndEquity - Equity',() => {
        var letters = "ACGT",
            body    =  [
                "ATGAA",
                "CATT",
                "AAGT",
                "CGGT"
            ],
        result = helperMid.checkLetterAndEquity(body,letters);
        assert.strictEqual(result,false);
    })
    it('CheckLettersAndEquity - Letter',() => {
        var letters = "ACGT",
            body    =  [
                "ATGB",
                "CATT",
                "AAGT",
                "CGGT"
            ],
        result = helperMid.checkLetterAndEquity(body,letters);
        assert.strictEqual(result,false);
    })
    it('CheckLettersAndEquity - Verified',() => {
        var letters = "ACGT",
            body    =  [
                "ATGT",
                "CATT",
                "AAGT",
                "CGGT"
            ],
        result = helperMid.checkLetterAndEquity(body,letters);
        assert.strictEqual(result,true);
    })