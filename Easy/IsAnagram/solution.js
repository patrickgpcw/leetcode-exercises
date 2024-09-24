class Solution {
    /**
     * Para chegar na solução:
     * 
     *  Primeiro passo - Faço a comparação do tamanho das duas strings passadas como parametro
     *      da função, caso o tamanho seja diferente, não são anagramas.
     * 
     *  Segundo passo - Crio duas constantes para armazenar o valor e chave de cada char,
     *      o valor seria o char e a chave seria a quantidade de vezes que aquele caracter
     *      se repetiu na palavra .
     *  
     *  Terceiro passo - Faço um loop para popular as variaveis criadas anteriomente, conforme
     *      o valor vai se repetindo, é incrementado +1 na chave.  
     * 
     *  Quarto passo - Faço mais um loop agora para verificar se existe uma diferença entre 
     *      os hashmaps criados, se não apresentar nenhuma diferença a função retorna verdadeiro. 
     *      
     *  
     *  Big O Espaço: 0(n)
     *  Big O Tempo: 0(n)
     * 
     *  Precisei pesquisar sobre estrutura do HashMap no JS: https://medium.com/@lelianto.eko/hashmap-in-ja-3a5c03a8febc
     * 
     * 
     * 
     * 
     * @param {string} s /* palavra passada
     * @param {string} t /* palavra pode ser ou não um anagrama de s 
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        const countS = {};
        const countT = {};
        
        for (let i = 0; i < s.length ; ++i){
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
