class Solution {
    /**
     * Para na solução, precisei criar uma nova lista onde eu
     * armazeno os dados do array um por vez, e se ja existir
     * um numero igual dessa lista ele sai do loop.
     * 
     * 
     * Big O Espaço: 0(n)
     * Big O Tempo: 0(n)
     * 
     * Tempo necessário para solução: 1h
     * 
     * Precisei pesquisar sobre Set: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
     * 
     * Precisei pesquisar sobre a diferença de ++i e i++: https://pt.stackoverflow.com/questions/243108/qual-%C3%A9-a-diferen%C3%A7a-entre-i-e-i
     * 
     * @param {number[]} nums uma lista de numeros que será usado para a verificação
     * @return {boolean} retorna verdadeiro se existir algo duplicado, caso contrario retorna falso
     */
    hasDuplicate(nums) {
        let uniques = new Set();
        for (let i = 0; i< nums.length ; ++i){
            if(uniques.has(nums[i])){
                return true;
            }
            
            uniques.add(nums[i])
        }

        return false;
    }
}
