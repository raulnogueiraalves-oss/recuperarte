/* Anca, joelho, tornozelo e pé. */

/* ---------- ANCA ---------- */
E("anc_clam", "Clamshell (concha)", "abdução-rotação externa em decúbito lateral",
  "r:anca o:forca,controlo mu:gluteomed,rotanca p:dl m:nenhum,elastico n:1 f:2,3 ct:dinamica c:aberta k:sem pl:transversal l:uni",
  "Deitado de lado, ancas a cerca de 45° e joelhos a 90°, calcanhares juntos.|Abra o joelho de cima sem separar os pés e sem rodar a bacia para trás.|Desça devagar.|Elástico acima dos joelhos para progredir.",
  "Bacia 'empilhada', como se tivesse as costas encostadas a uma parede|Movimento pequeno mas limpo",
  "Rodar a bacia para trás|Usar a lombar",
  "3 × 12–15 por lado", "anc_abd_dl anc_marcha_lateral", "", "");

E("anc_abd_dl", "Abdução da anca em decúbito lateral", "side-lying hip abduction",
  "r:anca o:forca mu:gluteomed p:dl m:nenhum,caneleira n:2 f:2,3 ct:dinamica c:aberta k:sem pl:frontal l:uni",
  "Deitado de lado, perna de baixo fletida para estabilizar.|Perna de cima esticada e ligeiramente para trás do corpo, bico do pé para a frente.|Eleve a perna cerca de 30–40° e desça devagar.",
  "Calcanhar a liderar o movimento|Bacia rodada ligeiramente para a frente",
  "Levar a perna à frente (ativa o tensor da fáscia lata)|Rodar o pé para o teto",
  "3 × 10–15", "anc_marcha_lateral", "anc_clam anc_iso_abd", "Na tendinopatia glútea pode ser provocador: começar por isometrias em posição neutra.");

E("anc_iso_abd", "Isometria de abdução da anca em decúbito dorsal", "isometria glúteo médio, cinto/elástico",
  "r:anca o:forca mu:gluteomed p:dd,pe m:elastico,nenhum n:1 f:1,2 ct:isometrica c:aberta k:sem pl:frontal l:bi",
  "Deitado de costas, pernas esticadas, um cinto ou elástico rígido à volta das coxas.|Empurre as pernas para fora contra o cinto, sem movimento.|Variante de pé: empurrar a lateral da perna contra uma parede.",
  "Pernas sem cruzar a linha média (evita compressão do tendão)|Intensidade moderada, dor ≤ 3/10",
  "Cruzar as pernas|Rodar os pés",
  "5 × 30–45 s, 1–2×/dia", "anc_ponte_elastico anc_marcha_lateral", "", "Primeira fase na tendinopatia glútea (abordagem do ensaio LEAP: educação + exercício progressivo).");

E("anc_ponte_elastico", "Ponte com elástico nos joelhos", "ponte com abdução",
  "r:anca,lombar o:forca mu:gluteomax,gluteomed p:dd m:elastico n:2 f:2,3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Elástico logo acima dos joelhos.|Deitado de costas, joelhos fletidos, empurre levemente os joelhos para fora.|Eleve a bacia mantendo a tensão no elástico.|Desça devagar.",
  "Joelhos alinhados com os pés|Contraia glúteos antes de subir",
  "Deixar os joelhos cair para dentro|Arquear a lombar",
  "3 × 12–15", "core_ponte_uni anc_hip_thrust", "core_ponte", "");

E("anc_hip_thrust", "Hip thrust", "elevação da bacia com costas no banco",
  "r:anca o:forca mu:gluteomax,isquios p:dd m:banco,barra,halter n:3 f:3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Costas (omoplatas) apoiadas num banco, pés no chão, carga sobre a bacia.|Empurre com os calcanhares e estenda a anca até o tronco ficar paralelo ao chão.|Mantenha 1 s e desça.",
  "Queixo recolhido, olhar à frente|Tíbias verticais no topo",
  "Hiperestender a lombar|Empurrar com as pontas dos pés",
  "3 × 8–12", "", "core_ponte core_ponte_uni", "");

E("anc_marcha_lateral", "Marcha lateral com elástico", "monster walk, crab walk, side steps",
  "r:anca,joelho o:forca,controlo mu:gluteomed p:pe m:elastico n:2 f:2,3 ct:dinamica c:fechada k:total pl:frontal l:bi",
  "Elástico à volta dos tornozelos ou acima dos joelhos.|Em ligeiro agachamento, dê passos laterais mantendo a tensão no elástico.|Mantenha os pés paralelos e o tronco direito.",
  "Passos controlados, sem arrastar|Joelhos não colapsam para dentro",
  "Balançar o tronco|Juntar os pés completamente",
  "3 × 10–15 passos para cada lado", "anc_step_lateral", "anc_clam anc_abd_dl", "");

E("anc_ext_dv", "Extensão da anca em decúbito ventral", "prone hip extension",
  "r:anca o:forca mu:gluteomax p:dv m:nenhum,caneleira n:1 f:2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Deitado de barriga para baixo, almofada sob a bacia.|Com o joelho fletido a 90° (isola o glúteo) ou esticado, eleve a coxa do chão.|Desça devagar.",
  "Movimento pequeno, sem arquear|Contraia o glúteo antes de subir",
  "Rodar a bacia|Hiperestender a lombar",
  "3 × 10–15", "core_ponte", "", "");

E("anc_hip_hike", "Elevação pélvica no degrau (hip hike)", "pelvic drop, glúteo médio em carga",
  "r:anca o:forca,controlo mu:gluteomed,quadrado p:pe m:step n:2 f:2,3 ct:dinamica c:fechada k:total pl:frontal l:uni",
  "De pé num degrau, apoiado numa só perna, com a outra perna livre ao lado do degrau.|Deixe a bacia do lado livre descer, mantendo os joelhos esticados.|Suba a bacia usando o glúteo da perna de apoio.",
  "Joelho de apoio esticado|Tronco direito",
  "Inclinar o tronco|Dobrar o joelho de apoio",
  "3 × 12–15", "anc_step_lateral", "anc_abd_dl", "");

