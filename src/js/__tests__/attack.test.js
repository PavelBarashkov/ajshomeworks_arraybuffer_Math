/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Daemon from '../Daemon';
import Magician from '../Magician';

const magician = new Magician();
const daemon = new Daemon();

test('test attack. dmg = 100, cell = 1', () => {
  magician.setCell(1);
  magician.setAttack(100);
  const result = 100;
  expect(result).toBe(magician.getAttack());
});

test('test attack. dmg = 100, cell = 2', () => {
  magician.setCell(2);
  magician.setAttack(100);
  const result = 90;
  expect(result).toBe(magician.getAttack());
});

test('test attack deamon. dmg = 100, cell = 2', () => {
  daemon.setCell(2);
  daemon.setAttack(100);
  const result = 90;
  expect(result).toBe(daemon.getAttack());
});

test('test attack. dmg = 100, cell = 3', () => {
  magician.setCell(3);
  magician.setAttack(100);
  const result = 80;
  expect(result).toBe(magician.getAttack());
});

test('test attack. dmg = 100, cell = 4', () => {
  magician.setCell(4);
  magician.setAttack(100);
  const result = 70;
  expect(result).toBe(magician.getAttack());
});

test('test attack. dmg = 100, cell = 5', () => {
  magician.setCell(5);
  magician.setAttack(100);
  const result = 60;
  expect(result).toBe(magician.getAttack());
});

test('error attack cell > 5', () => {
  expect(() => {
    magician.setCell(6);
    magician.setAttack(100);
  }).toThrow(Error);
});

test('error attack  < 0', () => {
  expect(() => {
    magician.setCell(1);
    magician.setAttack(0);
  }).toThrow(Error);
});
