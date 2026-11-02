/* Biblioteca de exercícios Recuperarte — sem dependências, funciona offline (exceto as fotos da biblioteca de ginásio). */
(function () {
  "use strict";

  var T = window.TAXONOMIA, FAC = T.facetas, FACMAP = {};
  FAC.forEach(function (f) { FACMAP[f.id] = f; });
  var LESOES = window.LESOES || [];
  var IMG = window.GINASIO_IMG || "";
  var MULTI = ["r", "o", "mu", "p", "m", "f", "ct", "c", "k", "pl", "l"];
  var GRANDES = { mu: 1, m: 1 }; /* facetas com pesquisa interna e valores vazios escondidos */
  var ABERTAS_INICIAIS = { r: 1, o: 1, f: 1, src: 1 };
  var POR_PAGINA = 60;

  /* ---------- utilitários ---------- */
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var norm = function (s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); };
  var label = function (fid, v) { var f = FACMAP[fid]; return (f && f.valores[v]) || v; };
  var labels = function (fid, arr) { return (arr || []).map(function (v) { return label(fid, v); }); };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("rx_" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("rx_" + k, JSON.stringify(v)); } catch (e) { /* armazenamento indisponível */ } }
  };
  var slug = function (id) { return String(id).replace(/_/g, "-"); };
  var ARTEFACTO = !!window.RX_ARTIFACT; /* página privada do Claude: sem impressão nem transferências */
  /* Confirmação em dois cliques (confirm() não funciona em todos os contextos) */
  function confirmar(btn, msg) {
    if (btn.dataset.armed) return true;
    var orig = btn.textContent; btn.dataset.armed = "1"; btn.textContent = msg;
    setTimeout(function () { if (btn.isConnected) { delete btn.dataset.armed; btn.textContent = orig; } }, 4000);
    return false;
  }
  var toastT;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("is-on");
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("is-on"); }, 2200);
  }

  /* ---------- estado persistente ---------- */
  var favs = new Set(store.get("favs", []));
  var plano = store.get("plano", { nome: "", notas: "", itens: [] });
  var meus = store.get("meus", []);
  function saveFavs() { store.set("favs", Array.from(favs)); }
  function savePlano() { store.set("plano", plano); updatePlanoCount(); }
  function saveMeus() { store.set("meus", meus); }

  /* ---------- construção do catálogo ---------- */
  function buildGym() {
    var M = T.mapaGinasio;
    return (window.GINASIO || []).map(function (a) {
      var id = a[0], pm = a[2], sm = a[3], eq = a[4], lv = a[5], cat = a[6], force = a[7];
      var r = new Set(), mu = new Set();
      pm.forEach(function (m) { var x = M.musculo[m]; if (x) { mu.add(x.mu); x.r.forEach(function (v) { r.add(v); }); } });
      sm.forEach(function (m) { var x = M.musculo[m]; if (x) mu.add(x.mu); });
      var c = M.categoria[cat] || { o: ["forca"], f: [3], ct: "dinamica" };
      var ct = (force === "static" && cat !== "stretching") ? "isometrica" : c.ct;
      var muArr = Array.from(mu);
      return {
        id: "g_" + id, nome: a[1], aka: labels("mu", muArr).join(" · "), src: "ginasio",
        r: Array.from(r), o: c.o.slice(), mu: muArr, p: [], m: [eq ? (M.material[eq] || "outro") : "nenhum"],
        n: M.nivel[lv] || 2, f: c.f.slice(), ct: [ct], c: [], k: [], pl: [], l: [],
        passos: a[9] || [], pistas: [], erros: [], dose: "", prog: [], reg: [], cuidados: "", imgs: a[10] || []
      };
    });
  }
  function ownToEx(e) {
    var x = {}; MULTI.forEach(function (k) { x[k] = Array.isArray(e[k]) ? e[k] : []; });
    x.f = x.f.map(Number);
    return Object.assign({ aka: "", passos: [], pistas: [], erros: [], dose: "", prog: [], reg: [], cuidados: "", n: 2 }, e, x, { src: "meus" });
  }
  var GYM = buildGym(), ALL = [], BYID = {};
  function rebuild() {
    ALL = window.CLINICA.concat(meus.map(ownToEx), GYM);
    BYID = {};
    ALL.forEach(function (e) {
      BYID[e.id] = e;
      var parts = [e.nome, e.aka];
      MULTI.forEach(function (k) { [].concat(e[k]).forEach(function (v) { parts.push(label(k, v)); }); });
      parts.push(label("n", e.n));
      if (e.src !== "ginasio") parts.push(e.passos.join(" "), e.pistas.join(" "), e.cuidados);
      e._h = norm(parts.join(" | "));
      e._nome = norm(e.nome); e._aka = norm(e.aka);
    });
  }
  rebuild();

  /* Onde cada exercício aparece nas lesões */
  var USADO = {};
  LESOES.forEach(function (l) {
    l.fases.forEach(function (f, i) {
      f.ex.forEach(function (id) {
        var arr = USADO[id] || (USADO[id] = []);
        if (!arr.some(function (u) { return u.l === l; })) arr.push({ l: l, fase: i });
      });
    });
  });

  function vals(e, fid) {
    if (fid === "src") return [e.src];
    if (fid === "n") return [String(e.n)];
    return [].concat(e[fid] || []).map(String);
  }

  /* ---------- pesquisa ---------- */
  function tokenize(q) {
    var s = norm(q).trim(); var groups = [];
    Object.keys(T.sinonimosEN).forEach(function (k) {
      if (k.indexOf(" ") > -1 && s.indexOf(k) > -1) {
        s = s.replace(k, " ");
        groups.push([k].concat(T.sinonimosEN[k].split(" ")));
      }
    });
    s.split(/[\s,;]+/).filter(Boolean).forEach(function (t) {
      var syn = T.sinonimosEN[t];
      groups.push(syn ? [t].concat(syn.split(" ")) : [t]);
    });
    return groups;
  }
  function score(e, groups) {
    if (!groups.length) return 1;
    var sc = 0;
    for (var i = 0; i < groups.length; i++) {
      var g = groups[i], best = 0;
      for (var j = 0; j < g.length; j++) {
        var t = g[j];
        if (e._nome.indexOf(t) > -1) best = Math.max(best, e._nome.indexOf(t) === 0 ? 6 : 4);
        else if (e._aka.indexOf(t) > -1) best = Math.max(best, 3);
        else if (e._h.indexOf(t) > -1) best = Math.max(best, 1);
      }
      if (!best) return 0;
      sc += best;
    }
    return sc;
  }

  /* ---------- estado da vista de exercícios ---------- */
  var st = { q: "", sel: {}, sort: "relevancia", fav: false, view: store.get("view", "grid"), limit: POR_PAGINA };
  var abertas = Object.assign({}, ABERTAS_INICIAIS);
  var facFind = {};
  function stFromQuery(qs) {
    var p = new URLSearchParams(qs || "");
    st.q = p.get("q") || ""; st.sel = {}; st.fav = p.get("fav") === "1"; st.sort = p.get("sort") || "relevancia"; st.limit = POR_PAGINA;
    FAC.forEach(function (f) { var v = p.get(f.id); if (v) { st.sel[f.id] = new Set(v.split(",")); abertas[f.id] = 1; } });
  }
  function stToQuery() {
    var p = new URLSearchParams();
    if (st.q) p.set("q", st.q);
    FAC.forEach(function (f) { var s = st.sel[f.id]; if (s && s.size) p.set(f.id, Array.from(s).join(",")); });
    if (st.fav) p.set("fav", "1");
    if (st.sort !== "relevancia") p.set("sort", st.sort);
    var q = p.toString();
    return q ? "?" + q : "";
  }
  function passFacets(e, skip) {
    for (var i = 0; i < FAC.length; i++) {
      var fid = FAC[i].id; if (fid === skip) continue;
      var s = st.sel[fid]; if (!s || !s.size) continue;
      var v = vals(e, fid), ok = false;
      for (var j = 0; j < v.length; j++) if (s.has(v[j])) { ok = true; break; }
      if (!ok) return false;
    }
    return true;
  }
  function compute() {
    var groups = tokenize(st.q), base = [];
    ALL.forEach(function (e) {
      if (st.fav && !favs.has(e.id)) return;
      var s = score(e, groups); if (!s) return;
      e._s = s; base.push(e);
    });
    var counts = {};
    FAC.forEach(function (f) {
      var c = {}; base.forEach(function (e) { if (passFacets(e, f.id)) vals(e, f.id).forEach(function (v) { c[v] = (c[v] || 0) + 1; }); });
      counts[f.id] = c;
    });
    var res = base.filter(function (e) { return passFacets(e, null); });
    var srcRank = { clinica: 0, meus: 0, ginasio: 1 };
    var byName = function (a, b) { return a.nome.localeCompare(b.nome, "pt"); };
    var sorts = {
      relevancia: function (a, b) { return (b._s - a._s) || (srcRank[a.src] - srcRank[b.src]) || byName(a, b); },
      nome: byName,
      nivel: function (a, b) { return (a.n - b.n) || (srcRank[a.src] - srcRank[b.src]) || byName(a, b); },
      nivelDesc: function (a, b) { return (b.n - a.n) || (srcRank[a.src] - srcRank[b.src]) || byName(a, b); },
      fase: function (a, b) { return ((a.f[0] || 9) - (b.f[0] || 9)) || (srcRank[a.src] - srcRank[b.src]) || byName(a, b); }
    };
    res.sort(sorts[st.sort] || sorts.relevancia);
    return { res: res, counts: counts };
  }

  /* ---------- componentes ---------- */
  var SRC_NOME = { clinica: "Reabilitação", ginasio: "Ginásio · EN", meus: "Meu exercício" };
  function dots(n) { var h = '<span class="dots" title="' + esc(label("n", n)) + '" aria-label="' + esc(label("n", n)) + '">'; for (var i = 1; i <= 4; i++) h += '<i class="' + (i <= n ? "on" : "") + '"></i>'; return h + "</span>"; }
  function faseTxt(f) { if (!f || !f.length) return ""; return "Fase " + (f.length > 1 ? f[0] + "–" + f[f.length - 1] : f[0]); }
  function imgUrl(p) { return IMG + p; }
  function inPlano(id) { return plano.itens.some(function (i) { return i.id === id; }); }
  function actBtns(e) {
    return '<div class="card__acts">' +
      '<button class="mini fav' + (favs.has(e.id) ? " is-on" : "") + '" data-act="fav" data-id="' + esc(e.id) + '" aria-label="Favorito" title="Favorito">★</button>' +
      '<button class="mini' + (inPlano(e.id) ? " is-on" : "") + '" data-act="plan" data-id="' + esc(e.id) + '" aria-label="Adicionar ao plano" title="Adicionar ao plano">' + (inPlano(e.id) ? "✓" : "+") + "</button></div>";
  }
  function card(e) {
    var img = (e.imgs && e.imgs.length) ? '<div class="card__img"><img loading="lazy" src="' + esc(imgUrl(e.imgs[0])) + '" alt="" onerror="this.parentNode.remove()"></div>' : "";
    var tags = labels("r", e.r.slice(0, 2)).map(function (x) { return '<span class="tag tag--r">' + esc(x) + "</span>"; }).join("") +
      labels("o", e.o.slice(0, 2)).map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("");
    var foot = [faseTxt(e.f), labels("p", e.p.slice(0, 1))[0], labels("m", e.m.filter(function (m) { return m !== "nenhum"; }).slice(0, 1))[0]].filter(Boolean).join(" · ");
    return '<article class="card" data-open="' + esc(e.id) + '" tabindex="0" role="button" aria-label="' + esc(e.nome) + '">' + img + actBtns(e) +
      '<span class="src src--' + e.src + '">' + SRC_NOME[e.src] + "</span>" +
      "<h3>" + esc(e.nome) + "</h3>" + (e.aka ? '<p class="card__aka">' + esc(e.aka) + "</p>" : "") +
      '<div class="card__meta">' + tags + "</div>" +
      '<div class="card__foot"><span>' + esc(foot) + "</span>" + dots(e.n) + "</div></article>";
  }

  /* ---------- VISTA: EXERCÍCIOS ---------- */
  function viewExercicios(qs) {
    if (qs) stFromQuery(qs);
    st.limit = POR_PAGINA;
    var app = $("#app");
    app.innerHTML =
      '<div class="layout">' +
        '<aside class="filters" id="filters" aria-label="Filtros">' +
          '<div class="filters__head"><h2>Filtros</h2><button class="linkbtn" data-act="clear">Limpar tudo</button><button class="btn btn--quiet btn--sm only-mobile" data-act="closeFilters">Fechar</button></div>' +
          '<label class="opt" style="margin:4px 0 8px"><input type="checkbox" id="favOnly"' + (st.fav ? " checked" : "") + '><span>Só favoritos ★</span><span class="n" id="favN"></span></label>' +
          '<div id="facets"></div>' +
        "</aside>" +
        '<section aria-label="Resultados">' +
          '<div class="toolbar">' +
            '<div class="search"><input id="q" type="search" placeholder="Procurar: nome, músculo, objetivo, material… (ex.: ponte glúteo, squat)" value="' + esc(st.q) + '" aria-label="Procurar exercícios" autocomplete="off"></div>' +
            '<button class="btn btn--quiet only-mobile" data-act="openFilters">Filtros <span class="badge" id="fCount" hidden></span></button>' +
            '<select class="select" id="sort" aria-label="Ordenar">' +
              [["relevancia", "Relevância"], ["nome", "Nome A–Z"], ["fase", "Fase da reabilitação"], ["nivel", "Nível: mais fácil"], ["nivelDesc", "Nível: mais difícil"]].map(function (o) { return '<option value="' + o[0] + '"' + (st.sort === o[0] ? " selected" : "") + ">" + o[1] + "</option>"; }).join("") +
            "</select>" +
            '<button class="btn btn--quiet btn--sm" data-act="view" aria-pressed="' + (st.view === "list") + '" title="Alternar grelha/lista">' + (st.view === "list" ? "▦ Grelha" : "☰ Lista") + "</button>" +
            '<button class="btn btn--ghost btn--sm" data-act="novo">+ Novo exercício</button>' +
          "</div>" +
          '<div class="resinfo" id="resinfo"></div>' +
          '<div class="grid' + (st.view === "list" ? " is-list" : "") + '" id="grid"></div>' +
          '<div class="more" id="more"></div>' +
        "</section>" +
      "</div>" +
      '<p class="foot-note">Biblioteca curada de reabilitação (Recuperarte) + <a href="https://github.com/yuhonas/free-exercise-db" target="_blank" rel="noopener">free-exercise-db</a> (domínio público). A dose é um ponto de partida: ajuste ao utente. Atalho: <kbd>/</kbd> para procurar.</p>';
    var qEl = $("#q"), t;
    qEl.addEventListener("input", function () { clearTimeout(t); t = setTimeout(function () { st.q = qEl.value; st.limit = POR_PAGINA; updateEx(); }, 120); });
    $("#sort").addEventListener("change", function (ev) { st.sort = ev.target.value; updateEx(); });
    $("#favOnly").addEventListener("change", function (ev) { st.fav = ev.target.checked; st.limit = POR_PAGINA; updateEx(); });
    updateEx();
  }

  function renderFacets(counts) {
    var box = $("#facets"); if (!box) return;
    var h = "";
    FAC.forEach(function (f) {
      var sel = st.sel[f.id] || new Set(), c = counts[f.id] || {};
      var keys = Object.keys(f.valores);
      var find = norm(facFind[f.id] || "");
      var opts = keys.filter(function (k) {
        if (GRANDES[f.id] && !c[k] && !sel.has(k)) return false;
        if (find && norm(f.valores[k]).indexOf(find) === -1) return false;
        return true;
      }).map(function (k) {
        var n = c[k] || 0;
        return '<label class="opt' + (!n && !sel.has(k) ? " is-zero" : "") + '"><input type="checkbox" data-fac="' + f.id + '" value="' + esc(k) + '"' + (sel.has(k) ? " checked" : "") + "><span>" + esc(f.valores[k]) + '</span><span class="n">' + n + "</span></label>";
      }).join("");
      h += '<details class="facet" data-fid="' + f.id + '"' + (abertas[f.id] ? " open" : "") + "><summary>" + esc(f.nome) +
        (sel.size ? '<span class="facet__sel">' + sel.size + "</span>" : "") + '</summary><div class="facet__body">' +
        (GRANDES[f.id] ? '<input class="facet__find" data-find="' + f.id + '" placeholder="Filtrar ' + esc(f.nome.toLowerCase()) + '…" value="' + esc(facFind[f.id] || "") + '">' : "") +
        (opts || '<span class="muted small">Sem opções para a seleção atual.</span>') + "</div></details>";
    });
    var active = document.activeElement, findId = active && active.dataset && active.dataset.find, pos = findId ? active.selectionStart : 0;
    box.innerHTML = h;
    if (findId) { var el = $('[data-find="' + findId + '"]', box); if (el) { el.focus(); el.setSelectionRange(pos, pos); } }
  }

  function updateEx() {
    if (!$("#grid")) return;
    var r = compute(), res = r.res;
    renderFacets(r.counts);
    var nSel = 0, chips = "";
    FAC.forEach(function (f) { var s = st.sel[f.id]; if (s) s.forEach(function (v) { nSel++; chips += '<button class="chip chip--x" data-unsel="' + f.id + "|" + esc(v) + '" title="Remover filtro">' + esc(f.nome) + ": " + esc(f.valores[v] || v) + "</button>"; }); });
    if (st.fav) chips += '<button class="chip chip--x" data-act="unfav">Só favoritos</button>';
    $("#resinfo").innerHTML = "<strong>" + res.length.toLocaleString("pt-PT") + " exercício" + (res.length === 1 ? "" : "s") + "</strong>" + chips +
      ((nSel || st.q || st.fav) ? '<button class="linkbtn" data-act="clear">Limpar</button>' : "");
    var fc = $("#fCount"); if (fc) { fc.textContent = nSel; fc.hidden = !nSel; }
    $("#favN").textContent = favs.size;
    var shown = res.slice(0, st.limit);
    $("#grid").innerHTML = shown.length ? shown.map(card).join("") :
      '<div class="empty" style="grid-column:1/-1"><p><strong>Nenhum exercício encontrado.</strong></p><p>Tente remover um filtro ou usar outro termo. Também pode <button class="linkbtn" data-act="novo">criar um exercício novo</button>.</p></div>';
    $("#more").innerHTML = res.length > st.limit ? '<button class="btn btn--quiet" data-act="more">Mostrar mais (' + (res.length - st.limit) + ")</button>" : "";
  }

  /* ---------- DETALHE ---------- */
  function attrRow(nome, arr) { return arr && arr.length ? "<div><dt>" + esc(nome) + "</dt><dd>" + esc(arr.join(", ")) + "</dd></div>" : ""; }
  function exLinks(ids) {
    return ids.filter(function (i) { return BYID[i]; }).map(function (i) { return '<button class="chip" data-open="' + esc(i) + '">' + esc(BYID[i].nome) + "</button>"; }).join("");
  }
  function openDetail(id) {
    var e = BYID[id], d = $("#detalhe"); if (!e) { toast("Exercício não encontrado."); return; }
    var usados = USADO[id] || [];
    var prog = exLinks(e.prog), reg = exLinks(e.reg);
    var reverseProg = window.CLINICA.filter(function (x) { return x.reg.indexOf(id) > -1 && e.prog.indexOf(x.id) === -1; }).map(function (x) { return x.id; });
    var reverseReg = window.CLINICA.filter(function (x) { return x.prog.indexOf(id) > -1 && e.reg.indexOf(x.id) === -1; }).map(function (x) { return x.id; });
    prog += exLinks(reverseProg); reg += exLinks(reverseReg);
    var yt = "https://www.youtube.com/results?search_query=" + encodeURIComponent(e.nome + (e.src === "ginasio" ? " exercise" : " exercício fisioterapia"));
    d.innerHTML =
      '<div class="sheet__head"><div><span class="src src--' + e.src + '">' + SRC_NOME[e.src] + '</span><h2 id="detalheTitulo">' + esc(e.nome) + "</h2>" +
        (e.aka ? '<p class="muted small" style="margin:.2em 0 0">' + esc(e.aka) + "</p>" : "") + "</div>" +
        '<button class="icon-btn x" data-act="closeDlg" aria-label="Fechar">✕</button></div>' +
      '<div class="sheet__body">' +
        '<div class="acts">' +
          '<button class="btn btn--sm" data-act="plan" data-id="' + esc(e.id) + '">' + (inPlano(e.id) ? "✓ No plano" : "+ Adicionar ao plano") + "</button>" +
          '<button class="btn btn--quiet btn--sm" data-act="fav" data-id="' + esc(e.id) + '">' + (favs.has(e.id) ? "★ Favorito" : "☆ Favorito") + "</button>" +
          '<a class="btn btn--quiet btn--sm" href="' + yt + '" target="_blank" rel="noopener">▶ Procurar vídeo</a>' +
          (e.src === "meus" ? '<button class="btn btn--quiet btn--sm" data-act="editar" data-id="' + esc(e.id) + '">Editar</button><button class="btn btn--quiet btn--sm" data-act="apagar" data-id="' + esc(e.id) + '">Apagar</button>' : "") +
          (e.src !== "ginasio" ? '<button class="btn btn--quiet btn--sm" data-act="duplicar" data-id="' + esc(e.id) + '">Duplicar e adaptar</button>' : "") +
        "</div>" +
        (e.imgs && e.imgs.length ? '<div class="gallery">' + e.imgs.map(function (p) { return '<img loading="lazy" src="' + esc(imgUrl(p)) + '" alt="' + esc(e.nome) + '" onerror="this.remove()">'; }).join("") + "</div>" : "") +
        '<dl class="attrs">' +
          attrRow("Região", labels("r", e.r)) + attrRow("Objetivo", labels("o", e.o)) + attrRow("Músculos / estruturas", labels("mu", e.mu)) +
          attrRow("Posição", labels("p", e.p)) + attrRow("Material", labels("m", e.m)) + attrRow("Nível", [label("n", e.n)]) +
          attrRow("Fase", labels("f", e.f)) + attrRow("Contração", labels("ct", e.ct)) + attrRow("Cadeia cinética", labels("c", e.c)) +
          attrRow("Carga", labels("k", e.k)) + attrRow("Plano", labels("pl", e.pl)) + attrRow("Lateralidade", labels("l", e.l)) +
        "</dl>" +
        '<div class="cols"><div>' +
          (e.passos.length ? "<h3>Como fazer" + (e.src === "ginasio" ? ' <span class="muted small">(original em inglês)</span>' : "") + '</h3><ol class="steps">' + e.passos.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" : "") +
          (e.pistas.length ? '<h3>Pistas para o utente</h3><ul class="list">' + e.pistas.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
          (e.erros.length ? '<h3>Erros comuns</h3><ul class="list">' + e.erros.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
        "</div><div>" +
          (e.dose ? '<div class="box box--dose"><h3>Dose de partida</h3><p>' + esc(e.dose) + "</p></div>" : "") +
          (e.cuidados ? '<div class="box box--warn"><h3>Cuidados</h3><p style="margin:0">' + esc(e.cuidados) + "</p></div>" : "") +
          (reg ? '<div class="box"><h3>↓ Regressões (mais fácil)</h3><div class="links">' + reg + "</div></div>" : "") +
          (prog ? '<div class="box"><h3>↑ Progressões (mais difícil)</h3><div class="links">' + prog + "</div></div>" : "") +
          (usados.length ? '<div class="box"><h3>Usado nos planos de</h3><div class="links">' + usados.map(function (u) { return '<a class="chip" href="#lesao-' + slug(u.l.id) + '" data-act="closeDlg">' + esc(u.l.nome) + "</a>"; }).join("") + "</div></div>" : "") +
        "</div></div>" +
      "</div>";
    if (!d.open) d.showModal();
    d.scrollTop = 0; var b = $(".sheet__body", d); if (b) b.scrollTop = 0;
  }

  /* ---------- VISTA: LESÕES ---------- */
  var lst = { q: "", r: "" };
  function viewLesoes(id) {
    var app = $("#app");
    if (id) return viewLesao(id);
    var regs = []; LESOES.forEach(function (l) { l.r.forEach(function (r) { if (regs.indexOf(r) === -1) regs.push(r); }); });
    var ordem = Object.keys(FACMAP.r.valores); regs.sort(function (a, b) { return ordem.indexOf(a) - ordem.indexOf(b); });
    app.innerHTML = '<div class="wrap"><div class="intro"><h1>Pesquisa por lesão</h1><p class="muted">' + LESOES.length +
      " condições com plano por fases, critérios de progressão, sinais de alarme e referências. Cada fase liga aos exercícios da biblioteca e pode ser adicionada ao plano do utente com um clique.</p></div>" +
      '<div class="search" style="max-width:640px"><input id="lq" type="search" placeholder="Procurar lesão ou sinónimo (ex.: LCA, fasceíte, tennis elbow, ciática)" value="' + esc(lst.q) + '" aria-label="Procurar lesão" autocomplete="off"></div>' +
      '<div class="regionbar" role="group" aria-label="Filtrar por região"><button data-reg="" aria-pressed="' + (!lst.r) + '">Todas</button>' +
      regs.map(function (r) { return '<button data-reg="' + r + '" aria-pressed="' + (lst.r === r) + '">' + esc(label("r", r)) + "</button>"; }).join("") + "</div>" +
      '<div class="lgrid" id="lgrid"></div></div>';
    var q = $("#lq");
    q.addEventListener("input", function () { lst.q = q.value; renderLesoes(); });
    renderLesoes();
  }
  function renderLesoes() {
    var t = norm(lst.q).split(/\s+/).filter(Boolean);
    var res = LESOES.filter(function (l) {
      if (lst.r && l.r.indexOf(lst.r) === -1) return false;
      var h = norm(l.nome + " " + l.aka + " " + l.resumo);
      return t.every(function (x) { return h.indexOf(x) > -1; });
    });
    $("#lgrid").innerHTML = res.length ? res.map(function (l) {
      var n = 0; l.fases.forEach(function (f) { n += f.ex.length; });
      return '<a class="lcard" href="#lesao-' + slug(l.id) + '"><div class="card__meta">' + labels("r", l.r).map(function (x) { return '<span class="tag tag--r">' + esc(x) + "</span>"; }).join("") + "</div><h3>" + esc(l.nome) + "</h3><p>" + esc(l.resumo) + '</p><span class="muted small">' + l.fases.length + " fases · " + n + " exercícios</span></a>";
    }).join("") : '<div class="empty" style="grid-column:1/-1">Nenhuma lesão encontrada. Experimente outro termo ou procure diretamente na biblioteca de exercícios.</div>';
  }
  function viewLesao(id) {
    var l = LESOES.filter(function (x) { return x.id === id || slug(x.id) === id; })[0], app = $("#app");
    if (!l) { app.innerHTML = '<div class="wrap"><a class="back" href="#lesoes">← Todas as lesões</a><p>Lesão não encontrada.</p></div>'; return; }
    app.innerHTML = '<div class="wrap"><a class="back" href="#lesoes">← Todas as lesões</a>' +
      '<div class="lhead"><div><div class="card__meta" style="margin-bottom:8px">' + labels("r", l.r).map(function (x) { return '<span class="tag tag--r">' + esc(x) + "</span>"; }).join("") + "</div>" +
        "<h1>" + esc(l.nome) + '</h1><p class="muted small">' + esc(l.aka) + '</p><p class="lead">' + esc(l.resumo) + "</p>" +
        '<div class="box"><h3>Princípios de tratamento</h3><ul class="list">' + l.principios.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="acts"><button class="btn" data-act="faseAll" data-l="' + l.id + '">+ Adicionar o programa completo ao plano</button></div>' +
      "</div><div>" +
        '<div class="box box--warn"><h3>Sinais de alarme / excluir</h3><ul class="list">' + l.alarmes.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="box"><h3>Medidas de resultado</h3><p style="margin:0">' + esc(l.medidas) + "</p></div>" +
      "</div></div>" +
      '<h2>Programa por fases</h2><p class="muted small">Progredir por critérios, não pelo calendário. As durações são indicativas.</p>' +
      '<div class="phases">' + l.fases.map(function (f, i) {
        return '<section class="phase"><div class="phase__head"><h3>' + esc(f.t) + '</h3><span class="tag">' + esc(f.dur) + "</span>" +
          '<button class="btn btn--sm btn--ghost" data-act="fase" data-l="' + l.id + '" data-i="' + i + '">+ Fase ao plano</button></div>' +
          '<div class="phase__body"><div><h3 class="small muted">OBJETIVOS</h3><ul class="list">' + f.obj.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
          '<div><h3 class="small muted">CRITÉRIOS PARA PROGREDIR</h3><ul class="list crit">' + f.crit.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
          (f.evitar ? '<p class="small"><span class="chip chip--warn">Evitar</span> ' + esc(f.evitar) + "</p>" : "") + "</div>" +
          '<div class="phase__ex"><h3 class="small muted">EXERCÍCIOS</h3><div class="exrow">' + f.ex.map(function (x) {
            var e = BYID[x]; if (!e) return "";
            return '<div class="exmini" data-open="' + x + '" role="button" tabindex="0"><span>' + esc(e.nome) + "</span>" + dots(e.n) +
              '<button class="mini' + (inPlano(x) ? " is-on" : "") + '" data-act="plan" data-id="' + x + '" aria-label="Adicionar ao plano">' + (inPlano(x) ? "✓" : "+") + "</button></div>";
          }).join("") + "</div></div></div></section>";
      }).join("") + "</div>" +
      '<h2 style="margin-top:28px">Referências</h2><ol class="refs">' + l.refs.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol>" +
      '<p class="muted small">Conteúdo de apoio à decisão clínica. Não substitui a avaliação individual nem os protocolos do cirurgião/equipa.</p></div>';
    window.scrollTo(0, 0);
  }

  /* ---------- VISTA: PLANO ---------- */
  function addPlano(id, silent) {
    if (inPlano(id)) { if (!silent) { plano.itens = plano.itens.filter(function (i) { return i.id !== id; }); savePlano(); toast("Removido do plano"); } return false; }
    plano.itens.push({ id: id, series: "", reps: "", freq: "", nota: "" }); savePlano();
    if (!silent) toast("Adicionado ao plano (" + plano.itens.length + ")");
    return true;
  }
  function updatePlanoCount() { var b = $("#planoCount"); b.textContent = plano.itens.length; b.hidden = !plano.itens.length; }
  function viewPlano() {
    var app = $("#app");
    var itens = plano.itens.filter(function (i) { return BYID[i.id]; });
    app.innerHTML = '<div class="wrap"><div class="plan"><div>' +
      '<h1>Plano de exercícios</h1><p class="muted">' + (ARTEFACTO ? "Defina a dose, reorganize e copie o plano como texto para enviar ao utente." : "Defina a dose, reorganize e imprima uma folha clara para o utente (ou guarde em PDF).") + '</p>' +
      (itens.length ? itens.map(function (it, idx) {
        var e = BYID[it.id];
        return '<div class="pitem" data-idx="' + idx + '"><div class="pitem__n">' + (idx + 1) + "</div><div>" +
          '<h3><a href="#" data-open="' + esc(e.id) + '">' + esc(e.nome) + "</a></h3>" +
          (e.dose ? '<p class="muted small" style="margin:-2px 0 6px">Sugestão (usada se deixar a dose em branco): ' + esc(e.dose) + "</p>" : "") +
          '<div class="pitem__dose"><label>Séries<input data-k="series" value="' + esc(it.series) + '" placeholder="ex.: 3"></label>' +
          '<label>Repetições / tempo<input data-k="reps" value="' + esc(it.reps) + '" placeholder="ex.: 10 ou 30 s"></label>' +
          '<label>Frequência<input data-k="freq" value="' + esc(it.freq) + '" placeholder="ex.: 1×/dia"></label></div>' +
          '<textarea data-k="nota" placeholder="Nota para o utente (opcional)" aria-label="Nota">' + esc(it.nota) + "</textarea></div>" +
          '<div class="pitem__ctl"><button class="mini" data-act="up" aria-label="Subir">↑</button><button class="mini" data-act="down" aria-label="Descer">↓</button><button class="mini" data-act="rm" aria-label="Remover">✕</button></div></div>';
      }).join("") : '<div class="empty"><p><strong>O plano está vazio.</strong></p><p>Use o botão <strong>+</strong> nos exercícios ou adicione uma fase completa a partir de uma <a href="#lesoes">lesão</a>.</p><a class="btn" href="#exercicios">Explorar exercícios</a></div>') +
      '</div><aside class="side">' +
        '<div class="box stack"><label class="field">Utente (opcional)<input id="pNome" value="' + esc(plano.nome) + '" placeholder="Nome ou iniciais"></label>' +
        '<label class="field">Indicações gerais<textarea id="pNotas" rows="4" placeholder="ex.: Fazer os exercícios com dor até 3/10. Parar se agravar no dia seguinte.">' + esc(plano.notas) + "</textarea></label>" +
        '<p class="muted small" style="margin:0">Os dados ficam só neste navegador; nada é enviado para nenhum servidor.</p></div>' +
        '<div class="box stack">' + (ARTEFACTO ? "" : '<button class="btn" data-act="print"' + (itens.length ? "" : " disabled") + '>Imprimir / guardar PDF</button>') +
        '<button class="btn btn--quiet" data-act="copy"' + (itens.length ? "" : " disabled") + '>Copiar como texto (email/WhatsApp)</button>' +
        '<button class="btn btn--quiet" data-act="clearPlan"' + (itens.length ? "" : " disabled") + '>Limpar plano</button></div>' +
        '<div class="box stack"><h3>Os meus exercícios</h3><p class="small muted" style="margin:0">' + meus.length + ' criados por si. Faça cópia de segurança ou passe-os para outro computador.</p>' +
        '<button class="btn btn--quiet btn--sm" data-act="exportar">' + (ARTEFACTO ? "Copiar cópia de segurança (JSON)" : "Exportar (JSON)") + '</button><label class="btn btn--quiet btn--sm">Importar<input type="file" id="importar" accept="application/json" hidden></label></div>' +
      "</aside></div></div>";
    $("#pNome").addEventListener("input", function (ev) { plano.nome = ev.target.value; savePlano(); });
    $("#pNotas").addEventListener("input", function (ev) { plano.notas = ev.target.value; savePlano(); });
    $$(".pitem [data-k]").forEach(function (inp) {
      inp.addEventListener("input", function () { var idx = +inp.closest(".pitem").dataset.idx; plano.itens[idx][inp.dataset.k] = inp.value; savePlano(); });
    });
    $("#importar").addEventListener("change", importar);
  }
  function doseTxt(it, e) {
    var p = [];
    if (it.series) p.push(it.series + (/s[eé]ries?/i.test(it.series) ? "" : " séries"));
    if (it.reps) p.push(it.reps);
    if (it.freq) p.push(it.freq);
    return p.length ? p.join(" · ") : e.dose;
  }
  function imprimir() {
    var hoje = new Date().toLocaleDateString("pt-PT");
    var itens = plano.itens.filter(function (i) { return BYID[i.id]; });
    $("#impressao").innerHTML = '<div class="pr-head"><div><h1>Plano de exercícios</h1>' + (plano.nome ? "<div>" + esc(plano.nome) + "</div>" : "") + "</div><div>Recuperarte · " + hoje + "</div></div>" +
      (plano.notas ? '<p class="pr-note">' + esc(plano.notas) + "</p>" : "") +
      itens.map(function (it, i) {
        var e = BYID[it.id];
        return '<div class="pr-ex"><div><h2>' + (i + 1) + ". " + esc(e.nome) + "</h2>" +
          '<div class="pr-dose">' + esc(doseTxt(it, e)) + "</div>" +
          "<ol>" + e.passos.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" +
          (e.pistas.length ? "<div><strong>Dicas:</strong> " + esc(e.pistas.join(" · ")) + "</div>" : "") +
          (it.nota ? '<div class="pr-note">' + esc(it.nota) + "</div>" : "") + "</div>" +
          (e.imgs && e.imgs.length ? '<img src="' + esc(imgUrl(e.imgs[0])) + '" alt="">' : "<span></span>") + "</div>";
      }).join("") +
      '<div class="pr-foot">Pare e contacte o seu fisioterapeuta se sentir dor intensa ou que piora no dia seguinte, formigueiro, perda de força, tonturas ou falta de ar.</div>';
    setTimeout(function () { window.print(); }, 150);
  }
  function copiar() {
    var itens = plano.itens.filter(function (i) { return BYID[i.id]; });
    var txt = "PLANO DE EXERCÍCIOS" + (plano.nome ? " — " + plano.nome : "") + "\n" + (plano.notas ? plano.notas + "\n" : "") + "\n" +
      itens.map(function (it, i) {
        var e = BYID[it.id];
        return (i + 1) + ". " + e.nome + "\n   " + doseTxt(it, e) + "\n" + e.passos.map(function (p) { return "   - " + p; }).join("\n") + (it.nota ? "\n   Nota: " + it.nota : "");
      }).join("\n\n");
    var ok = function () { toast("Texto copiado"); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, function () { fallbackCopy(txt); });
    else fallbackCopy(txt);
  }
  function fallbackCopy(txt) {
    var ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast("Texto copiado"); } catch (e) { toast("Não foi possível copiar"); }
    ta.remove();
  }

  /* ---------- EDITOR: os meus exercícios ---------- */
  function openEditor(base, editId) {
    var d = $("#editor"), e = base || { nome: "", aka: "", r: [], o: [], mu: [], p: [], m: [], f: [], ct: [], c: [], k: [], pl: [], l: [], n: 2, passos: [], pistas: [], erros: [], dose: "", cuidados: "" };
    var checks = function (fid) {
      var f = FACMAP[fid];
      return '<div class="field">' + esc(f.nome) + '<div class="checks">' + Object.keys(f.valores).map(function (k) {
        var on = [].concat(e[fid] || []).map(String).indexOf(String(k)) > -1;
        return '<label><input type="checkbox" name="' + fid + '" value="' + esc(k) + '"' + (on ? " checked" : "") + ">" + esc(f.valores[k]) + "</label>";
      }).join("") + "</div></div>";
    };
    d.innerHTML = '<form method="dialog" id="fEd"><div class="sheet__head"><h2 id="editorTitulo">' + (editId ? "Editar exercício" : "Novo exercício") + '</h2><button class="icon-btn x" type="button" data-act="closeDlg" aria-label="Fechar">✕</button></div>' +
      '<div class="sheet__body"><div class="formgrid"><label class="field">Nome *<input name="nome" required value="' + esc(e.nome) + '"></label>' +
      '<label class="field">Sinónimos / termos de pesquisa<input name="aka" value="' + esc(e.aka) + '"></label></div>' +
      checks("r") + checks("o") + '<details class="facet"><summary>Músculos, posição, material e outras etiquetas</summary>' +
      checks("mu") + checks("p") + checks("m") + checks("ct") + checks("c") + checks("k") + checks("pl") + checks("l") + "</details>" +
      '<div class="formgrid"><label class="field">Nível<select name="n">' + [1, 2, 3, 4].map(function (n) { return '<option value="' + n + '"' + (e.n === n ? " selected" : "") + ">" + esc(label("n", n)) + "</option>"; }).join("") + "</select></label>" + checks("f") + "</div>" +
      '<label class="field">Passos (um por linha) *<textarea name="passos" rows="5" required>' + esc(e.passos.join("\n")) + "</textarea></label>" +
      '<div class="formgrid"><label class="field">Pistas (uma por linha)<textarea name="pistas" rows="3">' + esc(e.pistas.join("\n")) + "</textarea></label>" +
      '<label class="field">Erros comuns (um por linha)<textarea name="erros" rows="3">' + esc(e.erros.join("\n")) + "</textarea></label></div>" +
      '<div class="formgrid"><label class="field">Dose de partida<input name="dose" value="' + esc(e.dose) + '"></label>' +
      '<label class="field">Cuidados<input name="cuidados" value="' + esc(e.cuidados) + '"></label></div>' +
      '<div class="acts"><button class="btn" type="submit">Guardar</button><button class="btn btn--quiet" type="button" data-act="closeDlg">Cancelar</button></div>' +
      '<p class="muted small">Guardado neste navegador. Use "Exportar" na página do Plano para fazer cópia de segurança.</p></div></form>';
    $("#fEd").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var fd = new FormData(ev.target), lines = function (k) { return String(fd.get(k) || "").split("\n").map(function (s) { return s.trim(); }).filter(Boolean); };
      var x = { id: editId || ("meu_" + Date.now().toString(36)), nome: String(fd.get("nome")).trim(), aka: String(fd.get("aka") || "").trim(),
        n: Number(fd.get("n")) || 2, passos: lines("passos"), pistas: lines("pistas"), erros: lines("erros"), dose: String(fd.get("dose") || ""), cuidados: String(fd.get("cuidados") || ""), prog: [], reg: [] };
      MULTI.forEach(function (k) { x[k] = fd.getAll(k).map(String); });
      x.f = x.f.map(Number); if (!x.m.length) x.m = ["nenhum"];
      var i = meus.findIndex(function (m) { return m.id === x.id; });
      if (i > -1) meus[i] = x; else meus.unshift(x);
      saveMeus(); rebuild(); d.close(); toast("Exercício guardado");
      route(); setTimeout(function () { openDetail(x.id); }, 50);
    });
    if ($("#detalhe").open) $("#detalhe").close();
    d.showModal();
  }
  function exportar() {
    var json = JSON.stringify({ versao: 1, exportado: new Date().toISOString(), exercicios: meus, favoritos: Array.from(favs) }, null, 2);
    if (ARTEFACTO) {
      var ok = function () { toast("Cópia de segurança copiada. Cole-a num ficheiro .json para guardar."); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(json).then(ok, function () { fallbackCopy(json); });
      else fallbackCopy(json);
      return;
    }
    var blob = new Blob([JSON.stringify({ versao: 1, exportado: new Date().toISOString(), exercicios: meus, favoritos: Array.from(favs) }, null, 2)], { type: "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "meus-exercicios-recuperarte.json"; a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }
  function importar(ev) {
    var f = ev.target.files && ev.target.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try {
        var data = JSON.parse(r.result), lista = Array.isArray(data) ? data : (data.exercicios || []), n = 0;
        lista.forEach(function (x) {
          if (!x || !x.nome || !x.id) return;
          x.id = String(x.id).indexOf("meu_") === 0 ? x.id : "meu_" + x.id;
          var i = meus.findIndex(function (m) { return m.id === x.id; });
          if (i > -1) meus[i] = x; else meus.push(x); n++;
        });
        (data.favoritos || []).forEach(function (id) { favs.add(id); }); saveFavs();
        saveMeus(); rebuild(); toast(n + " exercício(s) importado(s)"); route();
      } catch (e) { toast("Ficheiro inválido"); }
    };
    r.readAsText(f);
  }

  /* ---------- eventos globais ---------- */
  function refreshAfterToggle() {
    var h = location.hash.replace(/^#/, "");
    if ($("#grid")) updateEx();
    else if (h.indexOf("lesao-") === 0) { var y = window.scrollY; viewLesao(h.slice(6)); window.scrollTo(0, y); }
  }
  document.addEventListener("click", function (ev) {
    var t = ev.target;
    var act = t.closest("[data-act]");
    if (act) {
      var a = act.dataset.act, id = act.dataset.id;
      if (a === "fav") { ev.preventDefault(); ev.stopPropagation(); if (favs.has(id)) favs.delete(id); else favs.add(id); saveFavs(); toast(favs.has(id) ? "Adicionado aos favoritos" : "Removido dos favoritos"); refreshAfterToggle(); if ($("#detalhe").open && BYID[id]) openDetail(id); return; }
      if (a === "plan") { ev.preventDefault(); ev.stopPropagation(); addPlano(id); refreshAfterToggle(); if ($("#detalhe").open && BYID[id]) openDetail(id); return; }
      if (a === "closeDlg") { var dl = act.closest("dialog"); if (dl) dl.close(); if (act.tagName !== "A") ev.preventDefault(); return; }
      if (a === "clear") { st.q = ""; st.sel = {}; st.fav = false; var q = $("#q"); if (q) q.value = ""; var fo = $("#favOnly"); if (fo) fo.checked = false; updateEx(); return; }
      if (a === "unfav") { st.fav = false; $("#favOnly").checked = false; updateEx(); return; }
      if (a === "more") { st.limit += POR_PAGINA; updateEx(); return; }
      if (a === "view") { st.view = st.view === "list" ? "grid" : "list"; store.set("view", st.view); $("#grid").classList.toggle("is-list", st.view === "list"); act.textContent = st.view === "list" ? "▦ Grelha" : "☰ Lista"; act.setAttribute("aria-pressed", st.view === "list"); return; }
      if (a === "openFilters") { $("#filters").classList.add("is-open"); var s = document.createElement("div"); s.className = "scrim"; s.dataset.act = "closeFilters"; document.body.appendChild(s); return; }
      if (a === "closeFilters") { var f = $("#filters"); if (f) f.classList.remove("is-open"); $$(".scrim").forEach(function (x) { x.remove(); }); return; }
      if (a === "novo") { openEditor(null, null); return; }
      if (a === "editar") { openEditor(meus.filter(function (m) { return m.id === id; })[0], id); return; }
      if (a === "duplicar") { var b = JSON.parse(JSON.stringify(BYID[id])); b.nome = b.nome + " (adaptado)"; openEditor(b, null); return; }
      if (a === "apagar") { if (confirmar(act, "Clique de novo para apagar")) { meus = meus.filter(function (m) { return m.id !== id; }); saveMeus(); plano.itens = plano.itens.filter(function (i) { return i.id !== id; }); savePlano(); rebuild(); $("#detalhe").close(); route(); toast("Exercício apagado"); } return; }
      if (a === "fase" || a === "faseAll") {
        var l = LESOES.filter(function (x) { return x.id === act.dataset.l; })[0], n = 0;
        var fases = a === "fase" ? [l.fases[+act.dataset.i]] : l.fases;
        fases.forEach(function (f) { f.ex.forEach(function (x) { if (BYID[x] && addPlano(x, true)) n++; }); });
        toast(n ? n + " exercício(s) adicionados ao plano" : "Já estavam todos no plano"); refreshAfterToggle(); return;
      }
      if (a === "up" || a === "down" || a === "rm") {
        var idx = +act.closest(".pitem").dataset.idx;
        if (a === "rm") plano.itens.splice(idx, 1);
        else { var j = a === "up" ? idx - 1 : idx + 1; if (j < 0 || j >= plano.itens.length) return; var tmp = plano.itens[idx]; plano.itens[idx] = plano.itens[j]; plano.itens[j] = tmp; }
        savePlano(); viewPlano(); return;
      }
      if (a === "print") { imprimir(); return; }
      if (a === "copy") { copiar(); return; }
      if (a === "clearPlan") { if (confirmar(act, "Clique de novo para limpar")) { plano.itens = []; savePlano(); viewPlano(); } return; }
      if (a === "exportar") { exportar(); return; }
    }
    var un = t.closest("[data-unsel]");
    if (un) { var p = un.dataset.unsel.split("|"); st.sel[p[0]].delete(p[1]); updateEx(); return; }
    var reg = t.closest("[data-reg]");
    if (reg) { lst.r = reg.dataset.reg; $$(".regionbar button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.reg === lst.r); }); renderLesoes(); return; }
    var op = t.closest("[data-open]");
    if (op) { ev.preventDefault(); openDetail(op.dataset.open); return; }
  });
  document.addEventListener("change", function (ev) {
    var c = ev.target;
    if (c.dataset && c.dataset.fac) {
      var s = st.sel[c.dataset.fac] || (st.sel[c.dataset.fac] = new Set());
      if (c.checked) s.add(c.value); else s.delete(c.value);
      st.limit = POR_PAGINA; updateEx();
    }
  });
  document.addEventListener("input", function (ev) {
    var f = ev.target.dataset && ev.target.dataset.find;
    if (f) { facFind[f] = ev.target.value; updateEx(); }
  });
  document.addEventListener("toggle", function (ev) {
    var d = ev.target; if (d.classList && d.classList.contains("facet") && d.dataset.fid) { if (d.open) abertas[d.dataset.fid] = 1; else delete abertas[d.dataset.fid]; }
  }, true);
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !document.querySelector("dialog[open]")) { var q = $("#q") || $("#lq"); if (q) { ev.preventDefault(); q.focus(); } }
    if ((ev.key === "Enter" || ev.key === " ") && document.activeElement && document.activeElement.matches("[data-open][role=button]")) { ev.preventDefault(); openDetail(document.activeElement.dataset.open); }
  });
  $$("dialog").forEach(function (d) { d.addEventListener("click", function (ev) { if (ev.target === d) d.close(); }); });

  /* Tema */
  var tema = store.get("tema", "");
  function aplicaTema() { if (tema) document.documentElement.setAttribute("data-theme", tema); else document.documentElement.removeAttribute("data-theme"); }
  aplicaTema();
  $("#tema").addEventListener("click", function () {
    var escuro = tema ? tema === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    tema = escuro ? "light" : "dark"; store.set("tema", tema); aplicaTema();
  });

  /* ---------- router ---------- */
  function route() {
    var h = location.hash.replace(/^#/, "");
    /* endereços antigos (#/lesoes/lca, #/plano, #/exercicios?r=joelho) */
    if (h.charAt(0) === "/") {
      var qi = h.indexOf("?"), path = (qi > -1 ? h.slice(0, qi) : h).slice(1), qs = qi > -1 ? h.slice(qi + 1) : "";
      var pp = path.split("/");
      if (qs) stFromQuery(qs);
      if (pp[0] === "ex" && pp[1]) { h = "exercicios"; setTimeout(function () { openDetail(decodeURIComponent(pp[1])); }, 0); }
      else h = pp[0] === "lesoes" && pp[1] ? "lesao-" + slug(pp[1]) : pp[0];
      history.replaceState(null, "", "#" + (h || "exercicios"));
    }
    var tab = h === "lesoes" || h.indexOf("lesao-") === 0 ? "lesoes" : h === "plano" ? "plano" : "exercicios";
    $$(".tabs a").forEach(function (a) { a.classList.toggle("is-on", a.dataset.tab === tab); a.setAttribute("aria-current", a.dataset.tab === tab ? "page" : "false"); });
    $$(".scrim").forEach(function (x) { x.remove(); });
    if (tab === "lesoes") viewLesoes(h.indexOf("lesao-") === 0 ? h.slice(6) : "");
    else if (tab === "plano") viewPlano();
    else viewExercicios("");
    document.title = (tab === "lesoes" ? "Lesões" : tab === "plano" ? "Plano" : "Exercícios") + " · Recuperarte";
  }
  window.addEventListener("hashchange", route);
  updatePlanoCount();
  route();
})();
