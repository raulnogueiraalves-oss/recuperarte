/* Coluna cervical, torácica, lombar, core e neurodinâmica do membro inferior. */

/* ---------- CERVICAL ---------- */
E("cerv_flex_cranio", "Flexão craniocervical (aceno)", "chin nod, CCFT, flexores profundos, biofeedback de pressão",
  "r:cervical o:controlo mu:flexcerv p:dd m:nenhum,bolapeq n:1 f:1,2 ct:isometrica c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas, joelhos fletidos, cabeça apoiada numa toalha dobrada (posição neutra).|Faça um aceno lento de 'sim', como se fizesse duplo queixo, sem levantar a cabeça.|Mantenha a posição a respirar normalmente.|Com biofeedback de pressão: insufle a 20 mmHg e progrida em patamares de 2 mmHg até 30 mmHg.",
  "Movimento pequeno, só no topo do pescoço|Sinta a parte da frente do pescoço a trabalhar, sem endurecer|A língua relaxada no céu da boca",
  "Usar o esternocleidomastoideu (músculos superficiais salientes)|Empurrar a cabeça contra a marquesa|Retrair o queixo para trás em vez de rodar",
  "10 × 10 s, 1–2×/dia", "cerv_flex_cranio_elev cerv_ext_quad", "",
  "Interromper se surgirem tonturas, perturbações visuais ou sintomas neurológicos.");

E("cerv_flex_cranio_elev", "Elevação da cabeça com aceno mantido", "head lift, resistência dos flexores profundos",
  "r:cervical o:resistencia,forca mu:flexcerv p:dd m:nenhum n:3 f:3 ct:isometrica c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas, faça o aceno craniocervical.|Mantendo o aceno, eleve a cabeça 1–2 cm da marquesa.|Mantenha e desça devagar, sem perder o aceno.",
  "Queixo ligeiramente recolhido durante toda a série|Pare quando o queixo começar a 'fugir' para a frente",
  "Projetar o queixo (extensão do topo do pescoço)|Suster a respiração",
  "3–5 × 5–10 s, aumentando o tempo", "cerv_iso_multi", "cerv_flex_cranio", "");

E("cerv_retracao", "Retração cervical", "chin tuck, recolher o queixo, McKenzie cervical",
  "r:cervical o:mobilidade,controlo mu:flexcerv p:sent,pe m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Sentado direito, olhe em frente.|Leve a cabeça para trás em linha reta, mantendo o olhar horizontal.|Volte ao início devagar.|Opção: no fim do movimento, ajude com dois dedos no queixo.",
  "Imagine uma gaveta a fechar|Olhos sempre na horizontal",
  "Inclinar a cabeça para baixo|Elevar os ombros",
  "10 repetições a cada 2–3 h nas fases agudas; 3 × 10 depois", "cerv_ext_quad", "", "Se os sintomas no braço aumentarem ou se deslocarem para longe do pescoço (periferização), parar e reavaliar.");

E("cerv_rot_ativa", "Rotação cervical ativa", "rodar a cabeça, olhar por cima do ombro",
  "r:cervical o:mobilidade mu:extcerv p:sent m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:transversal l:bi",
  "Sentado direito, com a cabeça centrada.|Rode a cabeça para um lado até sentir tensão confortável, como quem olha por cima do ombro.|Volte ao centro e repita para o outro lado.",
  "Movimento suave dentro de amplitude sem dor|Queixo à mesma altura durante toda a rotação",
  "Inclinar a cabeça enquanto roda|Forçar no fim da amplitude",
  "10 repetições por lado, várias vezes por dia", "cerv_snag_rot", "", "");

E("cerv_incl_ativa", "Inclinação cervical lateral ativa", "levar a orelha ao ombro",
  "r:cervical o:mobilidade mu:trapsup p:sent m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:frontal l:bi",
  "Sentado direito.|Aproxime a orelha do ombro do mesmo lado sem rodar a cabeça.|Regresse ao centro e alterne.",
  "Os ombros ficam em baixo|Olhar sempre em frente",
  "Elevar o ombro ao encontro da orelha|Rodar a cabeça",
  "10 repetições por lado", "cerv_along_trap", "", "");

