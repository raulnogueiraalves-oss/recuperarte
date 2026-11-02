/* Ombro, cotovelo, punho e mão. */

/* ---------- OMBRO: mobilidade ---------- */
E("omb_pendular", "Pendular de Codman", "pêndulo, exercício pendular",
  "r:ombro o:mobilidade mu:coifa,deltoide p:pe m:nenhum,banco n:1 f:1 ct:assistida c:aberta k:sem pl:multi l:uni",
  "Apoie a mão boa numa mesa e incline o tronco à frente.|Deixe o braço afetado pendurado e relaxado.|Balance o corpo para criar pequenos círculos e movimentos de vai-vem com o braço.|O movimento nasce do tronco, não do ombro.",
  "Braço totalmente relaxado, como uma corda|Círculos pequenos, aumentando com o conforto",
  "Fazer o movimento com os músculos do ombro|Inclinar pouco o tronco",
  "1–2 min, várias vezes por dia", "omb_flex_bastao omb_mesa", "", "Habitual no pós-operatório inicial; respeitar sempre o protocolo do cirurgião.");

E("omb_flex_bastao", "Flexão ativa-assistida com bastão", "elevação assistida com bastão, AAROM",
  "r:ombro o:mobilidade mu:deltoide,coifa p:dd m:bastao n:1 f:1,2 ct:assistida c:aberta k:sem pl:sagital l:uni",
  "Deitado de costas, segure um bastão com as duas mãos à largura dos ombros.|Use o braço bom para levar o bastão acima da cabeça.|O braço afetado acompanha passivamente.|Desça devagar.",
  "Deitado é mais fácil e seguro do que de pé|Pare ao primeiro aumento claro da dor",
  "Arquear a lombar para ganhar amplitude|Encolher os ombros",
  "2 × 10–15, 2–3×/dia", "omb_mesa omb_wall_slide", "omb_pendular", "");

E("omb_re_bastao", "Rotação externa assistida com bastão", "rotação externa AAROM, stick ER",
  "r:ombro o:mobilidade mu:coifa p:dd,pe m:bastao n:1 f:1,2 ct:assistida c:aberta k:sem pl:transversal l:uni",
  "Deitado de costas, cotovelo do braço afetado junto ao corpo e fletido a 90° (uma toalha sob o cotovelo).|Segure o bastão com as duas mãos.|Com o braço bom, empurre o bastão para rodar o braço afetado para fora.|Volte devagar.",
  "O cotovelo fica colado ao corpo|Movimento lento",
  "Afastar o cotovelo do tronco|Forçar além do limite permitido",
  "2 × 10–15, 2–3×/dia", "omb_re_elastico", "omb_pendular", "Após reparação da coifa ou estabilização anterior, a rotação externa costuma ter limites definidos pelo cirurgião.");

E("omb_mesa", "Deslizamento à mesa", "table slide, elevação assistida sentado",
  "r:ombro o:mobilidade mu:deltoide,serratil p:sent m:banco,bolapeq n:1 f:1,2 ct:assistida c:fechada k:parcial pl:sagital l:uni",
  "Sentado junto a uma mesa, mão do braço afetado sobre uma toalha.|Deslize a mão para a frente, inclinando o tronco à frente.|Volte devagar.",
  "Deixe o tronco fazer parte do trabalho|Ombro relaxado",
  "Encolher o ombro|Fazer depressa",
  "2 × 10–15", "omb_wall_slide", "omb_pendular", "");

E("omb_wall_slide", "Deslizamento na parede", "wall slide, elevação na parede",
  "r:ombro o:mobilidade,controlo mu:serratil,trapinf p:pe m:parede,bolapeq n:2 f:2 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "De frente para a parede, antebraços apoiados na parede (pode usar uma toalha ou rolo).|Deslize os braços para cima, deixando as omoplatas rodar.|Afaste ligeiramente da parede no topo, mantenha 2 s e desça.",
  "Omoplatas a rodar à volta do tórax|Pescoço longo",
  "Arquear a lombar|Encolher os ombros",
  "3 × 10", "omb_prone_y", "omb_mesa", "");

