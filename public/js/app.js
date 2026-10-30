(function () {
  'use strict';
  var D = window.UECE, I = window.icon, root = document.documentElement, page = document.body.dataset.page;
  var $ = function (s, r) { return (r || document).querySelector(s); };


  function setTheme(t) { root.dataset.theme = t; try { localStorage.setItem('uece-theme', t); } catch (e) {} }
  var saved; try { saved = localStorage.getItem('uece-theme'); } catch (e) {}
  setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  var links = [['./', 'Início', 'home'], ['./#setores', 'Setores', ''], ['professores', 'Professores', 'professores'], ['sobre', 'Sobre', 'sobre']];
  $('#hd').innerHTML = '<div class="wrap bar"><a class="logo" href="./"><span class="mark">' + I('mail', 18) + '</span>UECEmails</a>' +
    '<nav id="nav" aria-label="Principal">' + links.map(function (l) { return '<a href="' + l[0] + '"' + (l[2] && l[2] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('') + '</nav>' +
    '<button class="ib" id="th" aria-label="Alternar tema">' + I('moon') + I('sun') + '</button>' +
    '<button class="ib" id="bg" aria-label="Abrir menu">' + I('menu') + '</button></div>';
  $('#ft').innerHTML = '<div class="wrap"><p>&copy; 2026 UECEmails. Feito com ' + I('heart', 18) + ' por Nicolas (Shazanxz).</p><p>Agradecimentos a Deisee pela iniciativa.</p></div>';
  $('#th').onclick = function () { setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'); };
  $('#bg').onclick = function () { $('#hd').classList.toggle('open'); };
  $('#nav').onclick = function () { $('#hd').classList.remove('open'); };

  var norm = function (s) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); };
  var esc = function (s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var profs = D.professores.map(function (p) { return { n: p[0] + ' ' + p[1], s: p[2], d: p[3], l: p[1].charAt(0).toUpperCase(), g: p[1].charAt(0).toUpperCase() }; });
  var setores = D.setores.map(function (s) { return { n: s[0], s: s[2], d: s[1], l: s[0].charAt(0), g: s[3] }; });
  document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = { p: profs.length, s: setores.length }[el.dataset.count]; });

  function row(x) {
    return '<li class="row"><span class="av" aria-hidden="true">' + x.l + '</span><div class="who"><strong>' + x.n + '</strong><span>' + x.s + '</span>' + (x.d ? '<em>' + x.d + '</em>' : '') + '</div>' +
      '<div class="act"><button class="ib" data-copy="' + x.s + '" aria-label="Copiar e-mail de ' + x.n + '" title="Copiar">' + I('copy', 18) + '</button>' +
      '<button class="ib pri" data-send="' + x.s + '" aria-label="Escrever para ' + x.n + '" title="Escrever">' + I('send', 18) + '</button></div></li>';
  }
  var match = function (x, q) { return !q || norm(x.n + ' ' + x.s + ' ' + (x.d || '')).indexOf(q) > -1; };


  function mount(o) {
    var ul = $(o.ul), inp = $(o.q), cnt = $(o.cnt), box = $(o.ch), f = '*';
    var groups = o.items.map(function (x) { return x.g; }).filter(function (g, i, a) { return a.indexOf(g) === i; }).sort();
    box.innerHTML = ['*'].concat(groups).map(function (g) { return '<button class="chip" data-g="' + g + '" aria-pressed="' + (g === '*') + '">' + (g === '*' ? 'Todos' : g) + '</button>'; }).join('');
    function draw() {
      var raw = inp.value.trim(), q = norm(raw);
      var r = o.items.filter(function (x) { return (f === '*' || x.g === f) && match(x, q); });
      ul.innerHTML = r.length ? r.map(row).join('') : '<li class="empty">' + I('search', 30) + '<p>Nada encontrado para “' + esc(raw) + '”. Tente outro nome ou limpe os filtros.</p></li>';
      cnt.textContent = r.length + ' de ' + o.items.length + ' e-mails';
    }
    box.onclick = function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      f = b.dataset.g;
      box.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c === b); });
      draw();
    };
    inp.oninput = draw; draw();
  }
  if ($('#lp')) mount({ ul: '#lp', q: '#qp', cnt: '#cp', ch: '#chp', items: profs });
  if ($('#ls')) mount({ ul: '#ls', q: '#qs', cnt: '#cs', ch: '#chs', items: setores });


  var hs = $('#hs'), hr = $('#hr');
  if (hs) {
    var all = profs.concat(setores);
    hs.oninput = function () {
      var q = norm(hs.value.trim()); if (!q) { hr.hidden = true; return; }
      var r = all.filter(function (x) { return match(x, q); }).slice(0, 6);
      hr.innerHTML = r.length ? r.map(row).join('') : '<li class="empty"><p>Nada encontrado. Veja a <a href="professores">lista de professores</a>.</p></li>';
      hr.hidden = false;
    };
    document.addEventListener('click', function (e) { if (!e.target.closest('.sf')) hr.hidden = true; });
  }

  /* Escolha do provedor */
  var ov = document.createElement('div'); ov.className = 'ov'; ov.hidden = true;
  ov.innerHTML = '<div class="pk" role="dialog" aria-modal="true" aria-labelledby="pt"><div class="pkh"><div><h2 id="pt">Escrever e-mail</h2><p id="pa"></p></div><button class="ib" id="pc" aria-label="Fechar">' + I('x') + '</button></div><div class="po" id="po"></div></div>';
  document.body.appendChild(ov);
  var toast = document.createElement('div'); toast.className = 'toast'; toast.setAttribute('role', 'status'); document.body.appendChild(toast);
  var last, tt;
  function say(m) { toast.innerHTML = I('check', 18) + m; toast.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('on'); }, 2200); }
  function copy(e) {
    var done = function () { say('E-mail copiado'); };
    if (navigator.clipboard) navigator.clipboard.writeText(e).then(done, done);
    else { var t = document.createElement('textarea'); t.value = e; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); done(); }
  }
  function closePk() { ov.hidden = true; if (last) last.focus(); }
  function openPk(e) {
    var q = encodeURIComponent(e);
    var opts = [['Gmail', 'Abrir no navegador', 'https://mail.google.com/mail/?view=cm&to=' + q], ['Outlook', 'Abrir no navegador', 'https://outlook.live.com/mail/0/deeplink/compose?to=' + q], ['Yahoo Mail', 'Abrir no navegador', 'https://compose.mail.yahoo.com/?to=' + q], ['App de e-mail', 'Usar o programa do aparelho', 'mailto:' + e]];
    $('#pa').textContent = e;
    $('#po').innerHTML = opts.map(function (o) { return '<a class="opt" href="' + o[2] + '"' + (o[2].indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '') + '><span class="oi">' + I('mail', 18) + '</span><span><strong>' + o[0] + '</strong><small>' + o[1] + '</small></span></a>'; }).join('') +
      '<button class="opt" data-copy="' + e + '"><span class="oi">' + I('copy', 18) + '</span><span><strong>Copiar endereço</strong><small>Colar em qualquer lugar</small></span></button>';
    ov.hidden = false; $('#pc').focus();
  }
  $('#pc').onclick = closePk;
  ov.onclick = function (e) { if (e.target === ov) closePk(); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closePk(); if (hr) hr.hidden = true; } });
  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-copy]'), s = e.target.closest('[data-send]');
    if (c) { copy(c.dataset.copy); if (!ov.hidden) closePk(); }
    if (s) { last = s; openPk(s.dataset.send); }
  });
})();