E("anc_step_up", "Subida ao degrau (step-up)", "step up frontal",
  "r:anca,joelho o:forca,funcional mu:quadricipite,gluteomax,gluteomed p:pe m:step,halter n:2 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "De frente para um degrau, pé inteiro em cima.|Suba usando a perna de cima, sem impulsionar com a de baixo.|Desça controlando.",
  "Joelho alinhado com o 2.º dedo|Tronco ligeiramente à frente",
  "Empurrar com a perna de baixo|Joelho a colapsar para dentro",
  "3 × 10 por perna; altura do degrau progressiva (10 → 20 → 30 cm)", "joe_step_down", "fun_levantar", "");

E("anc_step_lateral", "Subida lateral ao degrau", "lateral step-up",
  "r:anca,joelho o:forca,controlo mu:gluteomed,quadricipite p:pe m:step n:2 f:2,3 ct:dinamica c:fechada k:total pl:frontal l:uni",
  "De lado para o degrau, um pé em cima.|Suba esticando a perna de cima e eleve a outra ao lado.|Desça devagar, tocando com o calcanhar no chão.",
  "Bacia nivelada|Joelho alinhado com o pé",
  "Impulsionar com a perna de baixo|Inclinar o tronco",
  "3 × 10–12", "joe_step_down", "anc_hip_hike", "");

E("anc_along_flex", "Alongamento dos flexores da anca em semi-ajoelhado", "iliopsoas, kneeling hip flexor stretch",
  "r:anca,lombar o:flexibilidade mu:flexanca p:joel m:nenhum n:1 f:2 ct:alongamento c:fechada k:parcial pl:sagital l:uni",
  "Ajoelhado com uma perna à frente (pé no chão, joelho a 90°).|Faça uma retroversão da bacia (rabo 'para dentro') e contraia o glúteo do lado de trás.|Avance ligeiramente a bacia até sentir tensão à frente da anca de trás.|Opção: elevar o braço do mesmo lado.",
  "A retroversão é o que faz o alongamento|Tronco direito",
  "Arquear a lombar|Avançar demasiado sem retroversão",
  "3 × 30 s por lado", "", "", "Almofada sob o joelho.");

E("anc_along_piri", "Alongamento do piriforme (figura 4)", "figura 4, rotadores externos",
  "r:anca,lombar o:flexibilidade mu:rotanca,gluteomax p:dd m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:transversal l:uni",
  "Deitado de costas, cruze o tornozelo sobre o joelho oposto.|Segure atrás da coxa da perna de baixo e puxe em direção ao peito.|Mantenha.",
  "Tensão no glúteo|Cabeça e ombros relaxados",
  "Dor na virilha (possível conflito femoroacetabular): reduzir flexão",
  "3 × 30 s por lado", "", "", "");

E("anc_along_adut", "Alongamento dos adutores", "borboleta, alongamento sentado ou de pé",
  "r:anca o:flexibilidade mu:adutores p:sent,pe m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:frontal l:bi",
  "Sentado, junte as plantas dos pés e deixe os joelhos cair para fora.|Mantenha as costas direitas e incline-se ligeiramente à frente.|Variante de pé: afundo lateral lento.",
  "Pressão suave nos joelhos|Costas longas",
  "Forçar os joelhos para baixo|Arredondar as costas",
  "3 × 30 s", "", "", "");

E("anc_iso_adut", "Isometria dos adutores com bola", "squeeze test, aperto de bola",
  "r:anca o:forca mu:adutores p:dd m:bola,bolapeq n:1 f:1,2 ct:isometrica c:aberta k:sem pl:frontal l:bi",
  "Deitado de costas, joelhos fletidos, bola entre os joelhos.|Aperte a bola e mantenha.|Variante com as pernas esticadas e a bola entre os tornozelos.",
  "Aumente a força progressivamente|Dor ≤ 3/10",
  "Levantar a bacia|Suster a respiração",
  "5 × 10–30 s", "anc_copenhagen", "", "Útil na dor da virilha relacionada com os adutores e como teste de evolução.");

E("anc_copenhagen", "Prancha adutora de Copenhaga", "Copenhagen adduction, Copenhagen plank",
  "r:anca,core o:forca mu:adutores,obliquos p:dl m:banco n:3 f:3,4 ct:excentrica c:fechada k:parcial pl:frontal l:uni",
  "Deitado de lado, apoiado no antebraço, com a perna de cima apoiada num banco (no joelho = curto, mais fácil; no tornozelo = longo).|Eleve a bacia até alinhar o corpo; a perna de baixo sobe ao encontro do banco.|Desça devagar.",
  "Corpo em linha reta|Comece pela versão curta",
  "Deixar a bacia cair para trás|Começar pela versão longa",
  "Programa preventivo: 3 sessões/semana de 2–3 séries; reduz lesões da virilha no futebol", "", "anc_iso_adut", "Elevada carga excêntrica: dor muscular tardia nas primeiras semanas é comum.");

E("anc_heel_slide", "Deslizamento do calcanhar", "heel slides, flexão ativa anca-joelho",
  "r:anca,joelho o:mobilidade mu:isquios,flexanca p:dd,sent m:nenhum,bolapeq n:1 f:1 ct:assistida c:fechada k:sem pl:sagital l:uni",
  "Deitado de costas, pernas esticadas.|Deslize o calcanhar em direção ao rabo, dobrando o joelho.|Pode ajudar com uma toalha à volta do pé.|Volte a esticar devagar.",
  "Saco de plástico sob o calcanhar facilita o deslizamento|Mantenha 3–5 s na flexão máxima",
  "Rodar a perna para fora|Forçar com dor intensa",
  "2 × 15, 3–4×/dia", "joe_flex_sent joe_bicicleta", "", "Importante no pós-operatório do joelho e da anca (respeitar restrições).");

E("anc_9090", "Mobilidade da anca 90/90", "90-90 hip switch, rotação interna e externa",
  "r:anca o:mobilidade mu:rotanca p:sent m:nenhum n:2 f:2 ct:dinamica c:aberta k:sem pl:transversal l:bi",
  "Sentado no chão, perna da frente com anca e joelho a 90° rodada para fora, perna de trás a 90° rodada para dentro.|Rode as duas pernas para o outro lado, trocando a posição (joelhos 'tipo limpa-para-brisas').|Mantenha o tronco direito.",
  "Use as mãos atrás para apoio no início|Movimento controlado",
  "Arredondar as costas|Forçar a rotação interna com dor na virilha",
  "2 × 8 trocas", "", "lom_rot_dd", "");

