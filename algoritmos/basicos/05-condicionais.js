/*
====================================================
ARQUIVO: 05-condicionais.js
DIRETÓRIO: algoritmos/basicos
REPOSITÓRIO: dev-studies
AUTOR: Jorge Simões
====================================================

Este arquivo demonstra o uso de estruturas condicionais
em JavaScript.

Estruturas condicionais permitem que um programa tome
decisões com base em determinadas condições.

Conteúdo abordado:

1. Estrutura if
2. Estrutura if / else
3. Estrutura if / else if / else
4. Operadores lógicos em condicionais
5. Operador ternário
6. Estrutura switch
7. Exemplos práticos
*/

/*
====================================================
1. ESTRUTURA IF
====================================================

Executa um bloco de código apenas se a condição
for verdadeira.
*/

let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}

/*
====================================================
2. ESTRUTURA IF / ELSE
====================================================

Permite executar um bloco de código caso
a condição seja falsa.
*/

let temperatura = 15;

if (temperatura > 25) {
  console.log("Está calor.");
} else {
  console.log("Não está calor.");
}

/*
====================================================
3. ESTRUTURA IF / ELSE IF / ELSE
====================================================

Permite verificar múltiplas condições.
*/

let nota = 75;

if (nota >= 90) {
  console.log("Excelente!");
} else if (nota >= 70) {
  console.log("Bom trabalho.");
} else if (nota >= 50) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}

/*
====================================================
4. OPERADORES LÓGICOS EM CONDICIONAIS
====================================================

Podemos combinar condições usando:

&&  (AND)
||  (OR)
!   (NOT)
*/

let idadeUsuario = 25;
let temCarteira = true;

if (idadeUsuario >= 18 && temCarteira) {
  console.log("Pode dirigir.");
}

/*
OR (||)
*/

let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
  console.log("Pode realizar a compra.");
}

/*
NOT (!)
*/

let usuarioLogado = false;

if (!usuarioLogado) {
  console.log("Usuário precisa fazer login.");
}

/*
====================================================
5. OPERADOR TERNÁRIO
====================================================

Forma curta de escrever um if/else.

Sintaxe:

condição ? valorSeVerdadeiro : valorSeFalso
*/

let idadePessoa = 16;

let resultado = idadePessoa >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);

/*
====================================================
6. ESTRUTURA SWITCH
====================================================

Usada quando precisamos comparar um valor
com várias opções possíveis.
*/

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda-feira");
    break;

  case 3:
    console.log("Terça-feira");
    break;

  case 4:
    console.log("Quarta-feira");
    break;

  case 5:
    console.log("Quinta-feira");
    break;

  case 6:
    console.log("Sexta-feira");
    break;

  case 7:
    console.log("Sábado");
    break;

  default:
    console.log("Dia inválido");
}

/*
====================================================
7. EXEMPLO PRÁTICO: VERIFICAR PAR OU ÍMPAR
====================================================
*/

let numero = 7;

if (numero % 2 === 0) {
  console.log("Número par.");
} else {
  console.log("Número ímpar.");
}

/*
====================================================
8. EXEMPLO PRÁTICO: SISTEMA DE LOGIN
====================================================
*/

let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso.");
} else {
  console.log("Usuário ou senha inválidos.");
}

/*
====================================================
9. EXEMPLO PRÁTICO: CLASSIFICAÇÃO DE IDADE
====================================================
*/

let idadeClassificacao = 12;

if (idadeClassificacao <= 12) {
  console.log("Criança");
} else if (idadeClassificacao <= 17) {
  console.log("Adolescente");
} else if (idadeClassificacao <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

/*
====================================================
10. BOAS PRÁTICAS
====================================================

• Use comparações estritas (===) sempre que possível
• Evite condicionais muito complexas
• Prefira nomes de variáveis claros
• Use indentação correta
• Use switch quando houver muitas opções
*/

/*
====================================================
RESUMO
====================================================

if
→ executa código se a condição for verdadeira

if / else
→ executa código alternativo

if / else if / else
→ múltiplas condições

switch
→ múltiplos casos possíveis

ternário ( ? : )
→ forma curta de if/else
*/
