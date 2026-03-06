/**
 * ==========================================================
 * 06 - ORDENAÇÃO DE ARRAYS
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Neste arquivo vamos estudar como ordenar arrays em
 * JavaScript, usando:
 *
 * - sort()
 * - reverse()
 * - ordenação numérica
 * - ordenação de strings
 * - ordenação de objetos
 * - Bubble Sort (algoritmo clássico)
 *
 * A ordenação é um tema muito importante em algoritmos,
 * entrevistas técnicas e resolução de problemas.
 */

/* ==========================================================
   1. ARRAY BASE
   ========================================================== */

const numeros = [5, 2, 9, 1, 7, 3];

console.log("Array original:");
console.log(numeros);

/* ==========================================================
   2. sort() COM STRINGS
   ========================================================== */

/*
Quando usamos sort() em strings, o JavaScript ordena
alfabeticamente por padrão.
*/

const frutas = ["banana", "maçã", "uva", "abacaxi", "laranja"];

console.log("\nStrings antes do sort():");
console.log(frutas);

frutas.sort();

console.log("Strings depois do sort():");
console.log(frutas);

/* ==========================================================
   3. PROBLEMA DO sort() COM NÚMEROS
   ========================================================== */

/*
Por padrão, sort() converte os elementos para string
e compara em ordem lexicográfica.

Isso pode gerar resultados inesperados com números.
*/

const numerosErrados = [100, 2, 30, 4, 25];

console.log("\nNúmeros antes do sort() sem comparação:");
console.log(numerosErrados);

numerosErrados.sort();

console.log("Números depois do sort() sem comparação:");
console.log(numerosErrados);

/* ==========================================================
   4. ORDENAÇÃO NUMÉRICA CRESCENTE
   ========================================================== */

/*
Para ordenar números corretamente, usamos uma função
de comparação:

(a, b) => a - b

Se o resultado for negativo, a vem antes de b.
Se for positivo, b vem antes de a.
Se for zero, a ordem é mantida.
*/

const numerosCrescentes = [100, 2, 30, 4, 25];

numerosCrescentes.sort((a, b) => a - b);

console.log("\nOrdenação numérica crescente:");
console.log(numerosCrescentes);

/* ==========================================================
   5. ORDENAÇÃO NUMÉRICA DECRESCENTE
   ========================================================== */

/*
Para ordem decrescente:
(b - a) ou (a, b) => b - a
*/

const numerosDecrescentes = [100, 2, 30, 4, 25];

numerosDecrescentes.sort((a, b) => b - a);

console.log("\nOrdenação numérica decrescente:");
console.log(numerosDecrescentes);

/* ==========================================================
   6. reverse()
   ========================================================== */

/*
reverse() inverte a ordem atual do array.
*/

const letras = ["a", "b", "c", "d"];

console.log("\nArray antes do reverse():");
console.log(letras);

letras.reverse();

console.log("Array depois do reverse():");
console.log(letras);

/* ==========================================================
   7. sort() + reverse()
   ========================================================== */

const nomes = ["Carlos", "Ana", "Bruno", "Daniel"];

nomes.sort();
nomes.reverse();

console.log("\nOrdem alfabética inversa:");
console.log(nomes);

/* ==========================================================
   8. ORDENANDO ARRAY DE OBJETOS POR IDADE
   ========================================================== */

const usuarios = [
  { nome: "Jorge", idade: 33 },
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 29 },
  { nome: "Marina", idade: 21 },
];

console.log("\nUsuários antes da ordenação:");
console.log(usuarios);

usuarios.sort((a, b) => a.idade - b.idade);

console.log("Usuários ordenados por idade crescente:");
console.log(usuarios);

/* ==========================================================
   9. ORDENANDO OBJETOS POR NOME
   ========================================================== */

/*
localeCompare() é útil para comparar strings.
*/

const pessoas = [
  { nome: "Lucas" },
  { nome: "Ana" },
  { nome: "Jorge" },
  { nome: "Bruno" },
];

