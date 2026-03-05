# Clean Code em CSS

Autor: Jorge Simões  
Repositório: dev-studies  
Diretório: css/05-boas-praticas

---

# Introdução

Clean Code significa escrever código que seja:

- fácil de ler
- fácil de entender
- fácil de manter
- fácil de escalar

No CSS isso significa evitar:

- seletores complexos
- duplicação de código
- regras difíceis de sobrescrever
- estilos desorganizados

E priorizar:

- simplicidade
- consistência
- previsibilidade
- organização

Um CSS limpo facilita o trabalho em equipe e reduz bugs.

---

# 1. Use nomes de classes claros

Classes devem indicar **o significado do elemento**, não sua aparência.

❌ Ruim

```css
.vermelho {
  color: red;
}
```

Esse nome descreve aparência, não função.

---

✅ Bom

```css
.error-message {
  color: red;
}
```

Agora a classe indica **o propósito do elemento**.

---

# 2. Prefira classes ao invés de IDs

IDs possuem **alta especificidade**, o que dificulta sobrescrever estilos.

❌ Ruim

```css
#header {
  background: black;
}
```

---

✅ Melhor

```css
.header {
  background: black;
}
```

Classes são mais reutilizáveis e flexíveis.

---

# 3. Evite seletores muito complexos

Seletores profundos tornam o CSS frágil.

❌ Ruim

```css
header nav ul li a span {
  color: blue;
}
```

Problemas:

- alta especificidade
- difícil manutenção
- dependência da estrutura HTML

---

✅ Melhor

```css
.nav-link {
  color: blue;
}
```

---

# 4. Evite usar !important

`!important` quebra a lógica da cascata do CSS.

❌ Ruim

```css
button {
  background: blue !important;
}
```

---

✅ Melhor

```css
.button-primary {
  background: blue;
}
```

Uma boa organização de classes elimina a necessidade de `!important`.

---

# 5. Use espaçamento consistente

Código sem formatação é difícil de ler.

❌ Ruim

```css
.card {
  padding: 20px;
  background: white;
  color: black;
}
```

---

✅ Bom

```css
.card {
  padding: 20px;
  background: white;
  color: black;
}
```

Boas práticas:

- uma propriedade por linha
- indentação consistente
- espaço entre blocos

---

# 6. Agrupe propriedades relacionadas

Agrupar propriedades melhora a leitura.

❌ Ruim

```css
.card {
  margin: 20px;
  color: black;
  padding: 20px;
  background: white;
}
```

---

✅ Melhor

```css
.card {
  /* layout */
  margin: 20px;
  padding: 20px;

  /* aparência */
  background: white;
  color: black;
}
```

---

# 7. Evite duplicação de código

Duplicação aumenta manutenção.

❌ Ruim

```css
.button-primary {
  padding: 10px;
  border-radius: 5px;
}

.button-secondary {
  padding: 10px;
  border-radius: 5px;
}
```

---

✅ Melhor

```css
.button {
  padding: 10px;
  border-radius: 5px;
}

.button-primary {
  background: blue;
}

.button-secondary {
  background: gray;
}
```

---

# 8. Mantenha especificidade baixa

Alta especificidade torna o CSS difícil de sobrescrever.

❌ Ruim

```css
main article h2 {
  color: black;
}
```

---

✅ Melhor

```css
.article-title {
  color: black;
}
```

Classes mantêm o CSS previsível.

---

# 9. Use variáveis CSS

Variáveis ajudam na manutenção e consistência.

```css
:root {
  --primary-color: #3498db;
  --border-radius: 8px;
}

.button {
  background: var(--primary-color);
  border-radius: var(--border-radius);
}
```

Vantagens:

- manutenção centralizada
- consistência visual
- fácil alteração de tema

---

# 10. Organize o CSS por seções

Arquivos grandes precisam de estrutura.

Exemplo:

```css
/* ====================
RESET
==================== */

/* ====================
BASE
==================== */

/* ====================
LAYOUT
==================== */

/* ====================
COMPONENTS
==================== */

/* ====================
UTILITIES
==================== */
```

Isso melhora a navegação dentro do arquivo.

---

# 11. Prefira transform e opacity para animações

Essas propriedades são mais performáticas.

❌ Ruim

```css
.box {
  transition: left 0.3s;
}
```

---

✅ Melhor

```css
.box {
  transition: transform 0.3s;
}

.box:hover {
  transform: translateX(10px);
}
```

Isso evita recalcular layout.

---

# 12. Use nomenclatura consistente

Misturar padrões gera confusão.

❌ Ruim

```css
.menuItem {
}
.menu_item {
}
.menu-item {
}
```

---

✅ Melhor

Escolher um padrão.

Um dos mais usados é **kebab-case**.

```css
.menu-item {
}
.menu-link {
}
.menu-button {
}
```

---

# 13. Separe layout de aparência

Evite misturar responsabilidades.

❌ Ruim

```css
.card {
  display: flex;
  color: red;
}
```

---

✅ Melhor

```css
.card-layout {
  display: flex;
}

.card-error {
  color: red;
}
```

---

# 14. Comente partes importantes

Comentários ajudam outros desenvolvedores.

```css
/* Card principal da página de produtos */

.product-card {
  padding: 20px;
}
```

Evite comentários óbvios como:

```css
/* cor azul */
color: blue;
```

---

# 15. Crie componentes reutilizáveis

Componentização reduz repetição.

```css
.button {
  padding: 10px 20px;
  border-radius: 8px;
}

.button-primary {
  background: blue;
}

.button-danger {
  background: red;
}
```

Assim o CSS escala melhor.

---

# 16. Use utilitários com cuidado

Classes utilitárias podem ajudar em alguns casos.

```css
.text-center {
  text-align: center;
}

.mt-20 {
  margin-top: 20px;
}
```

Mas evite exagerar.

---

# 17. Organize arquivos CSS

Em projetos maiores é ideal separar CSS.

Exemplo:

```
css/
│
├── base/
│   ├── reset.css
│   └── typography.css
│
├── layout/
│   ├── header.css
│   └── grid.css
│
├── components/
│   ├── buttons.css
│   └── cards.css
│
└── utilities/
    └── helpers.css
```

Isso melhora escalabilidade.

---

# 18. Mantenha consistência visual

Defina padrões para:

- cores
- espaçamento
- tipografia
- bordas
- sombras

Exemplo:

```css
:root {
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
}
```

---

# Conclusão

CSS limpo não é apenas estética — é **manutenibilidade**.

Seguindo boas práticas você terá:

- código mais legível
- menos bugs
- manutenção mais fácil
- projetos mais escaláveis

Clean CSS é essencial para projetos profissionais.

---

# Referências

- CSS Guidelines
- MDN Web Docs
- Clean Code Principles