E("cerv_ext_quad", "Extensão cervical em quatro apoios com aceno", "extensores profundos cervicais, cranio-cervical extension",
  "r:cervical o:controlo,forca mu:extcerv,flexcerv p:quad m:nenhum n:2 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Em quatro apoios, coluna neutra, olhar para o chão.|Mantenha um ligeiro aceno (queixo recolhido) e leve o pescoço a olhar para os joelhos.|Volte a subir até à posição neutra, mantendo o aceno.|Variante: rotação de 'não' de pequena amplitude com o aceno mantido.",
  "Movimento a partir do pescoço, não da parte superior das costas|Mãos debaixo dos ombros e omoplatas 'abertas'",
  "Levar a cabeça acima da horizontal|Deixar o tronco afundar entre as omoplatas",
  "3 × 10", "cerv_iso_multi", "cerv_retracao", "");

E("cerv_iso_multi", "Isometrias cervicais multidirecionais", "isometria pescoço, resistência manual",
  "r:cervical o:forca mu:extcerv,flexcerv,trapsup p:sent m:nenhum,elastico n:2 f:2,3 ct:isometrica c:aberta k:sem pl:multi l:bi",
  "Sentado direito, cabeça neutra.|Coloque a mão na testa e empurre a cabeça contra a mão, sem deixar haver movimento.|Repita com a mão atrás da cabeça, de lado e para a rotação.|Progrida para resistência com elástico.",
  "Comece com 20–30% do esforço máximo|Respire durante a contração",
  "Deixar a cabeça mexer|Usar força máxima logo de início",
  "5 × 5–10 s por direção", "", "cerv_flex_cranio", "");

E("cerv_along_trap", "Alongamento do trapézio superior", "alongamento lateral do pescoço",
  "r:cervical,ombro o:flexibilidade mu:trapsup p:sent m:cadeira n:1 f:2 ct:alongamento c:aberta k:sem pl:frontal l:uni",
  "Sentado, segure o banco da cadeira com a mão do lado a alongar.|Incline a cabeça para o lado oposto.|Com a outra mão, faça uma ligeira pressão sobre a cabeça.",
  "Tensão confortável, nunca dor|O ombro a alongar fica em baixo",
  "Puxar com força|Rodar a cabeça",
  "3 × 30 s por lado", "", "cerv_incl_ativa", "Evitar se provocar formigueiro no braço.");

E("cerv_along_elevador", "Alongamento do angular da omoplata", "levator scapulae",
  "r:cervical,ombro o:flexibilidade mu:trapsup p:sent m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:multi l:uni",
  "Sentado, rode a cabeça cerca de 45° para um lado e olhe para a axila.|Coloque a mão desse lado atrás da cabeça e ajude suavemente o movimento.|O outro braço fica em baixo, a segurar a cadeira.",
  "Sinta a tensão na parte posterior e lateral do pescoço|Expire e relaxe",
  "Fletir a parte superior das costas|Puxar bruscamente",
  "3 × 30 s por lado", "", "cerv_incl_ativa", "");

E("cerv_snag_rot", "Auto-SNAG cervical em rotação com toalha", "SNAG Mulligan, auto-mobilização com toalha",
  "r:cervical o:mobilidade mu:extcerv p:sent m:bolapeq n:2 f:2 ct:assistida c:aberta k:sem pl:transversal l:uni",
  "Coloque o meio de uma toalha na nuca, logo abaixo do nível a mobilizar.|Para rodar para a esquerda: a mão direita puxa a ponta da toalha para a frente, em direção ao olho, e a mão esquerda segura a outra ponta.|Rode a cabeça para a esquerda enquanto mantém a tração da toalha; mantenha 2–3 s no fim e volte.",
  "O movimento deve ser indolor|A toalha acompanha a rotação",
  "Puxar para baixo em vez de para a frente|Forçar através de dor",
  "6–10 repetições, 2–3×/dia", "", "cerv_rot_ativa", "Contraindicado se houver suspeita de instabilidade craniovertebral ou insuficiência arterial cervical. Ensinar primeiro na clínica.");

