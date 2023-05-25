/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Magician from '../Magician';

const magician = new Magician();

test('attack with stoned', () => {
  magician.setCell(2);
  magician.setAttack(100);
  magician.setStoned();
  magician.getAttack();
  const result = 85;
  expect(result).toBe(magician.getStoned());
});
