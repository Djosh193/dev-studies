/*
====================================================
ARQUIVO: 08-exercicios-basicos.js
DIRETÓRIO: algoritmos/basicos
REPOSITÓRIO: dev-studies
AUTOR: Jorge Simões
====================================================

Este arquivo contém exercícios básicos de lógica
em JavaScript.

Os exercícios utilizam conceitos aprendidos
anteriormente:

• variáveis
• operadores
• entrada e saída
• condicionais
• operador ternário
• switch case

Os exemplos são resolvidos para facilitar o
entendimento.
*/

/*
====================================================
EXERCÍCIO 1
VERIFICAR SE UM NÚMERO É PAR OU ÍMPAR
====================================================
*/

let numero = 8;

if (numero % 2 === 0) {
  console.log("O número é PAR");
} else {
  console.log("O número é ÍMPAR");
}

/*
====================================================
EXERCÍCIO 2
VERIFICAR MAIORIDADE
====================================================
*/

let idade = 20;

let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);

/*
====================================================
EXERCÍCIO 3
CALCULAR MÉDIA DE DUAS NOTAS
====================================================
*/

let nota1 = 7;
let nota2 = 8;

let media = (nota1 + nota2) / 2;

console.log("Média:", media);

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

/*
====================================================
EXERCÍCIO 4
VERIFICAR O MAIOR NÚMERO
====================================================
*/

let a = 10;
let b = 25;

if (a > b) {
  console.log("O maior número é:", a);
} else {
  console.log("O maior número é:", b);
}

/*
====================================================
EXERCÍCIO 5
CALCULADORA SIMPLES
====================================================
*/

let num1 = 10;
let num2 = 5;
let operacao = "+";

switch (operacao) {
  case "+":
    console.log("Resultado:", num1 + num2);
    break;

  case "-":
    console.log("Resultado:", num1 - num2);
    break;

  case "*":
    console.log("Resultado:", num1 * num2);
    break;

  case "/":
    console.log("Resultado:", num1 / num2);
    break;

  default:
    console.log("Operação inválida");
}

/*
====================================================
EXERCÍCIO 6
VERIFICAR SE UM NÚMERO É POSITIVO OU NEGATIVO
====================================================
*/

let valor = -5;

if (valor > 0) {
  console.log("Número positivo");
} else if (valor < 0) {
  console.log("Número negativo");
} else {
  console.log("Número é zero");
}

/*
====================================================
EXERCÍCIO 7
CLASSIFICAÇÃO DE IDADE
====================================================
*/

let idadePessoa = 15;

if (idadePessoa <= 12) {
  console.log("Criança");
} else if (idadePessoa <= 17) {
  console.log("Adolescente");
} else if (idadePessoa <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

/*
====================================================
EXERCÍCIO 8
CONVERSÃO DE TEMPERATURA
Celsius para Fahrenheit
====================================================
*/

let celsius = 30;

let fahrenheit = (celsius * 9) / 5 + 32;

console.log("Temperatura em Fahrenheit:", fahrenheit);

/*
====================================================
EXERCÍCIO 9
VERIFICAR SE UM ANO É BISSEXTO
====================================================
*/

let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("Ano bissexto");
} else {
  console.log("Ano não bissexto");
}

/*
====================================================
EXERCÍCIO 10
DESCONTO EM PRODUTO
====================================================
*/

let preco = 100;
let desconto = 0.2;

let precoFinal = preco * (1 - desconto);

console.log("Preço final com desconto:", precoFinal);

/*
====================================================
DESAFIO EXTRA
VERIFICAR NÚMERO MAIOR ENTRE TRÊS VALORES
====================================================
*/

let x = 10;
let y = 30;
let z = 20;

let maior;

if (x > y && x > z) {
  maior = x;
} else if (y > x && y > z) {
  maior = y;
} else {
  maior = z;
}

console.log("O maior número é:", maior);

/*
====================================================
RESUMO DOS EXERCÍCIOS
====================================================

1. Par ou ímpar
2. Maioridade
3. Média de notas
4. Maior número
5. Calculadora simples
6. Número positivo ou negativo
7. Classificação de idade
8. Conversão de temperatura
9. Ano bissexto
10. Desconto em produto
11. Maior entre três números

Esses exercícios ajudam a desenvolver
a lógica de programação.
*/
