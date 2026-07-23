# Contexto de IA — professorjoaomiguel.github.io (site institucional)

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
- **Disciplinas ministradas:**
  - **S122 - Internet das Coisas** (ESP32, MicroPython, C++ Arduino, Raspberry Pi, MQTT, Node-RED, Grafana, Estufa Inteligente)
  - **Sistemas Embarcados (Lab SE)** (ESP32 UNO, MicroPython, Shield 9-em-1)
  - **Programação Básica**

## Visão Geral do Repositório

Este é o **repositório do site institucional** (GitHub Pages) para [@professorjoaomiguel](https://github.com/professorjoaomiguel).

**Objetivo do site:** ser o *ponto de chegada dos alunos*. Deve ser limpo, direto e fácil de achar as coisas — priorize clareza sobre qualquer elemento decorativo. Este repositório é irmão de [`professorjoaomiguel`](https://github.com/professorjoaomiguel/professorjoaomiguel) (perfil GitHub), que tem objetivo mais básico (bio + disciplinas); não confundir o escopo dos dois.

## Tech Stack & Design System

- **Core:** HTML5 e CSS3 puro (sem frameworks/build step).
- **JavaScript:** apenas o mínimo vanilla necessário para *progressive enhancement* pontual (hoje: montar o link de e-mail em runtime para dificultar coleta por bots). Não é uma exceção para adicionar lógica de aplicação — continua sendo um site estático.
- Dark mode automático via `prefers-color-scheme`.
- Paleta HSL (Slate & Indigo Accent), tipografia `Outfit` via Google Fonts.
- Acessibilidade: `:focus-visible`, landmarks HTML5, `aria-hidden` em ícones decorativos.
- SEO/Semântica: heading hierarchy única (`h1`), JSON-LD (Schema.org `Person`), `llms.txt`, `robots.txt`, `sitemap.xml`.

## Regras de Links para Disciplinas (IMPORTANTE)

**Nunca linkar um repositório privado como se fosse acessível.** Antes de adicionar ou reativar um card/link de disciplina, confirmar visibilidade com `gh repo view <owner>/<repo> --json visibility`.

Estado atual (checado em 2026-07-23):

| Repositório | Disciplina | Visibilidade | Card no site |
|---|---|---|---|
| `lab_se` | Sistemas Embarcados (Lab SE) | público | visível |
| `S122_2026-1` | Internet das Coisas — semestre 2026-1 | público | visível (semestre anterior; não remover sem instrução explícita do usuário) |
| `programacao-basica` | Programação Básica | **privado** | **visível**, mas o `card-link` aponta para `https://sites.google.com/view/pjm-programacao/` (material da disciplina, já público) em vez do GitHub; card tem uma nota discreta ("📦 Repositório de código no GitHub em breve") |
| `S053-2026-2` | disciplina do semestre corrente (2026-2) | ainda não publicado no GitHub | não incluído |
| `S086-2026-2` | disciplina do semestre corrente (2026-2) | ainda não publicado no GitHub | não incluído |

### Quando `programacao-basica` (GitHub) for tornado público
1. Trocar o `href` do `card-link` no card "Programação Básica" em `index.html` de `sites.google.com/view/pjm-programacao/` para `https://github.com/professorjoaomiguel/programacao-basica`, e o texto de "Acessar Material da Disciplina" para "Acessar Repositório".
2. Remover (ou manter, a critério do usuário) a `.card-note` sobre o repositório "em breve".
3. Atualizar `llms.txt` para trocar o link do Google Site pelo do GitHub, ou manter os dois se fizer sentido.
4. Atualizar a tabela acima.

### Achado: subsite legado de Programação Básica
`sites.google.com/view/pjm-programacao/` é um Google Sites antigo, já público, com curso completo em C (Dev-C++/GCC): sequência de aulas, vídeos incorporados e referências. Está linkado a partir do hub `sites.google.com/view/professorjoaomiguel` (seção "Cursos"), que por sua vez está linkado no Linktree do usuário. Usado (2026-07-23) como link temporário do card "Programação Básica" enquanto o repositório GitHub correspondente é privado — ver tabela acima.

O mesmo hub lista outras 3 disciplinas antigas (Robótica Industrial, Instrumentação e Sensoriamento, Microprocessadores) que **não fazem parte da grade atual** — usuário decidiu (2026-07-23) deixá-las de fora do site por serem histórico; não recriar cards para elas sem nova instrução explícita.

### Quando `S053-2026-2` e/ou `S086-2026-2` forem publicados e públicos
1. Confirmar visibilidade pública (`gh repo view ... --json visibility`).
2. Adicionar um novo `.card` no `.grid` de `index.html`, seguindo exatamente o padrão dos cards existentes (ícone, `h3`, `p`, `card-link`).
3. Adicionar uma entrada correspondente em `llms.txt` (mesmo formato das disciplinas existentes).
4. Avaliar com o usuário se `S122_2026-1` (semestre anterior) deve ser removido/arquivado nesse momento — não remover unilateralmente.
5. Atualizar a tabela acima.

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

## 🎯 Próximos Passos
- Quando `S053-2026-2` / `S086-2026-2` forem publicados publicamente: seguir o processo descrito em "Regras de Links para Disciplinas" acima.
- Quando `programacao-basica` (GitHub) for tornado público: trocar o link do card de Google Sites para GitHub (processo descrito acima).
- Usuário ainda precisa decidir/atualizar manualmente o Linktree (`linktr.ee/professorjoaomiguel`) para refletir os contatos atuais (adicionar LinkedIn; já tem Telegram/Instagram/YouTube; remover ou manter canal de Telegram e Facebook descontinuados) — fora do escopo deste repositório.
- `sites.google.com/view/atalhosfaculdade` (linkado a partir do hub do Google Sites, seção "Diversos") não foi explorado — avaliar depois se tem algo relevante.
