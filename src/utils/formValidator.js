export default class FormValidator {

  // expects a string
  isNumberValide(value) {
    if( !this.isString(value) ) {
      return false;
    }

    const trimmedValue = value.trim();

    if( this.isEmpty(trimmedValue) ) {
      return false;
    }

    const number = +(trimmedValue);

    if( isNaN(number) ) {
      return false;
    }

    return true;
  }

  // expects a string
  isNameValide(value) {
    if( !this.isString(value) ) {
      return false;
    }

    let trimmedValue = value.trim();

    if( this.isEmpty(trimmedValue) ) {
      return false;
    }

    return true;
  }

  isString(value) {
    if(typeof value !== 'string') {
      console.error('value must be a string');
      return false;
    }

    return true;
  }

  isEmpty(value) {
    if(value.length) {
      return false;
    }

    return true;
  }
}

// window.a = new Validator();
