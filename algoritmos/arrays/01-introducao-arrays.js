/**
 * ==========================================================
 * 01 - INTRODUÇÃO A ARRAYS
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Arrays são estruturas de dados usadas para armazenar
 * múltiplos valores dentro de uma única variável.
 *
 * Cada valor dentro do array possui uma posição chamada
 * de índice (index), que começa sempre em 0.
 *
 * Exemplo de índices:
 *
 *  Índice:   0   1   2   3
 *            ↓   ↓   ↓   ↓
 * Array:   [10, 20, 30, 40]
 *
 */

/* ==========================================================
   1. CRIANDO ARRAYS
   ========================================================== */

const numeros = [10, 20, 30, 40, 50];

console.log("Array de números:");
console.log(numeros);

/* ==========================================================
   2. ARRAYS DE STRINGS
   ========================================================== */

const frutas = ["maçã", "banana", "uva", "laranja"];

console.log("\nArray de frutas:");
console.log(frutas);

/* ==========================================================
   3. ARRAYS PODEM TER TIPOS DIFERENTES
   ========================================================== */

const misto = [42, "JavaScript", true, null, { nome: "Jorge" }];

console.log("\nArray com tipos mistos:");
console.log(misto);

/* ==========================================================
   4. ACESSANDO ELEMENTOS DO ARRAY
   ========================================================== */

const linguagens = ["JavaScript", "Python", "Java", "C++"];

console.log("\nAcessando elementos do array:");

console.log("Primeiro elemento:", linguagens[0]);
console.log("Segundo elemento:", linguagens[1]);
console.log("Terceiro elemento:", linguagens[2]);

/* ==========================================================
   5. TAMANHO DO ARRAY
   ========================================================== */

console.log("\nTamanho do array linguagens:");
console.log(linguagens.length);

/* ==========================================================
   6. ALTERANDO VALORES DO ARRAY
   ========================================================== */

const cores = ["vermelho", "azul", "verde"];

console.log("\nArray original:");
console.log(cores);

cores[1] = "amarelo";

console.log("Array após modificação:");
console.log(cores);

/* ==========================================================
   7. ADICIONANDO ELEMENTOS MANUALMENTE
   ========================================================== */

const animais = ["cachorro", "gato"];

console.log("\nArray original:");
console.log(animais);

animais[2] = "leão";

console.log("Array após adicionar novo elemento:");
console.log(animais);

/* ==========================================================
   8. CRIANDO ARRAYS COM O CONSTRUCTOR ARRAY
   (menos usado, mas importante conhecer)
   ========================================================== */

const numeros2 = new Array(1, 2, 3, 4);

console.log("\nArray criado com constructor:");
console.log(numeros2);

/* ==========================================================
   9. ARRAY VAZIO
   ========================================================== */

const lista = [];

console.log("\nArray vazio:");
console.log(lista);

/* ==========================================================
   10. ARRAY COMO ESTRUTURA DE DADOS
   ========================================================== */

const tarefas = [
  "Estudar JavaScript",
  "Treinar algoritmos",
  "Fazer exercícios no LeetCode",
  "Treinar academia",
];

console.log("\nLista de tarefas:");

console.log("1:", tarefas[0]);
console.log("2:", tarefas[1]);
console.log("3:", tarefas[2]);
console.log("4:", tarefas[3]);

/* ==========================================================
   RESUMO
   ========================================================== */

/*

Arrays permitem:

✔ Armazenar múltiplos valores
✔ Acessar elementos por índice
✔ Alterar valores
✔ Saber o tamanho com .length
✔ Guardar diferentes tipos de dados

Estrutura básica:

const array = [valor1, valor2, valor3];

Acesso:

array[0]
array[1]

Tamanho:

array.length

*/
