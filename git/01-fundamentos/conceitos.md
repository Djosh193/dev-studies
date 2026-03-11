# Conceitos Fundamentais do Git

Autor: **Jorge Simões**
Repositório: **dev-studies**
Diretório: `git/01-fundamentos/conceitos.md`

---

# O que é Git?

O **Git** é um **sistema de controle de versão distribuído** criado por **Linus Torvalds** em 2005.

Ele permite que desenvolvedores:

- Acompanhem mudanças no código
- Trabalhem em equipe sem sobrescrever trabalho de outros
- Recuperem versões anteriores de arquivos
- Criem ramificações (branches) para testar novas funcionalidades
- Mantenham histórico completo do projeto

O Git é amplamente utilizado em conjunto com plataformas como:

- GitHub
- GitLab
- Bitbucket

---

# O que é Controle de Versão?

Controle de versão é um sistema que **registra alterações feitas em arquivos ao longo do tempo**, permitindo:

- voltar para versões anteriores
- comparar mudanças
- identificar quem fez cada alteração
- trabalhar simultaneamente com várias pessoas

### Exemplo

Imagine um arquivo chamado:

```
app.js
```

Sem controle de versão:

```
app.js
app_final.js
app_final_agora_sim.js
app_final_definitivo.js
```

Com Git:

```
Histórico organizado de alterações
```

---

# Tipos de Controle de Versão

Existem dois principais modelos:

## 1️⃣ Controle de Versão Centralizado

Exemplo: **SVN**

Estrutura:

```
Servidor Central
      |
Desenvolvedores conectados
```

Problema:

- Se o servidor cair, o trabalho pode parar.

---

## 2️⃣ Controle de Versão Distribuído

Exemplo: **Git**

Cada desenvolvedor possui **uma cópia completa do repositório**.

```
Dev 1  → repositório completo
Dev 2  → repositório completo
Dev 3  → repositório completo
```

Vantagens:

- mais rápido
- mais seguro
- funciona offline
- histórico completo em cada máquina

---

# O que é um Repositório?

Um **repositório (repo)** é uma pasta que contém:

- os arquivos do projeto
- o histórico de alterações
- informações de versionamento

Quando iniciamos um repositório Git:

```
git init
```

O Git cria uma pasta oculta:

```
.git
```

Ela armazena todo o histórico do projeto.

---

# Estrutura de Funcionamento do Git

O Git trabalha com **três áreas principais**:

```
Working Directory
       ↓
Staging Area
       ↓
Repository
```

### 1️⃣ Working Directory

É onde você trabalha normalmente.

Exemplo:

```
index.html
style.css
script.js
```

Arquivos ainda **não versionados**.

---

### 2️⃣ Staging Area (Área de preparação)

Arquivos adicionados para o próximo commit.

Comando:

```
git add arquivo
```

Exemplo:

```
git add index.html
```

---

### 3️⃣ Repository (Repositório)

Quando fazemos um **commit**, o Git salva uma versão do projeto.

```
git commit -m "mensagem"
```

---

# O que é um Commit?

Um **commit** é um **registro permanente de alterações** no projeto.

Ele funciona como um **checkpoint do código**.

Cada commit possui:

- identificador único (hash)
- autor
- data
- mensagem
- alterações realizadas

Exemplo:

```
commit 8f3a2d1
Autor: Jorge Simões
Mensagem: feat: adiciona layout inicial
```

---

# O que é um Branch?

Um **branch (ramo)** é uma **linha independente de desenvolvimento**.

Ele permite trabalhar em novas funcionalidades sem afetar o código principal.

Estrutura:

```
main
 ├── feature-login
 ├── feature-dashboard
 └── bugfix-navbar
```

Benefícios:

- desenvolvimento paralelo
- testes isolados
- organização do projeto

---

# Branch Principal

Tradicionalmente o branch principal era chamado:

```
master
```

Hoje o padrão é:

```
main
```

Ele representa a **versão principal e estável do projeto**.

---

# O que é Merge?

**Merge** é o processo de **unir branches diferentes**.

Exemplo:

```
feature-login → main
```

Comando:

```
git merge nome-do-branch
```

---

# O que é Conflito (Conflict)?

Um **conflito ocorre quando duas alterações incompatíveis são feitas no mesmo arquivo ou linha**.

Exemplo:

Dev 1:

```
const color = "blue"
```

Dev 2:

```
const color = "red"
```

O Git não sabe qual escolher.

Então ele pede para o desenvolvedor resolver manualmente.

---

# O que é o HEAD?

O **HEAD** representa **a posição atual do repositório**.

Ele aponta para:

- o commit atual
- o branch atual

Exemplo:

```
HEAD → main → commit
```

---

# O que é Clone?

Clone cria **uma cópia completa de um repositório remoto na sua máquina**.

Comando:

```
git clone url-do-repositorio
```

Exemplo:

```
git clone https://github.com/djosh193/dev-studies
```

---

# O que é Pull?

Atualiza seu repositório local com mudanças do repositório remoto.

```
git pull
```

Equivale a:

```
git fetch + git merge
```

---

# O que é Push?

Envia commits do repositório local para o remoto.

```
git push
```

---

# O que é Fork?

Fork é **uma cópia de um repositório para sua conta no GitHub**.

Muito usado para:

- contribuir com projetos open source
- modificar projetos sem afetar o original

---

# Git vs GitHub

| Git                      | GitHub                   |
| ------------------------ | ------------------------ |
| Sistema de versionamento | Plataforma de hospedagem |
| Funciona localmente      | Funciona na nuvem        |
| Gerencia histórico       | Gerencia colaboração     |

---

# Fluxo Básico de Trabalho com Git

Fluxo mais comum:

```
editar arquivos
↓
git add
↓
git commit
↓
git push
```

Exemplo:

```
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push
```

---

# Boas Práticas com Git

✔ commits pequenos
✔ mensagens claras
✔ usar branches para novas features
✔ evitar commits gigantes
✔ sempre atualizar antes de enviar mudanças

---

# Exemplo de Mensagens de Commit

Padrão muito usado: **Conventional Commits**

```
feat: adiciona sistema de login
fix: corrige erro no formulário
docs: atualiza README
style: ajusta espaçamento do CSS
refactor: melhora estrutura do código
test: adiciona testes unitários
```

---

# Conclusão

O Git é uma das ferramentas **mais importantes para qualquer desenvolvedor**.

Ele permite:

- versionamento seguro
- colaboração eficiente
- histórico completo de projetos
- organização do desenvolvimento

Dominar Git é essencial para trabalhar com:

- projetos profissionais
- equipes de desenvolvimento
- plataformas como GitHub e GitLab.

---

✍️ **Autor:** Jorge Simões
📚 Repositório: **Dev-Studies**
