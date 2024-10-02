class Solution {
    /**
     *  Solução:
     * 
     *  Passo 1 - Crio um regex para remover caracters especiais e logo em seguida,
     *      faço tratamento do "s" para vereficar se é um palindromo ou não.
     *  
     *  Passo 2 - Crio um loop e dos marcadore, onde o marcador "i" vai avançando para direita
     *      e o marcador "j" vai avançando para esquerda, isso ocorre enquanto a posição do "i"
     *      é menor que o "j".
     * 
     *  Passo 3 - Faço uma comparação entre esses marcadores, se forem diferentes, a string passada
     *      como parametro não é um palindromo, sendo assim, retorna como false.
     * 
     *  Passo 4 - saindo do loop, ele retorna true.
     * 
     *  Tempo necessário para solução: 30min
     * 
     *  Big O Espaço: O(n) pior cenario, ter que converter uma string de tamanho n 2 vezes
     *  Big O Tempo: O(n)  pior cenario, ter que pecorrer uma string de tamanho n 2,5 vezes
     *  
     *  Precisei pesquisar sobre:
     *      Expressão Regular: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions
     *      String replaceAll(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
     * 
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = new RegExp(/\W/, 'g');
        s = s.replaceAll(regex, '').toLowerCase();

        for (let i = 0, j = s.length - 1; i < j; ++i, --j) {
            if (s[i] !== s[j]) {
                return false;
            }
        }

        return true;
    }
}
