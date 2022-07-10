import { getSalt } from '../salt';

describe('salt', () => {
    it('getSalt', () => {
        const salt = getSalt(8);
        expect(salt.length).toBe(8);
    })
});