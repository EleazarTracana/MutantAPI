const assert           = require('assert'),
      algorithms       = require('../algorithms/mutants'),
      controllerMutant = require('../controllers/xmen')(null),
      dir              = require('../enums/directions');
describe('algorithms.test.js',() => {
    it('Horizontal Inline Algorithm - No secuence', () => {
        var dnaSecuence = 
            [
                "ATGCCA",
                "CATTAC",
                "ATAAAT",
                "CGGCAG",
                "ATCCAA",
                "GCACTG"
            ];
        var result = algorithms.Inline(dnaSecuence,dir.Horizontal);
        assert.strictEqual(result,false);
    })
    it('Horizontal Inline Algorithm - 1 secuence', () => {
        var dnaSecuence = 
            [
                "ATGCCA",
                "CATTAC",
                "ATAAAA", //secuence
                "CGGCAG",
                "ATCCAA",
                "GCACTG"
            ];
        var result = algorithms.Inline(dnaSecuence,dir.Horizontal);
        assert.strictEqual(result,true);
    })
    it('Vertical   Inline Algorithm - No Secuence', () => {
        var dnaSecuence = 
            [
                "ATCCCA",
                "CATTTC",
                "ATTAAA", 
                "CGTCAG",
                "ATCCAA",
                "GCACTG"
            ];
        var result = algorithms.Inline(dnaSecuence,dir.Vertical);
        assert.strictEqual(result,false);
    })
    it('Vertical   Inline Algorithm - 1 Secuence', () => {
        var dnaSecuence = 
            [
                "ATTCCA",
                "CATTTC",
                "ATTAAA", 
                "CGTCAG",
                "ATCCAA",
                "GCACTG"
            ];
        var result = algorithms.Inline(dnaSecuence,dir.Vertical);
        assert.strictEqual(result,true);
    })
    it('RightUp   Oblique Algorithm - No secuence', () => {
        var dnaSecuence = 
            [
                "ATGTA",
                "CTTTA",
                "AAGTA", 
                "CGGAA",
                "ATCAT",
            ];
        var result = algorithms.RightUpOblique(dnaSecuence);
        assert.strictEqual(result,false);
    })
    it('RightUp   Oblique Algorithm - 1 secuence', () => {
        var dnaSecuence = 
            [
                "ACGTA",
                "ACTAA",
                "ATACA", 
                "CAAAT",
                "CTCAT",
            ];
        var result = algorithms.RightUpOblique(dnaSecuence);
        assert.strictEqual(result,true);
    })
    it('RightDown Oblique Algorithm - No secuence', () => {
        var dnaSecuence = 
            [
                "ATGTC",
                "CATTA",
                "AAGTA", 
                "CGGAT",
                "ATCCA",
            ];
        var result = algorithms.RightDownOblique(dnaSecuence);
        assert.strictEqual(result,false);
    })
    it('RightDown Oblique Algorithm - 1 secuence', () => {
        var dnaSecuence = 
            [
                "ATGTC",
                "CCTTA",
                "ATGAC", 
                "CGATT",
                "CACCA",
            ];
        var result = algorithms.RightDownOblique(dnaSecuence);
        assert.strictEqual(result,true);
    })
    it('LeftUp    Oblique Algorithm - No secuence', () => {
        var dnaSecuence = 
            [
                "ATGTC",
                "CACTA",
                "AAGTA", 
                "CGGAT",
                "ATCCA",
            ];
        var result = algorithms.LeftUpOblique(dnaSecuence);
        assert.strictEqual(result,false);
    })
    it('LeftUp    Oblique Algorithm - 1 secuence', () => {
        var dnaSecuence = 
            [
                "ATGTC",
                "CATTA",
                "AAGTA", 
                "CGGAT",
                "ATCCA",
            ];
        var result = algorithms.LeftUpOblique(dnaSecuence);
        assert.strictEqual(result,true);
    })
    it('IsMutant - Verified', () => {
        var dnaSecuence = 
            [
                "ATGTC",
                "CATTA",
                "AAATA", 
                "CGGAT",
                "ATCCA",
            ];
        var result = controllerMutant.IsMutant(dnaSecuence);
        assert.strictEqual(result,true);
    })
    it('IsMutant - Not Verified', () => {
        var dnaSecuence = 
            [
                "ATGTC",
                "CATTA",
                "AAGCA", 
                "CGGAT",
                "ATCCA",
            ];
        var result = controllerMutant.IsMutant(dnaSecuence);
        assert.strictEqual(result,false);
    })

});
 