/**
 * Solução:
 *  Primeiro passo - Criar um regex onde verifica se é letra
 * 
 *  Segundo passo - Separar as letras usando split
 * 
 *  Terceiro passo - Crio um loop com 2 ponteiros, um no primeiro index(i) e outro no segundo(j).
 *      dentro do loop o ponteiro "i" vai avançando para direita e o ponteiro "j" vai avançando 
 *      para esqueda. Durante esse processo vou invertendo a posição das letras
 * 
 *  Quarto passo - Crio uma condição tanto para o ponteiro da esquerda quanto da direita para pular caracteres
 *      que não são letras.
 * 
 *  Ultimo passo - Faço a união das palavras e retorno o valor do resultado.
 * 
 * 
 *  Big O Espaço: O(n) - pior cenario todos o caracteres da string são letras
 *  Big O Tempo: O(n) - pior cenario todos o caracteres da string são letras
 * 
 * 
 *  Tempo necessário para solução: 40min
 * 
 *  Precisei pesquisar sobre:
 *      
 *      RegExp test(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test 
 *      String split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * 
 * 
 * @param {string} s uma palavra passada
 * @return {string} uma string com a posição das letras invertidas
 */
var reverseOnlyLetters = function (s) {
    let isLetter = new RegExp("[A-Za-z]");
    let result = s.split("");

    for (let i = 0, j = result.length - 1; i < j; ++i, --j) {
        while (i < j && !isLetter.test(result[i])) {
            ++i;
        }
        while (i < j && !isLetter.test(result[j])) {
            --j;
        }
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result.join("");
};