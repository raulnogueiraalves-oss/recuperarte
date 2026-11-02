// Valida dados: node ferramentas/validar.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const dir = path.join(__dirname, '..', 'dados');
for (const f of ['taxonomia.js','clinica-base.js','clinica-coluna.js','clinica-msup.js','clinica-minf.js','clinica-global.js','lesoes.js'])
  if (fs.existsSync(path.join(dir,f))) vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'), ctx, {filename:f});
const W = ctx.window, T = W.TAXONOMIA, ids = new Set(), erros = [];
const fac = Object.fromEntries(T.facetas.map(f => [f.id, f.valores]));
for (const e of W.CLINICA) {
  if (ids.has(e.id)) erros.push('id duplicado ' + e.id); ids.add(e.id);
  for (const k of ['r','o','mu','p','m','n','f','ct','c','k','pl','l']) {
    const v = [].concat(e[k]); if (!v.length && !['c'].includes(k)) erros.push(`${e.id}: ${k} vazio`);
    for (const x of v) if (!(String(x) in fac[k])) erros.push(`${e.id}: ${k}=${x} inválido`);
  }
  if (!e.passos.length) erros.push(e.id + ': sem passos');
}
for (const e of W.CLINICA) for (const r of [...e.prog, ...e.reg]) if (!ids.has(r)) erros.push(`${e.id}: ligação para ${r} inexistente`);
for (const l of (W.LESOES || [])) {
  for (const r of l.r || []) if (!(r in fac.r)) erros.push(`lesão ${l.id}: região ${r}`);
  for (const ph of l.fases) for (const x of ph.ex) if (!ids.has(x)) erros.push(`lesão ${l.id}: exercício ${x} inexistente`);
}
console.log('Exercícios curados:', W.CLINICA.length, '| Lesões:', (W.LESOES||[]).length);
console.log(erros.length ? erros.join('\n') : 'Sem erros.');
process.exit(erros.length ? 1 : 0);
