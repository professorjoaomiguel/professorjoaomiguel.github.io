# Referência visual dos sites do Prof. João Miguel

Este repositório (`professorjoaomiguel.github.io`) é a **fonte única** da
identidade visual de todos os sites web do professor. Os outros repositórios
com site (GitHub Pages em `https://professorjoaomiguel.github.io/<repo>/`) **vêm
buscar a referência aqui** e não mantêm cópia própria de cores, fonte ou barra
do topo.

Sites que usam esta referência hoje: o site principal e o
[Lab Boards](https://professorjoaomiguel.github.io/lab-boards/) (`lab-boards`).

## Arquivos compartilhados

| Arquivo | O que tem | Como carregar num site do mesmo domínio |
|---|---|---|
| [`assets/tokens.css`](assets/tokens.css) | Cores (claro e escuro), fonte Outfit, sombras, larguras, raios | `<link rel="stylesheet" href="/assets/tokens.css">` |
| [`assets/topbar.css`](assets/topbar.css) | Barra fixa do topo (marca, seções, "← Site do professor") | `<link rel="stylesheet" href="/assets/topbar.css">` (depois do tokens) |
| [`assets/avatar.png`](assets/avatar.png) | Foto do professor (marca da barra, favicon) | `/assets/avatar.png` |

Os caminhos começam com `/` de propósito: todos os sites estão sob
`professorjoaomiguel.github.io`, então `/assets/...` sempre aponta para este
repositório. Recomenda-se também, no `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="/assets/tokens.css">
<link rel="stylesheet" href="/assets/topbar.css">
<link rel="icon" type="image/png" href="/assets/avatar.png">
```

Quem abrir o site **fora** do domínio (arquivo local, `jekyll serve`) não recebe
esses arquivos. Se isso importar, o site filho pode repetir só as variáveis que
usa como valor de reserva, ex.: `color: var(--accent, #4f46e5)`.

## Tokens

| Variável | Claro | Escuro | Uso |
|---|---|---|---|
| `--bg-primary` | `#f8fafc` | `#090d16` | fundo da página |
| `--bg-secondary` | `#ffffff` | `#111827` | cards, barras, painéis |
| `--text-primary` | `#0f172a` | `#f8fafc` | texto principal |
| `--text-secondary` | `#475569` | `#94a3b8` | texto de apoio |
| `--accent` | `#4f46e5` | `#818cf8` | links, destaques, foco |
| `--accent-light` | `#e0e7ff` | `#1e1b4b` | fundo de destaque, cabeçalho de tabela |
| `--border` | `#e2e8f0` | `#1f2937` | bordas e divisórias |
| `--code-bg` | `#f1f5f9` | `#1e293b` | fundo de código |
| `--shadow`, `--shadow-hover` | — | — | sombra de card em repouso / hover |
| `--font` | Outfit | | todo o texto |
| `--mono` | monoespaçada do sistema | | código |
| `--page-max` | `900px` | | largura do conteúdo e da barra |
| `--gutter` | `2rem` (`1rem` até 560px) | | respiro lateral |
| `--radius-lg` / `-md` / `-sm` | `16px` / `12px` / `8px` | | painéis / sub-blocos / código e imagens |

O modo escuro é **automático** (`prefers-color-scheme`); não há botão de tema.

## Barra do topo

```html
<nav class="topbar" aria-label="Navegação principal">
  <div class="topbar-inner">
    <a class="brand" href="./"><img src="/assets/avatar.png" alt="" width="28" height="28"><span>Nome do site</span></a>
    <ul class="topnav">
      <li><a href="...">Seção 1</a></li>
      <li><a href="...">Seção 2</a></li>
    </ul>
    <a class="topbar-back" href="https://professorjoaomiguel.github.io/">← Site do professor</a>
  </div>
</nav>
```

- `.topbar-back` só existe nos sites filhos (no site principal não faz sentido).
- No máximo 4 ou 5 itens em `.topnav`, com nomes curtos: no celular a barra
  precisa caber em 360px.
- A barra é `position: sticky`; seções com âncora precisam de
  `scroll-margin-top` (~4,5rem) para não ficar embaixo dela.

## Princípios

- **Clareza antes de decoração.** O público é aluno procurando material.
- **Um só ornamento por página.** No site principal é a faixa de "furos
  metalizados" do painel do laboratório; o resto é discreto.
- **Hover sem movimento:** muda borda/sombra/cor, sem `translateY`.
- **Card inteiro clicável** quando o card leva a um lugar só.
- **Links dizem a ação** ("Abrir repositório da disciplina"), sem seta.
- **Acessibilidade:** contraste AA nos dois modos, `:focus-visible` visível,
  `prefers-reduced-motion` respeitado, layout funcional em 360px.
- **Português (PT-BR)**, frases curtas, voz ativa.

## Regras para mudar esta referência

1. **Variáveis só são adicionadas.** Não renomeie nem apague uma variável de
   `tokens.css` nem uma classe de `topbar.css` sem antes procurar o nome nos
   repositórios que usam a referência (lista no topo) e ajustá-los.
2. Mudar um **valor** (ex.: uma cor) é permitido: vale para todos os sites de
   uma vez. Confira contraste nos dois modos.
3. Mudança visual aqui que exija ajuste de marcação nos sites filhos: registre
   em `.ai/context.md` e gere um prompt curto para cada repositório afetado.
4. Um repositório novo com site: carregue os arquivos acima, use a barra do
   topo e acrescente o site na lista do topo deste arquivo.

---

Autor: Prof. Me. João Miguel Lac Roehe
([@professorjoaomiguel](https://github.com/professorjoaomiguel)). Licença
[CC BY-NC-SA 4.0](LICENSE).
