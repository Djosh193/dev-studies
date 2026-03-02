/*
===========================================================
01 - VARIÁVEIS EM JAVASCRIPT
Autor: Jorge Simões
Objetivo: Dominar declaração, escopo e boas práticas
===========================================================
*/

/*
===========================================================
1. O QUE É UMA VARIÁVEL?
===========================================================

Uma variável é um espaço na memória utilizado para armazenar um valor.

Podemos guardar:
- números
- textos
- booleanos
- objetos
- arrays
- funções
*/

/*
===========================================================
2. DECLARAÇÃO DE VARIÁVEIS
===========================================================
*/

// Forma moderna (RECOMENDADA)

let nome = "Jorge"; // Pode ser reatribuída
const idade = 33; // Não pode ser reatribuída

/*
===========================================================
3. DIFERENÇA ENTRE LET E CONST
===========================================================
*/

let cidade = "Maceió";
cidade = "Recife"; // ✅ permitido

// const pais = "Brasil";
// pais = "Argentina"; ❌ ERRO - const não permite reatribuição

/*
===========================================================
4. VAR (FORMA ANTIGA - EVITAR)
===========================================================
*/

// var possui escopo global ou de função
// Pode gerar comportamentos inesperados

var exemplo = "antigo";

if (true) {
  var teste = "Isso vaza para fora do bloco";
}

console.log(teste); // Funciona (escopo ruim)

/*
===========================================================
5. ESCOPO DE BLOCO (LET E CONST)
===========================================================
*/

if (true) {
  let mensagem = "Escopo de bloco";
  console.log(mensagem); // ✅ funciona
}

// console.log(mensagem); ❌ ERRO

/*
===========================================================
6. DECLARAÇÃO SEM INICIALIZAÇÃO
===========================================================
*/

let valor;
console.log(valor); // undefined

/*
===========================================================
7. REGRAS DE NOMENCLATURA
===========================================================

✔ Pode conter letras, números, $, _
✔ Não pode começar com número
✔ Case sensitive
✔ Não usar palavras reservadas

Boas práticas:
- camelCase
- nomes descritivos
*/

let nomeCompleto = "Jorge Simões";
let quantidadeProdutos = 10;
let isAtivo = true;

/*
===========================================================
8. HOISTING (CONCEITO IMPORTANTE)
===========================================================
*/

// var sofre hoisting (sobe declaração, não valor)

console.log(variavelHoisting); // undefined
var variavelHoisting = 100;

// let e const também sofrem hoisting,
// mas ficam em "Temporal Dead Zone"

// console.log(testeLet); ❌ ERRO
let testeLet = 50;

/*
===========================================================
9. CONST COM OBJETOS E ARRAYS
===========================================================

Const impede reatribuição, mas permite
modificar conteúdo interno.
*/

const usuario = {
  nome: "Jorge",
  idade: 33,
};

usuario.idade = 34; // ✅ permitido

// usuario = {} ❌ ERRO

const numeros = [1, 2, 3];
numeros.push(4); // ✅ permitido

/*
===========================================================
10. BOAS PRÁTICAS PROFISSIONAIS
===========================================================

✔ Use const por padrão
✔ Use let apenas quando precisar reatribuir
✔ Nunca use var
✔ Use nomes claros
✔ Evite variáveis globais
*/

/*
===========================================================
11. EXERCÍCIOS PRÁTICOS
===========================================================
*/

// 1. Declare uma variável com seu nome
let meuNome = "Jorge";

// 2. Declare uma constante com seu ano de nascimento
const anoNascimento = 1992;

// 3. Calcule sua idade automaticamente
let anoAtual = 2026;
let minhaIdade = anoAtual - anoNascimento;

console.log("Idade calculada:", minhaIdade);

// 4. Tente reatribuir uma const e veja o erro (comentado)
// anoNascimento = 2000;

/*
===========================================================
FIM DO ARQUIVO
===========================================================
*/