E("cerv_jps", "Reposicionamento articular cervical com laser", "JPS, propriocepção cervical, laser na cabeça",
  "r:cervical o:equilibrio,controlo mu:flexcerv,extcerv,nervos p:sent m:outro n:2 f:2,3 ct:dinamica c:aberta k:sem pl:multi l:bi",
  "Fixe um pequeno laser (ou ponteiro) na cabeça e sente-se a 90 cm de uma parede com um alvo.|De olhos fechados, rode a cabeça e volte ao centro, tentando acertar no alvo.|Abra os olhos e veja o erro.|Progrida para traçar figuras (oitos, letras) com o laser ao longo de um traçado.",
  "Movimentos lentos e precisos|Erro normal inferior a cerca de 4–5°",
  "Mover os olhos em vez da cabeça|Fazer depressa",
  "5–10 repetições por direção", "cerv_vor", "", "Útil após chicotada (WAD) e na tontura de origem cervical.");

E("cerv_vor", "Estabilização do olhar (VOR ×1)", "vestibulo-ocular, gaze stability, adaptação vestibular",
  "r:cervical o:equilibrio mu:nervos p:sent,pe m:nenhum n:2 f:2,3 ct:dinamica c:aberta k:sem pl:transversal l:bi",
  "Segure um cartão com uma letra à altura dos olhos, com o braço esticado.|Rode a cabeça de um lado para o outro (cerca de 20–30°), mantendo a letra focada e nítida.|Repita com movimentos de 'sim'.|Progrida de sentado para de pé, de base larga para pés juntos, de fundo liso para fundo com padrões.",
  "A letra tem de ficar sempre nítida|Aumente a velocidade só quando conseguir manter o foco",
  "Deixar a letra desfocar|Mexer o cartão",
  "1–2 min, 3–5×/dia; tonturas ligeiras (até cerca de 5/10) são aceitáveis e devem passar em 15 min", "", "cerv_jps", "Indicação de reabilitação vestibular. Excluir causas centrais e VPPB (que precisa de manobras de reposicionamento).");

E("cerv_neuro_mediano", "Deslizamento neural do nervo mediano", "slider mediano, ULNT1, neurodinâmica membro superior",
  "r:cervical,punho,cotovelo o:neuro mu:nervos p:pe,sent m:nenhum n:2 f:2 ct:dinamica c:aberta k:sem pl:multi l:uni",
  "De pé, braço afastado do corpo a cerca de 90°, palma para cima e ombro em baixo.|Estenda o punho e os dedos e, em simultâneo, incline a cabeça para o mesmo lado (afrouxa).|Depois flita o punho e incline a cabeça para o lado oposto.|Alterne num movimento ritmado de 'vai-vem'.",
  "Deslizamento: tensão numa ponta, folga na outra|Sintoma ligeiro aceitável que desaparece logo que pára",
  "Fazer as duas pontas em tensão ao mesmo tempo (isso é tensionamento, não deslizamento)|Manter formigueiro depois do exercício",
  "10–15 repetições, 2–3×/dia", "", "", "Sintomas neurológicos progressivos, perda de força ou alterações de reflexos exigem reavaliação médica.");

E("cerv_neuro_ulnar", "Deslizamento neural do nervo cubital", "slider ulnar, máscara",
  "r:cervical,cotovelo,punho o:neuro mu:nervos p:pe,sent m:nenhum n:2 f:2 ct:dinamica c:aberta k:sem pl:multi l:uni",
  "Braço ao lado do corpo, cotovelo fletido, palma virada para cima.|Faça uma 'máscara' com o polegar e o indicador junto ao olho, levando o cotovelo para cima e para fora.|Em simultâneo, incline a cabeça para o mesmo lado.|Volte ao início e repita ritmadamente.",
  "Amplitude só até ao início dos sintomas|Movimento fluido",
  "Forçar a posição final|Elevar o ombro",
  "10 repetições, 2×/dia", "", "", "");

