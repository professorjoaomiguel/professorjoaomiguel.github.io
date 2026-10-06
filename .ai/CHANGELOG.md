# Histórico de alterações — professorjoaomiguel.github.io

O que já foi feito, com o motivo de cada mudança (mais recente por último). Os itens em aberto estão em [`BACKLOG.md`](BACKLOG.md); regras e convenções estáveis, em [`context.md`](context.md).

**Ao concluir uma sessão:** acrescente uma entrada no fim deste arquivo (data, motivo, o que mudou) e tire de `BACKLOG.md` o que foi concluído.

### 2026-05-30: Setup Inicial do Site e Otimização para IA (AI-Readiness)
- Criação do `index.html` estático como landing page.
- Design premium minimalista, dark mode automático, paleta Slate/Indigo, tipografia `Outfit`.
- JSON-LD (Schema.org) no `<head>`.
- Criado `llms.txt` como mapa semântico para agentes de IA.
- Criado `.github/copilot-instructions.md`.

### 2026-07-23: Convergência para SSoT em `.ai/`, gaps técnicos, privacidade e novos contatos
- **Motivo:** avaliação detalhada identificou (a) conteúdo de perfil duplicado e já divergente entre este repositório e `professorjoaomiguel`, (b) link para `programacao-basica` quebrado para visitantes (repositório privado linkado como se fosse público), (c) e-mail institucional exposto em texto plano em arquivo público, (d) ausência de favicon, meta tags Open Graph/Twitter, `LICENSE`, `robots.txt` e `sitemap.xml`.
- `docs/ai_context.md` removido — histórico migrado para esta seção; `.github/copilot-instructions.md` virou ponteiro curto para este arquivo; adicionados `CLAUDE.md` e `AGENTS.md` como ponteiros equivalentes.
- Adicionados `favicon.svg`, `robots.txt`, `sitemap.xml`, `LICENSE` (CC BY-NC-SA 4.0).
- Adicionadas meta tags Open Graph e Twitter Card, com `assets/og-image.jpg` gerado via screenshot real (ver diretiva de regeneração acima).
- Card de "Programação Básica" ocultado (comentado) em `index.html` até o repositório correspondente ser tornado público; `llms.txt` ajustado para não anunciar um link inacessível.
- Adicionados Instagram e YouTube como contatos, mantendo Telegram como contato principal.
- Implementada ofuscação do e-mail institucional (montagem via JS em runtime) em vez de removê-lo da página.

### 2026-07-23 (cont.): Auditoria do Linktree e Google Sites, LinkedIn e reaproveitamento de conteúdo legado
- **Motivo:** usuário pediu para checar `linktr.ee/professorjoaomiguel` e `sites.google.com/view/professorjoaomiguel` em busca de contatos/conteúdo reaproveitável.
- Linktree revelou: canal de Telegram e Facebook em desuso (confirmado pelo usuário, não incluídos); Google Sites hub já conhecido.
- Google Sites hub revelou um contato **LinkedIn** (`linkedin.com/in/joaomiguel`) que não existia em nenhum lugar — adicionado como novo badge no site, no `llms.txt` e no README do perfil.
- Google Sites hub também lista um subsite legado e público de Programação Básica com curso completo — usado como link temporário do card "Programação Básica" (ver seção "Regras de Links para Disciplinas" acima) e 3 disciplinas antigas descontinuadas (Robótica Industrial, Instrumentação e Sensoriamento, Microprocessadores), deixadas de fora por decisão do usuário.

### 2026-07-23 (cont.): Seção "Atalhos da Faculdade"
- **Motivo:** usuário explorou `sites.google.com/view/atalhosfaculdade` (linkado a partir do hub do Google Sites) e confirmou que era destinado a ser "ponto de chegada para os alunos... acessar as diversas ferramentas e plataformas da faculdade SENAI".
- Adicionada seção `.shortcut-grid` em `index.html` (ver detalhes acima) com 6 atalhos institucionais, replicada em `llms.txt`.
- Corrigido link do Portal do Aluno: o Google Sites legado tinha `portalaluno.fiergs.org.br` (morto); usuário forneceu o link correto `portaldoaluno.fiergs.org.br/FrameHTML/web/app/edu/PortalEducacional/login/`.
- Usuário confirmou `pergamum.senairs.org.br` (raiz) como o site correto da biblioteca própria do SENAI-RS.
- Coluna "Professor" do Google Sites (redundante) e seção "Introdução Automação e Mecatrônica" (disciplina específica, com link de convite de Telegram provavelmente expirado) não foram reaproveitadas.

