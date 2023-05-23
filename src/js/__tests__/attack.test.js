/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Daemon from '../Daemon';
import Magician from '../Magician';

const magician = new Magician();
const daemon = new Daemon();

test('test attack. dmg = 100, cell = 1', () => {
  magician.setAttack(100, 1);
  const result = 100;
  expect(result).toBe(magician.attack);
});

test('test attack. dmg = 100, cell = 2', () => {
  daemon.setAttack(100, 2);
  const result = 90;
  expect(result).toBe(daemon.attack);
});

test('test attack deamon. dmg = 100, cell = 2', () => {
  magician.setAttack(100, 2);
  const result = 90;
  expect(result).toBe(magician.attack);
});

test('test attack. dmg = 100, cell = 3', () => {
  magician.setAttack(100, 3);
  const result = 80;
  expect(result).toBe(magician.attack);
});

test('test attack. dmg = 100, cell = 4', () => {
  magician.setAttack(100, 4);
  const result = 70;
  expect(result).toBe(magician.attack);
});

test('test attack. dmg = 100, cell = 5', () => {
  magician.setAttack(100, 5);
  const result = 60;
  expect(result).toBe(magician.attack);
});

test('error attack cell > 5', () => {
  expect(() => {
    magician.setAttack(100, 6);
  }).toThrow(Error);
});