/* ---------- TORÁCICA ---------- */
E("tor_ext_rolo", "Extensão torácica sobre rolo", "foam roller extensão dorsal",
  "r:toracica o:mobilidade mu:eretores p:dd m:rolo n:2 f:2 ct:assistida c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas com o rolo atravessado na parte média das costas.|Mãos atrás da cabeça a apoiar o pescoço, rabo no chão.|Estenda sobre o rolo, expire e volte.|Desloque o rolo um segmento acima e repita.",
  "O movimento é na zona torácica, não na lombar|Mantenha as costelas 'em baixo'",
  "Arquear a zona lombar|Puxar a cabeça com as mãos",
  "5–8 extensões por nível, 3–4 níveis", "", "tor_ext_sent", "Cuidado na osteoporose torácica marcada.");

E("tor_ext_sent", "Extensão torácica sentado", "extensão dorsal na cadeira",
  "r:toracica o:mobilidade mu:eretores p:sent m:cadeira n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Sentado numa cadeira com encosto baixo, mãos cruzadas no peito ou atrás da cabeça.|Incline-se para trás sobre a borda do encosto, abrindo o peito.|Volte a sentar-se direito.",
  "Pense em levar o esterno ao teto|Expire durante a extensão",
  "Projetar a cabeça|Fazer a extensão só com a lombar",
  "2 × 10", "tor_ext_rolo", "", "");

E("tor_open_book", "Livro aberto (rotação torácica em decúbito lateral)", "open book, rotação dorsal",
  "r:toracica,ombro o:mobilidade mu:obliquos,peitoral p:dl m:nenhum,bolapeq n:1 f:1,2 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Deite-se de lado com anca e joelhos fletidos a 90° e uma almofada sob a cabeça.|Braços esticados à frente, palmas juntas.|Abra o braço de cima, rodando o tronco e acompanhando a mão com o olhar.|Mantenha 2–3 s e volte.",
  "Os joelhos ficam juntos e no chão|Expire na rotação",
  "Rodar a anca|Forçar o braço até ao chão com dor no ombro",
  "2 × 10 por lado", "tor_thread", "", "");

E("tor_thread", "Rotação torácica em quatro apoios", "thread the needle, rotação dorsal quadrupedia",
  "r:toracica,ombro o:mobilidade mu:obliquos,trapmed p:quad m:nenhum n:2 f:2 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Em quatro apoios, uma mão atrás da cabeça.|Rode o tronco levando o cotovelo em direção ao braço de apoio.|Depois abra para o teto, seguindo o cotovelo com os olhos.",
  "A anca mantém-se sobre os joelhos|Movimento torácico, não lombar",
  "Sentar sobre os calcanhares durante o movimento|Elevar o ombro de apoio",
  "2 × 10 por lado", "", "tor_open_book", "");

E("tor_gato", "Gato-camelo", "cat-camel, flexão-extensão da coluna em quatro apoios",
  "r:toracica,lombar o:mobilidade mu:eretores,abdominais p:quad m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Em quatro apoios, mãos debaixo dos ombros e joelhos debaixo das ancas.|Arredonde as costas, levando o queixo ao peito.|Depois arqueie suavemente, levantando o peito e a cabeça.|Faça o movimento lento, vértebra a vértebra.",
  "Amplitude confortável|Respiração fluida",
  "Forçar a extensão final|Dobrar os cotovelos",
  "8–10 ciclos; bom como aquecimento antes de exercícios de controlo", "core_bird_dog", "", "");

/* ---------- LOMBAR ---------- */
E("lom_bascula", "Báscula pélvica", "pelvic tilt, retroversão e anteversão pélvica",
  "r:lombar o:mobilidade,controlo mu:abdominais,eretores p:dd m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas, joelhos fletidos e pés no chão.|Encoste a zona lombar ao chão, rodando a bacia para trás.|Depois arqueie ligeiramente, criando um pequeno espaço.|Alterne devagar.",
  "Movimento pequeno e controlado|Glúteos relaxados",
  "Levantar a bacia do chão|Suster a respiração",
  "2 × 10–15", "core_transverso core_dead_bug", "", "");

