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