E("omb_cross_body", "Alongamento da cápsula posterior (braço cruzado)", "cross-body stretch, adução horizontal",
  "r:ombro o:flexibilidade mu:coifa,deltoide p:pe,dl m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:transversal l:uni",
  "Leve o braço afetado à frente do peito.|Com a outra mão, puxe suavemente o cotovelo em direção ao ombro oposto.|Estabilize a omoplata (pode fazer deitado sobre o lado afetado para fixar a omoplata).",
  "Tensão atrás do ombro|Ombro em baixo",
  "Rodar o tronco|Dor à frente do ombro (compressão): reduzir amplitude",
  "3 × 30 s", "omb_sleeper", "", "");

E("omb_sleeper", "Sleeper stretch", "alongamento em decúbito lateral para rotação interna",
  "r:ombro o:flexibilidade mu:coifa p:dl m:nenhum n:2 f:2 ct:alongamento c:aberta k:sem pl:transversal l:uni",
  "Deitado sobre o lado afetado, ombro e cotovelo a 90°.|Com a outra mão, empurre suavemente o antebraço em direção ao chão (rotação interna).|Role ligeiramente o tronco para trás (cerca de 20–30°) para diminuir a compressão.",
  "Pressão suave e sustentada|Não deve haver dor à frente do ombro",
  "Forçar para chegar ao chão|Deixar a omoplata deslizar",
  "3 × 30 s", "", "omb_cross_body", "Usar com cautela: evitar em instabilidade posterior.");

E("omb_ri_toalha", "Rotação interna com toalha atrás das costas", "hand behind back, toalha",
  "r:ombro o:mobilidade,flexibilidade mu:coifa,deltoide p:pe m:bolapeq n:1 f:2 ct:assistida c:aberta k:sem pl:multi l:uni",
  "Segure uma toalha atrás das costas: braço bom em cima, braço afetado em baixo.|Puxe a toalha para cima com o braço bom, levando a mão afetada ao longo das costas.|Mantenha 5–10 s e desça.",
  "Movimento lento|Tronco direito",
  "Inclinar o tronco à frente|Puxar com força",
  "10 repetições", "", "", "");

/* ---------- OMBRO: isometria e força ---------- */
E("omb_iso_re", "Isometria de rotação externa", "isometria rotadores externos contra a parede",
  "r:ombro o:forca mu:coifa p:pe m:parede,bolapeq n:1 f:1,2 ct:isometrica c:aberta k:sem pl:transversal l:uni",
  "De lado para a parede, cotovelo a 90°, junto ao corpo, com uma toalha entre o cotovelo e o tronco.|Empurre com as costas da mão contra a parede, como se rodasse o braço para fora, sem mexer.|Mantenha e relaxe.",
  "Intensidade com dor ≤ 3/10|Toalha entre o braço e o corpo ajuda a recrutar o infraespinhoso",
  "Empurrar com o corpo|Encolher o ombro",
  "5 × 30–45 s ou 10 × 10 s", "omb_re_elastico", "", "Isometrias são boas para começar a carregar ombros irritáveis.");

E("omb_iso_ri", "Isometria de rotação interna", "isometria subescapular",
  "r:ombro o:forca mu:coifa,peitoral p:pe m:parede n:1 f:1,2 ct:isometrica c:aberta k:sem pl:transversal l:uni",
  "De pé, junto ao canto de uma porta, cotovelo a 90° junto ao corpo.|Empurre a palma contra a ombreira, como se rodasse o braço para dentro, sem movimento.|Mantenha e relaxe.",
  "Contração progressiva, sem picos|Ombro em baixo",
  "Afastar o cotovelo|Suster a respiração",
  "5 × 30 s ou 10 × 10 s", "omb_ri_elastico", "", "");

