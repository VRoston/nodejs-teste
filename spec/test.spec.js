var soma = require('../test2.spec.js');

describe('Teste de Soma', () => {
    it('Deve somar 1 + 1 e retornar 2', () => {
        expect(soma(1,1)).toBe(2);
    });
    it('Deve somar 2 + 2 e retornar 4', () => {
        expect(soma(2,2)).toBe(4);
    });
});