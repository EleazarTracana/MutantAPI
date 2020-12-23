module.exports = class ErrorResponse {
    constructor(error, errors) {
      this.error  = error;
      this.errors = errors;
    }
  }