E("omb_iso_abd", "Isometria de abdução", "isometria deltoide/supraespinhoso",
  "r:ombro o:forca mu:deltoide,coifa p:pe m:parede n:1 f:1,2 ct:isometrica c:aberta k:sem pl:frontal l:uni",
  "De lado para a parede, braço junto ao corpo e cotovelo fletido.|Empurre o cotovelo contra a parede, para fora, sem movimento.|Mantenha e relaxe.",
  "Esforço submáximo|Postura direita",
  "Inclinar o tronco|Encolher o ombro",
  "5 × 30 s", "omb_abd_escapular", "", "");

E("omb_re_elastico", "Rotação externa com elástico", "ER com banda, cotovelo junto ao tronco",
  "r:ombro o:forca mu:coifa,trapmed p:pe m:elastico n:2 f:2,3 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Elástico ancorado à altura do cotovelo; fique de lado para a ancoragem.|Cotovelo a 90° colado ao corpo (toalha enrolada entre os dois).|Rode o antebraço para fora, afastando-o do abdómen.|Volte devagar em 3 s.",
  "Pulso direito|Fase de regresso lenta",
  "Afastar o cotovelo do corpo|Rodar o tronco para ajudar",
  "3 × 12–15", "omb_re_dl omb_re_90", "omb_iso_re", "");

E("omb_ri_elastico", "Rotação interna com elástico", "IR com banda",
  "r:ombro o:forca mu:coifa,peitoral p:pe m:elastico n:2 f:2,3 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Elástico ancorado à altura do cotovelo, do lado do braço a trabalhar.|Cotovelo a 90° junto ao corpo.|Rode o antebraço para dentro em direção ao abdómen.|Volte devagar.",
  "Ombro neutro, não enrolado à frente|Movimento controlado",
  "Fletir o tronco|Afastar o cotovelo",
  "3 × 12–15", "", "omb_iso_ri", "");

E("omb_re_dl", "Rotação externa em decúbito lateral com halter", "side-lying ER",
  "r:ombro o:forca mu:coifa p:dl m:halter n:2 f:3 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Deitado sobre o lado não afetado, toalha enrolada entre o cotovelo e o tronco.|Cotovelo a 90°, halter na mão.|Rode o braço para cima até perto da vertical.|Desça devagar.",
  "Um dos exercícios com maior ativação do infraespinhoso|Cotovelo fixo",
  "Rodar o tronco para trás|Carga excessiva com compensações",
  "3 × 10–15", "omb_re_90", "omb_re_elastico", "");

E("omb_re_90", "Rotação externa a 90° de abdução", "ER 90/90 com elástico, posição de lançamento",
  "r:ombro o:forca mu:coifa,trapinf p:pe m:elastico,cabo n:3 f:3,4 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Elástico ancorado à frente, à altura do ombro.|Braço a 90° de abdução e cotovelo a 90°.|Rode o braço para trás até o antebraço ficar vertical.|Volte controlando.",
  "Cotovelo à altura do ombro|Omoplata estável",
  "Deixar o cotovelo descer|Arquear a lombar",
  "3 × 10–15", "omb_plio_parede omb_lanc_90", "omb_re_elastico", "Fundamental em desportos de lançamento; introduzir só sem dor nesta posição.");

E("omb_abd_escapular", "Elevação no plano da omoplata (full can)", "scaption, elevação a 30° à frente",
  "r:ombro o:forca mu:coifa,deltoide,serratil p:pe m:halter,elastico n:2 f:2,3 ct:dinamica c:aberta k:sem pl:multi l:uni",
  "De pé, braços ao lado do corpo, polegares para cima.|Eleve os braços cerca de 30° à frente do plano frontal (plano da omoplata) até à altura dos ombros.|Desça devagar.",
  "Polegar para cima (full can), nunca para baixo|Comece só com o peso do braço",
  "Encolher os ombros|Inclinar o tronco para trás",
  "3 × 10–15", "omb_press", "omb_iso_abd omb_flex_bastao", "");

