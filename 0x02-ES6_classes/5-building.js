export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this._NIE = 'NotImplemented';
    if (this.evacuationWarningMessage() === this._NIE && this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return this._NIE;
  }
}
