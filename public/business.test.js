// sum.test.js
const bus = require('./business');

test('adds 1 + 2 to equal 3', () => {
    expect(bus.sum(1, 2)).toBe(3);
});

test('see if autoLoc can successfully retrieve the current address', () =>{
    expect(bus.getLoc("mock")).toBe(true);
})