E("omb_remada", "Remada com elástico", "row com banda, retração escapular resistida",
  "r:ombro,toracica o:forca mu:trapmed,dorsal,deltoide p:pe,sent m:elastico,cabo n:2 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Elástico ancorado à frente, à altura do peito.|Puxe os cotovelos para trás junto ao corpo, aproximando as omoplatas.|Mantenha 1–2 s e volte devagar.",
  "Peito aberto|Primeiro as omoplatas, depois os braços",
  "Encolher os ombros|Inclinar o tronco para trás",
  "3 × 12–15", "omb_remada_halter", "omb_retracao", "");

E("omb_remada_halter", "Remada unilateral com halter", "one-arm row",
  "r:ombro,toracica o:forca mu:dorsal,trapmed,bicipite p:pe m:halter,banco n:3 f:3 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Apoie a mão e o joelho num banco, costas planas.|Puxe o halter em direção à anca, cotovelo junto ao corpo.|Desça controlando até esticar o braço.",
  "Costas planas como uma mesa|Pense em levar o cotovelo ao bolso",
  "Rodar o tronco|Puxar só com o bicípite",
  "3 × 8–12", "", "omb_remada", "");

E("omb_retracao", "Retração escapular", "aproximar as omoplatas, setting escapular",
  "r:ombro,toracica o:controlo mu:trapmed,trapinf p:sent,pe m:nenhum n:1 f:1,2 ct:isometrica c:aberta k:sem pl:frontal l:bi",
  "Sentado direito, braços relaxados.|Leve as omoplatas ligeiramente para trás e para baixo, como se as guardasse nos bolsos de trás.|Mantenha 5 s e relaxe.",
  "Contração suave|Pescoço relaxado",
  "Arquear a lombar|Apertar com força máxima",
  "10 × 5 s", "omb_remada omb_prone_t", "", "");

E("omb_prone_y", "Y em decúbito ventral", "prone Y, trapézio inferior",
  "r:ombro,toracica o:forca,controlo mu:trapinf,coifa p:dv m:nenhum,halter n:3 f:3 ct:dinamica c:aberta k:sem pl:multi l:bi",
  "Deitado de barriga para baixo (ou inclinado num banco), testa apoiada numa toalha.|Braços estendidos à frente em Y, polegares para cima.|Eleve os braços do chão, levando as omoplatas para baixo e para trás.|Desça devagar.",
  "Pense em afastar os ombros das orelhas|Amplitude pequena chega",
  "Levantar a cabeça|Encolher os ombros",
  "3 × 10", "", "omb_wall_slide omb_prone_t", "");

E("omb_prone_t", "T em decúbito ventral", "prone T, abdução horizontal",
  "r:ombro,toracica o:forca,controlo mu:trapmed,deltoide p:dv m:nenhum,halter n:2 f:3 ct:dinamica c:aberta k:sem pl:transversal l:bi",
  "Deitado de barriga para baixo, braços abertos em T, polegares para cima.|Eleve os braços aproximando as omoplatas.|Desça devagar.",
  "Omoplatas em direção à coluna|Pescoço neutro",
  "Arquear a lombar|Movimentos bruscos",
  "3 × 10", "omb_prone_y", "omb_retracao", "");

E("omb_punch", "Punch serrátil em decúbito dorsal", "serratus punch, protração resistida",
  "r:ombro o:forca,controlo mu:serratil p:dd m:halter,nenhum n:1 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Deitado de costas, braço esticado para o teto (com ou sem halter).|Leve a mão mais para o teto, afastando a omoplata do chão, sem dobrar o cotovelo.|Desça a omoplata devagar.",
  "Movimento curto: só a omoplata|Cotovelo esticado",
  "Rodar o tronco|Dobrar o cotovelo",
  "3 × 15", "omb_pushup_parede", "", "");

