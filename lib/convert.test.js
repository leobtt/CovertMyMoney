const {convert, toMoney} = require('./convert')

test('covert 4 to 8', () => {
  expect(convert(4,8)).toBe(32)
})

test('toMoney converts 2', () => {
  expect(toMoney(2)).toBe('2.00')
})

test('toMoney converts 2 from a text', () => {
  expect(toMoney('2')).toBe('2.00')
})