### 2026-07-23 (cont.): Foto real como avatar/favicon, e card de S086 - Sistemas Microprocessados
- **Motivo:** usuário forneceu uma foto pessoal (extraída do Google Sites legado) para substituir o placeholder de iniciais "JM"; e informou que o esqueleto do repositório `S086_2026-2` (Sistemas Microprocessados) já foi publicado no GitHub.
- Adicionado `assets/avatar.png` (foto real do usuário, 400×400, já circular/com moldura). Usado como avatar no `header` de `index.html` (substitui `.avatar-placeholder` com iniciais) e como favicon (`<link rel="icon" type="image/png">`, substitui `favicon.svg`, removido por ficar sem uso).
- `assets/og-image-template.html` atualizado para usar a mesma foto no lugar das iniciais; `assets/og-image.jpg` regenerado via screenshot (1512×804), conforme diretiva "Regenerar `assets/og-image.jpg`" acima.
- Confirmada visibilidade pública de `S086_2026-2` (`gh repo list`) e adicionado card "S086 - Sistemas Microprocessados" em `index.html` (ESP32/Arduino UNO, C/C++, simulação Wokwi) e entrada correspondente em `llms.txt`. Tabela de disciplinas e `BACKLOG.md` atualizadas.

### 2026-09-07: Atualização para as UCs do semestre 2026-2
- **Motivo:** usuário pediu para atualizar o site para refletir as UCs efetivamente em curso neste semestre (2026-2); grid de disciplinas estava desatualizado (misturava disciplinas de semestres anteriores com a atual).
- Usuário confirmou explicitamente: apenas **S086 - Sistemas Microprocessados** e **S053 - Programação Básica** estão sendo ministradas neste semestre. S122 - Internet das Coisas e Sistemas Embarcados (Lab SE) não estão em curso — cards inicialmente removidos de `index.html` e `llms.txt` (repositórios GitHub `S122_2026-1` e `lab-se` permanecem públicos, só não têm mais card visível no site).
- **Ajuste posterior no mesmo dia:** usuário pediu para trazer de volta os 3 cards antigos (S122, Sistemas Embarcados, Programação Básica via Google Sites) só que **ocultos**, não removidos do código-fonte. Reinseridos dentro de um único bloco de comentário HTML (`<!-- ... -->`) no `.grid` de `index.html`, com cuidado de não aninhar comentários (cada `<!-- nome -->` interno virou apenas texto simples, senão o primeiro `-->` fecharia o comentário cedo e vazaria os cards). Validado programaticamente que os 3 cards somem ao remover comentários (simulando o parser do navegador) e que S086/S053 continuam visíveis. `llms.txt` não foi alterado neste ajuste (a nota resumida sobre disciplinas antigas já está lá).
- Repositório `S053-2026-2` (exercícios do semestre, antes só local em `C:\GitHub\S053-2026-2`) foi criado e publicado no GitHub como público nesta sessão (`gh repo create` + push); card "S053 - Programação Básica" adicionado em `index.html` e entrada correspondente em `llms.txt`.
- Usuário esclareceu que existe um **segundo** repositório de Programação Básica, `programacao-basica`, para onde está migrando aos poucos slides e conteúdo perene (não específico de semestre) — continua privado por decisão do usuário; não linkado ainda (ver seção "Dois repositórios para Programação Básica" acima).
- Achado durante a investigação: `lab-intro` (repositório público, labs de Arduino/Wokwi/Tinkercad) também se descreve como material de "Programação Básica", mas é de uma versão anterior/não é a UC do semestre corrente — deixado de fora do site para não confundir com `S053-2026-2`.
- Tabela de disciplinas e seção "Disciplinas ministradas" (Perfil) atualizadas.

### 2026-10-04: Lab Boards no site e passada de navegabilidade
- **Motivo:** usuário pediu para os alunos acessarem o `lab-boards` (documentação das placas) pelo site e para melhorar a navegabilidade, mantendo este site como referência de harmonia visual.
- Em paralelo, o `lab-boards` foi adequado (README voltado ao aluno, "Que placa é essa?", glossário, autoria/contatos alinhados) e publicado no GitHub Pages em `/lab-boards/` e passou a **carregar** `/assets/tokens.css`, `/assets/topbar.css` e `/assets/avatar.png` deste repositório, sem cópia própria (regra "Visual do site" em `lab-boards/.ai/CONVENTIONS.md`).
- `index.html`: barra fixa de seções, cabeçalho só com Telegram, seção "Laboratório" com painel do Lab Boards (3 atalhos diretos), seção "Contato" no fim, card inteiro clicável, hover sem deslocamento, `prefers-reduced-motion`, acento escuro `#818cf8`. Detalhes em "Navegação e padrões visuais".
- `llms.txt`: seção "Material de Apoio do Laboratório". `sitemap.xml`: URLs do Lab Boards.
- Repo `S086_2026-2` renomeado para `S086-2026-2` (links atualizados no mesmo dia); `.claude/` adicionado ao `.gitignore`.
- Referência visual extraída para `assets/tokens.css` + `assets/topbar.css` + `DESIGN.md` (contrato público); `index.html` passou a carregá-los. Usuário decidiu que toda referência de site web fica neste repositório.
- `assets/topbar.css`: em até 560px, barra dos sites filhos (os que têm `.topbar-back`) passa de 3 para 2 linhas — marca + "← Site do professor" na 1ª, seções rolando de lado na 2ª (76px em 360px medido no ar depois do `c761d71`, antes 107px; desktop 48px). Regra condicionada a `:has(.topbar-back)` para o site principal continuar com uma linha (42px em 360px, 48px em 480px). Pedido vindo da sessão do lab-boards. Depois, token `--anchor-offset` (4,5rem; 5,5rem até 560px em sites filhos) para as âncoras não ficarem sob a barra de 2 linhas.
- `assets/og-image.jpg` **não** foi regenerado: avatar, nome, subtítulo e paleta clara do cabeçalho não mudaram.