E("anc_rockback", "Rock back em quatro apoios", "balanço para trás, flexão de anca",
  "r:anca,lombar o:mobilidade,controlo mu:flexanca,gluteomax p:quad m:nenhum n:1 f:1,2 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Em quatro apoios, coluna neutra.|Leve a bacia para trás em direção aos calcanhares, mantendo a lombar neutra.|Pare antes de a lombar arredondar e volte.",
  "Coluna longa|Joelhos à largura da anca ou mais afastados",
  "Arredondar a lombar|Mexer a cabeça",
  "2 × 10", "", "", "");

/* ---------- JOELHO ---------- */
E("joe_quad_set", "Contração isométrica do quadricípite", "quad set, setting do quadricípite",
  "r:joelho o:forca,controlo mu:quadricipite p:dd,sent m:bolapeq n:1 f:1 ct:isometrica c:aberta k:sem pl:sagital l:uni",
  "Deitado de costas ou sentado com a perna esticada.|Coloque uma toalha enrolada sob o joelho.|Empurre o joelho contra a toalha, contraindo a coxa e puxando a rótula para cima.|Mantenha e relaxe.",
  "Veja/sinta a rótula a subir|Puxe o pé para cima ao mesmo tempo",
  "Contrair só os glúteos|Suster a respiração",
  "10 × 10 s, várias vezes por dia", "joe_slr joe_tke", "", "Essencial para combater a inibição do quadricípite (AMI) após cirurgia ou derrame.");

E("joe_slr", "Elevação da perna estendida", "SLR, straight leg raise",
  "r:joelho,anca o:forca mu:quadricipite,flexanca p:dd m:nenhum,caneleira n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Deitado de costas, a outra perna fletida.|Contraia o quadricípite (joelho bem esticado).|Eleve a perna até à altura do joelho oposto.|Desça devagar mantendo o joelho esticado.",
  "Contrair primeiro, levantar depois|Se o joelho dobrar ('extension lag'), volte ao quad set",
  "Deixar o joelho dobrar|Arquear a lombar",
  "3 × 10–15", "joe_ext_cadeira joe_mini_agach", "joe_quad_set", "");

E("joe_ext_passiva", "Extensão passiva do joelho", "prone hang, calcanhar apoiado, ganhar extensão",
  "r:joelho o:mobilidade mu:isquios,gemeos p:dd,dv,sent m:bolapeq n:1 f:1,2 ct:alongamento c:aberta k:sem pl:sagital l:uni",
  "Sentado ou deitado, apoie o calcanhar sobre uma toalha enrolada, deixando o joelho sem apoio por baixo.|Deixe a gravidade esticar o joelho; pode contrair o quadricípite de vez em quando.|Variante: deitado de barriga para baixo com a perna fora da marquesa.",
  "Relaxe completamente|Pode colocar um peso leve sobre a coxa, acima do joelho",
  "Colocar peso diretamente sobre a rótula|Rodar a perna para fora",
  "5–10 min, 3–4×/dia", "", "", "Recuperar a extensão completa precocemente é prioridade após LCA e prótese do joelho.");

E("joe_flex_sent", "Flexão do joelho assistida sentado", "wall slide sentado, ganhar flexão",
  "r:joelho o:mobilidade mu:quadricipite p:sent m:cadeira n:1 f:1,2 ct:assistida c:fechada k:parcial pl:sagital l:uni",
  "Sentado numa cadeira, deslize o pé para trás, dobrando o joelho o mais possível.|Com o outro pé à frente do tornozelo, empurre suavemente para dobrar mais.|Mantenha 5–10 s e volte.",
  "Use meias numa superfície lisa|Avance o corpo na cadeira para aumentar a flexão",
  "Levantar o rabo|Forçar com dor intensa",
  "10 repetições, 3–4×/dia", "joe_bicicleta", "anc_heel_slide", "");

E("joe_bicicleta", "Bicicleta estática", "cicloergómetro",
  "r:joelho,anca,global o:mobilidade,cardio,resistencia mu:quadricipite,gluteomax p:sent m:maquina n:1 f:1,2,3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Ajuste o selim: com o pedal em baixo, o joelho fica ligeiramente fletido.|Sem amplitude completa, comece com balanço para a frente e para trás.|Quando conseguir dar a volta completa, pedale com resistência baixa.",
  "Selim mais alto facilita no início (menos flexão)|Ritmo confortável",
  "Selim baixo demais com dor anterior do joelho|Resistência excessiva cedo",
  "10–20 min; necessário cerca de 110° de flexão para a volta completa", "", "", "");

E("joe_tke", "Extensão terminal do joelho com elástico", "TKE, terminal knee extension",
  "r:joelho o:forca,controlo mu:quadricipite p:pe m:elastico n:1 f:1,2 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "Elástico ancorado à frente, passado por trás do joelho.|Com o joelho ligeiramente fletido, estique-o contra a resistência.|Mantenha 2 s e relaxe.",
  "Contraia a coxa e 'bloqueie' o joelho|Peso na perna a trabalhar",
  "Hiperestender bruscamente|Inclinar o tronco",
  "3 × 15", "joe_mini_agach", "joe_quad_set", "");

E("joe_mini_agach", "Mini-agachamento", "agachamento parcial, 0–45°",
  "r:joelho,anca o:forca,controlo mu:quadricipite,gluteomax p:pe m:nenhum,cadeira n:1 f:2 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "De pé, pés à largura da anca, apoio numa cadeira se precisar.|Dobre ligeiramente os joelhos (até cerca de 45°), levando a bacia para trás.|Suba de novo.",
  "Joelhos alinhados com os pés|Peso distribuído pelo pé inteiro",
  "Joelhos para dentro|Subir só com as costas",
  "3 × 10–15", "joe_agach_caixa", "joe_tke", "");

E("joe_agach_caixa", "Agachamento para a cadeira (box squat)", "sentar-levantar controlado, box squat",
  "r:joelho,anca o:forca,funcional mu:quadricipite,gluteomax p:pe m:cadeira,halter n:2 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "De pé, de costas para uma cadeira ou banco.|Agache até tocar ao de leve no assento, sem se sentar.|Suba empurrando o chão.|Altura do assento mais baixa e carga (goblet) para progredir.",
  "Tronco ligeiramente inclinado|O rabo vai para trás",
  "Cair no assento|Joelhos a fechar",
  "3 × 10–12", "fun_goblet joe_afundo", "joe_mini_agach fun_levantar", "");

