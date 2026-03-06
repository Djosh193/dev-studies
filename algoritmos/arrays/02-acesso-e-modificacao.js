/**
 * ==========================================================
 * 02 - ACESSO E MODIFICAÇÃO DE ARRAYS
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Neste arquivo vamos aprender:
 *
 * - Como acessar elementos do array
 * - Como modificar valores
 * - Como adicionar elementos
 * - Como remover elementos
 * - Métodos fundamentais de manipulação
 *
 */

/* ==========================================================
   1. ACESSANDO ELEMENTOS DO ARRAY
   ========================================================== */

const frutas = ["maçã", "banana", "uva", "laranja"];

console.log("Primeira fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);
console.log("Terceira fruta:", frutas[2]);

/* ==========================================================
   2. MODIFICANDO ELEMENTOS
   ========================================================== */

const cores = ["vermelho", "azul", "verde"];

console.log("\nArray original:");
console.log(cores);

cores[1] = "amarelo";

console.log("Array modificado:");
console.log(cores);

/* ==========================================================
   3. ADICIONANDO ELEMENTOS NO FINAL (push)
   ========================================================== */

const numeros = [1, 2, 3];

console.log("\nArray original:");
console.log(numeros);

numeros.push(4);

console.log("Após push:");
console.log(numeros);

/* ==========================================================
   4. REMOVENDO ELEMENTOS DO FINAL (pop)
   ========================================================== */

const lista = [10, 20, 30, 40];

console.log("\nArray antes do pop:");
console.log(lista);

lista.pop();

console.log("Array após pop:");
console.log(lista);

/* ==========================================================
   5. ADICIONANDO NO INÍCIO (unshift)
   ========================================================== */

const tarefas = ["estudar", "treinar"];

console.log("\nArray original:");
console.log(tarefas);

tarefas.unshift("acordar cedo");

console.log("Após unshift:");
console.log(tarefas);

/* ==========================================================
   6. REMOVENDO DO INÍCIO (shift)
   ========================================================== */

const fila = ["cliente1", "cliente2", "cliente3"];

console.log("\nFila original:");
console.log(fila);

fila.shift();

console.log("Fila após shift:");
console.log(fila);

/* ==========================================================
   7. ALTERANDO O ÚLTIMO ELEMENTO
   ========================================================== */

const linguagens = ["JavaScript", "Python", "Java"];

console.log("\nArray original:");
console.log(linguagens);

linguagens[linguagens.length - 1] = "C++";

console.log("Array modificado:");
console.log(linguagens);

/* ==========================================================
   8. ADICIONANDO ELEMENTOS POR ÍNDICE
   ========================================================== */

const animais = ["cachorro", "gato"];

console.log("\nArray original:");
console.log(animais);

animais[2] = "leão";
animais[3] = "tigre";

console.log("Array após adição manual:");
console.log(animais);

/* ==========================================================
   9. CRIANDO UMA CÓPIA DE ARRAY
   ========================================================== */

const original = [1, 2, 3];

const copia = [...original];

copia.push(4);

console.log("\nArray original:");
console.log(original);

console.log("Array cópia:");
console.log(copia);

/* ==========================================================
   10. CONCATENANDO ARRAYS
   ========================================================== */

const grupoA = [1, 2, 3];
const grupoB = [4, 5, 6];

const todos = grupoA.concat(grupoB);

console.log("\nConcatenação de arrays:");
console.log(todos);

/* ==========================================================
   RESUMO
   ========================================================== */

/*

Acesso:
array[indice]

Modificar:
array[indice] = novoValor

Adicionar:

push() -> final
unshift() -> início

Remover:

pop() -> final
shift() -> início

Concatenar:

array1.concat(array2)

*/
