
const {hasKey} = require('../../../src/common/object');

test('hasKey', () => {
    const object1 = {
        a: 1,
        b: {
            a: 2,
        },
        c: [],
        NaN: 1,
        false: 1,
        true: 0,
    }
    object1[1] = 3;
    expect(hasKey(object1, 'a')).toBe(true);
    expect(hasKey(object1, 'd')).toBe(false);
    expect(hasKey(object1.b, 'c')).toBe(false);
    expect(hasKey(object1.b, 'a')).toBe(true);
    expect(hasKey(object1, '1')).toBe(true);
    expect(hasKey(object1, 1)).toBe(true);
    expect(hasKey(object1, NaN)).toBe(true);
    expect(hasKey(object1, false)).toBe(true);
    expect(hasKey(object1, true)).toBe(true);
    expect(() => {
        hasKey(object1, undefined);
    }).toThrow();
    expect(() => {
        hasKey(object1, null)
    }).toThrow();
});