function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var back = document.querySelector("body#fundo")

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
            img.src = 'foto-manha.png'
            back.style.backgroundColor = '#659be1'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
            img.src = 'foto-tarde.png'
            back.style.backgroundColor = '#977b53'
    } else { 
        // BOA NOITE
            img.src = 'foto-noite.png'
            back.style.backgroundColor = '#36363e'
    }
}