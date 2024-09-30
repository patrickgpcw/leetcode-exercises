class Solution {
    /**
     * Solução
     *  - Primeiro passo: Criei um hashmap para armazenar informações de cada elemento do array passado
     *      valor = complemento(um valor que somado com o do elemento resulta no target).
     *      chave = posição do elemento dentro do array nums.
     * 
     *  - Segundo passo: Criei um loop para pega um elemento do array nums, calcula seu complemento e adicionar
     *      o valor e chave dentro do hashmap.
     * 
     *  - Terceiro passo: Fiz uma verificação dentro do loop, se seu complemento se encontra dentro do hashmap é retornado o elemento e
     *      seu complemento.No entanto, caso seja encontrado o complemento é retornado um array vazio.
     * 
     *  Big O Espaço: O(n)
     *  Big O Tempo: O(n)
     * 
     *  Tempo necessário para solução: 2h
     * 
     *  Precisei pesquisar sobre Map.has(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/has
     * 
     * 
     * @param {number[]} nums uma lista de numeros.
     * @param {number} target valor esperado.
     *
     * @return {number[]} uma lista de dois numeros que somado dá o valor esperado, ou uma lista vazia caso não encontrado.
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; ++i) {
            const num = nums[i];
            const complement = target - num;
            const sumIndex = map.get(complement);

            const isTarget = map.has(complement);
            if (isTarget) {
                return [i, sumIndex];
            }

            map.set(num, i);
        }

        return [];
    }
}
