/**
 * ==========================================================
 * 07 - ARRAY MULTIDIMENSIONAL
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Neste arquivo vamos estudar arrays multidimensionais,
 * especialmente matrizes.
 *
 * Conceitos abordados:
 *
 * - O que é um array multidimensional
 * - Como acessar elementos em uma matriz
 * - Como percorrer matrizes
 * - Como alterar valores
 * - Soma de linhas e colunas
 * - Exemplos práticos com tabelas e tabuleiros
 *
 * Em JavaScript, uma matriz é um array que contém outros
 * arrays como elementos.
 */

/* ==========================================================
   1. INTRODUÇÃO
   ========================================================== */

/*
Um array comum possui uma única dimensão:

[10, 20, 30]

Uma matriz possui duas dimensões:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Podemos imaginar:
- a primeira dimensão como linhas
- a segunda dimensão como colunas
*/

/* ==========================================================
   2. CRIANDO UMA MATRIZ
   ========================================================== */

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matriz:");
console.log(matriz);

/* ==========================================================
   3. ACESSANDO ELEMENTOS
   ========================================================== */

/*
Para acessar um elemento:
matriz[linha][coluna]

Lembre:
os índices começam em 0
*/

console.log("\nAcessando elementos:");
console.log("matriz[0][0]:", matriz[0][0]);
console.log("matriz[0][2]:", matriz[0][2]);
console.log("matriz[1][1]:", matriz[1][1]);
console.log("matriz[2][0]:", matriz[2][0]);

/* ==========================================================
   4. ALTERANDO VALORES
   ========================================================== */

const notas = [
  [7, 8, 9],
  [6, 5, 10],
];

console.log("\nMatriz original de notas:");
console.log(notas);

notas[1][1] = 7;

console.log("Matriz após alteração:");
console.log(notas);

/* ==========================================================
   5. OBTENDO QUANTIDADE DE LINHAS E COLUNAS
   ========================================================== */

const tabela = [
  ["Nome", "Idade", "Cidade"],
  ["Jorge", 33, "Maceió"],
  ["Ana", 25, "Recife"],
];

console.log("\nQuantidade de linhas:");
console.log(tabela.length);

console.log("Quantidade de colunas da primeira linha:");
console.log(tabela[0].length);

/* ==========================================================
   6. PERCORRENDO UMA MATRIZ COM FOR
   ========================================================== */

