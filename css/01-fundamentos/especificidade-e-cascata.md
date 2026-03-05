# Especificidade e Cascata no CSS

Autor: Jorge Simões

---

# 1. Introdução

O CSS funciona com base em dois conceitos fundamentais:

- Cascata (Cascade)
- Especificidade (Specificity)

Esses mecanismos determinam **qual regra CSS será aplicada quando múltiplas regras tentam estilizar o mesmo elemento**.

Entender isso é essencial para evitar problemas comuns como:

- estilos que não aplicam
- conflitos entre seletores
- uso desnecessário de !important

---

# 2. A Cascata no CSS

A palavra **cascade** significa **"cascata"** ou **"ordem de prioridade"**.

Quando duas ou mais regras CSS tentam aplicar estilos ao mesmo elemento, o navegador decide qual usar com base em **3 critérios principais**:

1. Origem da regra
2. Especificidade
3. Ordem de declaração

---

# 3. Ordem de prioridade da cascata

A prioridade das regras CSS segue esta ordem (do mais forte para o mais fraco):

1️⃣ !important  
2️⃣ Estilos inline  
3️⃣ Seletores com maior especificidade  
4️⃣ Ordem no arquivo (última regra vence)

---

# 4. Exemplo de cascata

```css
p {
  color: blue;
}

p {
  color: red;
}
```

Resultado:

```
Texto vermelho
```

Porque **a segunda regra aparece depois no arquivo**.

---

# 5. O que é Especificidade

A **especificidade** define **qual seletor é mais forte**.

Quanto mais específico o seletor, maior sua prioridade.

Exemplo:

```css
p {
  color: blue;
}

.texto {
  color: green;
}

#titulo {
  color: red;
}
```

HTML:

```html
<p id="titulo" class="texto">Olá mundo</p>
```

Resultado:

```
Texto vermelho
```

Porque **ID tem maior especificidade que classe e elemento**.

---

# 6. Hierarquia de especificidade

A força dos seletores segue esta ordem:

| Tipo de seletor                   | Peso |
| --------------------------------- | ---- |
| Inline style                      | 1000 |
| ID                                | 100  |
| Classe / atributo / pseudo-classe | 10   |
| Elemento / pseudo-elemento        | 1    |

---

# 7. Como calcular a especificidade

A especificidade é representada por **quatro níveis**:

```
Inline, ID, Classe, Elemento
```

Exemplo:

```css
#menu .item a {
  color: red;
}
```

Cálculo:

```
ID = 1
Classe = 1
Elemento = 1
```

Resultado:

```
0,1,1,1
```

---

# 8. Exemplos de cálculo

### Exemplo 1

```css
p
```

Especificidade:

```
0,0,0,1
```

---

### Exemplo 2

```css
.container p
```

```
Classe = 1
Elemento = 1
```

Resultado:

```
0,0,1,1
```

---

### Exemplo 3

```css
#header .menu li a
```

```
ID = 1
Classe = 1
Elemento = 2
```

Resultado:

```
0,1,1,2
```

---

# 9. Comparando especificidade

CSS compara **da esquerda para direita**.

Exemplo:

| Seletor | Especificidade |
| ------- | -------------- |
| p       | 0,0,0,1        |
| .classe | 0,0,1,0        |
| #id     | 0,1,0,0        |

Resultado:

```
#id vence
```

---

# 10. Quando a especificidade é igual

Se dois seletores possuem a **mesma especificidade**, o navegador aplica **a última regra escrita**.

Exemplo:

```css
p {
  color: blue;
}

p {
  color: red;
}
```

Resultado:

```
red
```

---

# 11. O que é !important

`!important` força a aplicação da regra.

```css
p {
  color: red !important;
}
```

Ele **ignora a especificidade normal**.

---

# 12. Problemas do !important

O uso excessivo de `!important` causa:

- CSS difícil de manter
- conflitos de estilo
- dificuldade de sobrescrever regras

Boa prática:

❌ Evitar sempre que possível.

---

# 13. Estilos inline

Estilos aplicados diretamente no HTML possuem alta prioridade.

```html
<p style="color:red;">Texto</p>
```

Eles têm especificidade equivalente a:

```
1,0,0,0
```

---

# 14. Ordem de carregamento dos arquivos CSS

Se houver vários arquivos CSS:

```html
<link rel="stylesheet" href="base.css" />
<link rel="stylesheet" href="layout.css" />
```

O arquivo **carregado por último tem prioridade**.

---

# 15. Pseudo-classes e especificidade

Pseudo-classes contam como **classe**.

Exemplo:

```css
a: hover;
```

Especificidade:

```
0,0,1,1
```

---

# 16. Pseudo-elementos

Pseudo-elementos contam como **elementos**.

Exemplo:

```css
p::before
```

Especificidade:

```
0,0,0,2
```

---

# 17. Seletores combinados

Exemplo:

```css
ul.menu li a
```

Cálculo:

```
Elemento = 3
Classe = 1
```

Resultado:

```
0,0,1,3
```

---

# 18. Ferramentas para analisar especificidade

Ferramentas úteis:

- DevTools do navegador
- calculadoras online de especificidade
- extensões CSS analyzers

No **Chrome DevTools** é possível ver exatamente qual regra venceu.

---

# 19. Boas práticas

✔ Preferir **classes ao invés de IDs**  
✔ Evitar seletores muito complexos  
✔ Evitar `!important`  
✔ Manter CSS organizado  
✔ Utilizar arquitetura CSS

Exemplo recomendado:

```css
.card-title {
  font-size: 20px;
}
```

---

# 20. Arquiteturas CSS que ajudam

Boas metodologias:

- BEM
- SMACSS
- ITCSS
- Utility CSS

Elas evitam conflitos de especificidade.

---

# 21. Resumo

Cascata decide estilos usando:

1️⃣ prioridade da origem  
2️⃣ especificidade do seletor  
3️⃣ ordem das regras

Hierarquia simplificada:

```
!important
inline
ID
classe
elemento
ordem no código
```

---

# 22. Conclusão

Compreender **cascata e especificidade** permite:

- escrever CSS previsível
- evitar conflitos
- construir estilos escaláveis
- manter projetos grandes organizados

Esses conceitos são a base de qualquer **arquitetura CSS moderna**.