pessoas.sort((a, b) => a.nome.localeCompare(b.nome));

console.log("\nObjetos ordenados por nome:");
console.log(pessoas);

/* ==========================================================
   10. CÓPIA DO ARRAY ANTES DE ORDENAR
   ========================================================== */

/*
sort() modifica o array original.
Se quiser preservar o original, crie uma cópia antes.
*/

const original = [8, 3, 1, 6, 2];
const copiaOrdenada = [...original].sort((a, b) => a - b);

console.log("\nArray original preservado:");
console.log(original);

console.log("Cópia ordenada:");
console.log(copiaOrdenada);

/* ==========================================================
   11. BUBBLE SORT - INTRODUÇÃO
   ========================================================== */

/*
Bubble Sort é um algoritmo clássico de ordenação.

Ideia:
- Percorrer o array várias vezes
- Comparar elementos vizinhos
- Trocar de posição quando estiverem fora de ordem

Exemplo:
[5, 3, 8]

Comparamos:
5 e 3 → troca
5 e 8 → mantém

Resultado parcial:
[3, 5, 8]

Complexidade:
- Tempo: O(n²)
- Espaço: O(1)

Não é eficiente para grandes volumes de dados,
mas é ótimo para aprender lógica de ordenação.
*/

/* ==========================================================
   12. IMPLEMENTAÇÃO DO BUBBLE SORT
   ========================================================== */

function bubbleSort(array) {
  const copia = [...array];

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j] > copia[j + 1]) {
        const temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
      }
    }
  }

  return copia;
}

const numerosBubble = [7, 4, 9, 1, 3];

console.log("\nBubble Sort:");
console.log("Original:", numerosBubble);
console.log("Ordenado:", bubbleSort(numerosBubble));

/* ==========================================================
   13. BUBBLE SORT PASSO A PASSO
   ========================================================== */

function bubbleSortPassoAPasso(array) {
  const copia = [...array];

  console.log("\nBubble Sort passo a passo:");
  console.log("Array inicial:", copia);

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j] > copia[j + 1]) {
        const temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
      }
    }

    console.log(`Após a passada ${i + 1}:`, [...copia]);
  }

  return copia;
}

bubbleSortPassoAPasso([5, 1, 4, 2, 8]);

/* ==========================================================
   14. BUBBLE SORT OTIMIZADO
   ========================================================== */

/*
Se em uma passada nenhuma troca acontecer,
o array já está ordenado e podemos encerrar antes.
*/

function bubbleSortOtimizado(array) {
  const copia = [...array];

  for (let i = 0; i < copia.length; i++) {
    let houveTroca = false;

    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j] > copia[j + 1]) {
        const temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
        houveTroca = true;
      }
    }

    if (!houveTroca) {
      break;
    }
  }

  return copia;
}

console.log("\nBubble Sort otimizado:");
console.log(bubbleSortOtimizado([1, 2, 3, 4, 5]));
console.log(bubbleSortOtimizado([9, 7, 5, 3, 1]));

/* ==========================================================
   15. COMPARANDO sort() E BUBBLE SORT
   ========================================================== */

/*

sort():
- Método nativo do JavaScript
- Mais rápido e mais usado no dia a dia
- Ideal para aplicações reais

Bubble Sort:
- Algoritmo clássico
- Excelente para aprendizado
- Pouco eficiente para grandes arrays

Na prática:
- Use sort() no desenvolvimento real
- Estude Bubble Sort para entender algoritmos

*/

/* ==========================================================
   16. RESUMO
   ========================================================== */

/*

sort()
- Ordena o array
- Modifica o array original

sort((a, b) => a - b)
- Ordem crescente numérica

sort((a, b) => b - a)
- Ordem decrescente numérica

reverse()
- Inverte a ordem atual do array

localeCompare()
- Útil para ordenar strings e nomes

Bubble Sort
- Algoritmo clássico de ordenação
- Baseado em trocas entre vizinhos
- Complexidade O(n²)

*/
