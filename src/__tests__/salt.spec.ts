import { getSalt } from '../salt';

describe('salt', () => {
    it('getSalt with non-8', () => {
        const salt = getSalt(10);
        expect(salt.length).toBe(10);
    }),
    it('getSalt without params', () => {
        const salt = getSalt();
        expect(salt.length).toBe(8);
    })
});