E("joe_wall_sit", "Agachamento isométrico na parede", "wall sit, cadeira",
  "r:joelho,anca o:forca,resistencia mu:quadricipite p:pe m:parede n:2 f:2,3 ct:isometrica c:fechada k:total pl:sagital l:bi",
  "Costas apoiadas na parede, pés à frente.|Deslize para baixo até à flexão desejada (30–60°).|Mantenha.",
  "Ângulo escolhido sem dor|Peso nos calcanhares",
  "Joelhos à frente dos pés com dor|Prender a respiração",
  "5 × 30–45 s", "joe_spanish", "joe_mini_agach", "Isometria pode ter efeito analgésico de curta duração na tendinopatia rotuliana (resposta variável).");

E("joe_spanish", "Agachamento espanhol", "Spanish squat, agachamento com cinto atrás dos joelhos",
  "r:joelho o:forca mu:quadricipite p:pe m:elastico,outro n:2 f:2,3 ct:isometrica c:fechada k:total pl:sagital l:bi",
  "Prenda um cinto ou banda rígida a um ponto fixo e passe-a atrás dos dois joelhos.|Afaste-se até ficar em tensão e agache, deixando as tíbias verticais e a bacia para trás.|Mantenha na posição (isometria) ou faça repetições lentas.",
  "Tíbias verticais: o cinto segura os joelhos|Grande ativação do quadricípite com pouca carga no tendão em compressão",
  "Deixar o cinto folgar|Inclinar muito o tronco",
  "5 × 30–45 s ou 3 × 10 lentas", "joe_ext_iso joe_declinado", "joe_wall_sit", "Muito usado na tendinopatia rotuliana e na dor patelofemoral.");

E("joe_ext_iso", "Isometria de extensão do joelho a 60°", "leg extension isométrica, tendinopatia rotuliana",
  "r:joelho o:forca mu:quadricipite p:sent m:maquina,elastico n:2 f:2,3 ct:isometrica c:aberta k:sem pl:sagital l:uni",
  "Sentado na máquina de extensão (ou com elástico/resistência fixa).|Com o joelho a cerca de 60° de flexão, empurre contra a resistência sem movimento.|Mantenha.",
  "Esforço elevado (cerca de 70% do máximo) se tolerado|Dor ≤ 3/10",
  "Levantar a coxa do banco|Movimentar",
  "5 × 45 s com 2 min de pausa", "joe_ext_cadeira", "joe_quad_set", "Rio et al. 2015 popularizaram este protocolo; a evidência do efeito analgésico é inconsistente, mas é uma forma útil de carga inicial.");

E("joe_ext_cadeira", "Extensão do joelho sentado", "leg extension, cadeia aberta",
  "r:joelho o:forca mu:quadricipite p:sent m:maquina,caneleira,elastico n:2 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Sentado, com caneleira ou na máquina.|Estenda o joelho e desça devagar em 3 s.|Após LCA: começar na amplitude 90–45° e progredir.",
  "Descida lenta|Costas apoiadas",
  "Balançar|Fazer a amplitude final com carga elevada cedo após LCA",
  "3 × 10–15", "", "joe_slr joe_ext_iso", "Após reconstrução do LCA, a cadeia aberta é segura em 90–45° desde cedo e progressivamente em amplitude completa (consenso por volta das 12 semanas, conforme protocolo).");

E("joe_leg_press", "Leg press", "prensa de pernas",
  "r:joelho,anca o:forca mu:quadricipite,gluteomax p:sent m:maquina n:2 f:3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Sentado na máquina, pés à largura da anca na plataforma.|Desça a plataforma até cerca de 90° de flexão do joelho.|Empurre de volta sem bloquear completamente os joelhos.|Variante unilateral.",
  "Lombar sempre apoiada|Joelhos alinhados com os pés",
  "Descer tanto que a bacia se levanta|Bloquear os joelhos com força",
  "3–4 × 8–12 a RPE 7–8", "", "joe_agach_caixa", "");

E("joe_step_down", "Descida frontal do degrau", "step down, controlo excêntrico",
  "r:joelho,anca o:controlo,forca mu:quadricipite,gluteomed p:pe m:step n:3 f:3 ct:excentrica c:fechada k:total pl:sagital l:uni",
  "De pé num degrau sobre uma perna, a outra solta à frente.|Desça devagar até o calcanhar livre tocar ao de leve no chão.|Suba de novo.",
  "Joelho alinhado com o 2.º dedo|Bacia nivelada",
  "Joelho a colapsar para dentro (valgo)|Inclinar o tronco para o lado",
  "3 × 8–12; degrau de 10 a 20 cm", "joe_declinado joe_bulgaro", "anc_step_up anc_step_lateral", "Ótimo teste e exercício de qualidade de movimento.");

E("joe_declinado", "Agachamento unipodal em plano declinado", "decline squat, tábua inclinada 25°",
  "r:joelho o:forca mu:quadricipite p:pe m:outro n:3 f:3 ct:excentrica c:fechada k:total pl:sagital l:uni",
  "De pé sobre uma tábua inclinada a cerca de 25°, calcanhares mais altos.|Em apoio unipodal, agache devagar até 60–70° de flexão.|Suba com as duas pernas (versão excêntrica) ou com uma (progressão).",
  "Descida em 3 s|Tronco direito",
  "Valgo do joelho|Amplitude excessiva com dor",
  "3 × 15, ou progressão de carga lenta pesada (HSR)", "", "joe_spanish joe_step_down", "Clássico na tendinopatia rotuliana; dor ≤ 3–5/10 durante, sem agravar no dia seguinte.");

E("joe_bulgaro", "Agachamento búlgaro", "split squat com pé de trás elevado",
  "r:joelho,anca o:forca,equilibrio mu:quadricipite,gluteomax p:pe m:banco,halter n:3 f:3 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "Pé de trás apoiado num banco, pé da frente cerca de um passo à frente.|Desça o joelho de trás em direção ao chão.|Suba empurrando com a perna da frente.",
  "Tronco ligeiramente à frente para mais glúteo|Joelho da frente alinhado com o pé",
  "Pé da frente demasiado perto|Perder o equilíbrio por falta de base",
  "3 × 8–10 por perna", "fun_goblet", "joe_afundo", "");

