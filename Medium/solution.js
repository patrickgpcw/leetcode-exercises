class Solution {
    /**
     * Solução:
     * 
     *  Passo 1 - Crio um contador que armazenará a frequência de cada numero
     *      em nums. E também crio um array de listas para armazenar numeros conforme
     *      a frequência de aparição deles
     * 
     *  Passo 2 - Faço um loop que percorre cada numero do array 'nums' e amazeno contador.
     *      Também faço uma verificação se esse numero já está presente na contagem, caso
     *      não exista será 0 o seu valor inicial
     * 
     *  Passo 3 - Faço outro loop que pecorrer o contador para cada numero ele adiciona 
     *      ele adiciona o numero no array da frequencia criado no passo 1
     * 
     *  Passo 5 - Crio um array vazio que irá armazenar os elementos mais frequentes.
     *  
     *  Passo 6 - Crio mais um loop que pecorrer o array da frequencia da direita para
     *      a esquerda(começando da frequencia mais alta)
     * 
     *  Passo 7 - Crio mais um loop que para cada lista do array da frequencia ele irá
     *      inserir esses numeros no array criado no passo 5
     * 
     *  Passo 8 - Crio uma condição se o array do passo 5 atingir o tamanho igual do segundo
     *      parametro passado na função, ele retorna o array.
     * 
     *  Tempo necessario: 2h
     * 
     *  Big O Espaço: O(n) no pior caso, pois o contador e frequencia também irão 
     *                  depender da quantidade de numeros
     *  Big O Tempo: O(n) no pior caso, pois vai depender da quantidade de numeros
     * 
     *  Precisei pesquisar sobre:
     *      Array.from(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
     *      Arrow function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
     *      parsenInt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
     * 
     * 
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);
    
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
    
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }
    
        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
