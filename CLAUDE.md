# Contexto para Agentes de IA

A fonte única de verdade (SSoT) deste repositório está em [`.ai/context.md`](.ai/context.md).

Leia `.ai/context.md` antes de propor qualquer alteração. Não duplique conteúdo de perfil/convenções/regras de link aqui — se algo mudar, edite apenas `.ai/context.md`.

## Organização de `.ai/`

- [`.ai/context.md`](.ai/context.md): regras e convenções estáveis. Editar só quando uma regra mudar.
- [`.ai/BACKLOG.md`](.ai/BACKLOG.md): o que falta fazer (ideias adiadas, pendências do usuário).
- [`.ai/CHANGELOG.md`](.ai/CHANGELOG.md): o que já foi feito e por quê.

Ao fim de cada sessão: registre a entrada no `CHANGELOG.md` e tire do `BACKLOG.md` o que foi concluído. O backlog versionado é o `.ai/BACKLOG.md`; ao escrever um handoff do `/remember`, aponte para ele.

## Analytics e consentimento (resumo; regras completas em `.ai/context.md`)

- O site usa **Google Analytics 4** (`G-P59P33Y4VV`) em `index.html`, sempre com o consentimento negado por padrão (LGPD). Ordem no `<head>`: `consent default` → `consent update` se a escolha salva for `granted` → `config`. Nunca carregar o GA sem o `consent default` antes e nunca remover o `gtag('config')`.
- Banner Aceitar/Recusar e link "Preferências de privacidade" no rodapé: `assets/consent.js`. A escolha fica em `localStorage` (`pjm-consent`).
- **Planejado:** contador de visitas com **GoatCounter** (https://www.goatcounter.com/), sem cookies, para exibir um número público no rodapé. Aguarda o usuário criar a conta e informar o código do site; detalhes em `.ai/BACKLOG.md`.
- Qualquer novo rastreador ou terceiro que grave dados do visitante exige atualizar o texto do banner e passar pelo consentimento.