E("joe_afundo", "Afundo (lunge)", "passada, lunge estático",
  "r:joelho,anca o:forca,funcional mu:quadricipite,gluteomax p:pe m:nenhum,halter n:2 f:3 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "De pé, dê um passo largo à frente.|Desça até os dois joelhos ficarem a cerca de 90°.|Empurre com o pé da frente para voltar.|Progrida: estático → em deslocação → para trás → com carga.",
  "Tronco direito|Joelho de trás quase toca no chão",
  "Joelho da frente a fugir para dentro|Passos curtos",
  "3 × 10 por perna", "joe_bulgaro joe_afundo_lat", "joe_mini_agach", "");

E("joe_afundo_lat", "Afundo lateral", "lateral lunge, cossack",
  "r:joelho,anca o:forca,flexibilidade mu:adutores,quadricipite,gluteomax p:pe m:nenhum,halter n:3 f:3 ct:dinamica c:fechada k:total pl:frontal l:uni",
  "De pé, pés afastados.|Desloque o peso para um lado, dobrando esse joelho e mantendo a outra perna esticada.|Volte ao centro.",
  "Bacia para trás|Pé inteiro apoiado",
  "Joelho a ultrapassar muito o pé para dentro|Arredondar as costas",
  "3 × 8 por lado", "joe_corte", "joe_afundo", "");

E("joe_curl_isquios", "Flexão do joelho (curl dos isquiotibiais)", "hamstring curl, em pé ou em decúbito ventral",
  "r:joelho,anca o:forca mu:isquios p:pe,dv m:elastico,caneleira,maquina n:2 f:2,3 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "De pé com apoio, ou deitado de barriga para baixo.|Dobre o joelho levando o calcanhar ao rabo, contra a resistência.|Desça devagar.",
  "Coxas alinhadas|Descida de 3 s",
  "Levantar a bacia (deitado)|Arquear a lombar",
  "3 × 12–15", "joe_ponte_isquios joe_nordico", "", "");

E("joe_ponte_isquios", "Ponte de isquiotibiais com calcanhares elevados", "hamstring bridge, ponte longa",
  "r:joelho,anca o:forca mu:isquios,gluteomax p:dd m:banco,bola n:2 f:3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Deitado de costas, calcanhares num banco ou bola, joelhos ligeiramente fletidos.|Eleve a bacia.|Desça devagar.|Progressão: unipodal; joelhos mais esticados; curl com bola suíça.",
  "Empurre o banco com os calcanhares|Bacia nivelada",
  "Arquear a lombar|Cãibras: ajuste a distância",
  "3 × 10–12", "joe_nordico", "core_ponte", "");

E("joe_nordico", "Nordic hamstring", "nórdico, excêntrico dos isquiotibiais",
  "r:joelho,anca o:forca mu:isquios p:joel m:outro n:4 f:3,4 ct:excentrica c:aberta k:sem pl:sagital l:bi",
  "Ajoelhado, com os tornozelos presos por um parceiro ou apoio.|Corpo em linha reta da cabeça aos joelhos.|Incline-se lentamente para a frente o mais possível, travando com os isquiotibiais.|Amortize a queda com as mãos e volte com ajuda das mãos.",
  "Desça o mais devagar possível|Bacia esticada (não dobrar na anca)",
  "Dobrar na anca|Cair sem controlo",
  "Programa típico: 1–3 séries de 3–8, 1–3×/semana; reduz lesões dos isquiotibiais em cerca de 50%", "", "joe_ponte_isquios", "Dor muscular tardia é comum nas primeiras semanas: começar com volume baixo.");

E("joe_askling_ext", "Askling L-protocol: Extender", "Askling extender, hamstring lengthening",
  "r:joelho,anca o:forca,flexibilidade mu:isquios p:dd m:nenhum n:2 f:2,3 ct:excentrica c:aberta k:sem pl:sagital l:uni",
  "Deitado de costas, segure a coxa da perna lesionada com a anca a cerca de 90°.|Estenda o joelho de forma lenta até ao ponto de tensão (sem dor).|Volte a fletir.",
  "A anca mantém-se fixa|Rápido mas controlado, sem dor",
  "Deixar a coxa descer|Ultrapassar o limiar de dor",
  "3 × 12, 2×/dia", "joe_askling_diver", "", "O protocolo L (Askling et al. 2013) acelerou o regresso ao desporto nas lesões dos isquiotibiais face a um protocolo convencional.");

E("joe_askling_diver", "Askling L-protocol: Diver", "Askling diver, mergulhador",
  "r:joelho,anca o:forca,equilibrio mu:isquios,gluteomax p:pe m:nenhum n:3 f:3 ct:excentrica c:fechada k:total pl:sagital l:uni",
  "Em apoio unipodal sobre a perna lesionada, joelho ligeiramente fletido.|Incline o tronco à frente e eleve a outra perna para trás, ao mesmo tempo que estende os braços à frente.|Volte.",
  "Movimento a partir da anca|Joelho de apoio a cerca de 10–20°",
  "Rodar a bacia|Fazer com dor",
  "3 × 6, 1×/dia", "joe_askling_glider", "joe_askling_ext", "");

E("joe_askling_glider", "Askling L-protocol: Glider", "Askling glider, deslizamento",
  "r:joelho,anca o:forca,flexibilidade mu:isquios,adutores p:pe m:nenhum n:3 f:3,4 ct:excentrica c:fechada k:total pl:sagital l:uni",
  "De pé, com a perna lesionada à frente e o peso nela, joelho ligeiramente fletido.|Segure-se num apoio. Deslize a perna de trás para trás (meia no chão liso).|Volte usando os braços, não a perna lesionada.",
  "Tronco direito|Amplitude progressiva",
  "Puxar com a perna lesionada|Fazer depressa",
  "3 × 4, a cada 2 dias", "", "joe_askling_diver", "");

E("joe_salto_bi", "Saltos bipodais com aterragem", "squat jump, counter-movement jump",
  "r:joelho,anca,tornozelo o:potencia mu:quadricipite,gluteomax,gemeos p:pe m:nenhum n:3 f:4 ct:pliometrica c:fechada k:total pl:sagital l:bi",
  "De pé, pés à largura da anca.|Agache e salte o mais alto possível.|Aterre suave sobre a parte da frente dos pés, dobrando joelhos e ancas.|Estabilize 2 s antes do próximo.",
  "Aterragem silenciosa|Joelhos alinhados com os pés",
  "Aterrar com os joelhos esticados|Valgo do joelho na receção",
  "3 × 5–8", "joe_hop joe_queda", "joe_agach_caixa", "");