E("lom_joelhos_peito", "Joelhos ao peito", "flexão lombar em decúbito dorsal",
  "r:lombar,anca o:mobilidade,flexibilidade mu:eretores,gluteomax p:dd m:nenhum n:1 f:1,2 ct:assistida c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas, traga um joelho de cada vez ao peito.|Segure atrás dos joelhos e puxe suavemente.|Mantenha e solte.",
  "Relaxe a zona lombar|Variante unilateral se a bilateral for desconfortável",
  "Puxar pela parte da frente do joelho em quem tem dor no joelho|Elevar a cabeça",
  "3–5 × 20–30 s", "", "", "Na hérnia discal com preferência direcional para a extensão, esta direção pode agravar.");

E("lom_rot_dd", "Rotação lombar em decúbito dorsal", "windscreen wiper, joelhos de um lado para o outro",
  "r:lombar o:mobilidade mu:obliquos,eretores p:dd m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:transversal l:bi",
  "Deitado de costas, joelhos fletidos e juntos, braços abertos.|Deixe os joelhos cair lentamente para um lado.|Regresse ao centro e repita para o outro lado.",
  "Os ombros ficam apoiados|Amplitude sem dor",
  "Deixar os joelhos cair sem controlo|Afastar os joelhos",
  "10 por lado", "", "", "");

E("lom_ext_dv", "Extensão lombar em decúbito ventral (press-up)", "McKenzie extensão, cobra, prone press-up",
  "r:lombar o:mobilidade mu:eretores p:dv m:nenhum n:1 f:1,2 ct:assistida c:fechada k:sem pl:sagital l:bi",
  "Deitado de barriga para baixo, mãos à altura dos ombros.|Estenda os cotovelos, levantando o tronco e deixando a bacia e a zona lombar relaxadas no chão.|Expire no fim e desça devagar.|Progrida de apoio nos antebraços para braços esticados.",
  "Glúteos relaxados|A bacia não sai do chão",
  "Contrair as costas para subir|Projetar a cabeça",
  "10 repetições, até a cada 2–3 h se houver centralização", "lom_ext_pe", "", "Ideal quando a extensão centraliza os sintomas (preferência direcional). Parar se os sintomas periferizarem.");

E("lom_ext_pe", "Extensão lombar de pé", "extensão de pé com as mãos na lombar",
  "r:lombar o:mobilidade mu:eretores p:pe m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:total pl:sagital l:bi",
  "De pé, pés à largura da anca, mãos na zona lombar com os dedos para baixo.|Incline o tronco para trás, usando as mãos como fulcro.|Volte à posição direita.",
  "Joelhos esticados|Olhar em frente ou ligeiramente para cima",
  "Fletir os joelhos|Levar a cabeça muito para trás",
  "10 repetições, sobretudo após estar muito tempo sentado", "", "lom_ext_dv", "");

E("lom_flex_sent", "Flexão lombar sentado", "flexão em cadeira, estenose",
  "r:lombar o:mobilidade mu:eretores p:sent m:cadeira n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Sentado com os pés afastados.|Enrole-se para a frente deixando as mãos deslizar em direção ao chão.|Volte devagar, vértebra a vértebra.",
  "Respire durante o movimento|Pescoço relaxado",
  "Fazer rápido|Usar em quem centraliza com extensão",
  "10 repetições", "", "", "Indicado frequentemente na estenose lombar (alívio em flexão).");

E("lom_dobradica", "Dobradiça da anca com bastão", "hip hinge, padrão de peso morto",
  "r:lombar,anca o:controlo,funcional mu:gluteomax,isquios,eretores p:pe m:bastao n:2 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "De pé, segure um bastão ao longo da coluna com 3 pontos de contacto: nuca, entre as omoplatas e sacro.|Fleta ligeiramente os joelhos e leve a bacia para trás, inclinando o tronco a partir da anca.|Mantenha os 3 contactos durante todo o movimento.|Regresse contraindo os glúteos.",
  "Imagine fechar uma porta com o rabo|Tíbias quase verticais",
  "Arredondar a lombar (perde o contacto do sacro)|Transformar em agachamento",
  "3 × 10", "lom_peso_morto_kb", "lom_bascula", "");

