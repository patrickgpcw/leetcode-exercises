class Solution {
    /**
     *  Solução:
     *  
     *  Passo 1 - Faço um objeto que será usando para agrupar as palavrras
     *      que são anagramas.
     * 
     *  Passo 2 - Faço um loop para pecorrer cada string do array passado, para cada "s" em "strs"
     *      é feito processamento para verificar o anagrama/
     * 
     *  Passo 3 - Criação do array count para contar a frequência das letras e
     *      declaração do count que será usado para contar quantas vezes cada letra
     *      aparece na string "s".
     * 
     *  Passo 4 - Criação de um segundo loop para pecorrer cada caracter da string "s",
     *      charCodeAt(0) - código ASCII do caracter 'c'(cada string de "s")
     *      'a'.charCodeAt(0) = código ASCII do caracter 'a', usado pra calcular o índice no array 'count'
     *  
     *  Passo 5 - Criação de uma chave unica, tranformando o count em ums string separada por "#"
     * 
     *  Passo 6 - Faço Agrupamento das palavras anagramas, onde se a chave ainda não exite cria um array
     *      vazio, em seguida é adicionada a string "s" à lista associada aquela chave.
     * 
     *  Passo 7 - Faço o retorno do grupos de anagramas criados.
     *  
     * Tempo necessário para solução: 2h
     * 
     *  Big O Espaço: O(m.n) - Pior cenario, ter que armazenar uma string muito grande e criar grupos diversos grupos
     *  Big O Tempo: O(m.n) - Pior cenario, ter que pecorrer um array mt extenso e varios grupos
     * 
     *  Precisei pesquisar sobre:
     *      fill(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
     *      charCodeAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
     *      Object.value(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
     * 
     * @param {string[]} strs 
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const res = {}

       for(const s of strs) {
        const count = Array(26).fill(0);
        for(const c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        } 

        const key = count.join("#");
        if(!res[key]) {
            res[key] = [];
        }

        res[key].push(s);
       }

       return Object.values(res);
    }
}