E("omb_pushup_parede", "Flexão na parede com plus", "wall push-up plus",
  "r:ombro o:forca,controlo mu:serratil,peitoral,tricipite p:pe m:parede n:1 f:2,3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "De frente para a parede, mãos à altura dos ombros.|Dobre os cotovelos aproximando o peito da parede.|Empurre de volta e, no fim, empurre um pouco mais afastando as omoplatas (o 'plus').",
  "Corpo em linha reta|O 'plus' é afastar as omoplatas uma da outra",
  "Deixar a cabeça ir à frente|Encolher os ombros",
  "3 × 10–15", "omb_pushup_plus omb_quad_toque", "omb_punch", "");

E("omb_pushup_plus", "Flexão de braços com plus", "push-up plus no chão",
  "r:ombro,core o:forca mu:serratil,peitoral,tricipite p:dv,quad m:nenhum n:3 f:3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "Posição de flexão (pode ser apoiado nos joelhos).|Desça o peito ao chão com os cotovelos a cerca de 45° do tronco.|Suba e, no topo, empurre mais afastando as omoplatas.",
  "Prancha sólida durante todo o movimento|Cotovelos não abertos a 90°",
  "Afundar a lombar|Omoplatas 'aladas'",
  "3 × 8–12", "", "omb_pushup_parede", "");

E("omb_quad_toque", "Estabilidade em quatro apoios com toque alternado", "CKC, closed kinetic chain shoulder, toque no ombro",
  "r:ombro,core o:controlo,equilibrio mu:serratil,coifa p:quad,dv m:nenhum,instavel n:2 f:2,3 ct:isometrica c:fechada k:parcial pl:multi l:uni",
  "Em quatro apoios (ou prancha alta, mais difícil).|Levante uma mão e toque no ombro oposto, sem deixar o tronco rodar.|Alterne.|Progrida para superfície instável ou prancha alta.",
  "Empurre o chão com a mão de apoio|Bacia estável",
  "Afundar entre as omoplatas|Rodar a bacia",
  "3 × 10 toques por lado", "omb_plio_parede", "omb_pushup_parede", "");

E("omb_press", "Press de ombros com halteres", "overhead press, desenvolvimento",
  "r:ombro o:forca mu:deltoide,tricipite,serratil p:sent,pe m:halter n:3 f:3 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Sentado ou de pé, halteres à altura dos ombros, palmas viradas uma para a outra ou para a frente.|Empurre para cima até estender os braços.|Desça controlando.",
  "Costelas em baixo, sem arquear|Antebraços verticais",
  "Arquear a lombar|Elevar os ombros para as orelhas",
  "3 × 8–12", "", "omb_abd_escapular", "Introduzir quando a elevação acima da cabeça for indolor e controlada.");

E("omb_plio_parede", "Pliometria com bola contra a parede", "ball dribble, pliometria de ombro",
  "r:ombro o:potencia,controlo mu:coifa,deltoide p:pe m:bolapeq,bolamed n:4 f:4 ct:pliometrica c:aberta k:sem pl:multi l:uni",
  "De frente para a parede, braço esticado à altura do ombro.|Faça ressaltar uma bola pequena contra a parede, em toques rápidos.|Progrida para a posição de 90° de abdução e para círculos.",
  "Toques rápidos e curtos|Omoplata estável",
  "Perder a postura com a fadiga|Fazer com dor",
  "3 × 20–30 s", "omb_lanc_90", "omb_re_90", "");

E("omb_lanc_90", "Lançamento e receção 90/90 com bola medicinal", "plyo 90/90, deceleração excêntrica",
  "r:ombro o:potencia mu:coifa,trapinf p:pe,dv m:bolamed n:4 f:4 ct:pliometrica c:aberta k:sem pl:transversal l:uni",
  "Braço em 90° de abdução e 90° de cotovelo, com uma bola medicinal leve (0,5–1 kg).|Deixe cair/receba a bola, desacelerando a rotação externa, e lance de volta rapidamente.|Variante em decúbito ventral: largar e apanhar a bola com o braço fora da marquesa.",
  "Receção suave, absorvendo a carga|Explosivo no lançamento",
  "Perder a posição a 90°|Começar com bola pesada",
  "3 × 10–15", "", "omb_plio_parede", "Etapa final antes do regresso ao lançamento.");

