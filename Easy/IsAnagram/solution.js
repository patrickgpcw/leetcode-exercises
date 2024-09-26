class Solution {
    /**
     * Para chegar na solução:
     * 
     *  Primeiro passo - Faço a comparação do tamanho das duas strings passadas como parametro
     *      da função, caso o tamanho seja diferente, não são anagramas.
     * 
     *  Segundo passo - Crio dois objetos para armazenar o valor e chave de cada char,
     *      o valor seria o char e a chave seria a quantidade de vezes que aquele caracter
     *      se repetiu na palavra .
     *  
     *  Terceiro passo - Faço um loop para popular os objetos criadas anteriomente, conforme
     *      o valor vai se repetindo, é incrementado +1 na chave.  
     * 
     *  Quarto passo - Faço mais um loop agora para verificar se existe uma diferença entre 
     *      os objetos criados, se não apresentar nenhuma diferença a função retorna verdadeiro. 
     *      
     *  Tempo necessário para solução: 1h
     * 
     *  Big O Espaço: O(n)
     *  Big O Tempo: O(n)
     * 
     *  
     *  Precisei pesquisar sobre definição de objeto: https://www.w3schools.com/js/js_object_definition.asp
     * 
     * 
     * 
     * @param {string} s primeira palavra passada para comparação do anagrama
     * @param {string} t segunda palavra passada para comparação do anagrama 
     * @return {boolean} retorna verdadeiro caso seja anagrama. Falso caso não
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        const countS = {};
        const countT = {};
        
        for (let i = 0; i < s.length; ++i){
            countS[s[i]] = 1 + (countS[s[i]] || 0);
            countT[t[i]] = 1 + (countT[t[i]] || 0);
        }

        for(const key in countS){
            if(countS[key] !== countT[key]) {
                return false;
            }
        }

        return true;
    }
}
