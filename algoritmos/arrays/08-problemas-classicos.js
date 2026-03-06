/**
 * ==========================================================
 * 08 - PROBLEMAS CLÁSSICOS COM ARRAYS
 * Repositório: dev-studies
 * Autor: Jorge Simões
 * ==========================================================
 *
 * Neste arquivo vamos estudar problemas clássicos com arrays,
 * muito comuns em lógica de programação, entrevistas técnicas
 * e plataformas como LeetCode.
 *
 * Problemas abordados:
 *
 * - Somar todos os elementos
 * - Encontrar o maior e o menor valor
 * - Contar elementos com condição
 * - Inverter um array
 * - Remover duplicados
 * - Encontrar o segundo maior valor
 * - Separar pares e ímpares
 * - Contar frequência de elementos
 * - Verificar se um array está ordenado
 * - Juntar e comparar arrays
 *
 * A ideia aqui é treinar raciocínio algorítmico usando
 * estruturas simples e bem explicadas.
 */

/* ==========================================================
   1. SOMAR TODOS OS ELEMENTOS
   ========================================================== */

function somarElementos(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma;
}

const numerosSoma = [10, 20, 30, 40];

console.log("1. Somar elementos:");
console.log(somarElementos(numerosSoma));

/* ==========================================================
   2. ENCONTRAR O MAIOR VALOR
   ========================================================== */

function encontrarMaior(array) {
  let maior = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  return maior;
}

const numerosMaior = [8, 15, 3, 22, 10];

console.log("\n2. Maior valor:");
console.log(encontrarMaior(numerosMaior));

/* ==========================================================
   3. ENCONTRAR O MENOR VALOR
   ========================================================== */

function encontrarMenor(array) {
  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }

  return menor;
}

const numerosMenor = [8, 15, 3, 22, 10];

console.log("\n3. Menor valor:");
console.log(encontrarMenor(numerosMenor));

/* ==========================================================
   4. CONTAR QUANTOS NÚMEROS SÃO PARES
   ========================================================== */

function contarPares(array) {
  let contador = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      contador++;
    }
  }

  return contador;
}

const numerosPares = [1, 2, 3, 4, 5, 6, 8];

console.log("\n4. Quantidade de pares:");
console.log(contarPares(numerosPares));

/* ==========================================================
   5. INVERTER UM ARRAY
   ========================================================== */

function inverterArray(array) {
  const invertido = [];

  for (let i = array.length - 1; i >= 0; i--) {
    invertido.push(array[i]);
  }

  return invertido;
}

const numerosInvertidos = [1, 2, 3, 4, 5];

console.log("\n5. Inverter array:");
console.log(inverterArray(numerosInvertidos));

/* ==========================================================
   6. REMOVER DUPLICADOS
   ========================================================== */

/*
Usando Set:
- Set não permite valores duplicados
*/

function removerDuplicados(array) {
  return [...new Set(array)];
}

const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5, 5, 5];

console.log("\n6. Remover duplicados:");
console.log(removerDuplicados(numerosDuplicados));

/* ==========================================================
   7. REMOVER DUPLICADOS MANUALMENTE
   ========================================================== */

function removerDuplicadosManual(array) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (!resultado.includes(array[i])) {
      resultado.push(array[i]);
    }
  }

  return resultado;
}

console.log("\n7. Remover duplicados manualmente:");
console.log(removerDuplicadosManual(numerosDuplicados));

/* ==========================================================
   8. ENCONTRAR O SEGUNDO MAIOR VALOR
   ========================================================== */

function segundoMaior(array) {
  const semDuplicados = [...new Set(array)];

  if (semDuplicados.length < 2) {
    return null;
  }

  semDuplicados.sort((a, b) => b - a);

  return semDuplicados[1];
}

const numerosSegundoMaior = [10, 5, 8, 20, 20, 15];

console.log("\n8. Segundo maior valor:");
console.log(segundoMaior(numerosSegundoMaior));

/* ==========================================================
   9. SEPARAR PARES E ÍMPARES
   ========================================================== */

function separarParesImpares(array) {
  const pares = [];
  const impares = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    } else {
      impares.push(array[i]);
    }
  }

  return { pares, impares };
}

const numerosSeparar = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("\n9. Separar pares e ímpares:");
console.log(separarParesImpares(numerosSeparar));

/* ==========================================================
   10. CONTAR QUANTAS VEZES UM VALOR APARECE
   ========================================================== */

function contarOcorrencias(array, valor) {
  let contador = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      contador++;
    }
  }

  return contador;
}

const numerosOcorrencias = [2, 4, 2, 6, 2, 8, 4];

console.log("\n10. Contar ocorrências:");
console.log(contarOcorrencias(numerosOcorrencias, 2));

/* ==========================================================
   11. CONTAR FREQUÊNCIA DE TODOS OS ELEMENTOS
   ========================================================== */

function frequenciaElementos(array) {
  const frequencia = {};

  for (let i = 0; i < array.length; i++) {
    const valor = array[i];

    if (frequencia[valor]) {
      frequencia[valor]++;
    } else {
      frequencia[valor] = 1;
    }
  }

  return frequencia;
}