/* ---------- COTOVELO ---------- */
E("cot_flex_ext", "Flexão-extensão ativa do cotovelo", "AROM cotovelo",
  "r:cotovelo o:mobilidade mu:bicipite,tricipite p:sent,dd m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Sentado, braço apoiado.|Dobre e estique o cotovelo o mais possível, devagar.|Para mais extensão, pode deixar o antebraço pender com o braço apoiado na mesa.",
  "Mantenha 3–5 s no fim de cada direção|Ombro relaxado",
  "Compensar com o ombro|Forçar com dor intensa",
  "2 × 15, 3×/dia", "cot_pronosup", "", "");

E("cot_pronosup", "Pronação-supinação com martelo", "rotação do antebraço",
  "r:cotovelo,punho o:mobilidade,forca mu:antebraco,bicipite p:sent m:outro,halter n:2 f:2,3 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Sentado, antebraço apoiado numa mesa, cotovelo a 90° junto ao corpo.|Segure um martelo (ou halter seguro por uma ponta).|Rode a palma para cima e para baixo devagar.|Quanto mais longe da cabeça segurar, mais difícil.",
  "Cotovelo junto ao corpo|Movimento lento, sobretudo no regresso",
  "Rodar o ombro em vez do antebraço|Peso demasiado longe da mão",
  "3 × 10–15", "", "cot_flex_ext", "");

E("cot_iso_ext_punho", "Isometria dos extensores do punho", "isometria para epicondilalgia lateral",
  "r:cotovelo,punho o:forca mu:antebraco p:sent m:halter,nenhum n:1 f:1,2 ct:isometrica c:aberta k:sem pl:sagital l:uni",
  "Sentado, antebraço apoiado na mesa, palma para baixo e mão fora da mesa.|Com o cotovelo estendido ou fletido, mantenha o punho em posição neutra contra resistência (a outra mão ou um halter).|Mantenha sem movimento.",
  "Dor ≤ 3/10 durante, sem agravar no dia seguinte|Pode ser feito com o cotovelo fletido para começar",
  "Fazer força com o ombro|Suster a respiração",
  "5 × 30–45 s", "cot_exc_ext_punho", "", "");

E("cot_exc_ext_punho", "Extensão do punho com ênfase excêntrica", "excêntrico extensores do punho, epicondilalgia",
  "r:cotovelo,punho o:forca mu:antebraco p:sent m:halter,elastico n:2 f:2,3 ct:excentrica c:aberta k:sem pl:sagital l:uni",
  "Antebraço apoiado, palma para baixo, mão fora da mesa, com um halter leve.|Use a outra mão para levar o punho para cima (extensão).|Retire a ajuda e desça o halter devagar em 3–5 s.|Progrida para fazer também a subida sem ajuda (concêntrico-excêntrico).",
  "Descida lenta e controlada|Aumente a carga quando a dor estabilizar",
  "Deixar o halter cair|Fazer com o cotovelo sem apoio",
  "3 × 15, 1×/dia, 6–12 semanas", "cot_tyler", "cot_iso_ext_punho", "Dor ligeira durante o exercício é aceitável (≤ 3–4/10) se não aumentar no dia seguinte.");

