# Organização de Arquivos CSS

Autor: Jorge Simões  
Repositório: dev-studies  
Diretório: css/05-boas-praticas

---

# Introdução

Em projetos pequenos é comum ter apenas um arquivo CSS.

Porém, conforme o projeto cresce, um único arquivo se torna difícil de manter.

Problemas comuns de projetos sem organização:

- arquivos CSS gigantes
- estilos duplicados
- dificuldade para encontrar regras
- conflitos entre componentes
- manutenção difícil

Por isso, projetos profissionais organizam o CSS em múltiplos arquivos e pastas.

Isso melhora:

- organização
- manutenção
- escalabilidade
- colaboração em equipe

---

# Estrutura básica de organização

Uma estrutura comum para CSS em projetos modernos é:

```
css/
│
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── variables.css
│
├── layout/
│   ├── grid.css
│   ├── header.css
│   └── footer.css
│
├── components/
│   ├── buttons.css
│   ├── cards.css
│   └── forms.css
│
├── pages/
│   ├── home.css
│   └── dashboard.css
│
├── utilities/
│   └── helpers.css
│
└── main.css
```

Cada pasta possui uma responsabilidade específica.

---

# 1. Base

A pasta **base** contém estilos fundamentais da aplicação.

Ela define padrões globais.

Exemplos:

```
base/
reset.css
typography.css
variables.css
```

---

## reset.css

Remove estilos padrão do navegador.

Exemplo:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## typography.css

Define estilos de texto globais.

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

h1,
h2,
h3 {
  font-weight: bold;
}
```

---

## variables.css

Define variáveis reutilizáveis.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;

  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
}
```

---

# 2. Layout

A pasta **layout** contém estilos estruturais da página.

Responsável por:

- grid
- containers
- header
- footer
- sidebar

Exemplo:

```
layout/
header.css
footer.css
grid.css
```

---

Exemplo de header:

```css
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
```

---

# 3. Components

Componentes são partes reutilizáveis da interface.

Exemplos:

- botões
- cards
- modais
- formulários
- navbar

Estrutura:

```
components/
buttons.css
cards.css
forms.css
modal.css
```

Exemplo:

```css
.button {
  padding: 10px 20px;
  border-radius: 6px;
}

.button--primary {
  background: blue;
  color: white;
}
```

---

# 4. Pages

Alguns estilos são específicos de determinadas páginas.

Esses estilos podem ficar na pasta **pages**.

Exemplo:

```
pages/
home.css
dashboard.css
profile.css
```

Exemplo:

```css
.home-hero {
  height: 80vh;
  background: url(hero.jpg);
}
```

---

# 5. Utilities

Utilities são classes pequenas que resolvem tarefas específicas.

Exemplo:

```
utilities/
helpers.css
```

Exemplo de utilitários:

```css
.text-center {
  text-align: center;
}

.mt-20 {
  margin-top: 20px;
}

.hidden {
  display: none;
}
```

Essas classes ajudam a evitar duplicação.

---

# 6. Arquivo principal (main.css)

O arquivo principal importa todos os outros arquivos.

Exemplo:

```css
@import "base/reset.css";
@import "base/variables.css";
@import "base/typography.css";

@import "layout/header.css";
@import "layout/footer.css";

@import "components/buttons.css";
@import "components/cards.css";

@import "pages/home.css";

@import "utilities/helpers.css";
```

Esse arquivo centraliza os estilos.

---

# Organização em projetos pequenos

Em projetos pequenos a estrutura pode ser mais simples.

Exemplo:

```
css/
│
├── base.css
├── layout.css
├── components.css
└── main.css
```

---

# Organização em projetos grandes

Projetos maiores geralmente possuem arquitetura mais robusta.

Exemplo:

```
css/
│
├── abstracts/
├── base/
├── layout/
├── components/
├── pages/
├── themes/
├── utilities/
│
└── main.css
```

Essa organização é conhecida como **arquitetura CSS escalável**.

---

# Boas práticas na organização

## 1. Separe responsabilidades

Cada arquivo deve ter uma função específica.

## 2. Evite arquivos gigantes

Arquivos muito grandes são difíceis de manter.

## 3. Use nomes claros

Evite nomes genéricos como:

```
style.css
design.css
```

Prefira nomes descritivos:

```
buttons.css
cards.css
header.css
```

## 4. Agrupe por funcionalidade

Arquivos devem refletir partes da interface.

## 5. Use variáveis globais

Isso mantém consistência de cores, espaçamento e tipografia.

---

# Vantagens de organizar CSS

Organizar arquivos CSS traz muitos benefícios:

- código mais limpo
- manutenção mais fácil
- melhor colaboração em equipe
- menor risco de conflitos
- maior escalabilidade

Projetos profissionais quase sempre seguem alguma estrutura de organização.

---

# Conclusão

Organizar arquivos CSS é essencial para projetos profissionais.

Separar estilos por responsabilidade ajuda a:

- manter o código limpo
- encontrar estilos rapidamente
- escalar projetos maiores
- reduzir bugs

Mesmo em projetos pequenos, começar com uma boa organização facilita o crescimento do projeto no futuro.

---

# Referências

MDN Web Docs  
CSS Architecture Guides  
Frontend Best Practices
