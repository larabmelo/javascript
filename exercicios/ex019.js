function parimpar(n) { //abre bloco {}
    if (n%2==0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimpar(4)
console.log(`O número é ${res}`)
// ou
// console.log(parimpar(4)) 
// pq mostra o retorno da funcao