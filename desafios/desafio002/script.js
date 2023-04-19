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
                img.setAttribute('src', 'imagens/menino.png')
           } else if (idade >= 10 && idade < 27) {
               // JOVEM
                img.setAttribute('src', 'imagens/jovem-homem.png')
           } else if (idade >= 27 && idade < 50) {
               // ADULTO
                img.setAttribute('src', 'imagens/adulto.png')
           } else {
               // IDOSO
                img.setAttribute('src', 'imagens/idoso.png')
           }

       } else if (fsex[1].checked) {
           genero = 'mulher'
           if (idade >= 0 && idade < 10) {
            // CRIANCA
                img.setAttribute('src', 'imagens/menina.png')
        } else if (idade >= 10 && idade < 27) {
            // JOVEM
                img.setAttribute('src', 'imagens/jovem-mulher.png')
        } else if (idade >= 27 && idade < 50) {
            // ADULTO
            img.setAttribute('src', 'imagens/adulta.png')
        } else {
            // IDOSO
            img.setAttribute('src', 'imagens/idosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}

//var sexo = window.document.getElementsByName('sexo')

//msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`

//if (idade <= 13 && sexo == masc) {
       // img.src = 'imagens/menino.png'
//} else if (idade <= 13 && sexo == fem) {
//        img.src = 'imagens/menina.png'

//}

