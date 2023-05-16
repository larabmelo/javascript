// array ou vetor é uma variável composta, que é uma var que pode abrigar vários dados.
// o array é composto por elementos, que agrupa espaco da memoria, valor dentro dele e o índice ou chave
// índice ou chave, que comeca com 0
// conteúdo ou valor de cada elemento

// let num = [5, 8, 4]

// vetor de 3 elementos, com valores 5, 8 e 4

// let num = [5, 8, 2, 9, 3, 1]
// num[6] = 6 // acrescento 6 na posicao 7 do INDICE!!!
// num.push(7) // metodo interno de acrescenter valores ao array no final
// num.length //length eh atrivuto
// num.sort() // pega os valores e coloca em ordem crescente
// console.log(num)

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posicoes.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


