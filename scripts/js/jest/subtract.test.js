const subtract = require('./subtract');

test('properly subtract two numbers', () => {
    expect(subtract(1,2)).toBe(-1);
})