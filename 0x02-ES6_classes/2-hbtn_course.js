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
export default class HolbertonCourse {
  constructor(name, length, students) {
    /* eslint-disable no-underscore-dangle */
    if (verifyType(name, 'string')) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (verifyType(length, 'number')) {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (verifyType(students, 'array')) {
      if (students.every((e) => verifyType(e, 'string'))) {
        this._students = students;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    } else {
      throw new TypeError('Students must be an array');
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

  get length() {
    return this._length;
  }

  set length(length) {
    if (verifyType(length, 'number')) {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (verifyType(students, 'array')) {
      if (students.every((e) => verifyType(e, 'string'))) {
        this._students = students;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
  /* eslint-enable no-underscore-dangle */
}
