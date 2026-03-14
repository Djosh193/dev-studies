# Estratégia Git Flow

## O que é Git Flow

Git Flow é uma estratégia de organização de branches no Git que define um fluxo de trabalho padronizado para desenvolvimento, preparação de versões e correções em produção.

Ele cria um modelo com branches principais e auxiliares, permitindo controlar melhor o ciclo de vida do software.

Essa estratégia é muito usada em projetos profissionais porque separa claramente:

- código em produção
- código em desenvolvimento
- novas funcionalidades
- preparação de versões
- correções urgentes

---

## Objetivo do Git Flow

O Git Flow existe para:

- manter o histórico organizado
- evitar quebrar a versão em produção
- permitir várias funcionalidades ao mesmo tempo
- facilitar releases
- permitir correções urgentes sem bagunçar o projeto

---

## Estrutura do Git Flow

Branches principais:

- main
- develop

Branches auxiliares:

- feature/\*
- release/\*
- hotfix/\*
- support/\* (opcional)

---

# Branch main

A branch main representa a versão estável do projeto.

Tudo que está na main deve estar pronto para produção.

Características:

- contém código estável
- recebe merge de release e hotfix
- normalmente possui tags de versão

Exemplo de tags:

v1.0.0  
v1.1.0  
v2.0.0

---

# Branch develop

A branch develop representa a linha principal de desenvolvimento.

É nela que as novas funcionalidades são reunidas antes de virar uma nova versão.

Características:

- base para criar feature
- recebe merge de features
- pode não estar estável
- não é produção

---

# Branch feature

As branches feature são usadas para desenvolver novas funcionalidades.

Sempre são criadas a partir da develop.

Quando usar:

- nova tela
- nova API
- nova função
- melhoria
- refatoração

Nome recomendado:

feature/login  
feature/cadastro  
feature/api-produtos  
feature/dark-mode

Fluxo:

git checkout develop  
git checkout -b feature/login

Após terminar:

git checkout develop  
git merge feature/login  
git branch -d feature/login

---

# Branch release

As branches release são usadas para preparar uma nova versão.

São criadas a partir da develop quando o desenvolvimento terminou.

Servem para:

- testes finais
- ajustes
- correções pequenas
- atualização de versão
- documentação

Nome recomendado:

release/1.0.0  
release/1.1.0  
release/2.0.0

Fluxo:

git checkout develop  
git checkout -b release/1.0.0

Depois de pronto:

git checkout main  
git merge release/1.0.0  
git tag -a v1.0.0 -m "Release 1.0.0"

git checkout develop  
git merge release/1.0.0  
git branch -d release/1.0.0

---

# Branch hotfix

Hotfix é para corrigir erro em produção.

Sempre nasce da main.

Quando usar:

- bug crítico
- erro em produção
- falha grave
- algo que precisa corrigir rápido

Nome recomendado:

hotfix/login-error  
hotfix/1.0.1  
hotfix/payment-fix

Fluxo:

git checkout main  
git checkout -b hotfix/1.0.1

Depois:

git checkout main  
git merge hotfix/1.0.1  
git tag -a v1.0.1 -m "Hotfix 1.0.1"

git checkout develop  
git merge hotfix/1.0.1  
git branch -d hotfix/1.0.1

---

# Branch support (opcional)

Usada quando existem versões antigas ainda em uso.

Exemplo:

support/1.x  
support/2.x

Nem todo projeto precisa.

---

# Fluxo completo

Fluxo normal:

feature -> develop -> release -> main

Fluxo de emergência:

main -> hotfix -> main + develop

---

# Exemplo completo

Estado inicial:

main -> v1.0.0  
develop -> desenvolvimento atual

Criando feature:

git checkout develop  
git checkout -b feature/perfil

Finalizando:

git checkout develop  
git merge feature/perfil

Criando release:

git checkout develop  
git checkout -b release/1.1.0

Publicando:

git checkout main  
git merge release/1.1.0  
git tag -a v1.1.0 -m "Release 1.1.0"

git checkout develop  
git merge release/1.1.0

Bug em produção:

git checkout main  
git checkout -b hotfix/1.1.1

Depois:

git checkout main  
git merge hotfix/1.1.1  
git tag -a v1.1.1 -m "Hotfix 1.1.1"

git checkout develop  
git merge hotfix/1.1.1

---

# Diagrama simples

main
o------o----------o------o
\ /
\ /
develop o--o--o--o----o----o
\ \ \
 \ \ \
feature o o o

release o---o

hotfix o--o

---

# Vantagens

- organização
- controle de versões
- segurança
- fácil trabalhar em equipe
- fácil corrigir produção

---

# Desvantagens

- mais complexo
- mais branches
- mais merges
- pode ser exagero para projeto pequeno

---

# Quando usar

Use Git Flow quando:

- projeto grande
- equipe
- versões controladas
- produção separada
- precisa estabilidade

Evite quando:

- projeto pequeno
- solo
- deploy rápido
- protótipo

---

# Boas práticas

Nunca trabalhar direto na main

Sempre criar feature

Usar nomes claros

Commits pequenos

Fazer pull antes de merge

Usar tags

Apagar branch concluída

Documentar fluxo

---

# Nomes recomendados

feature/login  
feature/dashboard  
feature/upload

release/1.0.0  
release/1.1.0

hotfix/1.0.1  
hotfix/login-fix

support/1.x

---

# Resumo

main → produção  
develop → desenvolvimento  
feature → nova funcionalidade  
release → preparar versão  
hotfix → corrigir produção

Fluxo principal:

feature → develop → release → main

Fluxo urgente:

main → hotfix → main + develop

Git Flow é uma estratégia profissional para organizar o desenvolvimento usando branches de forma controlada.
