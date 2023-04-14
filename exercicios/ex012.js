var agora = new Date()
var hora = agora.getHours() 
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 12 && hora > 5) {
    console.log('Bom dia!')
} else if (hora <= 18 && hora >= 13) {
    console.log('Boa tarde!') 
} else if (hora <= 5) {
    console.log('Boa madrugada')
} else {
    console.log('Boa noite!')
}