E("cot_tyler", "Tyler twist com FlexBar", "FlexBar, barra flexível excêntrica",
  "r:cotovelo,punho o:forca mu:antebraco p:pe,sent m:outro n:3 f:3 ct:excentrica c:aberta k:sem pl:transversal l:uni",
  "Segure a FlexBar na vertical com a mão afetada em extensão máxima do punho, na parte de baixo.|Com a outra mão, segure a parte de cima e torça a barra (flexão do punho).|Estenda os braços à frente mantendo a torção.|Deixe a mão afetada desenrolar devagar a barra (excêntrico).",
  "A mão afetada controla o desenrolar|Velocidade lenta",
  "Desenrolar com a mão boa|Fletir os cotovelos",
  "3 × 15, diariamente", "", "cot_exc_ext_punho", "");

E("cot_flex_punho", "Flexão do punho com halter", "fortalecimento flexores do punho, epicondilalgia medial",
  "r:cotovelo,punho o:forca mu:antebraco p:sent m:halter n:2 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Antebraço apoiado na mesa, palma para cima, mão fora.|Desça o halter devagar deixando o punho estender.|Volte a fletir o punho.",
  "Descida de 3 s|Antebraço sempre apoiado",
  "Levantar o antebraço|Rodar o punho",
  "3 × 15", "", "", "");

E("cot_curl", "Flexão do cotovelo (curl) com halter", "bicipite curl",
  "r:cotovelo,ombro o:forca mu:bicipite,antebraco p:pe,sent m:halter,elastico n:2 f:3 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "De pé, halter na mão, palma para a frente.|Dobre o cotovelo levando o halter ao ombro.|Desça devagar.",
  "Cotovelo junto ao corpo|Sem balanço do tronco",
  "Balançar o tronco|Elevar o cotovelo",
  "3 × 10–12", "", "cot_flex_ext", "");

E("cot_tricipite", "Extensão do cotovelo com elástico", "tricipite pushdown",
  "r:cotovelo,ombro o:forca mu:tricipite p:pe m:elastico,cabo n:2 f:3 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Elástico ancorado em cima.|Cotovelos junto ao corpo, a 90°.|Estenda os cotovelos até esticar os braços.|Volte devagar.",
  "Só o antebraço se mexe|Ombros em baixo",
  "Afastar os cotovelos do corpo|Inclinar o tronco",
  "3 × 12–15", "", "cot_flex_ext", "");

E("cot_along_ext", "Alongamento dos extensores do punho", "alongamento epicondilianos",
  "r:cotovelo,punho o:flexibilidade mu:antebraco p:pe,sent m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:sagital l:uni",
  "Braço estendido à frente, palma para baixo.|Com a outra mão, flita o punho e os dedos para baixo.|Mantenha.",
  "Tensão no dorso do antebraço|Cotovelo esticado",
  "Fazer com dor aguda|Puxar bruscamente",
  "3 × 30 s", "", "", "");

/* ---------- PUNHO E MÃO ---------- */
E("pun_flex_ext", "Flexão-extensão ativa do punho", "AROM punho",
  "r:punho o:mobilidade mu:antebraco p:sent m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Antebraço apoiado numa mesa, mão fora.|Leve a mão para cima e para baixo, devagar.|Faça com os dedos relaxados e depois com a mão fechada.",
  "Amplitude máxima confortável|Mantenha 3 s no fim",
  "Levantar o antebraço|Fazer depressa",
  "2 × 15, 3–4×/dia", "pun_desvios pun_carga", "", "");

E("pun_desvios", "Desvio radial e cubital", "inclinação lateral do punho",
  "r:punho o:mobilidade mu:antebraco p:sent m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:frontal l:uni",
  "Antebraço apoiado na mesa, palma para baixo.|Deslize a mão para o lado do polegar e depois para o lado do dedo mínimo.",
  "O antebraço não se mexe|Movimento só no punho",
  "Rodar o antebraço|Fletir o punho",
  "2 × 15", "", "pun_flex_ext", "");

