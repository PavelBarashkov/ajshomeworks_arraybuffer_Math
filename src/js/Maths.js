/* eslint-disable */

export default class Maths {
    constructor() {
        this._attack = null;
        this._stoned = false;
        this._cell = null;
    }

    setCell(call) {
        if(call >= 1 && call <= 5) {
            this._cell = call;
        } else {
            throw new Error('Invalid cell value. Cell must be between 1 and 5.');
        }
    }
    setAttack(attack) {
        if(attack > 0 ) {
            this._attack = attack;
        } else {
            throw new Error('Invalid attack value. attack must be greater than 0');
        }
    }
    
    setStoned() {
        this._stoned = true;
    }

    getAttack() {
        let attackPlayer = 1;
        switch (this._cell) {
            case 5:
                attackPlayer = 0.6;
                break;
            case 4:
                attackPlayer = 0.7;
                break;
            case 3:
                attackPlayer = 0.8;
                break;
            case 2:
                attackPlayer = 0.9;
                break;
            case 1:
                return this._attack;
        }
            if(this._stoned) {
                this._stoned =  this._attack * attackPlayer - Math.log2(this._cell) * 5
            }
            const dmg = this._stoned ? this._stoned : this._attack * attackPlayer; 
            return dmg;
       
    }

    getStoned() {
        return this._stoned;
    }
}

/*
Не понимаю зачем мы логику перенесли в геттер? 
Если можно было вычислить все в сеттер  и сразу записать это значение в свойства,  
а теперь приходиться получать getStoned только после getAttack, 
тк вычисление значение происходит в  getAttack
*/