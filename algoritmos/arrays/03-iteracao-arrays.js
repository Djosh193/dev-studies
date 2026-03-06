/**
 * ==========================================================
 * 03 - ITERAÇÃO EM ARRAYS
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Neste arquivo vamos aprender:
 *
 * - O que é iterar um array
 * - Como percorrer arrays com for tradicional
 * - Como usar for...of
 * - Como usar forEach
 * - Diferenças entre os tipos de iteração
 * - Boas práticas ao percorrer arrays
 *
 * Iterar significa percorrer os elementos de uma estrutura
 * para ler, exibir, transformar ou processar seus valores.
 */

/* ==========================================================
   1. ARRAY BASE PARA EXEMPLOS
   ========================================================== */

const numeros = [10, 20, 30, 40, 50];

console.log("Array original:");
console.log(numeros);

/* ==========================================================
   2. ITERANDO COM FOR TRADICIONAL
   ========================================================== */

/*
O for tradicional é muito usado quando precisamos do índice.
Estrutura:

for (inicialização; condição; incremento) {
  // código
}
*/

console.log("\nIterando com for tradicional:");

for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice: ${i} | Valor: ${numeros[i]}`);
}

/* ==========================================================
   3. USANDO O ÍNDICE PARA ACESSAR O ÚLTIMO ELEMENTO
   ========================================================== */

console.log("\nÚltimo elemento com for:");

for (let i = 0; i < numeros.length; i++) {
  if (i === numeros.length - 1) {
    console.log(`Último valor encontrado: ${numeros[i]}`);
  }
}

/* ==========================================================
   4. ITERANDO COM FOR...OF
   ========================================================== */

/*
O for...of percorre diretamente os valores do array.
É mais simples quando você não precisa do índice.
*/

const frutas = ["maçã", "banana", "uva", "laranja"];

console.log("\nIterando com for...of:");

for (const fruta of frutas) {
  console.log(fruta);
}

/* ==========================================================
   5. FOR...OF COM OPERAÇÕES
   ========================================================== */

const precos = [10, 25, 30, 40];
let somaPrecos = 0;

for (const preco of precos) {
  somaPrecos += preco;
}

console.log("\nSomando valores com for...of:");
console.log(`Total: R$ ${somaPrecos}`);

/* ==========================================================
   6. ITERANDO COM forEach
   ========================================================== */

/*
O forEach executa uma função para cada elemento do array.

Sintaxe:
array.forEach(function(valor, indice) {
  // código
});

ou com arrow function:
array.forEach((valor, indice) => {
  // código
});
*/

const nomes = ["Jorge", "Ana", "Carlos", "Marina"];

console.log("\nIterando com forEach:");

nomes.forEach((nome, indice) => {
  console.log(`Posição ${indice}: ${nome}`);
});

/* ==========================================================
   7. forEach PARA EXIBIR INFORMAÇÕES FORMATADAS
   ========================================================== */

const tarefas = [
  "Estudar JavaScript",
  "Treinar arrays",
  "Resolver exercícios",
  "Revisar lógica",
];

console.log("\nLista de tarefas:");

tarefas.forEach((tarefa, indice) => {
  console.log(`${indice + 1}. ${tarefa}`);
});

/* ==========================================================
   8. COMPARANDO for, for...of e forEach
   ========================================================== */

const letras = ["a", "b", "c"];

console.log("\nComparando formas de iteração:");

console.log("\nUsando for:");
for (let i = 0; i < letras.length; i++) {
  console.log(`Índice ${i}: ${letras[i]}`);
}

console.log("\nUsando for...of:");
for (const letra of letras) {
  console.log(`Valor: ${letra}`);
}

console.log("\nUsando forEach:");
letras.forEach((letra, indice) => {
  console.log(`Índice ${indice}: ${letra}`);
});

/* ==========================================================
   9. CRIANDO UM NOVO ARRAY COM FOR
   ========================================================== */

const base = [1, 2, 3, 4, 5];
const dobrados = [];

for (let i = 0; i < base.length; i++) {
  dobrados.push(base[i] * 2);
}

console.log("\nNovo array com valores dobrados:");
console.log(dobrados);

/* ==========================================================
   10. FILTRANDO VALORES MANUALMENTE COM FOR
   ========================================================== */

const valores = [3, 8, 15, 20, 21, 30];
const pares = [];

for (let i = 0; i < valores.length; i++) {
  if (valores[i] % 2 === 0) {
    pares.push(valores[i]);
  }
}

console.log("\nNúmeros pares encontrados:");
console.log(pares);

/* ==========================================================
   11. ITERANDO ARRAYS DE OBJETOS
   ========================================================== */

const usuarios = [
  { nome: "Jorge", idade: 33 },
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 29 },
];

console.log("\nIterando array de objetos:");

for (const usuario of usuarios) {
  console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
}

/* ==========================================================
   12. USANDO forEach EM ARRAY DE OBJETOS
   ========================================================== */

console.log("\nUsuários com forEach:");

usuarios.forEach((usuario, indice) => {
  console.log(
    `Registro ${indice + 1}: ${usuario.nome} - ${usuario.idade} anos`,
  );
});

/* ==========================================================
   13. CUIDADO COM O LENGTH
   ========================================================== */

/*
A condição do for geralmente usa:
i < array.length

Isso acontece porque os índices começam em 0.

Exemplo:
Se um array tem length = 4,
os índices válidos são: 0, 1, 2 e 3
*/

const cores = ["vermelho", "azul", "verde", "amarelo"];

console.log("\nPercorrendo array com atenção ao length:");

for (let i = 0; i < cores.length; i++) {
  console.log(`Índice ${i}: ${cores[i]}`);
}

/* ==========================================================
   14. PERCORRENDO DE TRÁS PARA FRENTE
   ========================================================== */

console.log("\nPercorrendo array de trás para frente:");

for (let i = cores.length - 1; i >= 0; i--) {
  console.log(`Índice ${i}: ${cores[i]}`);
}

/* ==========================================================
   15. SOMANDO TODOS OS ELEMENTOS
   ========================================================== */

const notas = [7, 8, 6, 9, 10];
let somaNotas = 0;

for (const nota of notas) {
  somaNotas += nota;
}

console.log("\nSoma das notas:");
console.log(somaNotas);

/* ==========================================================
   16. CALCULANDO MÉDIA
   ========================================================== */

const media = somaNotas / notas.length;

console.log("\nMédia das notas:");
console.log(media);

/* ==========================================================
   17. CONTANDO ELEMENTOS QUE ATENDEM UMA CONDIÇÃO
   ========================================================== */

const idades = [12, 18, 25, 15, 30, 17, 40];
let maioresDeIdade = 0;

for (const idade of idades) {
  if (idade >= 18) {
    maioresDeIdade++;
  }
}

console.log("\nQuantidade de maiores de idade:");
console.log(maioresDeIdade);

/* ==========================================================
   18. ITERAÇÃO COM BREAK
   ========================================================== */

/*
O break interrompe o laço quando uma condição é atendida.
Ele funciona com for e for...of.
Não funciona da mesma forma com forEach.
*/

const numerosBusca = [5, 8, 13, 21, 34, 55];
let encontrado = false;

for (const numero of numerosBusca) {
  if (numero === 21) {
    encontrado = true;
    console.log("\nNúmero 21 encontrado.");
    break;
  }
}

if (!encontrado) {
  console.log("\nNúmero 21 não encontrado.");
}

/* ==========================================================
   19. ITERAÇÃO COM CONTINUE
   ========================================================== */

/*
O continue pula a iteração atual e vai para a próxima.
*/

console.log("\nUsando continue:");

for (let i = 0; i < 6; i++) {
  if (i === 3) {
    continue;
  }

  console.log(`Valor de i: ${i}`);
}

/* ==========================================================
   20. RESUMO
   ========================================================== */

/*

Principais formas de iterar arrays:

1) for tradicional
- Melhor quando você precisa do índice
- Dá mais controle sobre o loop

2) for...of
- Melhor quando você só precisa dos valores
- Mais limpo e legível

3) forEach
- Muito usado para percorrer arrays
- Recebe valor, índice e array
- Bom para exibir/processar elementos
- Não é ideal quando você precisa de break ou continue

Boas práticas:
- Use for quando precisar do índice
- Use for...of quando quiser simplicidade
- Use forEach para callbacks simples e leitura elegante

*/
