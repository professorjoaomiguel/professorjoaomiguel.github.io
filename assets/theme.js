/*
 * Chave claro/escuro compartilhada — mesma chave em todos os sites do professor.
 *
 * Uso (ver DESIGN.md), no <head>, SEM defer/async (precisa rodar antes da
 * página ser pintada, senão ela pisca no tema errado):
 *   <script src="/assets/theme.js"></script>
 * e, na barra do topo, o botão (fica escondido se o JS não rodar):
 *   <button class="theme-toggle" type="button" hidden></button>
 *
 * Sem escolha salva, o site segue o sistema (prefers-color-scheme). A escolha
 * fica no localStorage do domínio: vale para todos os sites do professor.
 *
 * Autor: Prof. Me. João Miguel Lac Roehe (@professorjoaomiguel) — CC BY-NC-SA 4.0
 */
(function () {
    var KEY = 'pjm-theme';
    var root = document.documentElement;
    var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    var ICONS = {
        // Mostra o modo para onde o clique leva: lua no claro, sol no escuro.
        dark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
        light: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
    };

    function saved() {
        try {
            var value = localStorage.getItem(KEY);
            return value === 'light' || value === 'dark' ? value : null;
        } catch (e) {
            return null; // aba anônima, cookies bloqueados: segue o sistema
        }
    }

    function current() {
        return root.getAttribute('data-theme') || (media && media.matches ? 'dark' : 'light');
    }

    function paint() {
        var next = current() === 'dark' ? 'light' : 'dark';
        var label = next === 'dark' ? 'Mudar para o modo escuro' : 'Mudar para o modo claro';
        var buttons = document.querySelectorAll('.theme-toggle');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = ICONS[next];
            buttons[i].setAttribute('aria-label', label);
            buttons[i].setAttribute('title', label);
            buttons[i].hidden = false;
        }
    }

    var initial = saved();
    if (initial) root.setAttribute('data-theme', initial);

    document.addEventListener('DOMContentLoaded', function () {
        paint();
        document.addEventListener('click', function (event) {
            if (!event.target.closest || !event.target.closest('.theme-toggle')) return;
            var next = current() === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem(KEY, next); } catch (e) { /* só vale nesta página */ }
            paint();
        });
        // Sem escolha salva, o ícone acompanha o sistema se ele mudar com a página aberta.
        if (media && media.addEventListener) media.addEventListener('change', paint);
    });
})();
