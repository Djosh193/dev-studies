# Amend e Rewrite History no Git

## 📌 Introdução

No Git, é possível modificar commits já feitos.  
Isso é chamado de **reescrever o histórico (rewrite history)**.

Os comandos mais usados para isso são:

- git commit --amend
- git rebase
- git reset
- git reflog

⚠️ Atenção:
Reescrever histórico pode causar problemas se o commit já foi enviado para o GitHub.

Regra geral:

✔ Seguro → commits locais  
⚠️ Cuidado → commits já enviados  
❌ Evite → histórico compartilhado com outras pessoas

---

# 🧠 1. git commit --amend

O comando `--amend` serve para:

- alterar a mensagem do último commit
- adicionar arquivos esquecidos
- corrigir o commit mais recente

---

## ✅ Alterar mensagem do último commit

```
git commit --amend -m "nova mensagem"
```

Exemplo:

```
git commit --amend -m "feat: adiciona validacao no formulario"
```

Isso substitui o último commit.

---

## ✅ Adicionar arquivos esquecidos

Se esqueceu de adicionar um arquivo:

```
git add arquivo.js
git commit --amend
```

O commit será atualizado.

---

## ✅ Alterar sem mudar a mensagem

```
git commit --amend --no-edit
```

Usado quando só quer adicionar arquivos.

---

## ⚠️ Cuidado

Não use amend depois de fazer push, a menos que saiba o que está fazendo.

---

# 🧠 2. O que é Rewrite History

Rewrite history = modificar commits antigos

Exemplos:

- mudar mensagem antiga
- apagar commit
- juntar commits
- dividir commits
- reorganizar commits

Ferramenta principal:

```
git rebase
```

---

# 🧠 3. git rebase (modo interativo)

Permite editar commits antigos.

Comando:

```
git rebase -i HEAD~N
```

N = quantidade de commits

Exemplo:

```
git rebase -i HEAD~3
```

Vai abrir um editor com algo assim:

```
pick a1b2c3 commit 1
pick d4e5f6 commit 2
pick g7h8i9 commit 3
```

Você pode trocar:

| comando | significado    |
| ------- | -------------- |
| pick    | manter         |
| reword  | mudar mensagem |
| edit    | editar commit  |
| squash  | juntar commits |
| drop    | apagar commit  |

---

# 🧠 4. Alterar mensagem de commit antigo

```
git rebase -i HEAD~3
```

Trocar:

```
pick
```

por

```
reword
```

Salvar.

Git vai pedir nova mensagem.

---

# 🧠 5. Juntar commits (squash)

Antes:

```
pick commit1
pick commit2
pick commit3
```

Depois:

```
pick commit1
squash commit2
squash commit3
```

Resultado:

1 commit só.

Muito usado para limpar histórico.

---

# 🧠 6. Apagar commit

```
git rebase -i HEAD~3
```

Trocar:

```
pick commit2
```

por

```
drop commit2
```

O commit será removido.

---

# 🧠 7. git reset

Remove commits ou volta no tempo.

Tipos:

| comando | efeito                    |
| ------- | ------------------------- |
| --soft  | mantém arquivos           |
| --mixed | mantém arquivos sem stage |
| --hard  | apaga tudo                |

---

## ✅ Reset soft

```
git reset --soft HEAD~1
```

Remove commit, mantém arquivos.

---

## ✅ Reset mixed

```
git reset HEAD~1
```

Remove commit e tira do stage.

---

## ❌ Reset hard

```
git reset --hard HEAD~1
```

Apaga commit e arquivos.

Cuidado!

---

# 🧠 8. git reflog (salvador)

Mostra histórico completo.

```
git reflog
```

Exemplo:

```
a1b2c3 HEAD@{0}
d4e5f6 HEAD@{1}
```

Voltar para commit:

```
git reset --hard a1b2c3
```

Muito útil quando algo dá errado.

---

# 🧠 9. Rewrite history depois do push

Se já fez push:

```
git push origin main --force
```

ou

```
git push --force-with-lease
```

Preferível:

```
git push --force-with-lease
```

Mais seguro.

---

# ⚠️ Regra importante

Nunca reescreva histórico compartilhado.

Evite usar:

- amend
- rebase
- reset
- force push

em projetos com outras pessoas.

---

# 🧠 10. Quando usar

Use rewrite history quando:

✔ corrigir commit  
✔ limpar histórico  
✔ juntar commits  
✔ organizar antes do push  
✔ corrigir mensagem

Evite quando:

❌ já fez push público  
❌ outras pessoas já baixaram  
❌ branch compartilhada

---

# ✅ Resumo

| comando            | função                    |
| ------------------ | ------------------------- |
| git commit --amend | altera último commit      |
| git rebase -i      | edita commits antigos     |
| git reset          | volta commits             |
| git reflog         | recupera commits          |
| git push --force   | envia histórico reescrito |

---

# ✅ Conclusão

Rewrite history é poderoso, mas perigoso.

Use quando:

- estiver sozinho no projeto
- ainda não fez push
- quer organizar commits

Evite quando:

- histórico já foi compartilhado
- projeto em equipe
