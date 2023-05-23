/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Magician from '../Magician';

const magician = new Magician();

test('attack with stoned', () => {
  magician.setAttack(100, 2);
  magician.setStoned();
  const result = 85;
  expect(result).toBe(magician.stoned);
});
