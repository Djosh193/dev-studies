/*
====================================================
ARQUIVO: 06-operador-ternario.js
DIRETÓRIO: algoritmos/basicos
REPOSITÓRIO: dev-studies
AUTOR: Jorge Simões
====================================================

Este arquivo demonstra o uso do operador ternário
em JavaScript.

O operador ternário é uma forma curta de escrever
condições simples, substituindo estruturas if/else.

Estrutura:

condicao ? valorSeVerdadeiro : valorSeFalso
*/

/*
====================================================
1. EXEMPLO BÁSICO
====================================================
*/

let idade = 20;

let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);

/*
====================================================
2. SUBSTITUINDO IF/ELSE
====================================================
*/

// Forma tradicional

let numero = 10;

if (numero % 2 === 0) {
  console.log("Número par");
} else {
  console.log("Número ímpar");
}

// Forma com operador ternário

let mensagem = numero % 2 === 0 ? "Número par" : "Número ímpar";

console.log(mensagem);

/*
====================================================
3. ATRIBUINDO VALORES COM TERNÁRIO
====================================================
*/

let temperatura = 30;

let clima = temperatura > 25 ? "Está quente" : "Está frio";

console.log(clima);

/*
====================================================
4. USANDO TERNÁRIO DIRETAMENTE NO console.log
====================================================
*/

let saldo = 100;

console.log(saldo >= 50 ? "Saldo suficiente" : "Saldo insuficiente");

/*
====================================================
5. TERNÁRIO COM OPERADORES LÓGICOS
====================================================
*/

let idadeUsuario = 25;
let possuiCarteira = true;

let podeDirigir =
  idadeUsuario >= 18 && possuiCarteira ? "Pode dirigir" : "Não pode dirigir";

console.log(podeDirigir);

/*
====================================================
6. TERNÁRIO ENCADEADO
====================================================

Podemos encadear ternários para múltiplas condições.
*/

let nota = 85;

let classificacao =
  nota >= 90
    ? "Excelente"
    : nota >= 70
      ? "Bom"
      : nota >= 50
        ? "Regular"
        : "Reprovado";

console.log(classificacao);

/*
====================================================
7. EXEMPLO PRÁTICO: DESCONTO
====================================================
*/

let preco = 100;
let clienteVIP = true;

let precoFinal = clienteVIP ? preco * 0.8 : preco;

console.log("Preço final:", precoFinal);

/*
====================================================
8. EXEMPLO PRÁTICO: STATUS DO USUÁRIO
====================================================
*/

let usuarioLogado = true;

let statusUsuario = usuarioLogado
  ? "Usuário está logado"
  : "Usuário não está logado";

console.log(statusUsuario);

/*
====================================================
9. EXEMPLO PRÁTICO: VERIFICAR IDADE
====================================================
*/

let idadePessoa = 16;

let categoria = idadePessoa >= 18 ? "Adulto" : "Menor de idade";

console.log(categoria);

/*
====================================================
10. BOAS PRÁTICAS
====================================================

Use o operador ternário apenas para condições simples.

Evite ternários muito complexos ou difíceis de ler.

❌ Ruim

condicao1
  ? valor1
  : condicao2
  ? valor2
  : condicao3
  ? valor3
  : valor4

Prefira usar if/else quando houver muitas condições.

O objetivo é manter o código legível.
*/

/*
====================================================
RESUMO
====================================================

Operador ternário:

condicao ? valorSeVerdadeiro : valorSeFalso

Vantagens:

• código mais curto
• útil para atribuições
• melhora legibilidade em casos simples

Limitação:

• não usar em lógicas muito complexas
*/
