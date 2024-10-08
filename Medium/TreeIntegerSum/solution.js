class Solution {
    /**
     * Solução:
     *  
     *  Passo 1 - Ordeno a lista em ordem crescente
     *  
     *  Passo 2 - Crio um array para armazenar os resultados
     * 
     *  Passo 3 - Crio um loop para pecorrer a lista
     * 
     *  Passo 4 - Crio um uma condição onde verifica se o primeiro
     *          elemento do array é maior que zero, caso não seja,
     *          cancela o loop e retorna uma lista vazia.
     *  
     *  Passo 5 - Crio outra condição onde verifica se o index não é
     *          o primeiro e se o elemento dessa posição tem o mesmo
     *          valor que o anterior, caso atenda, ele continua
     *  
     *  Passo 6 - Crio dois ponteiros, um selecionado o ultimo elemento(j)
     *          e outro selecionando o primeiro elemento depois do i (k)
     * 
     *  Passo 7 - Faço um loop que irá ocorre enquanto o ponteiro da esquerda
     *          estiver a esquedar do poteiro que aponta ao ultimo elemento.
     * 
     *  Passo 8 - Faço uma condição onde verifico se a soma desses elementos é
     *          é maior que 0, caso seja, o ponteiro 'j' vai avançando para
     *          esquerda. Caso contrario, verifico se a soma desses elementos foi
     *          menor que 0, caso seja, o ponteiro 'k' vai avançando para direta.
     *          Caso a some desses elementos resultem em 0, adiciono essa lista de
     *          elementos dentro de da variavel do passo 2 e o ponteiro k aumenta
     *          1 index e o 'j' volta 1 index.
     * 
     *  Passo 9 - Faço um ultimo loop enquanto o ponteiro k estiver a esquerda do
     *          ponteiro j e elemento do index k for igual ao seu anterior, irá
     *          avançar até o proximo que seja diferente.
     * 
     *  Passo 10 - Retorno o resultado.  
     * 
     *  Tempo necessario para a solução: 1h
     * 
     *  Big O Tempo: O(n**2) no pior caso irá pecorre o n vezes
     * 
     *  Big O Espaço: O(1) caso a lista já venha ordenado ou O(n) caso não venha
     * 
     *  Precisei pesquisar sobre:
     * 
     *      Array sort(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     *     
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const output = new Array();

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let j = nums.length - 1
            let k = i + 1;
            while (k < j) {
                if (nums[i] + nums[k] + nums[j] > 0) {
                    j--;
                } else if (nums[i] + nums[k] + nums[j] < 0) {
                    k++;
                } else {
                    output.push([nums[i], nums[k], nums[j]]);
                    k++;
                    j--;

                    while (k < j && nums[k] === nums[k - 1]) {
                        k++;
                    }
                }
            }
        }

        return output;
    }
}
