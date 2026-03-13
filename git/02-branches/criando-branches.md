# Criando Branches no Git

Autor: Jorge Simões
Repositório: dev-studies
Diretório: git/02-branches

---

## 📌 O que são Branches?

Branches (ramificações) são linhas de desenvolvimento independentes dentro do Git.

Elas permitem:

- Trabalhar em novas funcionalidades sem afetar o código principal
- Corrigir bugs de forma isolada
- Testar mudanças com segurança
- Trabalhar em equipe sem conflitos

A branch principal normalmente se chama:

- main (mais atual)
- master (mais antigo)

---

## 📌 Por que usar branches?

Sem branches:

- Todo mundo altera o mesmo código
- Alto risco de quebrar o projeto
- Difícil testar mudanças

Com branches:

- Cada mudança fica isolada
- Fácil voltar atrás
- Organização melhor

Exemplo:

main → código estável
feature-login → nova funcionalidade
fix-bug → correção

---

## 📌 Ver branches existentes

```bash
git branch
```

Exemplo de saída:

```
* main
  feature-login
```

O `*` indica a branch atual.

---

## 📌 Criar uma nova branch

```bash
git branch nome-da-branch
```

Exemplo:

```bash
git branch feature-login
```

Isso cria a branch, mas não muda para ela.

---

## 📌 Criar e mudar para a branch ao mesmo tempo

```bash
git checkout -b nome-da-branch
```

Exemplo:

```bash
git checkout -b feature-navbar
```

Agora você está dentro da nova branch.

---

## 📌 Novo comando (Git moderno)

```bash
git switch -c nome-da-branch
```

Exemplo:

```bash
git switch -c feature-api
```

Mais seguro que checkout.

---

## 📌 Trocar de branch

Forma antiga:

```bash
git checkout nome-da-branch
```

Forma moderna:

```bash
git switch nome-da-branch
```

Exemplo:

```bash
git switch main
```

---

## 📌 Ver todas as branches

```bash
git branch -a
```

Somente locais:

```bash
git branch
```

Somente remotas:

```bash
git branch -r
```

---

## 📌 Deletar branch

```bash
git branch -d nome-da-branch
```

Forçar:

```bash
git branch -D nome-da-branch
```

---

## 📌 Renomear branch

```bash
git branch -m novo-nome
```

ou

```bash
git branch -m antigo novo
```

---

## 📌 Fluxo básico com branch

```bash
git switch -c feature-login

git add .
git commit -m "feat: add login"

git switch main

git merge feature-login

git branch -d feature-login
```

---

## 📌 Convenções de nomes

| Prefixo   | Uso          |
| --------- | ------------ |
| feature/  | nova feature |
| fix/      | correção     |
| hotfix/   | urgente      |
| docs/     | documentação |
| refactor/ | refatoração  |
| test/     | testes       |

Exemplos:

```
feature/login
fix/error-button
docs/readme
refactor/api
```

---

## 📌 Boas práticas

✅ Criar branch para cada feature
✅ Não trabalhar na main
✅ Atualizar antes de criar branch
✅ Fazer commit antes de trocar
✅ Usar nomes claros

---

## 📌 Atualizar antes de criar branch

```bash
git switch main
git pull
git switch -c feature-nova
```

---

## 📌 Erros comuns

❌ Trabalhar direto na main
❌ Esquecer de trocar branch
❌ Não fazer commit
❌ Não atualizar main

---

## 📌 Resumo

| Comando         | Função         |
| --------------- | -------------- |
| git branch      | listar         |
| git branch nome | criar          |
| git switch nome | trocar         |
| git switch -c   | criar + trocar |
| git branch -d   | deletar        |
| git branch -m   | renomear       |
| git branch -a   | todas          |

---

## ✅ Conclusão

Branches são essenciais para:

- Organização
- Segurança
- Trabalho em equipe
- Fluxo profissional
