# Merge vs Rebase

## 📌 Introdução

No Git, existem duas formas principais de integrar mudanças entre branches:

- git merge
- git rebase

Ambos servem para juntar histórico de commits, mas funcionam de forma diferente.

Entender a diferença é essencial para trabalhar com Git Flow, equipes e projetos profissionais.

---

## 🔹 O que é Merge

O merge junta duas branches criando um commit de junção.

Exemplo:

main
A --- B --- C
\
feature D --- E

Após merge:

main
A --- B --- C -------- M
\ /
feature D --- E ------

M = commit de merge

### Comando

```
git checkout main
git merge feature
```

O Git cria um commit extra de merge.

---

## 🔹 O que é Rebase

O rebase reescreve o histórico.

Ele pega os commits da branch atual e reaplica sobre outra.

Antes:

main
A --- B --- C

feature
\
 D --- E

Após rebase:

main
A --- B --- C --- D --- E

Histórico fica linear.

### Comando

```
git checkout feature
git rebase main
```

---

## 🔹 Diferença principal

| Merge                 | Rebase                |
| --------------------- | --------------------- |
| Mantém histórico real | Reescreve histórico   |
| Cria commit de merge  | Não cria commit extra |
| Mais seguro           | Mais limpo            |
| Melhor para equipe    | Melhor para histórico |

---

## 🔹 Quando usar Merge

Use merge quando:

- Trabalhando em equipe
- Branch compartilhada
- Pull request
- Quer manter histórico real

Exemplo:

```
git checkout main
git merge feature-login
```

✔ recomendado em projetos reais

---

## 🔹 Quando usar Rebase

Use rebase quando:

- Quer histórico limpo
- Branch local
- Antes de fazer push
- Antes de abrir PR

Exemplo:

```
git checkout feature-login
git rebase main
```

✔ muito usado em projetos profissionais

---

## 🔹 Regra importante

🚨 Nunca use rebase em branch pública

Errado:

```
git rebase main
git push
```

Se outros já usaram a branch, pode quebrar tudo.

Regra:

| Situação             | Use    |
| -------------------- | ------ |
| Branch local         | rebase |
| Branch compartilhada | merge  |
| Pull request         | merge  |
| Antes de push        | rebase |

---

## 🔹 Fluxo comum com Rebase

Atualizar branch antes do merge:

```
git checkout main
git pull

git checkout feature
git rebase main
```

Depois:

```
git checkout main
git merge feature
```

Resultado:

Histórico limpo + seguro

---

## 🔹 Resolver conflitos no Rebase

Se houver conflito:

```
git rebase main
```

Git mostra conflito.

Resolver arquivo.

Depois:

```
git add .
git rebase --continue
```

Cancelar rebase:

```
git rebase --abort
```

---

## 🔹 Resolver conflitos no Merge

```
git merge feature
```

Resolver conflito.

Depois:

```
git add .
git commit
```

---

## 🔹 Visualização do histórico

Merge:

A --- B --- C ---- M
\ /
D --- E --

Rebase:

A --- B --- C --- D --- E

Rebase deixa o histórico linear.

---

## 🔹 Boas práticas

✔ Use rebase para organizar commits  
✔ Use merge para integrar branches  
✔ Nunca rebase branch pública  
✔ Sempre dar pull antes de merge  
✔ Sempre testar antes de merge

---

## 🔹 Comandos importantes

Merge

```
git merge branch
```

Rebase

```
git rebase branch
```

Continuar rebase

```
git rebase --continue
```

Cancelar rebase

```
git rebase --abort
```

Ver histórico

```
git log --oneline --graph
```

---

## 📌 Resumo

| Situação           | Melhor escolha |
| ------------------ | -------------- |
| Trabalho em equipe | merge          |
| Histórico limpo    | rebase         |
| Branch local       | rebase         |
| Branch pública     | merge          |
| Pull request       | merge          |
| Antes de push      | rebase         |

---

## ✅ Conclusão

Merge = mais seguro  
Rebase = mais organizado

Projetos profissionais usam os dois.
