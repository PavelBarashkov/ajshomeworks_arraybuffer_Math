/* eslint-disable linebreak-style */
/* eslint-disable default-case */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/prefer-default-export
class Magician {
  constructor() {
    this._attack = null;
    this._stoned = null;
    this._cell = null;
  }

  setAttack(dmg, cell) {
    this._cell = cell;
    if (cell >= 1 && cell <= 5) {
      switch (cell) {
        case 5:
          this._attack = dmg * 0.6;
          break;
        case 4:
          this._attack = dmg * 0.7;
          break;
        case 3:
          this._attack = dmg * 0.8;
          break;
        case 2:
          this._attack = dmg * 0.9;
          break;
        case 1:
          this._attack = dmg;
          break;
      }
    } else {
      throw new Error('Invalid cell value. Cell must be between 1 and 5.');
    }
  }

  setStoned() {
    this._stoned = this._attack - Math.log2(this._cell) * 5;
  }

  get attack() {
    return this._attack;
  }

  get stoned() {
    return this._stoned;
  }
}

export default Magician;
