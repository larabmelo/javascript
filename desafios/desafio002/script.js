function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       
    }
}

//var sexo = window.document.getElementsByName('sexo')

//msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`

//if (idade <= 13 && sexo == masc) {
       // img.src = 'imagens/menino.png'
//} else if (idade <= 13 && sexo == fem) {
//        img.src = 'imagens/menina.png'

//}

