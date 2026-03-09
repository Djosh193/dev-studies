# Ciclo de Vida de um Arquivo no Git

Autor: Jorge Simões  
Repositório: dev-studies  
Seção: Git / 01 - Fundamentos

---

## Introdução

No Git, todo arquivo dentro de um repositório passa por um **ciclo de vida**, que representa os diferentes estados em que ele pode estar durante o processo de versionamento.

Compreender esse ciclo é essencial para trabalhar corretamente com commits, staging e controle de mudanças.

Os principais estados de um arquivo no Git são:

1. **Untracked**
2. **Tracked**
3. **Modified**
4. **Staged**
5. **Committed**

---

# Visão Geral do Ciclo

```
Untracked → Staged → Committed → Modified → Staged → Committed
```

Ou de forma visual:

```
Arquivo criado
      ↓
Untracked
      ↓ git add
Staged
      ↓ git commit
Committed
      ↓ edição
Modified
      ↓ git add
Staged novamente
```

---

# Estados de um Arquivo

## 1. Untracked (Não rastreado)

Um arquivo **untracked** é um arquivo que **existe no diretório do projeto, mas ainda não está sendo monitorado pelo Git**.

Isso acontece quando:

- você cria um novo arquivo
- copia um arquivo para o projeto
- baixa algo dentro da pasta do repositório

### Exemplo

Criando um novo arquivo:

```
touch script.js
```

Verificando o status:

```
git status
```

Saída:

```
Untracked files:
  script.js
```

Isso significa que o Git **ainda não está controlando esse arquivo**.

---

## 2. Staged (Preparado para commit)

Um arquivo **staged** é um arquivo que foi **adicionado à área de preparação (staging area)** e está pronto para ser incluído no próximo commit.

Isso é feito com:

```
git add nome-do-arquivo
```

### Exemplo

```
git add script.js
```

Agora o Git está pronto para incluir esse arquivo no próximo commit.

Verificando:

```
git status
```

Saída:

```
Changes to be committed:
  new file: script.js
```

---

## 3. Committed (Commitado)

Quando fazemos um commit, o Git **salva uma versão do projeto no histórico do repositório**.

Comando:

```
git commit -m "feat: adiciona script inicial"
```

Agora o arquivo faz parte do **histórico do projeto**.

Nesse momento ele está:

```
Tracked
```

Ou seja, o Git **passa a monitorar mudanças nesse arquivo**.

---

## 4. Modified (Modificado)

Se você editar um arquivo que já está sendo rastreado, ele entra no estado **Modified**.

Exemplo:

Editar o arquivo `script.js`.

Depois rodar:

```
git status
```

Saída:

```
Changes not staged for commit:
  modified: script.js
```

Isso significa que:

- o Git detectou mudanças
- mas essas mudanças **ainda não foram adicionadas ao staging**

---

## 5. Staged novamente

Para incluir as alterações no próximo commit:

```
git add script.js
```

Agora o arquivo volta para o estado:

```
Staged
```

---

## 6. Novo Commit

Agora salvamos a nova versão:

```
git commit -m "feat: adiciona função principal"
```

O ciclo continua.

---

# Diagrama Completo do Ciclo

```
           Criar Arquivo
                ↓
           UNTRACKED
                ↓ git add
            STAGED
                ↓ git commit
            COMMITTED
                ↓ editar
            MODIFIED
                ↓ git add
            STAGED
                ↓ git commit
            COMMITTED
```

---

# Comandos Importantes no Ciclo

## Ver estado dos arquivos

```
git status
```

Mostra:

- arquivos novos
- arquivos modificados
- arquivos staged

---

## Adicionar arquivo ao staging

Adicionar um arquivo específico:

```
git add arquivo.js
```

Adicionar todos os arquivos:

```
git add .
```

---

## Criar commit

```
git commit -m "mensagem do commit"
```

Exemplo:

```
git commit -m "feat: adiciona sistema de login"
```

---

## Remover arquivo do staging

Caso tenha adicionado por engano:

```
git restore --staged arquivo.js
```

---

# Estados resumidos

| Estado    | Significado                               |
| --------- | ----------------------------------------- |
| Untracked | Arquivo ainda não monitorado pelo Git     |
| Staged    | Arquivo preparado para commit             |
| Committed | Arquivo salvo no histórico do repositório |
| Modified  | Arquivo alterado após um commit           |

---

# Boas Práticas

✔ Fazer commits pequenos e frequentes  
✔ Usar mensagens claras  
✔ Verificar sempre o `git status`  
✔ Evitar commits muito grandes

Exemplo de fluxo ideal:

```
editar código
git status
git add .
git commit -m "feat: adiciona função de autenticação"
```

---

# Conclusão

O **ciclo de vida de um arquivo no Git** mostra como as mudanças passam por diferentes estados até serem registradas no histórico do projeto.

Dominar esse fluxo permite:

- entender exatamente o que será commitado
- evitar erros
- manter um histórico limpo e organizado

Esse conhecimento é **fundamental para qualquer desenvolvedor que utiliza Git**.

---
