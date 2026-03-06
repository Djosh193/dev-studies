/**
 * ==========================================================
 * 05 - BUSCA EM ARRAYS
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Neste arquivo vamos estudar diferentes formas de buscar
 * valores dentro de arrays.
 *
 * Conceitos abordados:
 *
 * - Busca linear
 * - includes()
 * - indexOf()
 * - find()
 * - findIndex()
 *
 * Também veremos a complexidade de tempo dessas operações.
 *
 * Complexidade média:
 *
 * Busca linear → O(n)
 *
 */

/* ==========================================================
   1. ARRAY BASE PARA EXEMPLOS
   ========================================================== */

const numeros = [3, 7, 12, 18, 25, 30];

console.log("Array base:");
console.log(numeros);

/* ==========================================================
   2. BUSCA LINEAR (ALGORITMO CLÁSSICO)
   ========================================================== */

/*
Busca linear percorre o array elemento por elemento
até encontrar o valor desejado.
*/

function buscaLinear(array, alvo) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === alvo) {
      return i;
    }
  }

  return -1;
}

console.log("\nBusca linear:");

console.log("Posição do 18:", buscaLinear(numeros, 18));

console.log("Posição do 100:", buscaLinear(numeros, 100));

/* ==========================================================
   3. includes()
   ========================================================== */

/*
Verifica se um valor existe no array.
Retorna true ou false.
*/

const existe = numeros.includes(12);

console.log("\nincludes():");

console.log("Existe 12?", existe);

console.log("Existe 50?", numeros.includes(50));

/* ==========================================================
   4. indexOf()
   ========================================================== */

/*
Retorna o índice do elemento encontrado.
Se não existir, retorna -1.
*/

console.log("\nindexOf():");

console.log("Índice do 25:", numeros.indexOf(25));

console.log("Índice do 100:", numeros.indexOf(100));

/* ==========================================================
   5. find()
   ========================================================== */

/*
find retorna o primeiro elemento que satisfaz
uma condição.
*/

const maiorQue10 = numeros.find((numero) => numero > 10);

console.log("\nfind():");

console.log("Primeiro número maior que 10:");

console.log(maiorQue10);

/* ==========================================================
   6. findIndex()
   ========================================================== */

/*
findIndex retorna o índice do primeiro elemento
que satisfaz a condição.
*/

const indiceMaior10 = numeros.findIndex((numero) => numero > 10);

console.log("\nfindIndex():");

console.log(indiceMaior10);

/* ==========================================================
   7. BUSCA EM ARRAY DE OBJETOS
   ========================================================== */

const usuarios = [
  { id: 1, nome: "Jorge" },
  { id: 2, nome: "Ana" },
  { id: 3, nome: "Carlos" },
];

const usuarioEncontrado = usuarios.find((usuario) => usuario.id === 2);

console.log("\nBusca em array de objetos:");

console.log(usuarioEncontrado);

/* ==========================================================
   8. BUSCANDO ÍNDICE EM OBJETOS
   ========================================================== */

const indiceUsuario = usuarios.findIndex((usuario) => usuario.id === 3);

console.log("\nÍndice do usuário com id 3:");

console.log(indiceUsuario);

/* ==========================================================
   9. COMPARAÇÃO DOS MÉTODOS
   ========================================================== */

/*

Método       Retorno

includes     true / false
indexOf      índice ou -1
find         elemento encontrado
findIndex    índice encontrado

*/

/* ==========================================================
   10. EXEMPLO PRÁTICO
   ========================================================== */

const produtos = [
  { id: 101, nome: "Notebook" },
  { id: 102, nome: "Mouse" },
  { id: 103, nome: "Teclado" },
];

function buscarProduto(id) {
  return produtos.find((produto) => produto.id === id);
}

console.log("\nBuscar produto:");

console.log(buscarProduto(102));

/* ==========================================================
   11. RESUMO
   ========================================================== */

/*

Busca em arrays pode ser feita de várias formas:

1) Busca manual (for loop)

2) includes()
Verifica se existe valor

3) indexOf()
Retorna posição

4) find()
Retorna objeto ou valor encontrado

5) findIndex()
Retorna posição baseada em condição

Todas possuem complexidade média:

O(n)

*/
