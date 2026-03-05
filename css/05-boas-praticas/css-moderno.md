# CSS Moderno

Autor: Jorge Simões  
Repositório: dev-studies  
Diretório: css/05-boas-praticas

---

# Introdução

CSS moderno refere-se ao conjunto de técnicas, recursos e boas práticas atuais para construir interfaces responsivas, performáticas e escaláveis.

Com a evolução do CSS, muitas soluções que antes exigiam JavaScript ou bibliotecas externas agora podem ser feitas apenas com CSS.

Entre os principais recursos do CSS moderno estão:

- Flexbox
- CSS Grid
- Variáveis CSS
- Funções modernas
- Media queries avançadas
- Pseudo-classes modernas
- Container queries
- Novas unidades de medida
- Melhor controle de layout

Utilizar CSS moderno permite:

- escrever menos código
- criar layouts mais flexíveis
- melhorar performance
- facilitar manutenção

---

# 1. Variáveis CSS (Custom Properties)

Variáveis CSS permitem reutilizar valores e manter consistência.

Exemplo:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --border-radius: 8px;
}

.button {
  background: var(--primary-color);
  border-radius: var(--border-radius);
}
```

Vantagens:

- fácil manutenção
- consistência visual
- suporte a temas (dark mode)

---

# 2. Flexbox

Flexbox é um sistema moderno para layout unidimensional.

Permite alinhar elementos de forma simples.

Exemplo:

```css
.container {
  display: flex;

  justify-content: center;
  align-items: center;
}
```

Propriedades importantes:

| Propriedade     | Função                      |
| --------------- | --------------------------- |
| display:flex    | ativa flexbox               |
| flex-direction  | direção do eixo             |
| justify-content | alinhamento horizontal      |
| align-items     | alinhamento vertical        |
| gap             | espaçamento entre elementos |

---

# 3. CSS Grid

CSS Grid é um sistema de layout bidimensional.

Permite controlar linhas e colunas simultaneamente.

Exemplo:

```css
.grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}
```

Grid é ideal para:

- layouts complexos
- dashboards
- galerias
- páginas completas

---

# 4. Funções modernas do CSS

CSS moderno possui funções úteis para cálculos e layouts.

### calc()

Permite cálculos dinâmicos.

```css
.container {
  width: calc(100% - 40px);
}
```

---

### clamp()

Define limites mínimo, ideal e máximo.

Muito usado para tipografia responsiva.

```css
h1 {
  font-size: clamp(1.5rem, 3vw, 3rem);
}
```

---

### min() e max()

Permitem definir valores mínimos ou máximos.

```css
.box {
  width: min(500px, 90%);
}
```

---

# 5. Unidades modernas

CSS moderno utiliza unidades mais flexíveis.

| Unidade | Descrição                  |
| ------- | -------------------------- |
| rem     | relativo ao root           |
| vw      | largura da viewport        |
| vh      | altura da viewport         |
| vmin    | menor dimensão da viewport |
| vmax    | maior dimensão da viewport |

Exemplo:

```css
.hero {
  height: 100vh;
}
```

---

# 6. Pseudo-classes modernas

Pseudo-classes permitem estilizar elementos com base em estado ou posição.

### :is()

Simplifica seletores complexos.

```css
:is(h1, h2, h3) {
  color: black;
}
```

---

### :where()

Similar ao `:is()` mas sem aumentar especificidade.

```css
:where(nav a) {
  text-decoration: none;
}
```

---

### :not()

Seleciona elementos que não correspondem a um seletor.

```css
button:not(.primary) {
  background: gray;
}
```

---

# 7. Media Queries modernas

Media queries permitem criar layouts responsivos.

Exemplo:

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

CSS moderno também permite consultas mais específicas.

```css
@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
}
```

Outras media queries úteis:

| Media Query            | Uso                             |
| ---------------------- | ------------------------------- |
| prefers-reduced-motion | acessibilidade                  |
| prefers-color-scheme   | dark mode                       |
| hover                  | detectar dispositivos com hover |

---

# 8. Container Queries

Container Queries permitem adaptar estilos com base no tamanho do container.

Exemplo:

```css
.card-container {
  container-type: inline-size;
}

@container (max-width: 400px) {
  .card {
    flex-direction: column;
  }
}
```

Isso permite layouts mais inteligentes.

---

# 9. Aspect Ratio

A propriedade `aspect-ratio` facilita manter proporções.

Exemplo:

```css
.video {
  aspect-ratio: 16 / 9;
}
```

Muito útil para:

- vídeos
- imagens
- cards

---

# 10. Scroll behavior

CSS moderno permite controle do scroll.

```css
html {
  scroll-behavior: smooth;
}
```

Isso cria rolagem suave em links âncora.

---

# 11. Object-fit

Permite controlar como imagens se ajustam ao container.

```css
img {
  width: 100%;
  height: 300px;

  object-fit: cover;
}
```

Valores comuns:

- cover
- contain
- fill
- scale-down

---

# 12. Gap universal

Antes o `gap` era exclusivo do Grid.

Hoje funciona também com Flexbox.

```css
.container {
  display: flex;

  gap: 20px;
}
```

Isso elimina a necessidade de margens artificiais.

---

# 13. Backdrop filter

Permite criar efeitos de vidro (glassmorphism).

```css
.card {
  backdrop-filter: blur(10px);
}
```

Muito usado em interfaces modernas.

---

# 14. Logical Properties

Permitem layouts compatíveis com diferentes direções de escrita.

Exemplo:

```css
.box {
  margin-inline: 20px;
  padding-block: 10px;
}
```

Isso funciona melhor para idiomas RTL.

---

# 15. Dark Mode

CSS moderno permite temas escuros automaticamente.

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #111;
    color: white;
  }
}
```

Isso melhora a experiência do usuário.

---

# 16. Performance no CSS moderno

Algumas práticas melhoram performance:

Prefira animar:

- transform
- opacity

Evite animar frequentemente:

- width
- height
- margin
- top
- left

Isso evita recalcular layout.

---

# Conclusão

CSS moderno tornou o desenvolvimento de interfaces muito mais poderoso.

Hoje é possível criar layouts complexos e responsivos apenas com CSS.

Principais pilares do CSS moderno:

- Flexbox
- Grid
- Variáveis CSS
- Funções modernas
- Media queries avançadas
- Container queries
- novas unidades

Dominar esses recursos permite criar interfaces profissionais com menos código e maior performance.

---

# Referências

MDN Web Docs  
CSS Tricks  
Modern CSS Guide
