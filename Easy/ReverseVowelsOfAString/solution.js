
class Solution {
    /*
    *
    * Solução
    *   - Primeiro passo: criei um set para armazenar todas vogais.
    * 
    *   - Segundo passo: faço um split para separar a string.
    * 
    *   - Terceiro passo: faço um loop com 2 ponteiros, um começando pelo index zero e avançando para a direita
    *   e o outro começando pelo ultimo index e avançando para esqueda.
    *   
    *   - Quarto passo: faço 2 loops para os ponteiros criado, caso eles encontrem uma consoante, eles podem
    *   avançar até a proxima vogal.
    * 
    *   - Quinto passo: vou invertendo a ordem das letras até acabar o primeiro loop.
    * 
    *   - Passo final: junto as letras montar a string. 
    * 
    * Tempo necessário para solução: 1h
    * 
    *  Big O Espaço: O(n) - Pior cenario, ter que armazenar uma string muito grande
    *  Big O Tempo: O(n) - Pior cenario, ter que pecorrer um array mt extenso
    * 
    * Precisei pesquisar sobre:
    *   
    * String split():https://www.w3schools.com/jsref/jsref_split.asp;
    *   Array join(): https://www.w3schools.com/jsref/jsref_join.asp;
    * 
    * @param {string} s uma palavra
    * @return {string} uma string com os a posição das vogais invertidas
    */
    reverseVowels(s) {
        let vowels = new Set(['a','e','i','o','u']);
         s = s.split('');
        
        for(let i = 0, j = s.length - 1; i < j; ++i, --j){
            while(i < j && !vowels.has(s[i].toLowerCase())){
                ++i
            }
            while(i < j && !vowels.has(s[j].toLowerCase())){
                --j
            }
            [s[i], s[j]] = [s[j], s[i]];
        }
        
        return s.join('');
    };
}

