class Solution {
    /**
     * Solução:
     * 
     *  Passo 1 - Declaro 3 variaveis, a de comprar que será o o primeiro valor da
     *      lista passada, a de venda que inicialmente será igual a de compra e a
     *      de valor, que inicialmente será zero.
     * 
     *  Passo 2 - Crio um loop para pecorrer toda a lista.
     * 
     *  Passo 3 - Crio uma condição onde verefica se o loop vereficando o ultimo
     *      elemento da lista e se o valor do elemento daquele indice é menor ou
     *      igual a da variavel de compra. Passando por essas condições, as variaveis
     *      de compra e venda recebem o valor do numero que está sendo verificado.
     * 
     *  Passo 4 - Caso não passe da condição do passo 3, é feita outra, onde verifica
     *      se esse elemento tem um valor maior que o de compra, assim dando um novo valor
     *      para varialve de compra.
     * 
     *  Passo 5 - Faço uma ultima condição, onde vejo se a diferença entre o valor de compra
     *      e de venda é maior que o valor anterior, caso sim a variavel valor assume a diferença
     *      de venda e compra e caso não, o seu valor não muda.
     * 
     *  Passo 6 - Apos a finalização do loop, é retornado o valor final.
     * 
     *  Tempo necessario para solução: 1h
     * 
     *  Big O Espaço:  O(1) no pior dos casos, só será armazenado o valor uma vez.
     *  Big O Tempo: O(n) no piro dos casos, será feito um loop em todos os elementos da lista.
     * 
     *  Precisei pesquisar sobre:
     *  
     *  - Operador Condicional Ternário: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator 
     *      
     * @param {number[]} prices lista de numeros passado.
     * @return {number} retorna o lucro máximo que é possivel alcançar.
     * 
     */
    maxProfit(prices) {
        let buy = prices[0], sell = buy, value = 0;

        for (let i = 0; i < prices.length; ++i) {
            if (i != prices.length - 1 && prices[i] <= buy) {
                sell = buy = prices[i];
            } else if (prices[i] > sell) {
                sell = prices[i];
            }
            value = sell - buy > value ? sell - buy : value;

        }
        return value
    }
}
