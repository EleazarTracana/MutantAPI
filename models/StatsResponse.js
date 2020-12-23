module.exports = class StatsResponse {
    constructor(humans, mutants, ratio) {
      this.count_mutant_dna = mutants;
      this.count_human_dna  = humans;
      this.ratio = ratio;
    }
  }