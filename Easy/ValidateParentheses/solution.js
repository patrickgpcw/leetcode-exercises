class Solution {
    /**
     * Solução:
     *  
     *  Passo 1 - Criei um array stack vazio e um hashMap usando objetos como map, já com valores e chaves
     *          definidas.
     *  Passo 2 - Faço um loop para passar por cada caracter da string passada.
     * 
     *  Passo 3 - Verifico se o caracter não está dentro do hashMap, caso não
     *          adiciono ele no array stack.
     *  
     *  Passo 4 - Verifico se o ultimo elemento da variavel stack está presente
     *          no hashMap, caso sim removo o proprio.
     * 
     *  Passo 5 - Caso não entre e nenhuma das condições, retorno falso.
     * 
     *  Passo 6 - Caso o loop não retone falso, verefico se o array stack está
     *          vazio, seguindo essa condição retorna verdadeiro.
     * 
     *  Tempo necessario para solução: 1h
     * 
     *  Big O Espaço: O(n) no pior cenario irá armazenar valor n vezes
     * 
     *  Big O Tempo: O(n) no pior cenario irá pecorrer uma string de tamanho n
     * 
     *  Precisei pesquisar sobre:
     *      - Stack Data Structer: https://www.geeksforgeeks.org/stack-data-structure/
     * 
     * 
     * @param {string} s uma string de parenteses
     * @return {boolean} retonar true se os parenteses forem validos ou falso caso contrario
     */
    isValid(s) {
        const stack = new Array();
        const hashMap = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        for (const char of s) {
            if (!(char in hashMap)) {
                stack.push(char);
                continue;
            }
            if (stack[stack.length - 1] === hashMap[char]) {
                stack.pop();
                continue;
            }

            return false;
        }

        return stack.length === 0;
    }
}