E("lom_peso_morto_kb", "Peso morto com kettlebell", "deadlift KB, levantamento do chão",
  "r:lombar,anca o:forca,funcional mu:gluteomax,isquios,eretores p:pe m:kettlebell,halter n:3 f:3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "Kettlebell entre os pés, pés à largura da anca.|Faça a dobradiça da anca, agarre a pega com as costas neutras.|Empurre o chão e estenda anca e joelhos em simultâneo até ficar direito.|Desça controlando, com a mesma técnica.",
  "Peito orgulhoso, costas longas|Carga junto ao corpo",
  "Puxar com os braços|Hiperestender no topo",
  "3 × 8–12 a RPE 6–8", "lom_rdl_uni", "lom_dobradica", "Ótimo para restaurar a confiança na flexão e carga na lombalgia não específica, com progressão gradual.");

E("lom_rdl_uni", "Peso morto romeno unipodal", "single-leg RDL, avião",
  "r:lombar,anca,joelho o:forca,equilibrio mu:gluteomax,isquios,gluteomed p:pe m:nenhum,halter,kettlebell n:3 f:3,4 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "Em apoio unipodal, joelho ligeiramente fletido.|Incline o tronco à frente a partir da anca enquanto a perna livre sobe para trás, em linha com o tronco.|A bacia mantém-se nivelada.|Regresse contraindo o glúteo da perna de apoio.",
  "Pense numa tábua a rodar sobre a anca|Toque numa parede ou cadeira para começar",
  "Rodar a bacia para fora|Fletir muito o joelho de apoio",
  "3 × 8 por lado", "", "lom_dobradica", "");

E("lom_slump", "Deslizamento neural do ciático em slump", "slump slider, neurodinâmica ciática sentado",
  "r:lombar,anca,joelho o:neuro mu:nervos p:sent m:cadeira n:2 f:2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Sentado na borda de uma cadeira, tronco ligeiramente fletido.|Estenda o joelho e leve a cabeça para trás (olhar para cima) ao mesmo tempo.|Depois flita o joelho e baixe a cabeça.|Alterne de forma ritmada.",
  "Sintomas ligeiros aceitáveis, a desaparecer logo|Nunca segurar a posição de tensão",
  "Estender o joelho com a cabeça em baixo (tensão máxima)|Fazer com dor intensa",
  "10–15 repetições, 2–3×/dia", "", "lom_neuro_dd", "Défices neurológicos progressivos, síndrome da cauda equina (alterações esfincterianas, anestesia em sela) exigem referenciação urgente.");

E("lom_neuro_dd", "Deslizamento neural do ciático em decúbito dorsal", "sciatic slider deitado",
  "r:lombar,anca,joelho o:neuro mu:nervos p:dd m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Deitado de costas, segure a coxa atrás do joelho com a anca a 90°.|Estenda o joelho ao mesmo tempo que leva o pé em flexão plantar (ponta do pé esticada).|Depois flita o joelho e puxe o pé para cima.|Alterne de forma suave.",
  "Movimento fluido, sem pausas em tensão|A cabeça fica apoiada",
  "Puxar o pé para cima com o joelho esticado|Forçar a amplitude",
  "10–15 repetições, 2–3×/dia", "lom_slump", "", "");

/* ---------- CORE ---------- */
E("core_transverso", "Ativação do transverso do abdómen", "drawing-in, abdominal hollowing, core profundo",
  "r:core,lombar o:controlo mu:transverso,pelvico p:dd,quad m:nenhum n:1 f:1,2 ct:isometrica c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas, joelhos fletidos, coluna neutra.|Coloque os dedos 2 cm para dentro das cristas ilíacas.|Expire e encolha suavemente a parte baixa da barriga, como se fechasse umas calças apertadas.|Mantenha, respirando normalmente.",
  "Contração ligeira, cerca de 20–30%|A bacia e a coluna não se mexem",
  "Contrair os glúteos ou fazer báscula|Suster a respiração",
  "10 × 10 s", "core_dead_bug core_bird_dog", "", "");

E("core_dead_bug", "Dead bug", "inseto morto, extensão alternada de braço e perna",
  "r:core,lombar o:controlo,forca mu:abdominais,transverso,obliquos p:dd m:nenhum n:2 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas, braços para o teto, ancas e joelhos a 90°.|Mantenha a lombar neutra e próxima do chão.|Estenda devagar um braço e a perna oposta até perto do chão.|Volte e alterne.",
  "Expire durante a extensão|Costelas 'em baixo'",
  "Arquear a lombar|Movimentos rápidos",
  "3 × 8–10 por lado", "core_prancha", "lom_bascula core_transverso", "Regressão: mexer só as pernas, com os pés a tocar no chão.");