E("joe_queda", "Queda e aterragem (drop landing)", "drop jump, aterragem de um caixote",
  "r:joelho,anca o:potencia,controlo mu:quadricipite,gluteomax p:pe m:step n:3 f:4 ct:pliometrica c:fechada k:total pl:sagital l:bi",
  "De pé num caixote baixo (20–30 cm).|Dê um passo em frente e aterre com os dois pés, absorvendo a queda.|Progressão: aterragem unipodal; aterrar e saltar logo (drop jump).",
  "Aterragem suave e simétrica|Ancas para trás, joelhos sobre os pés",
  "Valgo dinâmico|Aterrar só sobre a perna sã",
  "3 × 5", "joe_hop", "joe_salto_bi", "");

E("joe_hop", "Saltos unipodais horizontais (hop)", "single hop, triple hop, hop test",
  "r:joelho,tornozelo,anca o:potencia,equilibrio mu:quadricipite,gluteomax,gemeos p:pe m:nenhum n:4 f:4 ct:pliometrica c:fechada k:total pl:sagital l:uni",
  "Em apoio numa perna, salte para a frente e aterre na mesma perna.|Mantenha a aterragem estável 2 s.|Progressão: três saltos seguidos; saltos cruzados (crossover).",
  "Aterragem controlada|Comparar com o lado são (índice de simetria)",
  "Aterrar com o joelho esticado|Perder o equilíbrio",
  "3 × 5 por perna", "joe_hop_lat joe_corte", "joe_queda", "Os hop tests fazem parte das baterias de regresso ao desporto (objetivo habitual de simetria ≥ 90%).");

E("joe_hop_lat", "Saltos laterais unipodais", "lateral hop, saltos laterais",
  "r:joelho,tornozelo,anca o:potencia,equilibrio mu:gluteomed,peroneais,quadricipite p:pe m:nenhum n:4 f:4 ct:pliometrica c:fechada k:total pl:frontal l:uni",
  "Em apoio unipodal, salte para o lado e aterre na mesma perna.|Estabilize e salte de volta.|Progressão: sem pausa, sobre uma linha, em ritmo.",
  "Joelho alinhado na aterragem|Tronco estável",
  "Valgo do joelho|Inclinar o tronco",
  "3 × 10 (5 por lado)", "joe_corte", "joe_hop", "");

E("joe_corte", "Mudanças de direção progressivas", "cutting, agilidade, pivot",
  "r:joelho,tornozelo,anca,global o:potencia,funcional,equilibrio mu:quadricipite,gluteomed,gemeos p:pe m:outro n:4 f:4 ct:pliometrica c:fechada k:total pl:multi l:bi",
  "Comece com corrida em linha reta e paragens.|Progrida: curvas largas → mudanças de 45° planeadas → 90° planeadas → mudanças não planeadas (reação a um sinal).|Por fim, situações específicas do desporto.",
  "Baixar o centro de gravidade antes de mudar|Pé de apoio afastado do corpo",
  "Valgo do joelho no apoio|Tronco a cair para fora",
  "Progredir velocidade, ângulo e imprevisibilidade ao longo de semanas", "", "joe_hop_lat", "Fase final de LCA e entorses; requer força e controlo prévios.");

E("joe_along_quad", "Alongamento do quadricípite", "alongamento de pé ou deitado de lado",
  "r:joelho,anca o:flexibilidade mu:quadricipite,flexanca p:pe,dl m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:sagital l:uni",
  "De pé com apoio, dobre o joelho e segure o tornozelo atrás.|Leve o calcanhar ao rabo, joelhos juntos.|Retroversão da bacia aumenta o alongamento.",
  "Tronco direito|Joelhos lado a lado",
  "Arquear a lombar|Afastar o joelho para o lado",
  "3 × 30 s", "", "", "");

E("joe_along_isq", "Alongamento dos isquiotibiais", "alongamento posterior da coxa",
  "r:joelho,anca o:flexibilidade mu:isquios p:dd,pe m:bolapeq n:1 f:2 ct:alongamento c:aberta k:sem pl:sagital l:uni",
  "Deitado de costas, passe uma toalha pelo pé.|Com o joelho esticado, eleve a perna até sentir tensão atrás da coxa.|Mantenha.|De pé: calcanhar num degrau baixo e incline-se a partir da anca, costas direitas.",
  "Costas longas|A outra perna fica esticada no chão",
  "Arredondar as costas|Formigueiro no pé (tensão neural): reduzir",
  "3 × 30 s", "", "", "Após lesão aguda dos isquiotibiais, evitar alongamento intenso nos primeiros dias.");

/* ---------- TORNOZELO E PÉ ---------- */
E("pe_alfabeto", "Alfabeto com o tornozelo", "AROM tornozelo, escrever letras",
  "r:tornozelo o:mobilidade mu:tibialant,gemeos,peroneais p:sent,dd m:nenhum n:1 f:1 ct:dinamica c:aberta k:sem pl:multi l:uni",
  "Sentado ou deitado, perna elevada.|Escreva as letras do alfabeto no ar com o dedo grande do pé.|Movimento só no tornozelo.",
  "Letras grandes|Ajuda a reduzir o edema se a perna estiver elevada",
  "Mexer a perna inteira|Fazer depressa",
  "1–2 alfabetos, 3×/dia", "pe_dorsi_parede", "", "Fase aguda da entorse: combinar com proteção, elevação e carga precoce conforme tolerado.");

E("pe_dorsi_parede", "Dorsiflexão com joelho à parede", "knee to wall, lunge test",
  "r:tornozelo o:mobilidade,flexibilidade mu:gemeos p:pe,joel m:parede n:1 f:2 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "De frente para a parede, pé a alguns centímetros dela.|Leve o joelho à parede sem levantar o calcanhar.|Afaste o pé até ao limite em que ainda toca: a distância é a medida.",
  "Joelho alinhado com o 2.º dedo|Calcanhar sempre no chão",
  "Deixar o arco do pé colapsar|Levantar o calcanhar",
  "3 × 10–15", "", "pe_alfabeto", "Uma assimetria > 2 cm em relação ao lado são é relevante.");

