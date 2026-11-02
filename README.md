# Recuperarte — site da clínica

Site estático (HTML, CSS e JavaScript, sem dependências) para a clínica Recuperarte:
fisioterapia, osteopatia, pilates clínico, ortopedia, terapia da fala, podologia, nutrição e psicologia.

## Ver localmente

Abra o `index.html` no navegador.

## O que falta personalizar

Procure por `EDITAR` no `index.html`:

| Onde | O quê |
|---|---|
| Equipa | Nomes, funções, n.º de cédula profissional e fotografias (troque o `NA` por `<img src="assets/img/nome.jpg" alt="">`) |
| Acordos | Seguradoras e subsistemas com que a clínica trabalha |
| Contacto | Morada, telefone, email e horário |
| Mapa | `src` do iframe (Google Maps → Partilhar → Incorporar um mapa) |
| Rodapé | Nome da empresa, NIF, n.º de registo e licença na ERS |
| WhatsApp | Número em `assets/js/main.js` (constante `WHATSAPP`) e no botão flutuante (`https://wa.me/...`) |

## Formulário de marcação

Não precisa de servidor: ao enviar, abre o WhatsApp com a mensagem já escrita para o número da clínica.

## Publicar

- **GitHub Pages**: Settings → Pages → Source: branch `main`, pasta `/ (root)`.
- Alternativas gratuitas: Netlify ou Cloudflare Pages (arrastar a pasta).
- Para usar um domínio próprio (ex.: `recuperarte.pt`), configure-o nas definições do serviço escolhido.

## Biblioteca de exercícios (`/exercicios/`)

Ferramenta para o fisioterapeuta (não está ligada no menu do site e tem `noindex`). Abra `exercicios/index.html`
ou, depois de publicado, `https://<site>/exercicios/`.

- **Exercícios**: cerca de 1 050 exercícios com filtros combinados (região, objetivo, músculo, posição, material,
  nível, fase da reabilitação, tipo de contração, cadeia cinética, carga, plano, lateralidade e fonte).
  Dentro de cada filtro as opções somam-se (OU); entre filtros diferentes restringem (E). Os números mostram quantos resultados ficam.
  - 169 exercícios de reabilitação escritos em português, com passos, pistas, erros comuns, dose de partida, cuidados,
    progressões e regressões.
  - 876 exercícios de ginásio com fotografias, do [free-exercise-db](https://github.com/yuhonas/free-exercise-db)
    (domínio público). Os nomes e instruções estão em inglês, mas a pesquisa em português também os encontra
    (ex.: "agachamento" → squat).
  - Favoritos, "os meus exercícios" (criar, duplicar e adaptar, exportar/importar JSON).
- **Lesões**: 35 condições com resumo, sinais de alarme, princípios, medidas de resultado, programa por fases
  (objetivos, critérios para progredir, exercícios) e guidelines de referência.
- **Plano**: junte exercícios (ou fases inteiras de uma lesão), defina a dose e imprima/guarde em PDF uma folha para o utente
  ou copie como texto.

Favoritos, plano e exercícios próprios ficam apenas no navegador (localStorage), nada é enviado para servidores.

### Editar os dados

- Exercícios curados: `exercicios/dados/clinica-*.js` (formato descrito em `clinica-base.js`).
- Lesões: `exercicios/dados/lesoes.js`.
- Filtros e etiquetas: `exercicios/dados/taxonomia.js`.
- Validar depois de editar: `node exercicios/ferramentas/validar.js`.
- Atualizar a biblioteca de ginásio: `python3 exercicios/ferramentas/gerar_ginasio.py exercises.json`.
