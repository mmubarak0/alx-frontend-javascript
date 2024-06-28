function verifyType(v, type) {
  if (type === 'array') {
    if (v instanceof Array) {
      return true;
    }
    return false;
  }
  // eslint-disable-next-line valid-typeof
  if (typeof v === type) {
    return true;
  }
  return false;
}
export default class Currency {
  constructor(code, name) {
    if (verifyType(code, 'string')) {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
    if (verifyType(name, 'string')) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (verifyType(code, 'string')) {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (verifyType(name, 'string')) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
