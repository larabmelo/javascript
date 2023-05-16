
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

/*
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

// RESOLVENDO ESSAS LINHAS COM UMA SÓ USANDO FOR:
// for(let pos=0; pos < valores.length; pos++) {
//    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// } 
// esse codigo vai listar até chegar o final da length da variavel valores
// esse codigo eh tradicional do percurso de exibicao de vetores

//SIMPLIFICANDO MAIS AINDA ESSAS LINHAS COM FOR IN (Q SÓ FUNCIONA COM ARRAYS E OBJETCS):
for(let pos in valores) { // para cada var posicao em var valores
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}