const numerosFrequencia = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

console.log("\n11. Frequência dos elementos:");
console.log(frequenciaElementos(numerosFrequencia));

/* ==========================================================
   12. VERIFICAR SE UM ARRAY ESTÁ ORDENADO
   ========================================================== */

function estaOrdenado(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log("\n12. Verificar se está ordenado:");
console.log(estaOrdenado([1, 2, 3, 4, 5]));
console.log(estaOrdenado([1, 3, 2, 4, 5]));

/* ==========================================================
   13. JUNTAR DOIS ARRAYS
   ========================================================== */

function juntarArrays(array1, array2) {
  return [...array1, ...array2];
}

console.log("\n13. Juntar arrays:");
console.log(juntarArrays([1, 2, 3], [4, 5, 6]));

/* ==========================================================
   14. INTERSEÇÃO ENTRE DOIS ARRAYS
   ========================================================== */

/*
Interseção = valores que existem nos dois arrays
*/

function intersecaoArrays(array1, array2) {
  const resultado = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !resultado.includes(array1[i])) {
      resultado.push(array1[i]);
    }
  }

  return resultado;
}

console.log("\n14. Interseção entre arrays:");
console.log(intersecaoArrays([1, 2, 3, 4], [3, 4, 5, 6]));

/* ==========================================================
   15. DIFERENÇA ENTRE DOIS ARRAYS
   ========================================================== */

/*
Diferença = elementos que existem no primeiro array
mas não existem no segundo
*/

function diferencaArrays(array1, array2) {
  const resultado = [];

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      resultado.push(array1[i]);
    }
  }

  return resultado;
}

console.log("\n15. Diferença entre arrays:");
console.log(diferencaArrays([1, 2, 3, 4], [3, 4, 5, 6]));

/* ==========================================================
   16. ENCONTRAR O PRIMEIRO NÚMERO REPETIDO
   ========================================================== */

function primeiroRepetido(array) {
  const vistos = new Set();

  for (let i = 0; i < array.length; i++) {
    if (vistos.has(array[i])) {
      return array[i];
    }

    vistos.add(array[i]);
  }

  return null;
}

console.log("\n16. Primeiro número repetido:");
console.log(primeiroRepetido([4, 2, 7, 3, 2, 9, 7]));

/* ==========================================================
   17. ROTACIONAR ARRAY PARA A DIREITA
   ========================================================== */

/*
Exemplo:
[1, 2, 3, 4] -> [4, 1, 2, 3]
*/

function rotacionarDireita(array) {
  if (array.length === 0) {
    return [];
  }

  const copia = [...array];
  const ultimo = copia.pop();
  copia.unshift(ultimo);

  return copia;
}

console.log("\n17. Rotacionar para a direita:");
console.log(rotacionarDireita([1, 2, 3, 4]));

/* ==========================================================
   18. ROTACIONAR ARRAY N VEZES
   ========================================================== */

function rotacionarDireitaN(array, vezes) {
  if (array.length === 0) {
    return [];
  }

  let resultado = [...array];
  const rotacoes = vezes % array.length;

  for (let i = 0; i < rotacoes; i++) {
    const ultimo = resultado.pop();
    resultado.unshift(ultimo);
  }

  return resultado;
}

console.log("\n18. Rotacionar N vezes:");
console.log(rotacionarDireitaN([1, 2, 3, 4, 5], 2));

/* ==========================================================
   19. MAIOR SOMA CONTÍNUA SIMPLES
   ========================================================== */

/*
Versão didática:
testa todas as sublistas possíveis
Complexidade O(n²)
*/

function maiorSomaContinua(array) {
  let maiorSoma = array[0];

  for (let i = 0; i < array.length; i++) {
    let somaAtual = 0;

    for (let j = i; j < array.length; j++) {
      somaAtual += array[j];

      if (somaAtual > maiorSoma) {
        maiorSoma = somaAtual;
      }
    }
  }

  return maiorSoma;
}

console.log("\n19. Maior soma contínua:");
console.log(maiorSomaContinua([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/* ==========================================================
   20. COMPARAR SE DOIS ARRAYS SÃO IGUAIS
   ========================================================== */

function arraysIguais(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

console.log("\n20. Comparar arrays:");
console.log(arraysIguais([1, 2, 3], [1, 2, 3]));
console.log(arraysIguais([1, 2, 3], [1, 2, 4]));

/* ==========================================================
   21. RESUMO
   ========================================================== */

/*

Problemas clássicos com arrays geralmente envolvem:

- varredura completa do array
- comparação entre elementos
- uso de acumuladores
- uso de arrays auxiliares
- uso de objetos para frequência
- uso de Set para evitar duplicados

Conceitos importantes:
- soma
- maior/menor valor
- frequência
- busca
- remoção de duplicados
- rotação
- comparação
- verificação de ordenação

Esses exercícios ajudam muito no desenvolvimento do
raciocínio lógico e preparação para entrevistas.

*/
