/*
====================================================
ARQUIVO: 04-entrada-e-saida.js
DIRETÓRIO: algoritmos/basicos
REPOSITÓRIO: dev-studies
AUTOR: Jorge Simões
====================================================

Este arquivo demonstra conceitos básicos de
ENTRADA e SAÍDA de dados em JavaScript.

Em algoritmos, entrada e saída são fundamentais.

ENTRADA (input)
→ dados fornecidos pelo usuário ou sistema

SAÍDA (output)
→ dados exibidos para o usuário

Neste arquivo veremos:

1. Saída com console.log
2. Saída com alert
3. Entrada com prompt
4. Conversão de tipos
5. Entrada e saída combinadas
6. Exemplos práticos
*/

/*
====================================================
1. SAÍDA COM console.log()
====================================================

console.log é o método mais usado para mostrar
informações no console do navegador ou Node.js.
*/

console.log("Olá, mundo!");

/*
Exibindo variáveis
*/

let nome = "Jorge";

console.log("Meu nome é:", nome);

/*
Exibindo múltiplos valores
*/

let idade = 33;
let profissao = "Desenvolvedor";

console.log("Nome:", nome, "| Idade:", idade, "| Profissão:", profissao);

/*
Template string (forma moderna)
*/

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

/*
====================================================
2. SAÍDA COM alert()
====================================================

alert exibe uma caixa de mensagem no navegador.

Usado apenas em ambiente web.
*/

alert("Bem-vindo ao sistema!");

/*
Também pode mostrar variáveis
*/

let mensagem = "Operação realizada com sucesso";

alert(mensagem);

/*
====================================================
3. ENTRADA COM prompt()
====================================================

prompt permite receber dados do usuário.

Funciona apenas no navegador.
*/

let usuario = prompt("Digite seu nome:");

console.log("Usuário digitou:", usuario);

/*
====================================================
4. CONVERSÃO DE TIPOS
====================================================

Valores recebidos pelo prompt sempre são STRING.

Precisamos converter quando trabalhamos com números.
*/

let idadeUsuario = prompt("Digite sua idade:");

let idadeNumero = Number(idadeUsuario);

console.log("Idade convertida:", idadeNumero);

/*
Outra forma de conversão
*/

let numero1 = parseInt(prompt("Digite um número:"));

let numero2 = parseFloat(prompt("Digite outro número:"));

console.log("Número inteiro:", numero1);
console.log("Número decimal:", numero2);

/*
====================================================
5. EXEMPLO: SOMA DE DOIS NÚMEROS
====================================================
*/

let valor1 = Number(prompt("Digite o primeiro número:"));
let valor2 = Number(prompt("Digite o segundo número:"));

let soma = valor1 + valor2;

console.log("Resultado da soma:", soma);
alert(`Resultado da soma: ${soma}`);

/*
====================================================
6. EXEMPLO: CALCULAR IDADE
====================================================
*/

let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));

let anoAtual = 2026;

let idadeCalculada = anoAtual - anoNascimento;

console.log(`Você tem aproximadamente ${idadeCalculada} anos.`);

/*
====================================================
7. EXEMPLO: CALCULADORA SIMPLES
====================================================
*/

let numeroA = Number(prompt("Digite o primeiro número:"));
let numeroB = Number(prompt("Digite o segundo número:"));

let resultadoSoma = numeroA + numeroB;
let resultadoSubtracao = numeroA - numeroB;
let resultadoMultiplicacao = numeroA * numeroB;
let resultadoDivisao = numeroA / numeroB;

console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtracao);
console.log("Multiplicação:", resultadoMultiplicacao);
console.log("Divisão:", resultadoDivisao);

/*
====================================================
8. ENTRADA SIMULADA (NODE.JS)
====================================================

No Node.js geralmente usamos bibliotecas
para entrada de dados como:

readline
prompt-sync

Exemplo com prompt-sync:

const prompt = require("prompt-sync")();

let nomeUsuario = prompt("Digite seu nome: ");

console.log("Olá", nomeUsuario);
*/

/*
====================================================
9. BOAS PRÁTICAS
====================================================

• Use console.log para depuração
• Use template strings para mensagens
• Sempre converta números recebidos do prompt
• Evite usar alert em aplicações reais
• Prefira interfaces modernas em aplicações web
*/

/*
====================================================
RESUMO
====================================================

ENTRADA
prompt()

SAÍDA
console.log()
alert()

CONVERSÃO
Number()
parseInt()
parseFloat()

Esses conceitos são a base de qualquer algoritmo.
*/
