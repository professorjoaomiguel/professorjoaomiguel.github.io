# Backlog — professorjoaomiguel.github.io

Itens em aberto e ideias adiadas. O que já foi feito vai para [`CHANGELOG.md`](CHANGELOG.md); regras e convenções estáveis ficam em [`context.md`](context.md).

**Ao concluir um item:** remova-o daqui e registre-o em `CHANGELOG.md`. Ao receber uma nova pendência do usuário, acrescente aqui, com o motivo.

- **Ideia futura (adiada pelo usuário em 2026-10-04): barra lateral com menu hambúrguer em todos os sites** — bloco de sites do professor (igual em todos, lista única neste repositório) + bloco com as seções/páginas do site atual. Usuário: "outras coisas precisam evoluir para decidir como fazer". Pontos em aberto quando voltar: gaveta em todas as telas vs. fixa no desktop; lista de sites montada por script compartilhado (`/assets/sidebar.js`) vs. marcação em cada repo; relação com a `.topnav`.
- Se `S053-2026-2` voltar a ser público: descomentar o card S053 no bloco `OCULTOS` de `index.html` e devolver a entrada ao `llms.txt` (confirmar visibilidade com `gh repo view`).
- Quando `programacao-basica` (repositório de slides/conteúdo perene) for tornado público: adicionar um segundo `card-link` no card "S053 - Programação Básica" (não criar card separado — ver "Dois repositórios para Programação Básica" acima).
- Se S122 - Internet das Coisas ou Sistemas Embarcados (Lab SE) voltarem a ser ministradas em semestre futuro: descomentar o card correspondente no bloco `OCULTOS` do `.grid` em `index.html` (atualizando o repositório do semestre, se mudou) em vez de recriar do zero; adicionar de volta a entrada em `llms.txt`.
- Usuário ainda precisa decidir/atualizar manualmente o Linktree (`linktr.ee/professorjoaomiguel`) para refletir os contatos atuais (adicionar LinkedIn; já tem Telegram/Instagram/YouTube; remover ou manter canal de Telegram e Facebook descontinuados) — fora do escopo deste repositório.
- **Do relatório do Copilot (2026-10-05, aceitos):**
  - CI (GitHub Actions) com verificação de links. Teria pegado o 404 do card S053 (repositório privado).
  - `assets/tokens.css`: trocar o `@import` da fonte por `<link rel="stylesheet">` (o `@import` atrasa a renderização). O arquivo é compartilhado; checar `lab-boards` e os demais consumidores antes.
  - `README.md` (9 linhas): acrescentar como rodar localmente, estrutura de arquivos e link para `DESIGN.md`.
  - Frase-guia no topo da página ("disciplinas para aula, Laboratório para placas e shields, Contato para falar com o professor").
  - JSON-LD: modelar disciplinas e o Lab Boards como entidades, além da `Person`.
- **Contador de visitas com GoatCounter (https://www.goatcounter.com/), a implementar em breve (pedido do usuário em 2026-10-05):**
  - Por quê: o GA4 sub-conta, porque só coleta com consentimento. O GoatCounter não usa cookies nem guarda dados pessoais, então conta todos os visitantes e dá um número público para o rodapé. É gratuito para uso não comercial.
  - Pendência do usuário: criar a conta e informar o código do site (ex.: `professorjoaomiguel` em `professorjoaomiguel.goatcounter.com`). Em Settings, ativar a exibição pública da contagem (`Allow adding visitor counts on your website`).
  - Fazer: script de contagem no `<head>` de `index.html` (`data-goatcounter` + `async`); número no rodapé lido do endpoint `/counter/<caminho>.json`, com texto neutro se o serviço falhar (sem quebrar o layout) e `aria-label`; uma frase sobre o contador no texto do banner de `assets/consent.js`; registrar no histórico.
  - Cuidados: o número é de vitrine (robôs inflam) e não vai bater com o GA. Se o serviço sair do ar, o contador some. Os sites filhos (`lab-boards`) podem usar o mesmo código de site com caminhos diferentes, se o usuário quiser.