E("pe_gemeos_bi", "Elevação dos calcanhares bipodal", "calf raise, pontas dos pés",
  "r:tornozelo o:forca mu:gemeos p:pe m:nenhum,parede n:1 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "De pé, apoio leve nas mãos.|Suba nas pontas dos pés o mais alto possível.|Desça devagar em 3 s.",
  "Peso sobre o 1.º e 2.º dedos|Joelhos esticados para os gémeos",
  "Rodar os pés para fora|Descida rápida",
  "3 × 15–20", "pe_gemeos_uni", "", "");

E("pe_gemeos_uni", "Elevação do calcanhar unipodal", "single-leg heel raise",
  "r:tornozelo o:forca,resistencia mu:gemeos p:pe m:nenhum,step,halter n:2 f:3 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "Apoio numa só perna, com as mãos levemente apoiadas.|Suba o mais alto possível e desça devagar.|Progressão: num degrau (amplitude completa) e com carga (mochila ou halter).",
  "Altura máxima em cada repetição|Ritmo: 2 s sobe, 2–3 s desce",
  "Repetições baixas sem amplitude|Inclinar o tronco",
  "3 × 15, progredindo para carga elevada (3 × 6–8 pesado)", "pe_alfredson pe_rathleff", "pe_gemeos_bi", "Referência frequente: 25 ou mais repetições unipodais em adultos saudáveis (diminui com a idade).");

E("pe_alfredson", "Protocolo excêntrico de Alfredson", "excêntrico de gémeos no degrau, tendinopatia de Aquiles",
  "r:tornozelo o:forca mu:gemeos p:pe m:step n:2 f:3 ct:excentrica c:fechada k:total pl:sagital l:uni",
  "De pé num degrau só com a parte da frente dos pés.|Suba nas pontas com as duas pernas.|Passe o peso para a perna afetada e desça o calcanhar abaixo do nível do degrau, devagar.|Faça com o joelho esticado (gémeos) e com o joelho fletido (sóleo).",
  "Descida lenta, cerca de 3 s|Dor ligeira aceitável",
  "Subir com a perna afetada (o protocolo é só excêntrico)|Descer bruscamente",
  "3 × 15, joelho esticado e fletido, 2×/dia, 12 semanas", "pe_gemeos_uni", "pe_gemeos_bi", "Na tendinopatia insercional, evitar descer abaixo do nível do degrau (fazer no chão plano). Alternativa igualmente eficaz: carga lenta pesada (HSR).");

E("pe_soleo_sent", "Elevação dos calcanhares sentado (sóleo)", "seated calf raise",
  "r:tornozelo o:forca mu:gemeos p:sent m:halter,maquina n:2 f:2,3 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Sentado, joelhos a 90°, carga sobre os joelhos.|Eleve os calcanhares o mais possível.|Desça devagar.",
  "Joelho fletido isola o sóleo|Carga progressiva",
  "Amplitude incompleta|Ritmo rápido",
  "3 × 12–15", "", "", "O sóleo é muito solicitado na corrida.");

E("pe_rathleff", "Elevação do calcanhar com toalha sob os dedos (Rathleff)", "high-load calf raise, fasciopatia plantar",
  "r:tornozelo o:forca mu:gemeos,intrinsecos p:pe m:step,bolapeq,halter n:3 f:3 ct:dinamica c:fechada k:total pl:sagital l:uni",
  "Toalha enrolada sob os dedos do pé (dorsiflexão dos dedos que tensiona a fáscia).|Em apoio unipodal, suba em 3 s, pause 2 s, desça em 3 s.|Use uma mochila com livros para carga.",
  "Ritmo 3-2-3|Dedos bem levantados sobre a toalha",
  "Ritmo rápido|Perder o equilíbrio (apoie as mãos)",
  "Dia sim, dia não: 3 × 12 RM, progredindo para 4 × 10 e 5 × 8 RM", "", "pe_gemeos_uni", "Rathleff et al. 2015 (Scand J Med Sci Sports).");

E("pe_eversao", "Eversão com elástico", "peroneais, eversão resistida",
  "r:tornozelo o:forca mu:peroneais p:sent m:elastico n:1 f:2,3 ct:dinamica c:aberta k:sem pl:frontal l:uni",
  "Sentado, perna esticada, elástico à volta do pé, ancorado do lado de dentro.|Leve o pé para fora contra a resistência.|Volte devagar.",
  "Movimento só no tornozelo|Lento na volta",
  "Rodar a perna em vez do pé|Fazer depressa",
  "3 × 15", "pe_unipodal", "pe_alfabeto", "Prioritário após entorse lateral do tornozelo.");

E("pe_inversao", "Inversão com elástico", "tibial posterior, inversão resistida",
  "r:tornozelo o:forca mu:tibialpost p:sent m:elastico n:1 f:2,3 ct:dinamica c:aberta k:sem pl:frontal l:uni",
  "Sentado, elástico à volta do pé, ancorado do lado de fora.|Leve o pé para dentro e para baixo contra a resistência.|Volte devagar.",
  "O tibial posterior trabalha melhor com o pé em ligeira flexão plantar|Perna imóvel",
  "Rodar a anca|Fazer depressa",
  "3 × 15", "pe_gemeos_uni", "", "Disfunção do tibial posterior: combinar com elevações de calcanhar com bola entre os tornozelos.");

E("pe_dorsiflexao", "Dorsiflexão com elástico", "tibial anterior, flexão dorsal resistida",
  "r:tornozelo o:forca mu:tibialant p:sent m:elastico n:1 f:2 ct:dinamica c:aberta k:sem pl:sagital l:uni",
  "Sentado, perna esticada, elástico à volta do dorso do pé, ancorado à frente.|Puxe o pé para cima contra a resistência.|Volte devagar.",
  "Amplitude completa|Dedos relaxados",
  "Puxar só os dedos|Fletir o joelho",
  "3 × 15", "", "", "");

E("pe_toalha", "Recolher a toalha com os dedos", "towel curls, garra",
  "r:tornozelo o:forca mu:intrinsecos p:sent m:bolapeq n:1 f:2 ct:dinamica c:aberta k:parcial pl:sagital l:uni",
  "Sentado, pé sobre uma toalha estendida no chão.|Puxe a toalha para si, enrolando-a com os dedos.|Calcanhar fixo no chão.",
  "Use todos os dedos|Pode pôr um peso na ponta da toalha",
  "Levantar o calcanhar|Rodar o pé",
  "3 × até ao fim da toalha", "pe_short_foot", "", "Os dedos em garra trabalham sobretudo os flexores longos; o pé curto é mais específico para os intrínsecos.");

