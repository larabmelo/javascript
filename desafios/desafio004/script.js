function tabuada() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //limpando o innerhtml antes de executar a funcao dnv

        while (c <= 10) { //estrutura de repeticao com limite ate 10
            var item = document.createElement('option') //criando option com javascript e inserindo texto nele
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // importante pra php
            tab.appendChild(item) // conectando o tab (selectab la na div) com esse option do select q acabamos de criar com js
            c++

        }
       //  } for (var c = 1; c <=10; c++) {//a tabuada comeca com 1, so pode ir ate 10 e depois adiciona  
    }   



}