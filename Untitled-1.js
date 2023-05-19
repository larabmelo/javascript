// Criando a matriz
var matriz = new Array(4);

// Populando a matriz com os múltiplos
for (var i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(5);
  for (var j = 0; j < matriz[i].length; j++) {
    var numero = i + 2; // Iniciando do número 2
    matriz[i][j] = numero * (j + 1); // Calculando os múltiplos
  }
}

// Imprimindo a matriz
for (var i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
}
