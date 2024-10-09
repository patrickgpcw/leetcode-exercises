class Solution {
    /**
     * Solução:
     *  
     *  Passo 1 - Declaro 2 ponteiros, um no primerio index da lista e outro
     *          no index
     *  
     *  Passo 2 - Crio um loop que irá ocorrer enquanto o ponteiro i
     *          estiver a esquerda do ponteiro j e declaro um terceiro
     *          ponteiro que estará no meio da lista
     * 
     *  Passo 3 - Crio uma condição, se o ponteiro k estiver marcando
     *          o elemento maior que o alvo, o ponteiro da j avança para
     *          esquerda. Caso isso não aconteça, verifico se o ponteiro k
     *          está marcando um elemento menor que o alvo, caso essa condiçao
     *          seja verdadeira o ponteiro i avança para direita.
     *  
     *  Passo 4 - Caso não siga nenhuma das condições do passo 3, retorna a
     *          posição do alvo dentro da lista. No entando, caso o alvo não 
     *          esteja dentro da lista, retorna -1.
     * 
     *  Tempo necessario para solução: 30 min
     * 
     *  Big O Espaço: O(1) no pior caso irá armazena apenas 1 vez, n depende de n.
     * 
     *  Big O Tempo: O(logn) no pior caso o numero de elementos vai reduzindo a metade
     *                      apos cada interação até achar o alvo.
     * 
     *  Não precisei pesquisar sobre algo.
     * 
     * @param {number[]} nums lista de numeros
     * @param {number} target numero que será procurado na lista 
     * @return {number} retorna a posição do numero caso exista dentro da lista, caso contrario retorna -1
     */
    search(nums, target) {
        let i = 0
        let j = nums.length - 1;

        while (i <= j) {
            const k = i + Math.floor((j - i) / 2);
            if (nums[k] > target) {
                j = k - 1;
            } else if (nums[k] < target) {
                i = k + 1;
            } else {
                return k;
            }
        }

        return -1;
    }
}
