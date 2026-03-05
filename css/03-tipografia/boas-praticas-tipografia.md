# Boas Práticas de Tipografia no CSS

Autor: Jorge Simões  
Repositório: dev-studies  
Diretório: css/03-tipografia

---

# 1. Introdução

A tipografia é um dos elementos mais importantes do design de interfaces.  
Uma boa tipografia melhora:

- legibilidade
- hierarquia visual
- experiência do usuário
- estética do layout

No CSS, diversas propriedades controlam a tipografia, como:

- font-family
- font-size
- line-height
- letter-spacing
- font-weight
- text-align

Aplicar boas práticas tipográficas torna a interface mais profissional e fácil de ler.

---

# 2. Escolha adequada de fontes

Prefira fontes legíveis para interfaces digitais.

Fontes comuns para web:

### Sans-serif (mais usadas em interfaces)

- Arial
- Helvetica
- Roboto
- Open Sans
- Inter

Exemplo:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

---

# 3. Use fallback de fontes

Sempre declare múltiplas fontes para garantir compatibilidade.

```css
body {
  font-family: "Inter", "Roboto", Arial, sans-serif;
}
```

Se a primeira fonte não estiver disponível, o navegador usa a próxima.

---

# 4. Prefira unidades relativas

Evite usar `px` para tipografia sempre que possível.

Prefira:

- `rem`
- `em`
- `vw` (em alguns casos)

Exemplo recomendado:

```css
body {
  font-size: 1rem;
}

h1 {
  font-size: 2.5rem;
}
```

Isso facilita escalabilidade e acessibilidade.

---

# 5. Hierarquia tipográfica

Uma interface deve possuir níveis claros de leitura.

Exemplo de hierarquia comum:

```css
h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
}
```

Isso ajuda o usuário a identificar rapidamente:

- títulos
- subtítulos
- conteúdo

---

# 6. Line-height adequado

O espaçamento entre linhas melhora a legibilidade.

Boa prática:

```css
body {
  line-height: 1.5;
}
```

Valores comuns:

| Tipo de texto  | Line-height |
| -------------- | ----------- |
| Corpo do texto | 1.5 – 1.7   |
| Títulos        | 1.2 – 1.3   |

---

# 7. Comprimento ideal de linha

Linhas muito longas dificultam a leitura.

O ideal é entre:

**50 a 75 caracteres por linha**

Podemos controlar isso com `max-width`.

```css
p {
  max-width: 65ch;
}
```

A unidade `ch` representa a largura do caractere "0".

---

# 8. Espaçamento entre letras

Podemos ajustar o espaço entre letras usando:

```css
letter-spacing
```

Exemplo:

```css
h1 {
  letter-spacing: 1px;
}
```

Boa prática:

- títulos podem ter leve espaçamento
- textos longos devem usar espaçamento mínimo

---

# 9. Espaçamento entre palavras

Propriedade:

```css
word-spacing
```

Exemplo:

```css
p {
  word-spacing: 2px;
}
```

Deve ser usado com cuidado para não prejudicar a leitura.

---

# 10. Alinhamento do texto

Principais valores:

| Valor   | Uso                              |
| ------- | -------------------------------- |
| left    | padrão e mais legível            |
| center  | títulos ou elementos curtos      |
| right   | raramente usado                  |
| justify | pode criar espaçamento irregular |

Exemplo:

```css
p {
  text-align: left;
}
```

Boa prática:

- textos longos → `left`
- títulos → `center` ou `left`

---

# 11. Controle de quebra de texto

Propriedades importantes:

```css
word-break
overflow-wrap
```

Exemplo:

```css
p {
  overflow-wrap: break-word;
}
```

Isso evita que palavras longas quebrem o layout.

---

# 12. Tipografia responsiva

A tipografia deve se adaptar ao tamanho da tela.

Podemos usar `clamp()`.

```css
h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
}
```

Explicação:

```
clamp(min, ideal, max)
```

Isso cria tipografia fluida.

---

# 13. Contraste e legibilidade

Texto precisa ter contraste adequado com o fundo.

Exemplo:

```css
body {
  color: #222;
  background: #ffffff;
}
```

Evite:

- texto claro em fundo claro
- texto escuro em fundo escuro

---

# 14. Use poucas fontes

Boa prática:

- 1 fonte principal
- 1 fonte secundária

Evite usar muitas fontes diferentes.

Exemplo:

```css
body {
  font-family: "Inter", sans-serif;
}

h1,
h2,
h3 {
  font-family: "Roboto", sans-serif;
}
```

---

# 15. Tipografia consistente

Mantenha padrões consistentes no projeto:

- tamanhos
- pesos
- espaçamento
- cores

Exemplo:

```css
:root {
  --font-base: 1rem;
  --font-large: 1.5rem;
  --font-title: 2rem;
}
```

---

# 16. Peso da fonte (font-weight)

Define a espessura da fonte.

Valores comuns:

| Peso | Uso       |
| ---- | --------- |
| 400  | normal    |
| 500  | médio     |
| 600  | semi-bold |
| 700  | bold      |

Exemplo:

```css
h1 {
  font-weight: 700;
}
```

---

# 17. Transformação de texto

Propriedade:

```css
text-transform
```

Valores:

- uppercase
- lowercase
- capitalize

Exemplo:

```css
h2 {
  text-transform: uppercase;
}
```

Use com moderação.

---

# 18. Espaçamento entre parágrafos

Parágrafos precisam de espaço para melhorar a leitura.

```css
p {
  margin-bottom: 1rem;
}
```

Isso cria separação visual entre blocos de texto.

---

# 19. Use unidades modernas

Evite valores fixos quando possível.

Prefira:

- rem
- em
- ch
- vw

Isso ajuda a criar layouts mais acessíveis e adaptáveis.

---

# 20. Resumo das boas práticas

✔ Use fontes legíveis  
✔ Prefira unidades relativas (`rem`)  
✔ Use line-height adequado  
✔ Limite o comprimento da linha (`ch`)  
✔ Crie hierarquia tipográfica  
✔ Use tipografia responsiva  
✔ Mantenha contraste adequado  
✔ Use poucas fontes  
✔ Mantenha consistência visual

---

# Conclusão

Uma boa tipografia melhora significativamente a experiência do usuário.

No desenvolvimento front-end, dominar tipografia significa entender:

- legibilidade
- hierarquia visual
- responsividade
- consistência de design

Esses princípios são essenciais para construir interfaces modernas e profissionais.