E("pun_tendinoso", "Deslizamento tendinoso dos dedos", "tendon gliding, sequência de 5 posições",
  "r:punho o:mobilidade mu:mao,antebraco p:sent m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Comece com a mão aberta e os dedos esticados.|Posições: mão de gancho (dobrar só as pontas), punho completo, mão de mesa (dobrar só na base, dedos esticados), punho direito (dobrar base e meio, pontas esticadas).|Volte sempre à mão aberta entre cada posição.",
  "Movimentos lentos e completos|Mantenha cada posição 3–5 s",
  "Saltar posições|Punho em flexão (deixe-o neutro)",
  "5–10 repetições de cada sequência, 3–5×/dia", "pun_preensao", "", "Muito usado na síndrome do túnel cárpico e após imobilização da mão.");

E("pun_preensao", "Preensão de bola", "grip, apertar bola anti-stress",
  "r:punho o:forca mu:mao,antebraco p:sent m:bolapeq n:1 f:2,3 ct:isometrica c:aberta k:sem pl:sagital l:uni",
  "Segure uma bola macia ou plasticina na palma da mão.|Aperte com força moderada e mantenha 3–5 s.|Abra completamente a mão.",
  "Abrir totalmente entre repetições|Aumente a dureza da bola com o tempo",
  "Fletir o punho|Doer na base do polegar (rizartrose): reduzir",
  "3 × 10", "pun_extensao_dedos", "pun_tendinoso", "");

E("pun_extensao_dedos", "Extensão dos dedos com elástico", "abrir os dedos contra elástico",
  "r:punho o:forca mu:mao,antebraco p:sent m:elastico n:2 f:2,3 ct:dinamica c:aberta k:sem pl:frontal l:uni",
  "Coloque um elástico à volta dos dedos e do polegar.|Abra a mão contra a resistência do elástico.|Feche devagar.",
  "Abrir em leque|Movimento controlado",
  "Fazer depressa|Fletir o punho",
  "3 × 15", "", "", "Equilibra o trabalho de preensão.");

E("pun_oponencia", "Oponência e pinças do polegar", "polegar a tocar nos dedos, pinças",
  "r:punho o:mobilidade,controlo mu:mao p:sent m:nenhum,bolapeq n:1 f:1,2 ct:dinamica c:aberta k:sem pl:multi l:uni",
  "Toque com a ponta do polegar na ponta de cada dedo, formando um 'O'.|Progrida para pinças com plasticina ou molas de roupa.|Pinça de ponta (ponta com ponta) e pinça lateral (polegar contra a lateral do indicador).",
  "Forme um 'O' redondo, não achatado|Movimentos precisos",
  "Hiperestender a articulação do polegar|Pinça lateral forte na rizartrose",
  "10 por dedo", "", "", "Na rizartrose, privilegiar o fortalecimento do primeiro interósseo dorsal e a estabilidade do polegar.");

E("pun_carga", "Apoio progressivo de carga no punho", "weight bearing, carga através da mão",
  "r:punho,cotovelo o:forca,funcional mu:antebraco,mao p:pe,quad m:banco n:2 f:2,3 ct:isometrica c:fechada k:parcial pl:sagital l:uni",
  "De pé, apoie a mão sobre uma mesa com o punho em extensão.|Transfira gradualmente o peso do corpo para a mão.|Progrida para quatro apoios e depois para flexões.",
  "Aumente a carga em pequenos passos|Use uma balança para quantificar (ex.: 5 → 10 → 15 kg)",
  "Carga brusca|Fazer com dor que persiste",
  "5 × 10–30 s", "omb_pushup_parede", "pun_flex_ext", "Após fratura do rádio distal, só com consolidação adequada e autorização.");

E("pun_along_flex", "Alongamento dos flexores do punho", "alongamento flexores antebraço",
  "r:punho,cotovelo o:flexibilidade mu:antebraco p:pe m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:sagital l:uni",
  "Braço estendido à frente, palma para cima.|Com a outra mão, leve os dedos e o punho para baixo (extensão).|Mantenha.",
  "Cotovelo esticado|Tensão na face anterior do antebraço",
  "Formigueiro nos dedos (tensão neural): reduzir",
  "3 × 30 s", "", "", "");
