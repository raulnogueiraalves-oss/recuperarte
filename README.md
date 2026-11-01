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
