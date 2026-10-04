# Contexto de IA — professorjoaomiguel.github.io (site pessoal)

Esta é a **fonte única de verdade (SSoT)** deste repositório para qualquer agente de IA (Claude, GitHub Copilot, Antigravity, ou outro). Todos os arquivos de entrada específicos de cada ferramenta (`.github/copilot-instructions.md`, `CLAUDE.md`, `AGENTS.md`) apontam para este arquivo e não devem duplicar o conteúdo abaixo — se algo mudar, edite apenas aqui.

---

## Perfil (Global Context)

- **Nome:** Prof. Me. João Miguel Lac Roehe
- **Cargo:** Professor na Faculdade de Tecnologia SENAI Porto Alegre
- **E-mail institucional:** joao.roehe@senairs.org.br
  - **IMPORTANTE:** este e-mail é publicado na página, mas de forma ofuscada (ver seção "Ofuscação de e-mail" abaixo). Nunca escrever o endereço em texto plano em `index.html`, `llms.txt`, JSON-LD, meta tags, ou qualquer outro arquivo servido publicamente. É seguro usá-lo aqui, neste arquivo, para contexto de agentes.
- **Idioma preferido:** Português (Brasil)
- **Contatos públicos exibidos no site (nesta ordem):**
  1. Telegram: [@professorjoaomiguel](https://t.me/professorjoaomiguel) — contato principal/CTA
  2. Instagram: [@professorjoaomiguel](https://www.instagram.com/professorjoaomiguel)
  3. YouTube: [Canal do Professor](https://www.youtube.com/c/professorjoaomiguel)
  4. LinkedIn: [linkedin.com/in/joaomiguel](https://www.linkedin.com/in/joaomiguel)
  5. E-mail institucional — ofuscado via JS (ver abaixo)
- **Contatos descontinuados (não incluir no site):** canal de Telegram `@canalprofessorjoaomiguel` e página do Facebook (`facebook.com/professorjoaomiguel`) — confirmados em desuso pelo usuário em 2026-07-23; existem no Linktree antigo mas não devem ser replicados aqui.
- **Disciplinas ministradas (semestre corrente, 2026-2):**
  - **S086 - Sistemas Microprocessados** (ESP32, Arduino UNO, C/C++, simulação Wokwi)
  - **S053 - Programação Básica** (algoritmos, pseudocódigo, fluxograma, Linguagem C) — exercícios do semestre no repositório [`S053-2026-2`](https://github.com/professorjoaomiguel/S053-2026-2) (público desde 2026-09-07)
  - **Disciplinas de semestres anteriores, não ministradas neste semestre (2026-2), confirmado pelo usuário em 2026-09-07:** S122 - Internet das Coisas, Sistemas Embarcados (Lab SE), Programação Básica (versão antiga via `lab-intro`/Google Sites). Cards mantidos comentados (`<!-- -->`, sem aninhar comentários) dentro do `.grid` em `index.html` — a pedido do usuário, ocultos mas prontos para reativar, em vez de removidos. Não descomentar sem nova instrução explícita do usuário.

## Visão Geral do Repositório

Este é o **repositório do site pessoal** (GitHub Pages) para [@professorjoaomiguel](https://github.com/professorjoaomiguel).

**Objetivo do site:** ser o *ponto de chegada dos alunos*. Deve ser limpo, direto e fácil de achar as coisas — priorize clareza sobre qualquer elemento decorativo. Este repositório é irmão de [`professorjoaomiguel`](https://github.com/professorjoaomiguel/professorjoaomiguel) (perfil GitHub), que tem objetivo mais básico (bio + disciplinas); não confundir o escopo dos dois.

## Tech Stack & Design System

- **Core:** HTML5 e CSS3 puro (sem frameworks/build step). Tokens e barra do topo em arquivos compartilhados (`assets/tokens.css`, `assets/topbar.css`) — ver `DESIGN.md`.
- **JavaScript:** apenas o mínimo vanilla necessário para *progressive enhancement* pontual (hoje: montar o link de e-mail em runtime para dificultar coleta por bots). Não é uma exceção para adicionar lógica de aplicação — continua sendo um site estático.
- Dark mode automático via `prefers-color-scheme`.
- Paleta HSL (Slate & Indigo Accent), tipografia `Outfit` via Google Fonts.
- Acessibilidade: `:focus-visible`, landmarks HTML5, `aria-hidden` em ícones decorativos.
- SEO/Semântica: heading hierarchy única (`h1`), JSON-LD (Schema.org `Person`), `llms.txt`, `robots.txt`, `sitemap.xml`.

## Regras de Links para Disciplinas (IMPORTANTE)

**Nunca linkar um repositório privado como se fosse acessível.** Antes de adicionar ou reativar um card/link de disciplina, confirmar visibilidade com `gh repo view <owner>/<repo> --json visibility`.

**A tabela abaixo pode ficar desatualizada** (repos novos, renomeados ou publicados fora deste fluxo) — antes de confiar nela, rodar `gh repo list professorjoaomiguel --limit 100 --json name,visibility,updatedAt,description` para ver o estado real. Para identificar a que disciplina um repo pertence sem clonar, ler o README remoto: `gh api repos/professorjoaomiguel/<repo>/readme -q .content | base64 -d`.

**Publicando um repositório de disciplina que só existe local:** dentro da pasta local, `gh repo create professorjoaomiguel/<repo> --public --source=. --remote=origin --description "..."` seguido de `git push -u origin main`. Antes de publicar, adicionar `.claude/` ao `.gitignore` do repo da disciplina — config local de ferramentas de IA não deve ir para um repositório público voltado a alunos.

Estado atual (checado em 2026-09-07 — usuário confirmou explicitamente quais UCs estão em curso neste semestre):

| Repositório | Disciplina | Visibilidade | Card no site |
|---|---|---|---|
| `S086-2026-2` | S086 - Sistemas Microprocessados (2026-2) | público | visível (card "S086 - Sistemas Microprocessados") |
| `S053-2026-2` | S053 - Programação Básica — exercícios do semestre corrente (2026-2) | público (criado e publicado em 2026-09-07, antes só existia local em `C:\GitHub\S053-2026-2`) | visível (card "S053 - Programação Básica") |
| `lab-se` | Sistemas Embarcados (Lab SE) | público | **oculto** (comentado em `index.html`, não removido) — não ministrada neste semestre (confirmado pelo usuário em 2026-09-07) |
| `S122_2026-1` | Internet das Coisas — semestre 2026-1 | público | **oculto** (comentado em `index.html`, não removido) — não ministrada neste semestre (confirmado pelo usuário em 2026-09-07); repo permanece público no GitHub |
| `programacao-basica` | Programação Básica — conteúdo perene (slides, material teórico) para onde o usuário está migrando aos poucos | privado | não incluído — não linkar até o usuário tornar público (ver nota abaixo) |
| `lab-intro` | Programação Básica (labs Arduino/Wokwi/Tinkercad, versão anterior) | público | não incluído — não é a UC do semestre corrente; não confundir com `S053-2026-2` |

### Dois repositórios para Programação Básica (usuário esclareceu em 2026-09-07)
- **`S053-2026-2`** — exercícios e conteúdo do semestre corrente (aulas, código em C). É o que aparece no site.
- **`programacao-basica`** — repositório separado para onde o usuário está migrando aos poucos os slides e o conteúdo mais perene (não específico de um semestre). Continua **privado**; usuário decidiu (2026-09-07) não linká-lo ainda. Quando ele tornar esse repositório público, adicionar um segundo `card-link` dentro do mesmo card "S053 - Programação Básica" (ex.: "Exercícios" → `S053-2026-2`, "Slides/Material" → `programacao-basica`) — não criar um card separado, já que é a mesma UC.

### Achado: subsite legado de Programação Básica
`sites.google.com/view/pjm-programacao/` é um Google Sites antigo, já público, com curso completo em C (Dev-C++/GCC): sequência de aulas, vídeos incorporados e referências. Estava linkado a partir do hub `sites.google.com/view/professorjoaomiguel` (seção "Cursos") e foi usado (2026-07-23 a 2026-09-07) como link temporário do card "Programação Básica" enquanto não havia repositório GitHub público — **removido em 2026-09-07**, substituído pelo link direto para `S053-2026-2`.

O mesmo hub lista outras 3 disciplinas antigas (Robótica Industrial, Instrumentação e Sensoriamento, Microprocessadores) que **não fazem parte da grade atual** — usuário decidiu (2026-07-23) deixá-las de fora do site por serem histórico; não recriar cards para elas sem nova instrução explícita.

## Material de Apoio do Laboratório (seção `#laboratorio` em `index.html`)

Recurso **transversal**, não é uma UC: por isso tem seção própria entre as disciplinas e os atalhos, e não um card no `.grid` (as "Regras de Links para Disciplinas" não se aplicam a ele).

- **Lab Boards** — repositório público [`lab-boards`](https://github.com/professorjoaomiguel/lab-boards), publicado no GitHub Pages em `https://professorjoaomiguel.github.io/lab-boards/` (project site sob o mesmo domínio deste site). Ficha de cada placa/shield usada em aula: tensão, pinagem, como programar, testes. Páginas linkadas direto do painel: `INDEX.html` (todas as placas), `IDENTIFICAR.html` (que placa é essa?), `GLOSSARIO.html`.
- Links abrem **na mesma aba** (mesmo domínio, e o Lab Boards tem "← Site do professor" na barra do topo); repositórios no GitHub continuam em nova aba.
- O lab-boards carrega a referência visual deste repositório (`/assets/tokens.css` e `/assets/topbar.css`) — ver seção "Referência visual compartilhada" abaixo.
- Mesma lista em `llms.txt` (seção "Material de Apoio do Laboratório") e URLs em `sitemap.xml` — manter os três sincronizados.

## Referência visual compartilhada (`DESIGN.md`, `assets/tokens.css`, `assets/topbar.css`)

**Decisão do usuário (2026-10-04): toda a referência de site web fica neste repositório; os outros repositórios vêm buscar aqui.** Nenhum outro repo mantém cópia própria de cores, fonte ou barra do topo.

- `DESIGN.md` (público, servido em `/DESIGN.html` e pelo raw do GitHub) é o **contrato** para agentes de outros repositórios: arquivos, tokens, marcação da barra, princípios e regras de mudança. Detalhes ficam lá; não duplicar aqui.
- `assets/tokens.css`: variáveis de cor (claro/escuro), fonte Outfit (via `@import`), sombras, `--page-max`, `--gutter`, raios. `assets/topbar.css`: componente da barra do topo. Sites filhos carregam com caminho absoluto `/assets/...` (mesmo domínio).
- **Regra:** variáveis e classes só são adicionadas; renomear/apagar exige checar os repos consumidores (lista no topo do `DESIGN.md`, hoje: `lab-boards`). Mudar valor vale para todos de uma vez.
- **Ordem de deploy:** quando um repo filho passa a depender de um arquivo novo daqui, o push daqui sai antes.

## Navegação e padrões visuais (`index.html`)

- **Barra fixa no topo** (`.topbar`, mesmo fundo/borda da barra do Lab Boards) com âncoras: Disciplinas (`#disciplinas`), Laboratório (`#laboratorio`), Faculdade (`#faculdade`), Contato (`#contato`). Cada seção é um `<section id>` com `scroll-margin-top` para não ficar sob a barra. Abaixo de 420px a marca (foto + nome) some da barra, ficando só as seções.
- **Cabeçalho enxuto:** só o Telegram (contato principal) + link "Outros contatos"; os demais badges (Instagram, YouTube, LinkedIn, e-mail ofuscado) ficam na seção `#contato` no fim da página.
- **Card inteiro clicável:** o `.card-link` se estende sobre o card (`::after` com `inset: 0`); foco de teclado desenha o contorno no card (`:has(.card-link:focus-visible)`). Textos de link dizem a ação ("Abrir repositório da disciplina"), sem seta.
- **Sem "pulo" no hover** (nada de `translateY`): hover só muda borda/sombra. `prefers-reduced-motion` desliga transições e o scroll suave.
- **Elemento de assinatura:** a faixa de "furos metalizados" (`.lab-pins`, passo das barras de pinos) no topo do painel do laboratório. Usar com parcimônia — é o único ornamento da página.
- **Acento no modo escuro = `#818cf8`** (antes `#6366f1`, que dava ~4,1:1 sobre `#090d16`, abaixo do AA; `#818cf8` dá ~5,9:1). Mesmo valor do Lab Boards.

## Atalhos da Faculdade (seção `.shortcut-grid` em `index.html`)

Seção abaixo do grid de disciplinas com links institucionais genéricos (úteis a qualquer aluno, não específicos de uma disciplina): Portal da Faculdade SENAI, Portal do Aluno, AVA Moodle, Conta Google Institucional, Biblioteca Virtual, Pergamum. Mesma lista replicada em `llms.txt` na seção "Atalhos da Faculdade (SENAI-RS)".

**Origem:** reaproveitado do Google Sites legado `sites.google.com/view/atalhosfaculdade` (achado em 2026-07-23 durante auditoria do Linktree), que tinha esse mesmo propósito ("ponto de chegada para os alunos... acessar as diversas ferramentas e plataformas da faculdade"). Só a coluna "Estudante" (atalhos institucionais) foi trazida; a coluna "Professor" era redundante com os contatos já no site, e a seção "Introdução Automação e Mecatrônica" (link de convite de Telegram, pasta de Drive, Moodle/Classroom de uma turma específica) foi deixada de fora por ser conteúdo de disciplina específica e desatualizada.

**Correção de link:** o Google Sites legado linkava `portalaluno.fiergs.org.br` (sem "do"), que está morto (`DNS_PROBE_FINISHED_NXDOMAIN`, confirmado em 2026-07-23 no navegador real do usuário). O usuário forneceu o link correto e atual: `https://portaldoaluno.fiergs.org.br/FrameHTML/web/app/edu/PortalEducacional/login/` (com "do"). Usado esse em vez do antigo.

**Biblioteca:** o usuário confirmou que `pergamum.senairs.org.br` (raiz, sem o caminho profundo `/pergamum_senai/biblioteca/index.php` do Google Sites antigo) é o site correto da biblioteca própria do SENAI-RS. `bvirtual.com.br` é um sistema de biblioteca virtual distinto (provavelmente um serviço de terceiros usado em paralelo) — mantido também, mas não confundir os dois.

**Regra para agentes:** ao editar esta seção, manter os dois arquivos (`index.html` e `llms.txt`) sincronizados — mesma lista, mesmos links.

## Ofuscação de E-mail

O e-mail institucional aparece na página, mas **nunca em texto plano no HTML estático**. O badge de e-mail em `index.html` tem `href="#"` e um `<span>` vazio/placeholder; um pequeno script inline (antes de `</body>`) monta o endereço a partir de fragmentos de string em tempo de execução e só então preenche `href="mailto:..."` e o texto visível. Isso não é infalível contra crawlers que executam JS, mas bloqueia a maioria dos bots de coleta de e-mail que só leem o HTML bruto.

**Regra para agentes:** ao editar esse trecho, manter o padrão de montagem via array de caracteres/fragmentos — nunca reintroduzir a string `joao.roehe@senairs.org.br` diretamente no HTML, em JSON-LD, em `llms.txt`, ou em qualquer meta tag.

## Diretiva: Regenerar `assets/og-image.jpg`

A imagem de preview social (Open Graph / Twitter Card) é uma captura real (não SVG/data-URI — WhatsApp, Telegram e LinkedIn exigem uma imagem raster hospedada em URL absoluta).

**Sempre que o design do cabeçalho mudar** (nome, cores, avatar, subtítulo), regenerar a imagem:

1. Editar `assets/og-image-template.html` para refletir o novo visual (é um HTML autocontido, 100% da viewport, com o mesmo card visual do topo do site).
2. Servir localmente (ex.: `python -m http.server` na raiz de `assets/`) e abrir em um navegador.
3. Capturar um screenshot em proporção ~1.91:1 (ideal 1200×630; a versão atual foi capturada em 1512×804, que também é aceitável).
4. Sobrescrever `assets/og-image.jpg` com a nova captura.
5. Atualizar `og:image:width` / `og:image:height` (e os equivalentes `twitter:image`) em `index.html` para bater com as dimensões reais do novo arquivo.

## Licença

`LICENSE` usa **CC BY-NC-SA 4.0**. Aplica-se ao conteúdo e ao código do site; não se aplica a marcas/nome de terceiros (SENAI).

---

## 📅 Histórico de Alterações

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
- Confirmada visibilidade pública de `S086_2026-2` (`gh repo list`) e adicionado card "S086 - Sistemas Microprocessados" em `index.html` (ESP32/Arduino UNO, C/C++, simulação Wokwi) e entrada correspondente em `llms.txt`. Tabela de disciplinas e seção "Próximos Passos" atualizadas.

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
- Em paralelo, o `lab-boards` foi adequado (README voltado ao aluno, "Que placa é essa?", glossário, autoria/contatos alinhados) e publicado no GitHub Pages em `/lab-boards/` com layout que copia os tokens deste site.
- `index.html`: barra fixa de seções, cabeçalho só com Telegram, seção "Laboratório" com painel do Lab Boards (3 atalhos diretos), seção "Contato" no fim, card inteiro clicável, hover sem deslocamento, `prefers-reduced-motion`, acento escuro `#818cf8`. Detalhes em "Navegação e padrões visuais".
- `llms.txt`: seção "Material de Apoio do Laboratório". `sitemap.xml`: URLs do Lab Boards.
- Repo `S086_2026-2` renomeado para `S086-2026-2` (links atualizados no mesmo dia); `.claude/` adicionado ao `.gitignore`.
- Referência visual extraída para `assets/tokens.css` + `assets/topbar.css` + `DESIGN.md` (contrato público); `index.html` passou a carregá-los. Usuário decidiu que toda referência de site web fica neste repositório.
- `assets/og-image.jpg` **não** foi regenerado: avatar, nome, subtítulo e paleta clara do cabeçalho não mudaram.

## 🎯 Próximos Passos
- Quando `programacao-basica` (repositório de slides/conteúdo perene) for tornado público: adicionar um segundo `card-link` no card "S053 - Programação Básica" (não criar card separado — ver "Dois repositórios para Programação Básica" acima).
- Se S122 - Internet das Coisas ou Sistemas Embarcados (Lab SE) voltarem a ser ministradas em semestre futuro: descomentar o card correspondente no bloco `OCULTOS` do `.grid` em `index.html` (atualizando o repositório do semestre, se mudou) em vez de recriar do zero; adicionar de volta a entrada em `llms.txt`.
- Usuário ainda precisa decidir/atualizar manualmente o Linktree (`linktr.ee/professorjoaomiguel`) para refletir os contatos atuais (adicionar LinkedIn; já tem Telegram/Instagram/YouTube; remover ou manter canal de Telegram e Facebook descontinuados) — fora do escopo deste repositório.
