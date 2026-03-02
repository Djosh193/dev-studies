/*
===========================================================
02 - TIPOS DE DADOS EM JAVASCRIPT
Autor: Jorge Simões
Objetivo: Dominar tipos primitivos, referência, coerção e armadilhas
===========================================================
*/

/*
===========================================================
1. INTRODUÇÃO
===========================================================

JavaScript é uma linguagem de tipagem dinâmica.

Isso significa:
- Você não declara o tipo explicitamente.
- O tipo é definido automaticamente pelo valor.
*/

/*
===========================================================
2. TIPOS PRIMITIVOS (7 TIPOS)
===========================================================

1. string
2. number
3. boolean
4. undefined
5. null
6. symbol
7. bigint
*/

/*
===========================================================
3. STRING
===========================================================
*/

let nome = "Jorge";
let sobrenome = "Simões";
let frase = `Meu nome é ${nome}`;

console.log(typeof nome); // string

/*
===========================================================
4. NUMBER
===========================================================

Em JavaScript não existe int ou float.
Tudo é do tipo number.
*/

let inteiro = 10;
let decimal = 3.14;

console.log(typeof inteiro); // number
console.log(typeof decimal); // number

// Valores especiais
console.log(typeof NaN); // number
console.log(typeof Infinity); // number

/*
===========================================================
5. BOOLEAN
===========================================================
*/

let verdadeiro = true;
let falso = false;

console.log(typeof verdadeiro); // boolean

/*
===========================================================
6. UNDEFINED
===========================================================

Variável declarada, mas não inicializada.
*/

let valor;
console.log(valor); // undefined
console.log(typeof valor); // undefined

/*
===========================================================
7. NULL
===========================================================

Representa ausência intencional de valor.
*/

let vazio = null;

console.log(vazio); // null
console.log(typeof vazio); // object (BUG histórico do JS)

/*
===========================================================
8. SYMBOL (ES6)
===========================================================

Usado para criar identificadores únicos.
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
console.log(typeof id1); // symbol

/*
===========================================================
9. BIGINT (ES2020)
===========================================================

Para números muito grandes.
*/

let numeroGrande = 9007199254740991n;
console.log(typeof numeroGrande); // bigint

/*
===========================================================
10. TIPOS DE REFERÊNCIA
===========================================================

- Object
- Array
- Function
- Date
- RegExp
*/

/*
===========================================================
11. OBJECT
===========================================================
*/

let usuario = {
  nome: "Jorge",
  idade: 33,
};

console.log(typeof usuario); // object

/*
===========================================================
12. ARRAY
===========================================================
*/

let numeros = [1, 2, 3];
console.log(typeof numeros); // object
console.log(Array.isArray(numeros)); // true

/*
===========================================================
13. FUNCTION
===========================================================
*/

function saudacao() {
  return "Olá";
}

console.log(typeof saudacao); // function

/*
===========================================================
14. DIFERENÇA: PRIMITIVO vs REFERÊNCIA
===========================================================

Primitivos → copiam valor
Referência → copiam endereço de memória
*/

let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

let obj1 = { nome: "Jorge" };
let obj2 = obj1;

obj2.nome = "Carlos";

console.log(obj1.nome); // Carlos (mesma referência)

/*
===========================================================
15. TYPEOF - ARMADILHAS
===========================================================
*/

console.log(typeof null); // object (erro histórico)
console.log(typeof []); // object
console.log(typeof NaN); // number

/*
===========================================================
16. COERÇÃO DE TIPOS (TYPE COERCION)
===========================================================

JavaScript converte tipos automaticamente.
*/

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(5 == "5"); // true
console.log(5 === "5"); // false

/*
===========================================================
17. TRUTHY E FALSY
===========================================================

Falsy:
- false
- 0
- ""
- null
- undefined
- NaN
*/

if ("") {
  console.log("Verdadeiro");
} else {
  console.log("Falsy");
}

/*
===========================================================
18. CONVERSÃO EXPLÍCITA
===========================================================
*/

let numeroString = "123";
let convertidoNumero = Number(numeroString);

let texto = String(100);
let booleano = Boolean(1);

console.log(typeof convertidoNumero); // number
console.log(typeof texto); // string
console.log(typeof booleano); // boolean

/*
===========================================================
19. COMPARAÇÃO SEGURA
===========================================================

Sempre prefira === ao invés de ==
*/

console.log(0 == false); // true (coerção)
console.log(0 === false); // false (correto)

/*
===========================================================
RESUMO FINAL
===========================================================

✔ JS tem 7 tipos primitivos
✔ Objetos são tipo de referência
✔ typeof tem armadilhas
✔ Prefira ===
✔ Entenda coerção
✔ Primitivos copiam valor
✔ Objetos copiam referência

===========================================================
*/