E("core_bird_dog", "Bird dog (cão de caça)", "quatro apoios braço-perna oposta, McGill",
  "r:core,lombar,anca o:controlo mu:eretores,gluteomax,transverso p:quad m:nenhum n:2 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Em quatro apoios, coluna neutra.|Estenda um braço à frente e a perna oposta atrás, até à horizontal.|Mantenha 5–10 s sem rodar a bacia.|Volte e alterne.",
  "Imagine um copo de água sobre a zona lombar|Empurre o chão com a mão de apoio",
  "Levantar a perna acima da horizontal (arquear)|Rodar a bacia",
  "3 × 6–8 por lado, mantendo 5–10 s", "", "core_transverso tor_gato", "Faz parte do 'Big 3' de McGill.");

E("core_curl_up", "Curl-up de McGill", "abdominal modificado, McGill curl-up",
  "r:core,lombar o:resistencia,controlo mu:abdominais p:dd m:nenhum n:2 f:2,3 ct:isometrica c:aberta k:sem pl:sagital l:bi",
  "Deitado de costas, uma perna esticada e a outra fletida.|Mãos sob a zona lombar para manter a curvatura natural.|Eleve ligeiramente a cabeça e os ombros como um bloco, sem fletir o pescoço nem a lombar.|Mantenha 8–10 s.",
  "Movimento mínimo, como se a cabeça estivesse numa balança|Cotovelos podem levantar ligeiramente para mais desafio",
  "Puxar a cabeça com as mãos|Achatar a lombar",
  "Pirâmide descendente: 6-4-2 repetições de 10 s", "core_prancha", "core_transverso", "");

E("core_prancha", "Prancha frontal", "plank, prancha abdominal",
  "r:core,ombro o:resistencia,controlo mu:abdominais,transverso,serratil p:dv m:nenhum n:2 f:3 ct:isometrica c:fechada k:parcial pl:sagital l:bi",
  "Apoie os antebraços (cotovelos sob os ombros) e as pontas dos pés.|Corpo em linha reta da cabeça aos calcanhares.|Contraia abdominais e glúteos e mantenha, respirando.|Regressão: apoio nos joelhos ou mãos num banco.",
  "Empurre o chão com os antebraços|Linha reta: nem rabo para cima nem barriga a cair",
  "Afundar a lombar|Suster a respiração",
  "3–5 × 10–30 s", "core_prancha_lat", "core_dead_bug", "");

E("core_prancha_lat", "Prancha lateral", "side plank, side bridge",
  "r:core,anca,ombro o:resistencia,controlo mu:obliquos,quadrado,gluteomed p:dl m:nenhum n:2 f:3 ct:isometrica c:fechada k:parcial pl:frontal l:uni",
  "Deitado de lado, cotovelo sob o ombro.|Eleve a bacia ficando em linha reta, apoiado no antebraço e nos pés (ou joelhos na versão mais fácil).|Mantenha e desça.",
  "Bacia alta e alinhada|Ombro de apoio afastado da orelha",
  "Deixar a bacia rodar para trás|Afundar o ombro",
  "3 × 10–30 s por lado", "", "core_prancha", "Excelente para o glúteo médio e o quadrado lombar. Na tendinopatia glútea, começar pela versão com os joelhos fletidos e vigiar a resposta da dor nas 24 h.");

E("core_pallof", "Pallof press", "anti-rotação com elástico ou polia",
  "r:core o:controlo,forca mu:obliquos,transverso p:pe,joel m:elastico,cabo n:3 f:3 ct:isometrica c:fechada k:total pl:transversal l:bi",
  "De lado para a ancoragem do elástico, segure-o junto ao peito com as duas mãos.|Empurre as mãos à frente até esticar os braços, resistindo à rotação.|Mantenha 2–3 s e volte.",
  "Tronco imóvel, como se nada estivesse a puxar|Glúteos e abdominais ativos",
  "Deixar rodar o tronco|Elevar os ombros",
  "3 × 10 por lado", "core_chop", "core_dead_bug", "");