### 2026-10-04 (cont.): card S053 oculto
- Auditoria no ar achou o card "S053 - Programação Básica" levando a 404: o repositório `S053-2026-2` está **privado**. Usuário pediu para ocultar o card (movido para o bloco `OCULTOS` comentado do `.grid`, sem aninhar comentários; validado que só S086 e Lab Boards ficam visíveis) e a entrada foi removida do `llms.txt` (com nota de que a UC segue em curso sem material público).

### 2026-10-04 (cont.): chave claro/escuro
- **Motivo:** usuário pediu barra lateral com menu hambúrguer e chave de tema. Na conversa, a barra lateral cresceu (lateral comum a todos os sites, bloco de sites + bloco do site atual) e o usuário decidiu **simplificar: só a chave de tema agora**; a lateral ficou como ideia futura (ver `BACKLOG.md`).
- `assets/theme.js` (novo, compartilhado): aplica a escolha salva antes da pintura (sem flash), liga o botão `.theme-toggle`, salva em `localStorage` (`pjm-theme`) com `try/catch`. Sem escolha, segue o sistema. Sem JS, o botão fica `hidden`.
- `assets/tokens.css`: escuro do sistema virou `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }` + bloco `:root[data-theme="dark"]` (só seletores acrescentados, contrato mantido).
- `assets/topbar.css`: `.theme-toggle` (34px de toque, ocupa 28px na linha: barra continua 48px no desktop); site principal sem quebra de linha até 560px (48px em 360px, antes 42px).
- `index.html` e `lab-boards/_layouts/default.html`: script no `<head>` + botão na barra. `DESIGN.md`: seção "Modo claro/escuro". O `inventario/relatorio.html` do lab-boards ficou sem a chave (segue o sistema).
- Verificado localmente (site principal + cópia do layout do lab-boards no mesmo servidor): 320–1280px, sistema claro/escuro, escolha mantida ao recarregar e ao trocar de site, teclado (Tab + Enter), sem erros no console. `og-image.jpg` não muda.

### 2026-10-05: Google Analytics com consentimento (LGPD)
- **Motivo:** o snippet do GA4 (`G-P59P33Y4VV`) entrou no `<head>` coletando e gravando cookies sem consentimento. A branch do Copilot (`lgpd-default-consent-denied`) negava o consentimento mas removia o `gtag('config')` e não tinha banner, o que desligaria o GA por completo.
- `index.html`: ordem no `<head>` = `consent default` (tudo `denied`) → relê `pjm-consent` do `localStorage` e dá `consent update` se `granted` → `js` → `config`. Sem aceite o GA4 não grava cookies.
- `assets/consent.js` (novo, `defer`): banner Aceitar/Recusar com o mesmo peso visual, grava `pjm-consent`, chama `gtag('consent','update')` e, ao recusar, apaga os cookies `_ga*`. Rodapé tem o botão "Preferências de privacidade" para reabrir. Usa os tokens de `tokens.css`.
- Qualquer site novo que use o GA deve repetir o mesmo trecho do `<head>` e incluir `consent.js`; não carregar o GA sem o `consent default` antes.
- Branch do Copilot mesclada só no histórico (`-s ours`) e removida, junto com todas as branches que não são `main`.

### 2026-10-05 (cont.): Avaliação do relatório do Copilot
- **Motivo:** o usuário trouxe a transcrição de uma conversa com o Copilot (revisão de código e avaliação de UX/IA) para ser avaliada. Guardada em `.ai/2026-10-05-conversation-copilot.md` (renomeada de "copliot"), com cabeçalho dizendo o que foi aceito e rejeitado.
- Três mudanças de texto vindas do commit `cebecd5` (meta description, card Sistemas Embarcados oculto e card Lab Boards) foram revertidas por não serem pedidas nem constarem do relatório.
- Itens aceitos foram para `BACKLOG.md`; o resto foi descartado com motivo no cabeçalho do arquivo.

### 2026-10-05 (cont.): `context.md` dividido em contexto, backlog e histórico
- **Motivo:** `context.md` tinha ~32 KB e misturava regras estáveis, histórico (o que mais cresce) e pendências; todo agente lê o arquivo inteiro antes de agir.
- `context.md` ficou só com regras e convenções (ganhou as seções "Analytics e consentimento (LGPD)" e "Onde fica cada coisa em `.ai/`"); o histórico foi para este `CHANGELOG.md` e os "Próximos Passos" para `BACKLOG.md`, sem reescrever o conteúdo.
- `CLAUDE.md` passou a resumir esta organização, o uso do Google Analytics com consentimento e o GoatCounter planejado (detalhes seguem em `context.md` e `BACKLOG.md`).
