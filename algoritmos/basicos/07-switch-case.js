/*
====================================================
ARQUIVO: 07-switch-case.js
DIRETÓRIO: algoritmos/basicos
REPOSITÓRIO: dev-studies
AUTOR: Jorge Simões
====================================================

Este arquivo demonstra o uso da estrutura
switch/case em JavaScript.

O switch é utilizado quando precisamos comparar
uma variável com vários valores possíveis.

Ele funciona como uma alternativa ao uso de
múltiplos if/else.
*/

/*
====================================================
1. ESTRUTURA BÁSICA DO SWITCH
====================================================

Sintaxe:

switch (variavel) {

  case valor1:
    código
    break;

  case valor2:
    código
    break;

  default:
    código padrão

}
*/

let dia = 2;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda-feira");
    break;

  case 3:
    console.log("Terça-feira");
    break;

  default:
    console.log("Dia inválido");
}

/*
====================================================
2. IMPORTÂNCIA DO BREAK
====================================================

O break interrompe a execução do switch.

Sem ele, o código continua executando os
cases seguintes.
*/

let numero = 1;

switch (numero) {
  case 1:
    console.log("Número 1");
    break;

  case 2:
    console.log("Número 2");
    break;
}

/*
====================================================
3. EXEMPLO SEM BREAK (FALL THROUGH)
====================================================

Quando não usamos break, o switch continua
executando os próximos cases.
*/

let valor = 1;

switch (valor) {
  case 1:
    console.log("Primeiro");

  case 2:
    console.log("Segundo");

  case 3:
    console.log("Terceiro");
}

/*
====================================================
4. AGRUPANDO CASOS
====================================================

Podemos usar múltiplos cases para executar
o mesmo bloco de código.
*/

let fruta = "maçã";

switch (fruta) {
  case "banana":
  case "maçã":
  case "pera":
    console.log("É uma fruta comum");
    break;

  case "manga":
    console.log("É uma fruta tropical");
    break;

  default:
    console.log("Fruta desconhecida");
}

/*
====================================================
5. USANDO SWITCH COM STRINGS
====================================================
*/

let usuario = "admin";

switch (usuario) {
  case "admin":
    console.log("Acesso total");
    break;

  case "editor":
    console.log("Acesso de edição");
    break;

  case "visitante":
    console.log("Acesso limitado");
    break;

  default:
    console.log("Usuário desconhecido");
}

/*
====================================================
6. EXEMPLO PRÁTICO: MENU DE OPÇÕES
====================================================
*/

let opcao = 3;

switch (opcao) {
  case 1:
    console.log("Abrir arquivo");
    break;

  case 2:
    console.log("Salvar arquivo");
    break;

  case 3:
    console.log("Fechar programa");
    break;

  default:
    console.log("Opção inválida");
}

/*
====================================================
7. EXEMPLO PRÁTICO: CALCULADORA
====================================================
*/

let operacao = "+";
let a = 10;
let b = 5;

switch (operacao) {
  case "+":
    console.log("Resultado:", a + b);
    break;

  case "-":
    console.log("Resultado:", a - b);
    break;

  case "*":
    console.log("Resultado:", a * b);
    break;

  case "/":
    console.log("Resultado:", a / b);
    break;

  default:
    console.log("Operação inválida");
}

/*
====================================================
8. SWITCH COM BOOLEAN
====================================================
*/

let idade = 20;

switch (true) {
  case idade < 12:
    console.log("Criança");
    break;

  case idade < 18:
    console.log("Adolescente");
    break;

  case idade < 60:
    console.log("Adulto");
    break;

  default:
    console.log("Idoso");
}

/*
====================================================
9. SWITCH VS IF/ELSE
====================================================

Use switch quando:

• há muitas comparações do mesmo valor
• o código fica mais organizado
• os casos são bem definidos

Use if/else quando:

• as condições são mais complexas
• envolvem operadores lógicos
*/

/*
====================================================
10. BOAS PRÁTICAS
====================================================

• Sempre use break (exceto quando desejar fall-through)
• Use default para tratar valores inesperados
• Prefira switch quando houver muitas opções
• Evite lógica complexa dentro dos cases
*/

/*
====================================================
RESUMO
====================================================

switch
→ estrutura de decisão múltipla

case
→ representa um valor possível

break
→ interrompe a execução

default
→ executa quando nenhum caso corresponde
*/
