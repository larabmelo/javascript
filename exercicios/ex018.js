/*
--------------------------FUNCOES---------------------

1. sao acoes executadas assim que sao chamadas ou em decorrencia de algum evento.

2. uma funcao pode receber um parametro(fica nos parenteses) e retornar um resultado.

3. ex.: evento onclick() que chama e dispara uma funcao ao clicar, porem n tinha retorno 

4. ex.:
    function acao(param) {

    }

    acao(5): fica em baixo, chamando e disparandoa acao(nome da funcao), executando o valor 5, que vai subsitituir o parametro, dando retorno de um resultado, voltando a chamada acao(5) de novo. era o onclick do botao.
*/

//EXEMPLO

function parimp(n) {
    if (n%2==0) { // se n divido por dois tem um resto de 0, ou seja, eh divisivel por 2
        return 'par'
    } else {
        return 'ímpar'
    }
} // o código acima nao pode ser executado pois ele precisa de uma CHAMADA

let res = parimp(11) // eu dei o parametro de 11 pra fazer o teste e o resultado do IF e ELSE vai pro let res

console.log(`O número é ${res}`)

 