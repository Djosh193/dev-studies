/*
====================================================
ARQUIVO: 03-operadores.js
DIRETÓRIO: algoritmos/basicos
REPOSITÓRIO: dev-studies
AUTOR: Jorge Simões
====================================================

Este arquivo demonstra os principais operadores da linguagem JavaScript.

Categorias abordadas:

1. Operadores Aritméticos
2. Operadores de Atribuição
3. Operadores de Comparação
4. Operadores Lógicos
5. Operadores de Incremento e Decremento
6. Operador Ternário
7. Operador typeof
8. Operadores de Coalescência e Curto-circuito
*/

/*
====================================================
1. OPERADORES ARITMÉTICOS
====================================================
*/

let a = 10;
let b = 5;

console.log("Soma:", a + b); // 15
console.log("Subtração:", a - b); // 5
console.log("Multiplicação:", a * b); // 50
console.log("Divisão:", a / b); // 2
console.log("Resto:", a % b); // 0
console.log("Potência:", a ** b); // 100000

/*
====================================================
2. OPERADORES DE ATRIBUIÇÃO
====================================================
*/

let numero = 10;

numero += 5; // numero = numero + 5
console.log("+= :", numero);

numero -= 3; // numero = numero - 3
console.log("-= :", numero);

numero *= 2; // numero = numero * 2
console.log("*= :", numero);

numero /= 4; // numero = numero / 4
console.log("/= :", numero);

numero %= 3; // numero = numero % 3
console.log("%= :", numero);

/*
====================================================
3. OPERADORES DE COMPARAÇÃO
====================================================
*/

let x = 10;
let y = "10";

console.log("== :", x == y); // true (compara apenas valor)
console.log("=== :", x === y); // false (valor + tipo)

console.log("!= :", x != y); // false
console.log("!== :", x !== y); // true

console.log("> :", x > 5); // true
console.log("< :", x < 20); // true

console.log(">= :", x >= 10); // true
console.log("<= :", x <= 9); // false

/*
====================================================
4. OPERADORES LÓGICOS
====================================================
*/

let idade = 25;
let possuiCarteira = true;

console.log("AND (&&):", idade >= 18 && possuiCarteira);
// true apenas se ambas as condições forem verdadeiras

console.log("OR (||):", idade < 18 || possuiCarteira);
// true se pelo menos uma condição for verdadeira

console.log("NOT (!):", !possuiCarteira);
// inverte o valor booleano

/*
====================================================
5. INCREMENTO E DECREMENTO
====================================================
*/

let contador = 0;

contador++;
console.log("Incremento:", contador);

contador--;
console.log("Decremento:", contador);

/*
====================================================
6. OPERADOR TERNÁRIO
====================================================

Forma curta de escrever um if/else
*/

let idadeUsuario = 20;

let mensagem = idadeUsuario >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mensagem);

/*
====================================================
7. OPERADOR typeof
====================================================

Retorna o tipo de uma variável
*/

let nome = "Jorge";
let idadePessoa = 33;
let ativo = true;

console.log(typeof nome); // string
console.log(typeof idadePessoa); // number
console.log(typeof ativo); // boolean

/*
====================================================
8. OPERADOR DE COALESCÊNCIA NULA (??)
====================================================

Retorna o valor da direita caso o valor da esquerda
seja null ou undefined
*/

let valor = null;

let resultado = valor ?? "Valor padrão";

console.log(resultado);

/*
====================================================
9. CURTO-CIRCUITO COM ||
====================================================

Muito usado para definir valores padrão
*/

let cor = "";

let corFinal = cor || "azul";

console.log(corFinal);

/*
====================================================
10. EXEMPLO PRÁTICO
====================================================
*/

let preco = 100;
let desconto = 20;

let precoFinal = preco - desconto;

let clienteVIP = true;

let mensagemCompra = clienteVIP ? "Desconto aplicado" : "Preço normal";

console.log("Preço final:", precoFinal);
console.log(mensagemCompra);

/*
====================================================
RESUMO DOS PRINCIPAIS OPERADORES
====================================================

ARITMÉTICOS
+  soma
-  subtração
*  multiplicação
/  divisão
%  resto
** potência

COMPARAÇÃO
==  igual (valor)
=== igual (valor + tipo)
!=  diferente
!== diferente estrito
>   maior
<   menor
>=  maior ou igual
<=  menor ou igual

LÓGICOS
&&  AND
||  OR
!   NOT

OUTROS
?: operador ternário
typeof verifica tipo
?? coalescência nula
*/
