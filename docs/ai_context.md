# AI Context & Project Diary - professorjoaomiguel.github.io

Este diário serve como fonte de verdade para agentes de IA (como Gemini Antigravity, Copilot, etc.) entenderem o estado do repositório do site e as decisões de engenharia tomadas recentemente.

---

## 📅 Histórico de Alterações

### 2026-05-30: Setup Inicial do Site e Otimização para IA (AI-Readiness)
- **Ação:** Criação do arquivo `index.html` estático como a Landing Page oficial do professor.
- **Escolhas de Design:**
  - Design premium minimalista usando variáveis CSS limpas e suporte completo e nativo a temas automáticos (Light/Dark Mode via `prefers-color-scheme`).
  - Paleta de cores baseada em Slate (moderna e sóbria) com acentos em Indigo.
  - Tipografia de alta legibilidade carregada via Google Fonts (`Outfit`).
  - Responsivo para dispositivos móveis e desktops.
- **Implementações Semânticas de IA:**
  - Inserido script **JSON-LD (Schema.org)** completo no cabeçalho do `index.html`, catalogando o professor, sua filiação à Faculdade de Tecnologia SENAI Porto Alegre e suas competências de ensino.
  - Criado o arquivo **`llms.txt`** na raiz do repositório como mapa semântico e guia otimizado para que agentes de IA externos leiam e resumam o site do professor de forma fidedigna.
  - Criado o arquivo de instruções de contexto compartilhado `.github/copilot-instructions.md` para guiar futuros assistentes no desenvolvimento e expansão do site estático.

---

## 🎯 Próximos Passos
- Realizar o commit e push da nova estrutura para publicar o site automaticamente no GitHub Pages (`https://professorjoaomiguel.github.io/`).
- Monitorar a correta compilação no GitHub Actions do repositório.
