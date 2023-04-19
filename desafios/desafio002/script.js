function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           genero = 'homem'
           if (idade >= 0 && idade < 10) {
               // CRIANCA

           } else if (idade >= 10 && idade < 27) {
               // JOVEM

           } else if (idade >= 27 && idade < 50) {
               // ADULTO
           } else {
               // IDOSO
           }

       } else if (fsex[1].checked) {
           genero = 'mulher'
           if (idade >= 0 && idade < 10) {
            // CRIANCA

        } else if (idade >= 10 && idade < 27) {
            // JOVEM

        } else if (idade >= 27 && idade < 50) {
            // ADULTO
        } else {
            // IDOSO
        }
       }
       //res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}

//var sexo = window.document.getElementsByName('sexo')

//msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`

//if (idade <= 13 && sexo == masc) {
       // img.src = 'imagens/menino.png'
//} else if (idade <= 13 && sexo == fem) {
//        img.src = 'imagens/menina.png'

//}

