# Instalação e Configuração do Git

## O que é o Git?

O **Git** é um sistema de controle de versão distribuído, usado para rastrear alterações em arquivos ao longo do tempo. Ele permite que desenvolvedores trabalhem de forma organizada, segura e colaborativa em projetos de software.

Com o Git, você pode:

- salvar versões do seu código;
- voltar para estados anteriores do projeto;
- trabalhar em novas funcionalidades sem afetar a versão principal;
- colaborar com outras pessoas no mesmo projeto;
- registrar o histórico de alterações.

---

## Por que instalar e configurar o Git corretamente?

Instalar o Git é o primeiro passo para começar a usar versionamento na prática. Já a configuração inicial é importante para:

- identificar quem fez cada alteração;
- definir o editor padrão;
- ajustar comportamentos do Git;
- conectar seu ambiente local a serviços como GitHub, GitLab e Bitbucket.

---

## Instalando o Git

A instalação do Git varia de acordo com o sistema operacional.

---

### Windows

1. Acesse o site oficial do Git:
   - [https://git-scm.com/](https://git-scm.com/)

2. Baixe a versão adequada para Windows.

3. Execute o instalador.

4. Durante a instalação, normalmente pode manter as opções padrão, mas vale observar algumas configurações importantes:

#### Opções comuns no instalador

- **Choosing the default editor used by Git**
  - Escolha o editor que preferir.
  - Muitos iniciantes usam o **Visual Studio Code**.

- **Adjusting the name of the initial branch**
  - Pode deixar `main`, que é o mais usado atualmente.

- **Adjusting your PATH environment**
  - Recomenda-se permitir o uso do Git via terminal.

- **Choosing HTTPS transport backend**
  - Mantenha a opção recomendada.

- **Configuring line ending conversions**
  - No Windows, geralmente a opção padrão já é adequada.

5. Finalize a instalação.

6. Para verificar se deu certo, abra o terminal (`Git Bash`, `CMD`, `PowerShell` ou terminal do VS Code) e execute:

```bash
git --version
```
