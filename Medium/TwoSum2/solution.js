/**
 * Solução: 
 *  
 *  Passo 1 - Criei 2 ponteiros, um na esquerda e outro na direita
 * 
 *  Passo 2 - Faço um loop, enquanto a soma desses ponterios for
 *      diferente do alvo passado.
 *  
 *  Passo 3 - Faço uma condição que verefica se a soma dos ponteiros é
 *      menor que o alvo, se for o ponteiro da esquerda se move para 
 *      direita, caso contrario, o da direita avança para esquerda.
 * 
 *  Passo 4- Após encontrar os numeros que realmente a soma é igual ao
 *      alvo, retorno eles somados a 1.
 * 
 * Tempo necessario para a questão: 30min.
 * 
 * Big O Tempo: O(n) Pois vai depender do tamanho do array.
 * 
 * Big O espaço: O(1) Pois o unico espaço usando são os da constantes
 *                  declaradas no inicio da função, não há locação de
 *                  memoria proporcional ao loop.
 * 
 *      
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1;

    while (numbers[i] + numbers[j] != target) {
        if (numbers[i] + numbers[j] < target) {
            ++i
        } else {
            --j
        }
    }

    return [++i, ++j];
};