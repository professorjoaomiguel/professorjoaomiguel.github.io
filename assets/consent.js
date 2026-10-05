/*
 * Banner de consentimento do Google Analytics (LGPD).
 *
 * O snippet no <head> do index.html já inicia o GA4 com analytics_storage
 * "denied" e relê a escolha salva em localStorage ('pjm-consent'). Este script
 * só mostra o banner quando ainda não há escolha, grava a escolha e avisa o
 * GA (gtag consent update). "Recusar" tem o mesmo peso visual de "Aceitar".
 *
 * Uso, no <head>:
 *   <script src="/assets/consent.js" defer></script>
 * e, no rodapé, para o visitante mudar de ideia (fica escondido sem JS):
 *   <button type="button" class="consent-reopen" hidden>Preferências de privacidade</button>
 *
 * Autor: Prof. Me. João Miguel Lac Roehe (@professorjoaomiguel) — CC BY-NC-SA 4.0
 */
(function () {
    var KEY = 'pjm-consent';
    var GA_ID = 'G-P59P33Y4VV';
    var banner = null;

    var CSS =
        '.consent-banner{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:1000;' +
        'max-width:var(--page-max,900px);margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:.75rem 1.25rem;' +
        'background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);' +
        'border-radius:var(--radius-lg,16px);box-shadow:var(--shadow-hover);padding:1rem 1.25rem;' +
        'font-family:var(--font);font-size:.9rem;line-height:1.5}' +
        '.consent-banner p{flex:1 1 20rem;margin:0;color:var(--text-secondary)}' +
        '.consent-banner strong{color:var(--text-primary)}' +
        '.consent-actions{display:flex;gap:.5rem;flex:0 0 auto}' +
        '.consent-actions button{font:inherit;font-weight:600;cursor:pointer;padding:.5rem 1.1rem;' +
        'border-radius:var(--radius-sm,8px);border:1px solid var(--accent);' +
        'background:var(--accent);color:var(--bg-primary)}' +
        '.consent-actions button:hover{filter:brightness(1.1)}' +
        '.consent-banner .consent-deny{background:transparent;color:var(--accent)}' +
        '.consent-reopen{font:inherit;background:none;border:0;padding:0;cursor:pointer;' +
        'color:var(--accent);text-decoration:underline}';

    function read() {
        try {
            var v = localStorage.getItem(KEY);
            return v === 'granted' || v === 'denied' ? v : null;
        } catch (e) {
            return null;
        }
    }

    function write(v) {
        try { localStorage.setItem(KEY, v); } catch (e) { /* vale só nesta visita */ }
    }

    function clearGaCookies() {
        // Ao revogar, apaga os cookies que o GA4 já gravou (_ga e _ga_<ID>).
        var names = ['_ga', '_ga_' + GA_ID.replace('G-', '')];
        var host = location.hostname.split('.');
        var domains = [''];
        for (var i = 0; i < host.length - 1; i++) domains.push(';domain=.' + host.slice(i).join('.'));
        names.forEach(function (n) {
            domains.forEach(function (d) {
                document.cookie = n + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/' + d;
            });
        });
    }

    function apply(v) {
        write(v);
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', { analytics_storage: v });
        }
        if (v === 'denied') clearGaCookies();
        hide();
    }

    function hide() {
        if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
        banner = null;
    }

    function show() {
        if (banner) return;
        banner = document.createElement('div');
        banner.className = 'consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Consentimento de cookies');
        banner.innerHTML =
            '<p><strong>Privacidade.</strong> Este site usa o Google Analytics para medir visitas de forma ' +
            'agregada. Os cookies de análise só são gravados se você aceitar (LGPD, Lei 13.709/2018). ' +
            'Você pode mudar de ideia a qualquer momento no rodapé.</p>' +
            '<div class="consent-actions">' +
            '<button type="button" class="consent-deny">Recusar</button>' +
            '<button type="button" class="consent-allow">Aceitar</button></div>';
        banner.querySelector('.consent-deny').addEventListener('click', function () { apply('denied'); });
        banner.querySelector('.consent-allow').addEventListener('click', function () { apply('granted'); });
        document.body.appendChild(banner);
        banner.querySelector('.consent-allow').focus({ preventScroll: true });
    }

    function init() {
        var style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);

        var reopen = document.querySelectorAll('.consent-reopen');
        for (var i = 0; i < reopen.length; i++) {
            reopen[i].hidden = false;
            reopen[i].addEventListener('click', show);
        }
        if (!read()) show();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
