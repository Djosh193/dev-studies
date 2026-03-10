# Comandos Básicos do Git

Autor: Jorge Simões  
Repositório: dev-studies  
Seção: git/01-fundamentos

---

## Introdução

O **Git** é um sistema de controle de versão distribuído que permite acompanhar alterações em arquivos ao longo do tempo.

Ele é amplamente utilizado no desenvolvimento de software para:

- Controlar versões de código
- Trabalhar em equipe
- Manter histórico de alterações
- Reverter mudanças quando necessário

Este guia apresenta os **comandos essenciais do Git** que todo desenvolvedor precisa conhecer.

---

# Verificar instalação do Git

Antes de começar, verifique se o Git está instalado no sistema.

```bash
git --version
```

Exemplo de saída:

```
git version 2.43.0
```

Se o Git não estiver instalado, baixe em:

https://git-scm.com/

---

# Configuração inicial

Após instalar o Git, é importante configurar seu **nome e email**, que serão usados para identificar seus commits.

## Configurar nome

```bash
git config --global user.name "Jorge Simões"
```

## Configurar email

```bash
git config --global user.email "seuemail@email.com"
```

## Ver configurações

```bash
git config --list
```

---

# Inicializar um repositório

Para começar a usar Git em um projeto:

```bash
git init
```

Isso cria a pasta oculta:

```
.git
```

Essa pasta contém todo o histórico do repositório.

Estrutura básica:

```
meu-projeto
│
├── .git
├── index.html
└── style.css
```

---

# Verificar status do repositório

O comando mais utilizado do Git:

```bash
git status
```

Ele mostra:

- arquivos modificados
- arquivos novos
- arquivos staged
- branch atual

Exemplo:

```
On branch main

Untracked files:
  index.html
```

---

# Adicionar arquivos ao staging

Antes de criar um commit, é necessário adicionar os arquivos à **staging area**.

## Adicionar arquivo específico

```bash
git add arquivo.js
```

## Adicionar múltiplos arquivos

```bash
git add arquivo1.js arquivo2.js
```

## Adicionar todos os arquivos

```bash
git add .
```

---

# Criar um commit

Após adicionar os arquivos ao staging:

```bash
git commit -m "mensagem do commit"
```

Exemplo:

```bash
git commit -m "feat: adiciona estrutura inicial do projeto"
```

Boas mensagens de commit ajudam a entender o histórico do projeto.

---

# Ver histórico de commits

Para visualizar o histórico:

```bash
git log
```

Exemplo de saída:

```
commit a3f8c21d
Author: Jorge Simões
Date: Tue Mar 4

feat: adiciona página inicial
```

---

## Log resumido

```bash
git log --oneline
```

Exemplo:

```
a3f8c21 feat: adiciona página inicial
b41e2fa initial commit
```

---

# Ver diferenças entre arquivos

Para ver alterações feitas:

```bash
git diff
```

Mostra diferenças entre:

- arquivos modificados
- versão atual
- último commit

---

# Ver histórico resumido com gráfico

```bash
git log --oneline --graph
```

Exemplo:

```
* a3f8c21 feat: adiciona layout
* b41e2fa initial commit
```

---

# Clonar um repositório

Para copiar um repositório remoto:

```bash
git clone URL_DO_REPOSITORIO
```

Exemplo:

```bash
git clone https://github.com/user/repositorio.git
```

Isso cria uma pasta com todo o projeto.

---

# Ver branches

```bash
git branch
```

Exemplo:

```
* main
  develop
```

O `*` indica a branch atual.

---

# Criar uma branch

```bash
git branch nome-da-branch
```

Exemplo:

```bash
git branch feature-login
```

---

# Trocar de branch

```bash
git checkout nome-da-branch
```

Exemplo:

```bash
git checkout feature-login
```

---

## Criar e trocar de branch ao mesmo tempo

```bash
git checkout -b nova-branch
```

Exemplo:

```bash
git checkout -b feature-navbar
```

---

# Enviar alterações para repositório remoto

Após conectar o projeto ao GitHub:

```bash
git push origin main
```

---

# Atualizar repositório local

Para puxar mudanças do remoto:

```bash
git pull
```

Ou:

```bash
git pull origin main
```

---

# Conectar repositório local ao GitHub

Primeiro crie um repositório no GitHub.

Depois conecte:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Exemplo:

```bash
git remote add origin https://github.com/user/repositorio.git
```

---

# Ver repositórios remotos

```bash
git remote -v
```

Exemplo:

```
origin https://github.com/user/repositorio.git
```

---

# Fluxo básico do Git

O fluxo de trabalho mais comum no Git é:

```
Editar arquivos
      ↓
git add
      ↓
git commit
      ↓
git push
```

Ou visualmente:

```
Working Directory
       ↓
Staging Area
       ↓
Repository
```

---

# Resumo dos principais comandos

| Comando      | Função                       |
| ------------ | ---------------------------- |
| git init     | inicia um repositório        |
| git status   | mostra estado do repositório |
| git add      | adiciona arquivos ao staging |
| git commit   | registra alterações          |
| git log      | mostra histórico             |
| git diff     | mostra diferenças            |
| git clone    | copia repositório remoto     |
| git branch   | lista branches               |
| git checkout | troca de branch              |
| git push     | envia commits                |
| git pull     | atualiza repositório         |

---

# Boas práticas

✔ Fazer commits pequenos e frequentes  
✔ Usar mensagens claras de commit  
✔ Trabalhar com branches para novas features  
✔ Sempre atualizar o repositório antes de trabalhar

---

# Próximo tópico

No próximo material serão abordados:

- ciclo de vida dos arquivos no Git
- staging area
- working directory
- commit history

Arquivo relacionado:

```
git/01-fundamentos/ciclo-de-vida-arquivo.md
```

---

# Referências

Documentação oficial do Git

https://git-scm.com/docs

Livro gratuito:

Pro Git  
https://git-scm.com/book

---