E("pe_short_foot", "Pé curto", "short foot, arco plantar ativo",
  "r:tornozelo o:controlo,forca mu:intrinsecos,tibialpost p:sent,pe m:nenhum n:2 f:2,3 ct:isometrica c:fechada k:parcial pl:sagital l:uni",
  "Sentado com o pé apoiado.|Aproxime a base do dedo grande do calcanhar, levantando o arco, sem dobrar os dedos.|Mantenha 5–10 s.|Progressão: de pé, apoio unipodal, durante agachamento.",
  "Dedos esticados e relaxados no chão|Sinta o arco a subir",
  "Fletir os dedos (garra)|Rodar o pé",
  "3 × 10 × 5–10 s", "pe_unipodal", "pe_toalha", "");

E("pe_unipodal", "Equilíbrio unipodal", "apoio monopodal, propriocepção",
  "r:tornozelo,joelho,anca o:equilibrio mu:peroneais,gluteomed,intrinsecos p:pe m:nenhum n:1 f:2,3 ct:isometrica c:fechada k:total pl:multi l:uni",
  "Em apoio numa perna, joelho ligeiramente fletido, perto de um apoio.|Mantenha o equilíbrio.|Progressões: olhos fechados; mexer a cabeça; atirar uma bola; superfície instável.",
  "Olhar num ponto fixo ao início|Pé 'agarra' o chão sem garra",
  "Agarrar-se ao apoio constantemente|Joelho em hiperextensão",
  "3–5 × 30 s por perna", "pe_instavel pe_star", "fun_tandem", "Programas de equilíbrio reduzem a recidiva da entorse do tornozelo.");

E("pe_instavel", "Equilíbrio em superfície instável", "almofada, BOSU, prancha de equilíbrio",
  "r:tornozelo,joelho o:equilibrio mu:peroneais,gluteomed p:pe m:instavel n:3 f:3 ct:isometrica c:fechada k:total pl:multi l:uni",
  "De pé sobre uma almofada, BOSU ou prancha de equilíbrio.|Mantenha o apoio bipodal e depois unipodal.|Adicione tarefas: lançar uma bola, rodar a cabeça, agachamentos.",
  "Comece bipodal|Perto de uma parede para segurança",
  "Prender a respiração|Tronco rígido",
  "3–5 × 30–60 s", "pe_star joe_hop_lat", "pe_unipodal", "");

E("pe_star", "Star excursion / Y-balance", "SEBT, alcance em estrela",
  "r:tornozelo,joelho,anca o:equilibrio,controlo mu:gluteomed,quadricipite,peroneais p:pe m:nenhum n:3 f:3,4 ct:dinamica c:fechada k:total pl:multi l:uni",
  "Apoio numa perna no centro de uma estrela marcada no chão.|Com o pé livre, alcance o mais longe possível em cada direção (anterior, posteromedial, posterolateral), tocando ao de leve.|Volte ao centro sem apoiar.",
  "Joelho de apoio alinhado|Toque leve, sem transferir peso",
  "Levantar o calcanhar de apoio|Apoiar o pé livre",
  "3 × 3–5 alcances por direção", "joe_hop_lat", "pe_unipodal", "Assimetria anterior > 4 cm associa-se a maior risco de lesão em alguns estudos.");

E("pe_along_gemeos", "Alongamento dos gémeos e sóleo na parede", "calf stretch",
  "r:tornozelo o:flexibilidade mu:gemeos p:pe m:parede n:1 f:2 ct:alongamento c:fechada k:total pl:sagital l:uni",
  "De frente para a parede, uma perna atrás.|Com o joelho de trás esticado e o calcanhar no chão, incline-se para a parede (gémeos).|Depois dobre o joelho de trás (sóleo).",
  "Pé de trás a apontar para a frente|Calcanhar sempre no chão",
  "Rodar o pé para fora|Arquear as costas",
  "3 × 30 s cada versão", "", "", "");

E("pe_along_fascia", "Alongamento da fáscia plantar", "DiGiovanni, alongamento plantar sentado",
  "r:tornozelo o:flexibilidade mu:intrinsecos p:sent m:nenhum n:1 f:2 ct:alongamento c:aberta k:sem pl:sagital l:uni",
  "Sentado, cruze a perna afetada sobre a outra.|Com a mão, puxe os dedos do pé para trás (em direção à canela) até sentir tensão na planta.|Palpe a fáscia tensa com a outra mão.",
  "Fazer antes dos primeiros passos da manhã|Tensão sentida na planta do pé",
  "Puxar só o dedo grande|Fazer bruscamente",
  "10 × 10 s, 3×/dia", "pe_rathleff", "", "");

E("pe_rolar_bola", "Rolar a planta do pé sobre bola", "automassagem plantar, garrafa congelada",
  "r:tornozelo o:mobilidade mu:intrinsecos p:sent,pe m:bolapeq n:1 f:1,2 ct:assistida c:fechada k:parcial pl:sagital l:uni",
  "Sentado, coloque uma bola de ténis (ou garrafa de água congelada) sob o pé.|Role do calcanhar até aos dedos com pressão confortável.",
  "Pressão moderada|Útil antes de levantar ou após estar de pé muito tempo",
  "Pressão excessiva com dor intensa",
  "1–2 min, 2–3×/dia", "", "", "Alívio sintomático; o tratamento principal é a carga progressiva e a gestão da atividade.");

E("pe_pogo", "Saltos de tornozelo (pogo)", "pogo hops, rigidez do tornozelo",
  "r:tornozelo o:potencia mu:gemeos p:pe m:nenhum n:3 f:4 ct:pliometrica c:fechada k:total pl:sagital l:bi",
  "De pé, pés à largura da anca.|Salte repetidamente com pequenas alturas, joelhos quase esticados, usando os tornozelos como molas.|Progressão: unipodal; para a frente e para os lados.",
  "Contacto com o chão curto|Aterragem na parte da frente do pé",
  "Dobrar muito os joelhos|Calcanhares a bater no chão",
  "3 × 20 s", "joe_hop", "pe_gemeos_uni", "Ponte entre a força e o regresso à corrida (ex.: Aquiles, gémeos).");