console.log("\nPercorrendo matriz com for:");

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Linha ${i}, Coluna ${j}: ${matriz[i][j]}`);
  }
}

/* ==========================================================
   7. PERCORRENDO MATRIZ COM for...of
   ========================================================== */

console.log("\nPercorrendo matriz com for...of:");

for (const linha of matriz) {
  for (const valor of linha) {
    console.log(valor);
  }
}

/* ==========================================================
   8. EXIBINDO MATRIZ EM FORMATO ORGANIZADO
   ========================================================== */

console.log("\nExibindo matriz linha por linha:");

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
}

/* ==========================================================
   9. SOMANDO TODOS OS ELEMENTOS DA MATRIZ
   ========================================================== */

let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}

console.log("\nSoma de todos os elementos:");
console.log(soma);

/* ==========================================================
   10. SOMANDO CADA LINHA
   ========================================================== */

console.log("\nSoma de cada linha:");

for (let i = 0; i < matriz.length; i++) {
  let somaLinha = 0;

  for (let j = 0; j < matriz[i].length; j++) {
    somaLinha += matriz[i][j];
  }

  console.log(`Linha ${i}: ${somaLinha}`);
}

/* ==========================================================
   11. SOMANDO CADA COLUNA
   ========================================================== */

console.log("\nSoma de cada coluna:");

for (let coluna = 0; coluna < matriz[0].length; coluna++) {
  let somaColuna = 0;

  for (let linha = 0; linha < matriz.length; linha++) {
    somaColuna += matriz[linha][coluna];
  }

  console.log(`Coluna ${coluna}: ${somaColuna}`);
}

/* ==========================================================
   12. ENCONTRANDO O MAIOR VALOR DA MATRIZ
   ========================================================== */

let maiorValor = matriz[0][0];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > maiorValor) {
      maiorValor = matriz[i][j];
    }
  }
}

console.log("\nMaior valor da matriz:");
console.log(maiorValor);

/* ==========================================================
   13. MATRIZ DE STRINGS
   ========================================================== */

const agenda = [
  ["Segunda", "Treino"],
  ["Terça", "Estudo"],
  ["Quarta", "Descanso"],
  ["Quinta", "Projeto"],
  ["Sexta", "LeetCode"],
];

console.log("\nAgenda semanal:");

for (let i = 0; i < agenda.length; i++) {
  console.log(`${agenda[i][0]} -> ${agenda[i][1]}`);
}

/* ==========================================================
   14. TABULEIRO
   ========================================================== */

/*
Matrizes são muito usadas para representar:
- tabuleiros
- mapas
- grades
- planilhas
- assentos
*/

const tabuleiro = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"],
];

console.log("\nTabuleiro:");

for (let i = 0; i < tabuleiro.length; i++) {
  console.log(tabuleiro[i].join(" | "));
}

/* ==========================================================
   15. MATRIZ IDENTIDADE
   ========================================================== */

/*
Matriz identidade 3x3:
[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]
*/

const identidade = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

console.log("\nMatriz identidade:");
console.log(identidade);

/* ==========================================================
   16. CRIANDO MATRIZ MANUALMENTE
   ========================================================== */

const matrizManual = [];

matrizManual[0] = [10, 20];
matrizManual[1] = [30, 40];
matrizManual[2] = [50, 60];

console.log("\nMatriz criada manualmente:");
console.log(matrizManual);

/* ==========================================================
   17. ACHATANDO MATRIZ COM flat()
   ========================================================== */

/*
flat() transforma uma matriz em um array simples.
*/

const matrizFlat = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const arraySimples = matrizFlat.flat();

console.log("\nUsando flat():");
console.log(arraySimples);

/* ==========================================================
   18. ACESSANDO DIAGONAL PRINCIPAL
   ========================================================== */

/*
Na diagonal principal:
linha === coluna
*/

const matrizDiagonal = [
  [2, 4, 6],
  [1, 3, 5],
  [7, 8, 9],
];

console.log("\nDiagonal principal:");

for (let i = 0; i < matrizDiagonal.length; i++) {
  console.log(matrizDiagonal[i][i]);
}

/* ==========================================================
   19. ACESSANDO DIAGONAL SECUNDÁRIA
   ========================================================== */

/*
Para matriz 3x3:
[0][2]
[1][1]
[2][0]

Fórmula:
matriz[i][matriz.length - 1 - i]
*/

console.log("\nDiagonal secundária:");

for (let i = 0; i < matrizDiagonal.length; i++) {
  console.log(matrizDiagonal[i][matrizDiagonal.length - 1 - i]);
}

/* ==========================================================
   20. EXEMPLO PRÁTICO COM PLANILHA
   ========================================================== */

const vendas = [
  ["Produto", "Janeiro", "Fevereiro"],
  ["Notebook", 10, 12],
  ["Mouse", 25, 30],
  ["Teclado", 15, 18],
];

console.log("\nTabela de vendas:");

for (let i = 0; i < vendas.length; i++) {
  console.log(vendas[i]);
}

/* ==========================================================
   21. SOMANDO UMA COLUNA ESPECÍFICA
   ========================================================== */

/*
Vamos somar a coluna de Fevereiro.
Índice:
0 -> Produto
1 -> Janeiro
2 -> Fevereiro
*/

let totalFevereiro = 0;

for (let i = 1; i < vendas.length; i++) {
  totalFevereiro += vendas[i][2];
}

console.log("\nTotal de fevereiro:");
console.log(totalFevereiro);

/* ==========================================================
   22. RESUMO
   ========================================================== */

/*

Array multidimensional:
- é um array que contém outros arrays

Matriz:
- estrutura em linhas e colunas

Acesso:
matriz[linha][coluna]

Percorrer:
- for aninhado
- for...of aninhado

Usos comuns:
- tabelas
- jogos
- mapas
- planilhas
- grades

Métodos úteis:
- flat()

Conceitos importantes:
- diagonal principal
- diagonal secundária
- soma de linhas e colunas

*/
