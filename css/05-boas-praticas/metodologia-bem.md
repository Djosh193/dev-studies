# Metodologia BEM (Block, Element, Modifier)

Autor: Jorge Simões  
Repositório: dev-studies  
Diretório: css/05-boas-praticas

---

# Introdução

BEM (Block, Element, Modifier) é uma metodologia de nomenclatura para CSS criada para facilitar:

- organização do código
- reutilização de componentes
- escalabilidade de projetos
- manutenção do CSS

A ideia principal do BEM é criar **classes previsíveis e sem dependência da estrutura do HTML**.

Isso ajuda a evitar problemas comuns como:

- alta especificidade
- conflitos de CSS
- dificuldade para sobrescrever estilos

---

# Estrutura do BEM

A metodologia BEM é composta por três partes principais:

| Parte    | Significado                   |
| -------- | ----------------------------- |
| Block    | Componente independente       |
| Element  | Parte interna do bloco        |
| Modifier | Variação do bloco ou elemento |

---

# 1. Block (Bloco)

O **Block** representa um componente independente da interface.

Exemplos de blocos:

- menu
- card
- button
- navbar
- form

Exemplo:

```css
.card {
  padding: 20px;
  border-radius: 8px;
  background: white;
}
```

O bloco deve funcionar de forma independente.

---

# 2. Element (Elemento)

Elementos são **partes internas do bloco**.

Eles não fazem sentido fora do bloco.

A nomenclatura segue o padrão:

```
bloco__elemento
```

Exemplo:

```css
.card__title {
  font-size: 20px;
}

.card__description {
  color: gray;
}
```

Exemplo em HTML:

```html
<div class="card">
  <h2 class="card__title">Título</h2>

  <p class="card__description">Descrição do card</p>
</div>
```

---

# 3. Modifier (Modificador)

Modifiers representam **variações de um bloco ou elemento**.

A nomenclatura segue o padrão:

```
bloco--modificador
```

ou

```
bloco__elemento--modificador
```

Exemplo:

```css
.button {
  padding: 10px 20px;
}

.button--primary {
  background: blue;
}

.button--danger {
  background: red;
}
```

Exemplo em HTML:

```html
<button class="button button--primary">Enviar</button>

<button class="button button--danger">Deletar</button>
```

---

# Exemplo completo de BEM

HTML:

```html
<div class="card card--featured">
  <img class="card__image" src="image.jpg" />

  <h2 class="card__title">Título do Card</h2>

  <p class="card__description">Descrição do conteúdo</p>

  <button class="card__button card__button--primary">Ler mais</button>
</div>
```

CSS:

```css
.card {
  padding: 20px;
  border-radius: 8px;
}

.card__title {
  font-size: 20px;
}

.card__description {
  color: gray;
}

.card__button {
  padding: 10px;
}

.card__button--primary {
  background: blue;
}

.card--featured {
  border: 2px solid gold;
}
```

---

# Regras importantes do BEM

## 1. Não usar seletores aninhados

❌ Evite:

```css
.card .title {
  font-size: 20px;
}
```

---

✅ Prefira:

```css
.card__title {
  font-size: 20px;
}
```

---

## 2. Evite dependência da estrutura HTML

❌ Ruim

```css
header nav ul li a {
  color: blue;
}
```

---

✅ Melhor

```css
.nav__link {
  color: blue;
}
```

---

## 3. Cada bloco deve ser independente

Blocos não devem depender de outros blocos.

❌ Evite

```css
.sidebar .card {
  background: gray;
}
```

---

✅ Melhor

```css
.card--sidebar {
  background: gray;
}
```

---

# Vantagens do BEM

A metodologia BEM oferece várias vantagens:

## 1. Código mais organizado

As classes seguem um padrão previsível.

## 2. Melhor manutenção

Fica fácil entender o papel de cada classe.

## 3. Redução de conflitos CSS

Evita conflitos entre componentes.

## 4. Reutilização de componentes

Blocos podem ser reutilizados em diferentes partes da aplicação.

## 5. Escalabilidade

Projetos grandes se beneficiam muito dessa estrutura.

---

# Comparação: CSS tradicional vs BEM

CSS tradicional:

```css
.menu ul li a {
  color: black;
}
```

Problemas:

- dependência da estrutura HTML
- difícil manutenção
- alta especificidade

---

CSS com BEM:

```css
.menu__link {
  color: black;
}
```

Vantagens:

- simples
- previsível
- reutilizável

---

# Quando usar BEM

BEM é especialmente útil em:

- projetos grandes
- equipes de desenvolvimento
- aplicações complexas
- sistemas de design

Em projetos pequenos pode parecer exagerado, mas ainda ajuda na organização.

---

# Boas práticas com BEM

- Use nomes claros
- Evite abreviações confusas
- Mantenha consistência
- Use blocos independentes
- Evite IDs
- Prefira classes

Exemplo de boa nomenclatura:

```css
.product-card
.product-card__image
.product-card__title
.product-card__price
.product-card--highlight
```

---

# Conclusão

A metodologia BEM é uma das formas mais populares de organizar CSS.

Ela ajuda a criar:

- código mais previsível
- estilos reutilizáveis
- projetos escaláveis
- CSS mais fácil de manter

Adotar BEM é um passo importante para escrever CSS profissional.

---

# Referências

BEM Official Documentation  
CSS Guidelines  
Frontend Architecture Best Practices
