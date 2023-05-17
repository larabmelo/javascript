// primeira funcao: adicionar os numeros digitados ao select

var num = window.document.getElementById('txtn')
var list = window.document.getElementById('sellist')
var res = window.document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // -1 indica que valor nao foi encontrado na lista
     return true
    } else {
        return false
    }
        
    
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo OK!')
    } else {
        window.alert('[ERRO] Valor inválido ou já encontrado na lista!')
    }

        

}