/**
 * ==========================================================
 * 04 - MÉTODOS DE ARRAYS
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Neste arquivo vamos estudar os principais métodos
 * nativos de arrays em JavaScript.
 *
 * Métodos abordados:
 *
 * - push
 * - pop
 * - shift
 * - unshift
 * - map
 * - filter
 * - reduce
 * - find
 * - findIndex
 * - includes
 *
 */

/* ==========================================================
   1. ARRAY BASE PARA EXEMPLOS
   ========================================================== */

const numeros = [1, 2, 3, 4, 5];

console.log("Array original:");
console.log(numeros);

/* ==========================================================
   2. push() - ADICIONA NO FINAL
   ========================================================== */

const listaPush = [10, 20, 30];

listaPush.push(40);

console.log("\npush():");
console.log(listaPush);

/* ==========================================================
   3. pop() - REMOVE DO FINAL
   ========================================================== */

const listaPop = [10, 20, 30];

listaPop.pop();

console.log("\npop():");
console.log(listaPop);

/* ==========================================================
   4. shift() - REMOVE DO INÍCIO
   ========================================================== */

const listaShift = [1, 2, 3, 4];

listaShift.shift();

console.log("\nshift():");
console.log(listaShift);

/* ==========================================================
   5. unshift() - ADICIONA NO INÍCIO
   ========================================================== */

const listaUnshift = [2, 3, 4];

listaUnshift.unshift(1);

console.log("\nunshift():");
console.log(listaUnshift);

/* ==========================================================
   6. map() - TRANSFORMA OS ELEMENTOS
   ========================================================== */

/*
map() cria um novo array transformando os elementos.
*/

const numerosMap = [1, 2, 3, 4];

const dobrados = numerosMap.map((numero) => numero * 2);

console.log("\nmap():");
console.log(dobrados);

/* ==========================================================
   7. filter() - FILTRA ELEMENTOS
   ========================================================== */

const numerosFilter = [1, 2, 3, 4, 5, 6];

const pares = numerosFilter.filter((numero) => numero % 2 === 0);

console.log("\nfilter():");
console.log(pares);

/* ==========================================================
   8. reduce() - REDUZ O ARRAY A UM VALOR
   ========================================================== */

/*
reduce é usado para:

- somar valores
- acumular resultados
- calcular médias
*/

const numerosReduce = [10, 20, 30];

const soma = numerosReduce.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log("\nreduce():");
console.log(soma);

/* ==========================================================
   9. find() - ENCONTRA O PRIMEIRO ELEMENTO
   ========================================================== */

const numerosFind = [5, 12, 8, 130, 44];

const encontrado = numerosFind.find((numero) => numero > 10);

console.log("\nfind():");
console.log(encontrado);

/* ==========================================================
   10. findIndex() - ENCONTRA O ÍNDICE
   ========================================================== */

const indice = numerosFind.findIndex((numero) => numero > 10);

console.log("\nfindIndex():");
console.log(indice);

/* ==========================================================
   11. includes() - VERIFICA SE EXISTE NO ARRAY
   ========================================================== */

const linguagens = ["JavaScript", "Python", "Java"];

const existe = linguagens.includes("Python");

console.log("\nincludes():");
console.log(existe);

/* ==========================================================
   12. map() COM OBJETOS
   ========================================================== */

const usuarios = [
  { nome: "Jorge", idade: 33 },
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 29 },
];

const nomes = usuarios.map((usuario) => usuario.nome);

console.log("\nmap() com objetos:");
console.log(nomes);

/* ==========================================================
   13. filter() COM OBJETOS
   ========================================================== */

const maiores = usuarios.filter((usuario) => usuario.idade >= 30);

console.log("\nfilter() com objetos:");
console.log(maiores);

/* ==========================================================
   14. reduce() PARA SOMAR IDADES
   ========================================================== */

const somaIdades = usuarios.reduce((acumulador, usuario) => {
  return acumulador + usuario.idade;
}, 0);

console.log("\nreduce() com objetos:");
console.log(somaIdades);

/* ==========================================================
   15. ENCADEAMENTO DE MÉTODOS
   ========================================================== */

/*
Podemos encadear métodos de array.
*/

const resultado = numeros.map((n) => n * 2).filter((n) => n > 5);

console.log("\nEncadeamento:");
console.log(resultado);

/* ==========================================================
   16. RESUMO
   ========================================================== */

/*

Métodos principais:

push()      adiciona no final
pop()       remove do final
shift()     remove do início
unshift()   adiciona no início

map()       transforma elementos
filter()    filtra elementos
reduce()    reduz o array a um valor

find()      retorna o primeiro elemento encontrado
findIndex() retorna o índice do elemento

includes()  verifica se um valor existe no array

*/
