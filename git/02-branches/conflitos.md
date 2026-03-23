# Conflitos no Git (Merge Conflicts)

## 📌 O que é um conflito no Git?

Um conflito acontece quando o Git não consegue decidir automaticamente qual alteração deve ser mantida.

Isso ocorre quando:

- Dois commits alteram a mesma linha
- Duas branches modificam o mesmo arquivo
- Você faz merge ou rebase com mudanças incompatíveis

Exemplo comum:

- branch main altera uma linha
- branch feature altera a mesma linha
- Git não sabe qual usar

Resultado → conflito

---

## 📌 Quando conflitos acontecem

Conflitos podem ocorrer em:

- merge
- rebase
- pull
- cherry-pick
- stash apply

Exemplo:

```
git merge feature
```

Se houver conflito, o Git mostra:

```
CONFLICT (content): Merge conflict in arquivo.txt
Automatic merge failed
```

---

## 📌 Como o conflito aparece no arquivo

O Git marca o conflito dentro do arquivo:

```
<<<<<<< HEAD
console.log("versão da main");
=======
console.log("versão da feature");
>>>>>>> feature
```

Significado:

- HEAD → branch atual
- ======= → separador
- feature → branch que está sendo unida

Você deve escolher qual código ficará.

Exemplo resolvido:

```
console.log("versão final");
```

Depois remover as marcações.

---

## 📌 Passo a passo para resolver conflito

### 1. Fazer merge

```
git merge feature
```

### 2. Ver arquivos com conflito

```
git status
```

### 3. Abrir o arquivo e corrigir

Remover:

```
<<<<<<<
=======
>>>>>>>
```

E deixar apenas o código correto.

### 4. Adicionar o arquivo corrigido

```
git add arquivo.txt
```

### 5. Finalizar merge

```
git commit
```

---

## 📌 Resolver conflito durante rebase

Durante rebase:

```
git rebase main
```

Se houver conflito:

```
CONFLICT
```

Passos:

1. Corrigir arquivo
2. adicionar
3. continuar rebase

```
git add arquivo.txt
git rebase --continue
```

Para cancelar:

```
git rebase --abort
```

---

## 📌 Resolver conflito durante pull

Se você fizer:

```
git pull
```

E houver conflito:

1. Corrigir arquivos
2. git add
3. git commit

Ou usar rebase:

```
git pull --rebase
```

---

## 📌 Dica importante

Sempre faça antes:

```
git status
```

Para ver o que está acontecendo.

---

## 📌 VS Code ajuda a resolver conflitos

O VS Code mostra botões:

- Accept Current
- Accept Incoming
- Accept Both
- Compare Changes

Isso facilita resolver conflitos.

---

## 📌 Evitar conflitos

Boas práticas:

- fazer pull antes de começar
- commits pequenos
- branches curtas
- não editar o mesmo arquivo que outra pessoa
- usar git pull frequentemente

Exemplo:

```
git pull origin main
```

---

## 📌 Conflito é normal

Todo programador passa por isso.

Conflito não é erro grave.

É parte do trabalho com Git.

O importante é saber resolver.