E("core_chop", "Chop diagonal (lenhador)", "woodchop, rotação diagonal com polia",
  "r:core,ombro,anca o:forca,potencia,funcional mu:obliquos,dorsal,gluteomax p:pe,joel m:elastico,cabo,bolamed n:3 f:3,4 ct:dinamica c:fechada k:total pl:multi l:bi",
  "Elástico ancorado alto de um lado.|Puxe em diagonal de cima para baixo, através do corpo, rodando tronco e anca em conjunto.|Volte controlando.|Variante 'lift': de baixo para cima.",
  "Roda a partir das ancas, não só da lombar|Pés firmes",
  "Torcer só a coluna|Perder o equilíbrio",
  "3 × 10 por lado", "", "core_pallof", "");

E("core_ponte", "Ponte glútea", "glute bridge, elevação da bacia",
  "r:anca,lombar,core o:forca,controlo mu:gluteomax,isquios p:dd m:nenhum,elastico n:1 f:1,2,3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Deitado de costas, joelhos fletidos, pés à largura da anca.|Contraia os glúteos e eleve a bacia até alinhar ombros, ancas e joelhos.|Mantenha 2 s e desça devagar.|Com elástico acima dos joelhos para ativar o glúteo médio.",
  "Empurre o chão com os calcanhares|Costelas em baixo, sem arquear",
  "Hiperestender a lombar|Cãibras nos isquiotibiais: aproxime os pés das ancas",
  "3 × 10–15", "core_ponte_uni anc_hip_thrust", "lom_bascula", "");

E("core_ponte_uni", "Ponte glútea unipodal", "single-leg bridge",
  "r:anca,lombar,core o:forca,controlo mu:gluteomax,isquios,gluteomed p:dd m:nenhum n:3 f:3 ct:dinamica c:fechada k:parcial pl:sagital l:uni",
  "Na posição da ponte, estenda uma perna ou leve o joelho ao peito.|Eleve a bacia apenas com a perna de apoio, mantendo-a nivelada.|Desça controlando.",
  "Bacia nivelada|Peso no calcanhar",
  "Deixar a bacia cair para o lado da perna livre|Arquear a lombar",
  "3 × 8–12 por lado", "anc_hip_thrust", "core_ponte", "");

E("core_farmer", "Transporte unilateral de carga (suitcase carry)", "farmer carry, mala",
  "r:core,ombro,punho o:forca,controlo,funcional mu:quadrado,obliquos,antebraco p:pe m:halter,kettlebell n:3 f:3 ct:isometrica c:fechada k:total pl:frontal l:uni",
  "Segure um peso numa mão, ao lado do corpo.|Caminhe 20–30 m mantendo o tronco direito, sem inclinar para nenhum lado.|Troque de mão.",
  "Fique alto, como se puxasse a cabeça para o teto|Passos normais",
  "Inclinar para o lado da carga ou para o lado oposto|Elevar o ombro",
  "3–4 percursos por lado", "", "core_prancha_lat", "");

E("core_pelvico", "Contrações do pavimento pélvico", "Kegel, treino dos músculos do pavimento pélvico",
  "r:core,lombar o:controlo,forca,resistencia mu:pelvico,transverso p:dd,sent,pe m:nenhum n:1 f:1,2,3 ct:isometrica c:aberta k:sem pl:sagital l:bi",
  "Na posição escolhida, respire normalmente.|Contraia como se quisesse parar a urina e reter gases, elevando para dentro.|Contrações lentas: mantenha 5–10 s e relaxe totalmente o mesmo tempo.|Contrações rápidas: contrair e relaxar depressa.",
  "Relaxar completamente entre contrações é tão importante como contrair|Não contraia glúteos nem adutores",
  "Fazer força para baixo (manobra de Valsalva)|Suster a respiração",
  "Treino típico: 3 × 8–12 contrações lentas + 10 rápidas, diariamente, ≥ 12 semanas", "", "", "Treino idealmente após avaliação por fisioterapeuta especializado em saúde pélvica. Não usar a interrupção do jato urinário como treino regular.");
