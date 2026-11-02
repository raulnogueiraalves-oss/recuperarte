/*
 * Biblioteca curada de exercícios de reabilitação (português de Portugal).
 *
 * Formato compacto: E(id, nome, sinónimos, etiquetas, passos, pistas, erros, dose, progressões, regressões, cuidados)
 *  - etiquetas: "r:joelho,anca o:forca mu:quadricipite p:pe m:nenhum n:2 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:bi"
 *    (chaves e valores definidos em taxonomia.js)
 *  - passos, pistas e erros: texto separado por "|"
 *  - progressões e regressões: ids separados por espaço
 *  - dose: ponto de partida habitual; ajustar sempre ao utente (dor, irritabilidade, objetivos).
 */
window.CLINICA = [];
window.E = function (id, nome, aka, tags, passos, pistas, erros, dose, prog, reg, cuidados) {
  var t = {};
  tags.trim().split(/\s+/).forEach(function (par) {
    var i = par.indexOf(":");
    var k = par.slice(0, i), v = par.slice(i + 1).split(",");
    t[k] = (k === "n") ? Number(v[0]) : (k === "f") ? v.map(Number) : v;
  });
  var lista = function (s) { return s ? s.split("|").map(function (x) { return x.trim(); }).filter(Boolean) : []; };
  var ids = function (s) { return s ? s.trim().split(/\s+/) : []; };
  window.CLINICA.push({
    id: id, nome: nome, aka: aka || "", src: "clinica",
    r: t.r || [], o: t.o || [], mu: t.mu || [], p: t.p || [], m: t.m || ["nenhum"],
    n: t.n || 2, f: t.f || [], ct: t.ct || [], c: t.c || [], k: t.k || [], pl: t.pl || [], l: t.l || [],
    passos: lista(passos), pistas: lista(pistas), erros: lista(erros),
    dose: dose || "", prog: ids(prog), reg: ids(reg), cuidados: cuidados || ""
  });
};
