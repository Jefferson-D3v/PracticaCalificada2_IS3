const sum = require('./sum');

test('sum(4, 6) should return 10', () => {
    expect(sum(4, 6)).toBe(10);
});

test('sum(-3, 8) should return 5', () => {
    expect(sum(-3, 8)).toBe(5);
});
