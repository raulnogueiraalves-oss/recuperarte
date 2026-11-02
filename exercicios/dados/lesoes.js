/*
 * Pesquisa por lesões / condições.
 * Cada fase lista exercícios da biblioteca curada (ids de clinica-*.js).
 * As durações são indicativas: a progressão faz-se por CRITÉRIOS, não por calendário.
 * Referências: guidelines e consensos de referência (verificar sempre a versão mais recente).
 *
 * L(id, nome, sinónimos, regiões, resumo, alarmes, princípios, medidas, fases, referências)
 * F(título, duração, objetivos, critérios para progredir, exercícios, a evitar)
 */
window.LESOES = [];
var _l = function (s) { return s ? s.split("|").map(function (x) { return x.trim(); }).filter(Boolean) : []; };
window.F = function (t, dur, obj, crit, ex, evitar) {
  return { t: t, dur: dur, obj: _l(obj), crit: _l(crit), ex: ex.trim().split(/\s+/), evitar: evitar || "" };
};
window.L = function (id, nome, aka, r, resumo, alarmes, principios, medidas, fases, refs) {
  window.LESOES.push({ id: id, nome: nome, aka: aka, r: r.split(" "), resumo: resumo, alarmes: _l(alarmes),
    principios: _l(principios), medidas: medidas, fases: fases, refs: _l(refs) });
};

/* ================= CERVICAL ================= */
L("cervicalgia", "Cervicalgia mecânica com défice de mobilidade", "dor no pescoço, torcicolo, cervicalgia inespecífica", "cervical toracica",
  "Dor cervical localizada, com limitação de movimento e reprodução da dor nos movimentos finais. Boa resposta a terapia manual combinada com exercício de mobilidade, controlo e força cervicoescapular.",
  "Trauma significativo com suspeita de fratura (regras canadianas da coluna cervical)|Sinais de mielopatia: alteração da marcha, perda de destreza, sinal de Hoffmann/Babinski|Sintomas de insuficiência arterial cervical (5 D's e 3 N's: tonturas, diplopia, disartria, disfagia, drop attacks, nistagmo, náuseas, dormência)|Febre, perda de peso inexplicada, antecedentes oncológicos",
  "Educação: bom prognóstico, manter-se ativo|Combinar terapia manual (cervical e torácica) com exercício|Progredir de mobilidade e controlo para força e resistência cervicoescapular",
  "NDI (Neck Disability Index), NPRS, PSFS, amplitude de rotação",
  [
    F("Fase 1 · Alívio e mobilidade", "0–2 semanas", "Reduzir a dor|Restaurar a amplitude sem dor|Ativar flexores profundos",
      "Dor em repouso ≤ 3/10|Rotação cervical ≥ 60° para cada lado|Aceno craniocervical mantido 10 s", "cerv_rot_ativa cerv_incl_ativa cerv_retracao cerv_flex_cranio tor_ext_sent tor_open_book", "Imobilização com colar"),
    F("Fase 2 · Controlo motor", "2–6 semanas", "Controlo e resistência dos flexores e extensores profundos|Mobilidade torácica|Controlo escapular",
      "CCFT ≥ 26 mmHg|Sem dor nas AVD habituais", "cerv_flex_cranio cerv_ext_quad cerv_snag_rot tor_ext_rolo omb_retracao omb_remada", ""),
    F("Fase 3 · Força e resistência", "6+ semanas", "Força cervicoescapular|Tolerância à postura e ao trabalho|Prevenir recidivas",
      "Regresso pleno ao trabalho e desporto|NDI < 10%", "cerv_flex_cranio_elev cerv_iso_multi omb_prone_y omb_prone_t omb_remada_halter omb_pushup_parede", "")
  ],
  "Blanpied PR et al. Neck Pain: Revision 2017. J Orthop Sports Phys Ther 2017;47(7):A1–A83");

L("wad", "Chicotada cervical (WAD)", "whiplash, entorse cervical, acidente de viação", "cervical",
  "Lesão por aceleração-desaceleração, geralmente em acidentes de viação. Na maioria dos casos (WAD I–II) recupera em semanas. Os fatores psicológicos (catastrofização, stress pós-traumático) e a dor intensa inicial preveem a cronicidade.",
  "Excluir fratura e instabilidade (regras canadianas)|WAD III (sinais neurológicos) ou IV (fratura/luxação)|Sintomas de stress pós-traumático marcados: referenciar",
  "Tranquilizar e incentivar a atividade precoce|Evitar colar cervical|Exercício progressivo; propriocepção cervical e controlo oculomotor se houver tonturas|Rastrear fatores psicossociais (ex.: escala de impacto do acontecimento)",
  "NDI, NPRS, TSK, erro de reposicionamento articular",
  [
    F("Fase 1 · Aguda", "0–2 semanas", "Educação e tranquilização|Movimento ativo precoce",
      "Amplitude a melhorar|Dor estável ou a diminuir", "cerv_rot_ativa cerv_incl_ativa cerv_retracao cerv_flex_cranio resp_diafragma", "Repouso prolongado e colar"),
    F("Fase 2 · Controlo e propriocepção", "2–6 semanas", "Controlo motor cervical|Propriocepção e estabilização do olhar",
      "Erro de reposicionamento < 4,5°|Sem tonturas nas AVD", "cerv_flex_cranio cerv_jps cerv_vor cerv_ext_quad omb_retracao", ""),
    F("Fase 3 · Força e função", "6–12 semanas", "Força e resistência cervicoescapular|Regresso ao trabalho e à condução",
      "NDI < 10%", "cerv_flex_cranio_elev cerv_iso_multi omb_prone_y omb_remada_halter fun_caminhada", "")
  ],
  "Blanpied PR et al. Neck Pain: Revision 2017. JOSPT 2017;47(7):A1–A83|Sterling M. Physiotherapy management of whiplash-associated disorders (WAD). J Physiother 2014;60(1):5–12");

L("radic_cervical", "Radiculopatia cervical", "cervicobraquialgia, hérnia cervical, braço dormente", "cervical ombro",
  "Dor no braço num dermátomo, com ou sem parestesias, perda de força ou de reflexos. O cluster de Wainner (Spurling, distração, ULNT1, rotação < 60°) ajuda no diagnóstico. A maioria melhora com tratamento conservador.",
  "Défice motor progressivo|Sinais de mielopatia (marcha, mãos desajeitadas, Hoffmann)|Sintomas bilaterais|Dor intratável que não cede",
  "Posições de alívio (ex.: mão na cabeça)|Mobilização neural (deslizamentos, não tensionamentos, na fase irritável)|Exercício cervical e escapular; tração intermitente pode ajudar a curto prazo",
  "NDI, NPRS, força miotomal, reflexos",
  [
    F("Fase 1 · Irritável", "0–3 semanas", "Diminuir a dor no braço|Posições de alívio|Movimento sem agravar",
      "Dor no braço a diminuir ou centralizar|Sinais neurológicos estáveis", "cerv_retracao cerv_flex_cranio cerv_neuro_mediano tor_ext_sent resp_diafragma", "Movimentos que periferizam os sintomas (extensão + rotação ipsilateral)"),
    F("Fase 2 · Mobilidade e controlo", "3–8 semanas", "Recuperar amplitude|Controlo cervical e escapular",
      "Spurling negativo|Rotação ≥ 60°", "cerv_rot_ativa cerv_ext_quad cerv_neuro_mediano cerv_neuro_ulnar omb_retracao omb_remada", ""),
    F("Fase 3 · Força", "8+ semanas", "Força do membro superior nos miótomos afetados|Função plena",
      "Força simétrica|NDI < 10%", "cerv_flex_cranio_elev cerv_iso_multi omb_re_elastico omb_prone_t cot_tricipite omb_pushup_parede", "")
  ],
  "Blanpied PR et al. Neck Pain: Revision 2017. JOSPT 2017;47(7):A1–A83|Wainner RS et al. Reliability and diagnostic accuracy of the clinical examination and patient self-report measures for cervical radiculopathy. Spine 2003;28(1):52–62");

L("cefaleia_cerv", "Cefaleia cervicogénica", "dor de cabeça do pescoço", "cervical",
  "Cefaleia unilateral desencadeada por movimentos ou posições do pescoço, com limitação de movimento e dor na palpação das cervicais altas. Teste de flexão-rotação positivo (rotação C1-C2 < 32°).",
  "Cefaleia súbita e intensa ('a pior da vida')|Alterações neurológicas, febre ou rigidez da nuca|Início após os 50 anos sem história prévia|Padrão progressivo",
  "Terapia manual + exercício de controlo craniocervical e escapular (Jull 2002)|Auto-SNAG C1-C2 em rotação",
  "Frequência e intensidade das cefaleias, HIT-6, teste flexão-rotação",
  [
    F("Fase 1 · Mobilidade alta", "0–4 semanas", "Restaurar rotação C1-C2|Ativar flexores profundos",
      "Teste flexão-rotação a normalizar", "cerv_snag_rot cerv_flex_cranio cerv_retracao cerv_rot_ativa", ""),
    F("Fase 2 · Controlo e resistência", "4–8 semanas", "Resistência dos flexores profundos|Controlo escapular",
      "Redução de ≥ 50% na frequência das cefaleias", "cerv_flex_cranio_elev cerv_ext_quad omb_retracao omb_prone_t omb_remada", "")
  ],
  "Jull G et al. A randomized controlled trial of exercise and manipulative therapy for cervicogenic headache. Spine 2002;27(17):1835–1843|Blanpied PR et al. Neck Pain: Revision 2017. JOSPT 2017");

/* ================= OMBRO ================= */
L("dor_subacromial", "Dor do ombro relacionada com a coifa dos rotadores", "tendinopatia da coifa, síndrome de conflito subacromial, impingement, bursite subacromial, RCRSP", "ombro",
  "Dor na face lateral do ombro com a elevação e a rotação externa, sobretudo contra resistência. O exercício progressivo é o tratamento de primeira linha e tem resultados semelhantes à cirurgia de descompressão.",
  "Perda súbita de força após trauma (rutura aguda da coifa: referenciar precocemente)|Luxação|Dor noturna constante sem relação mecânica, perda de peso, antecedentes oncológicos|Dor referida de origem cervical ou visceral",
  "Educação e modificação da carga (não repouso total)|Exercício progressivo de carga, aceitando dor ≤ 3–5/10 que acalma até ao dia seguinte|Pelo menos 12 semanas de exercício antes de considerar cirurgia|Injeção de corticoide só como alívio de curto prazo",
  "SPADI, QuickDASH, NPRS, força de RE com dinamómetro",
  [
    F("Fase 1 · Modular a dor e isometria", "0–2 semanas", "Reduzir a irritabilidade|Iniciar carga isométrica|Mobilidade sem dor",
      "Dor em repouso mínima|Isometrias toleradas com dor ≤ 3/10", "omb_iso_re omb_iso_abd omb_iso_ri omb_flex_bastao omb_retracao tor_ext_sent", "Elevações repetidas acima da cabeça com dor"),
    F("Fase 2 · Força isotónica", "2–8 semanas", "Força dos rotadores e da omoplata|Ganhar elevação ativa",
      "Elevação ativa completa|Força RE ≥ 80% do lado são", "omb_re_elastico omb_ri_elastico omb_re_dl omb_abd_escapular omb_remada omb_punch omb_wall_slide omb_cross_body", ""),
    F("Fase 3 · Força em amplitude funcional", "8–12 semanas", "Força acima da cabeça|Controlo em posições de trabalho e desporto",
      "SPADI < 20|Sem dor nas tarefas acima da cabeça", "omb_press omb_prone_y omb_re_90 omb_pushup_plus omb_remada_halter omb_quad_toque", ""),
    F("Fase 4 · Potência e regresso", "12+ semanas", "Pliometria e lançamento|Regresso ao desporto",
      "Força simétrica|Teste CKCUEST normativo", "omb_plio_parede omb_lanc_90 core_chop", "")
  ],
  "Diercks R et al. Guideline for diagnosis and treatment of subacromial pain syndrome. Acta Orthop 2014;85(3):314–322|Lewis J. Rotator cuff related shoulder pain: assessment, management and uncertainties. Man Ther 2016;23:57–68|Beard DJ et al. Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW). Lancet 2018;391:329–338");

L("capsulite", "Capsulite adesiva (ombro congelado)", "frozen shoulder, ombro congelado", "ombro",
  "Perda progressiva da amplitude ativa e passiva, sobretudo da rotação externa, com dor intensa na fase inicial. Mais frequente entre os 40 e os 65 anos e na diabetes. Evolui em fases (dolorosa, rígida, de resolução) ao longo de 1–3 anos.",
  "Perda de rotação externa após trauma: excluir luxação posterior e fratura (radiografia)|Lesões tumorais (sinais sistémicos)",
  "Adaptar a intensidade à irritabilidade: na fase dolorosa, alongamentos suaves e de curta duração|Injeção intra-articular de corticoide ajuda na fase inicial dolorosa|Educação sobre a evolução natural",
  "SPADI, amplitude passiva de RE e elevação",
  [
    F("Fase 1 · Alta irritabilidade (dolorosa)", "0–3 meses", "Controlar a dor|Manter a amplitude possível",
      "Dor noturna a diminuir|Dor no fim da amplitude, não antes", "omb_pendular omb_flex_bastao omb_re_bastao omb_mesa", "Alongamentos agressivos que aumentam a dor durante horas"),
    F("Fase 2 · Moderada (rígida)", "3–9 meses", "Ganhar amplitude com alongamentos mais sustentados|Manter a força",
      "Ganho progressivo de RE e elevação", "omb_re_bastao omb_flex_bastao omb_wall_slide omb_cross_body omb_ri_toalha omb_iso_re omb_retracao", ""),
    F("Fase 3 · Baixa irritabilidade (resolução)", "9+ meses", "Amplitude funcional|Força",
      "SPADI < 20", "omb_sleeper omb_re_elastico omb_abd_escapular omb_remada omb_press", "")
  ],
  "Kelley MJ et al. Shoulder pain and mobility deficits: adhesive capsulitis. JOSPT 2013;43(5):A1–A31|Challoumas D et al. Comparison of treatments for frozen shoulder: a systematic review and meta-analysis. JAMA Netw Open 2020;3(12):e2029581");

L("coifa_pos_op", "Pós-operatório de reparação da coifa dos rotadores", "reparação artroscópica da coifa, sutura da coifa", "ombro",
  "A reabilitação protege a reparação enquanto o tendão cicatriza (cerca de 12 semanas). A velocidade da progressão depende do tamanho da rutura, da qualidade do tecido e do protocolo do cirurgião.",
  "Febre, rubor ou exsudado da sarada (infeção)|Dor súbita com perda de força (re-rutura)|Edema e dor na perna (TVP) ou dispneia",
  "Respeitar SEMPRE o protocolo do cirurgião (tempo de suspensão, limites de RE)|Movimento passivo precoce vs. diferido: resultados semelhantes a longo prazo|Carga progressiva só após a cicatrização inicial (≥ 12 semanas para força com resistência)",
  "Constant-Murley, ASES, amplitude passiva/ativa",
  [
    F("Fase 1 · Proteção (passivo)", "0–6 semanas", "Proteger a reparação|Movimento passivo dentro dos limites|Mobilidade do cotovelo, punho e mão",
      "Elevação passiva ≥ 120°|Dor controlada", "omb_pendular omb_flex_bastao omb_re_bastao omb_retracao cot_flex_ext pun_preensao", "Movimento ativo do ombro operado e carga"),
    F("Fase 2 · Ativo-assistido e ativo", "6–12 semanas", "Recuperar amplitude ativa|Isometria submáxima",
      "Elevação ativa sem compensação escapular", "omb_mesa omb_wall_slide omb_iso_re omb_iso_ri omb_iso_abd omb_punch", "Resistência contra o tendão reparado"),
    F("Fase 3 · Força", "12–24 semanas", "Força progressiva da coifa e da omoplata",
      "Força ≥ 80% do lado são", "omb_re_elastico omb_ri_elastico omb_re_dl omb_abd_escapular omb_remada omb_prone_t", ""),
    F("Fase 4 · Regresso à atividade", "6+ meses", "Força acima da cabeça|Trabalho pesado e desporto",
      "Força simétrica, sem dor", "omb_press omb_prone_y omb_re_90 omb_pushup_plus omb_plio_parede", "")
  ],
  "Thigpen CA et al. The American Society of Shoulder and Elbow Therapists' consensus statement on rehabilitation following arthroscopic rotator cuff repair. J Shoulder Elbow Surg 2016;25(4):521–535");

L("instab_ombro", "Instabilidade do ombro (anterior / multidirecional)", "luxação do ombro, subluxação, ombro instável, MDI", "ombro",
  "Sensação de deslocamento ou luxação recorrente. Após primeira luxação traumática em jovens desportistas, o risco de recidiva é elevado e a cirurgia pode ser considerada. Na instabilidade multidirecional atraumática, o exercício é a primeira linha.",
  "Défice neurológico após luxação (nervo axilar: sensibilidade do 'distintivo')|Luxação não reduzida|Fratura associada (Hill-Sachs, Bankart ósseo)",
  "Controlo escapular e da coifa, de posições protegidas para posições de risco|Propriocepção e cadeia fechada|Introdução gradual da abdução + RE (posição de apreensão)",
  "WOSI (Western Ontario Shoulder Instability Index), testes de apreensão/relocação",
  [
    F("Fase 1 · Proteção e controlo", "0–3 semanas", "Controlar a dor|Ativar coifa e omoplata em posição neutra",
      "Dor controlada|Isometrias sem apreensão", "omb_pendular omb_retracao omb_iso_re omb_iso_ri omb_punch", "Abdução + rotação externa (posição de apreensão)"),
    F("Fase 2 · Força em amplitude média", "3–8 semanas", "Força dos rotadores|Cadeia fechada",
      "Força ≥ 80% do lado são em posição neutra", "omb_re_elastico omb_ri_elastico omb_remada omb_pushup_parede omb_quad_toque omb_abd_escapular", ""),
    F("Fase 3 · Posições de risco", "8–12 semanas", "Força e controlo em abdução e RE|Controlo dinâmico",
      "Sem apreensão a 90/90", "omb_re_90 omb_prone_y omb_prone_t omb_pushup_plus omb_press", ""),
    F("Fase 4 · Pliometria e desporto", "12+ semanas", "Potência e reação|Regresso ao desporto",
      "Testes funcionais simétricos", "omb_plio_parede omb_lanc_90 core_chop", "")
  ],
  "Warby SA et al. The effect of exercise-based management for multidirectional instability of the glenohumeral joint: a systematic review. J Shoulder Elbow Surg 2014;23(1):128–142");

/* ================= COTOVELO / PUNHO / MÃO ================= */
L("epicondilalgia", "Epicondilalgia lateral (cotovelo de tenista)", "epicondilite, tennis elbow, tendinopatia dos extensores", "cotovelo punho",
  "Dor no epicôndilo lateral com a preensão e a extensão resistida do punho/3.º dedo. Prognóstico favorável na maioria em 6–12 meses. O exercício de carga progressiva com educação é a base; as injeções de corticoide pioram os resultados a médio prazo.",
  "Dor que irradia com parestesias (radiculopatia C6–C7 ou compressão do nervo interósseo posterior)|Trauma com edema marcado (fratura da cabeça do rádio)",
  "Educação e modificação da carga (preensão com cotovelo fletido, palma para cima)|Carga isométrica → isotónica → excêntrica/funcional|Dor ≤ 3–4/10 durante, sem agravamento no dia seguinte|Ortótese de contraforça pode ajudar a curto prazo",
  "PRTEE, força de preensão sem dor (PFGS)",
  [
    F("Fase 1 · Isometria e educação", "0–2 semanas", "Reduzir a irritabilidade|Iniciar carga",
      "Isometrias toleradas|Preensão sem dor a aumentar", "cot_iso_ext_punho pun_preensao cerv_neuro_mediano cot_along_ext", "Preensão forte com cotovelo esticado e punho fletido"),
    F("Fase 2 · Isotónico", "2–8 semanas", "Força dos extensores do punho e preensão|Força do ombro",
      "PFGS ≥ 80% do lado são", "cot_exc_ext_punho cot_pronosup cot_flex_punho pun_extensao_dedos omb_re_elastico omb_remada", ""),
    F("Fase 3 · Funcional", "8+ semanas", "Carga específica do trabalho/desporto|Velocidade",
      "Sem dor no trabalho e desporto", "cot_tyler core_farmer cot_curl omb_remada_halter", "")
  ],
  "Lucado AM et al. Lateral Elbow Pain and Muscle Function Impairments. JOSPT 2022;52(12):CPG1–CPG111|Coombes BK, Bisset L, Vicenzino B. Management of lateral elbow tendinopathy: one size does not fit all. JOSPT 2015;45(11):938–949");

L("tunel_carpico", "Síndrome do túnel cárpico", "STC, compressão do nervo mediano", "punho",
  "Parestesias no território do mediano (polegar ao 4.º dedo), pior à noite. Nos casos ligeiros a moderados, a ortótese noturna em posição neutra e a terapia manual/exercício são opções de primeira linha.",
  "Atrofia da eminência tenar e perda de força (referenciar para eletromiografia e cirurgia)|Sintomas bilaterais sem explicação (hipotiroidismo, diabetes, gravidez)|Sinais de radiculopatia cervical",
  "Ortótese noturna em posição neutra do punho|Deslizamentos tendinosos e neurais|Educação sobre posições (evitar flexão/extensão mantidas do punho)",
  "Boston Carpal Tunnel Questionnaire, testes de Phalen e Durkan, monofilamentos",
  [
    F("Fase 1 · Alívio de sintomas", "0–4 semanas", "Reduzir parestesias noturnas|Mobilidade tendinosa",
      "Menos despertares noturnos", "pun_tendinoso pun_flex_ext cerv_neuro_mediano", "Flexão do punho prolongada"),
    F("Fase 2 · Função", "4–8 semanas", "Força de preensão e pinça|Tolerância às tarefas",
      "Boston < 2", "pun_preensao pun_oponencia pun_extensao_dedos omb_retracao", "")
  ],
  "Erickson M et al. Hand Pain and Sensory Deficits: Carpal Tunnel Syndrome. JOSPT 2019;49(5):CPG1–CPG85");

L("fratura_radio", "Fratura do rádio distal (pós-imobilização)", "fratura de Colles, fratura do punho", "punho cotovelo",
  "Reabilitação após gesso ou cirurgia (placa). Prioridades: edema, amplitude dos dedos desde o primeiro dia, depois punho e antebraço, e por fim força e carga.",
  "Dor desproporcionada, alterações de cor, temperatura e sudação (síndrome de dor regional complexa)|Parestesias do mediano agravadas (STC agudo)|Perda de extensão do polegar (rutura do longo extensor do polegar)",
  "Mobilizar os dedos durante a imobilização|Movimento ativo precoce após cirurgia, conforme o cirurgião|Carga progressiva só com consolidação",
  "PRWE, QuickDASH, amplitude, força de preensão",
  [
    F("Fase 1 · Imobilização / pós-operatório inicial", "0–6 semanas", "Controlar o edema|Mobilidade dos dedos, cotovelo e ombro",
      "Dedos com amplitude completa", "pun_tendinoso pun_oponencia cot_flex_ext omb_flex_bastao", "Carga no punho"),
    F("Fase 2 · Mobilidade do punho e antebraço", "6–10 semanas", "Recuperar flexão, extensão e pronossupinação",
      "Amplitude ≥ 75% do lado são", "pun_flex_ext pun_desvios cot_pronosup pun_along_flex pun_preensao", ""),
    F("Fase 3 · Força e carga", "10+ semanas", "Força de preensão|Carga através da mão",
      "Preensão ≥ 80% do lado são|Flexão de braços tolerada", "pun_carga cot_exc_ext_punho cot_flex_punho pun_extensao_dedos omb_pushup_parede core_farmer", "")
  ],
  "American Academy of Orthopaedic Surgeons. Management of Distal Radius Fractures: Evidence-Based Clinical Practice Guideline. 2020");

L("rizartrose", "Rizartrose (artrose da base do polegar)", "artrose trapeziometacarpiana, polegar", "punho",
  "Dor na base do polegar com a pinça e a abertura de frascos. Mais frequente em mulheres após os 50 anos. Educação, ortótese e exercício são a primeira linha.",
  "Edema e calor marcados em várias articulações (artrite inflamatória)",
  "Educação e ajudas técnicas (abre-frascos, cabos grossos)|Ortótese noturna ou de dia em tarefas exigentes|Fortalecimento do 1.º interósseo dorsal e dos abdutores do polegar; evitar pinça lateral forte",
  "AUSCAN, força de pinça, dor",
  [
    F("Fase 1 · Proteção e mobilidade", "0–4 semanas", "Reduzir a dor|Mobilidade do polegar",
      "Dor a diminuir", "pun_oponencia pun_tendinoso", "Pinça lateral forte e torção"),
    F("Fase 2 · Estabilidade e força", "4–12 semanas", "Estabilidade da base do polegar|Força funcional",
      "Tarefas diárias com dor ≤ 3/10", "pun_extensao_dedos pun_preensao pun_oponencia", "")
  ],
  "Kloppenburg M et al. 2018 update of the EULAR recommendations for the management of hand osteoarthritis. Ann Rheum Dis 2019;78(1):16–24");

/* ================= COLUNA LOMBAR ================= */
L("lombalgia", "Lombalgia não específica (aguda ou persistente)", "dor lombar, dor nas costas, lumbago, lombalgia crónica", "lombar core",
  "Dor lombar sem causa específica identificável (cerca de 90% dos casos). A aguda tem bom prognóstico. Na persistente (> 12 semanas), os fatores psicossociais (medo do movimento, crenças, stress) pesam tanto quanto os físicos.",
  "Síndrome da cauda equina: retenção urinária, incontinência, anestesia em sela, défice bilateral (URGÊNCIA)|Antecedentes oncológicos, perda de peso, dor noturna constante|Febre, imunossupressão, consumo de drogas IV (infeção)|Trauma significativo ou osteoporose (fratura)|Rigidez matinal > 30 min em jovens (espondiloartrite)",
  "Educação: dor não é igual a dano; manter-se ativo|Não existe um exercício melhor: escolher o que o utente goste e cumpra|Na persistente: exercício progressivo + abordagem cognitivo-funcional|Rastrear com STarT Back e ajustar a intensidade do tratamento",
  "ODI ou RMDQ, NPRS, STarT Back, TSK, PSFS",
  [
    F("Fase 1 · Acalmar e mover", "0–2 semanas", "Tranquilizar|Movimento confortável|Encontrar preferência direcional",
      "Dor a diminuir|Movimento com menos medo", "lom_bascula lom_joelhos_peito lom_rot_dd lom_ext_dv tor_gato fun_caminhada resp_diafragma", "Repouso na cama"),
    F("Fase 2 · Controlo e confiança", "2–6 semanas", "Controlo lombopélvico|Recuperar a confiança na flexão e na carga",
      "AVD sem medo|ODI a diminuir", "core_transverso core_dead_bug core_bird_dog core_curl_up core_ponte lom_dobradica", ""),
    F("Fase 3 · Força e capacidade", "6+ semanas", "Força global|Capacidade para trabalho e desporto",
      "ODI < 20%|Levantar objetos do chão sem medo", "lom_peso_morto_kb fun_goblet core_prancha core_prancha_lat core_pallof core_farmer lom_rdl_uni", "")
  ],
  "George SZ et al. Interventions for the Management of Acute and Chronic Low Back Pain: Revision 2021. JOSPT 2021;51(11):CPG1–CPG60|NICE NG59. Low back pain and sciatica in over 16s: assessment and management. 2016 (atualizada 2020)|O'Sullivan PB et al. Cognitive functional therapy. Phys Ther 2018;98(5):408–423");

L("radic_lombar", "Radiculopatia lombar / ciática (hérnia discal)", "ciática, hérnia discal, lombociatalgia", "lombar anca",
  "Dor na perna, abaixo do joelho, frequentemente maior do que a lombar, com ou sem défices neurológicos. A maioria das hérnias regride espontaneamente em semanas a meses. Preferência direcional (frequentemente a extensão) orienta os exercícios iniciais.",
  "Síndrome da cauda equina (URGÊNCIA)|Défice motor progressivo ou grave (ex.: pé pendente)|Dor intratável apesar da analgesia",
  "Procurar movimentos que centralizam (McKenzie)|Mobilização neural com deslizamentos|Manter-se ativo; progressão para força quando a dor na perna acalmar",
  "ODI, NPRS da perna e da lombar, Lasègue/slump, exame neurológico",
  [
    F("Fase 1 · Centralizar", "0–3 semanas", "Reduzir a dor na perna|Centralização",
      "Dor na perna a recuar para a lombar|Sinais neurológicos estáveis", "lom_ext_dv lom_ext_pe lom_neuro_dd lom_bascula fun_caminhada", "Flexão mantida e sentado prolongado (se agravam)"),
    F("Fase 2 · Mobilidade neural e controlo", "3–8 semanas", "Mobilidade neural|Controlo lombopélvico",
      "Slump/Lasègue a melhorar", "lom_slump core_transverso core_bird_dog core_ponte core_dead_bug", ""),
    F("Fase 3 · Força", "8+ semanas", "Força global e confiança",
      "Função plena", "lom_dobradica lom_peso_morto_kb core_prancha_lat fun_goblet pe_gemeos_uni", "")
  ],
  "George SZ et al. Low Back Pain: Revision 2021. JOSPT 2021|NICE NG59 (2016, atualizada 2020)");

L("estenose_lombar", "Estenose lombar", "claudicação neurogénica, canal estreito", "lombar",
  "Dor e/ou peso nas pernas ao caminhar ou estar de pé, aliviada ao sentar ou fletir o tronco (ex.: apoiar-se no carrinho do supermercado). Mais comum após os 60 anos. Fisioterapia com resultados comparáveis à cirurgia em 2 anos (Delitto 2015).",
  "Cauda equina|Défice motor progressivo|Claudicação vascular (pulsos diminuídos, alívio de pé sem fletir)",
  "Exercícios em flexão e bicicleta (tolerada melhor do que a marcha)|Programa de marcha progressivo|Força dos membros inferiores e equilíbrio",
  "ODI, Swiss Spinal Stenosis Questionnaire, distância de marcha",
  [
    F("Fase 1 · Alívio em flexão", "0–4 semanas", "Reduzir os sintomas|Aumentar a tolerância à marcha",
      "Distância de marcha a aumentar", "lom_flex_sent lom_joelhos_peito lom_bascula joe_bicicleta anc_along_flex", "Extensão lombar mantida"),
    F("Fase 2 · Força e marcha", "4–12 semanas", "Força global|Resistência na marcha|Equilíbrio",
      "Caminhar 30 min", "fun_caminhada fun_levantar core_ponte core_dead_bug anc_step_up fun_tandem", "")
  ],
  "Delitto A et al. Surgery versus nonsurgical treatment of lumbar spinal stenosis: a randomized trial. Ann Intern Med 2015;162(7):465–473|Kreiner DS et al. An evidence-based clinical guideline for the diagnosis and treatment of degenerative lumbar spinal stenosis (update). Spine J 2013;13(7):734–743");

/* ================= ANCA ================= */
L("tendinopatia_glutea", "Tendinopatia glútea (dor na face lateral da anca)", "bursite trocantérica, síndrome da dor do grande trocânter, GTPS", "anca",
  "Dor no grande trocânter, pior ao deitar sobre o lado, ao subir escadas e ao estar em apoio unipodal. A compressão do tendão (anca em adução: cruzar as pernas, 'descair' na anca) agrava. Educação + exercício supera a injeção de corticoide a 1 ano (LEAP).",
  "Dor na virilha com rotação interna limitada (artrose ou fratura de stress do colo)|Sinais sistémicos",
  "Educação sobre a compressão: não cruzar as pernas, não descair na anca, almofada entre os joelhos a dormir|Carga isométrica → isotónica → funcional|Evitar alongamentos da banda iliotibial (aumentam a compressão)",
  "VISA-G, dor no apoio unipodal 30 s",
  [
    F("Fase 1 · Educação e isometria", "0–2 semanas", "Reduzir a compressão|Analgesia por isometria",
      "Dor noturna a diminuir|Isometrias sem agravar", "anc_iso_abd core_ponte anc_iso_adut", "Clamshell com dor, alongamentos de adução, cruzar as pernas"),
    F("Fase 2 · Força isotónica", "2–8 semanas", "Força do glúteo médio e máximo",
      "Apoio unipodal 30 s sem dor", "anc_ponte_elastico core_ponte_uni anc_marcha_lateral anc_abd_dl fun_levantar anc_hip_hike", ""),
    F("Fase 3 · Funcional", "8–12 semanas", "Força em carga unipodal|Escadas, caminhada longa",
      "VISA-G a melhorar ≥ 15 pontos", "anc_step_lateral anc_step_up joe_step_down lom_rdl_uni anc_hip_thrust fun_caminhada", "")
  ],
  "Mellor R et al. Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy (LEAP). BMJ 2018;361:k1662|Grimaldi A et al. Gluteal tendinopathy: a review of mechanisms, assessment and management. Sports Med 2015;45(8):1107–1119");

L("artrose_anca", "Artrose da anca", "coxartrose, osteoartrose da anca", "anca",
  "Dor na virilha ou na face anterior da coxa, rigidez matinal < 1 h e limitação da rotação interna, em pessoas > 45 anos. Educação, exercício e controlo do peso são a primeira linha (GLA:D).",
  "Dor noturna intensa e progressiva|Perda de peso, febre|Dor súbita com incapacidade de carga (fratura)",
  "Exercício terapêutico (força + controlo neuromuscular) 2×/semana, 6–12 semanas no mínimo|Terapia manual como complemento|Caminhada e atividade física regular",
  "HOOS, Timed Up and Go, 30 s chair stand, 40 m fast-paced walk",
  [
    F("Fase 1 · Mobilidade e ativação", "0–3 semanas", "Mobilidade da anca|Ativação glútea|Educação",
      "Dor estável|Adesão ao exercício", "anc_heel_slide anc_rockback anc_clam core_ponte anc_along_flex joe_bicicleta", ""),
    F("Fase 2 · Força e controlo", "3–8 semanas", "Força dos abdutores e extensores|Controlo neuromuscular",
      "30 s chair stand a melhorar", "fun_levantar anc_marcha_lateral anc_step_up anc_abd_dl core_ponte_uni pe_unipodal", ""),
    F("Fase 3 · Funcional", "8+ semanas", "Força funcional|Atividade física regular",
      "HOOS a melhorar", "joe_agach_caixa anc_step_lateral joe_afundo fun_caminhada fun_goblet", "")
  ],
  "Cibulka MT et al. Hip Pain and Mobility Deficits—Hip Osteoarthritis: Revision 2017. JOSPT 2017;47(6):A1–A37|NICE NG226. Osteoarthritis in over 16s: diagnosis and management. 2022|Skou ST, Roos EM. Good Life with osteoArthritis in Denmark (GLA:D). BMC Musculoskelet Disord 2017;18:72");

L("fai", "Dor da anca relacionada com conflito femoroacetabular (FAI)", "FAI, impacto femoroacetabular, lesão do labrum, dor na virilha em jovens", "anca",
  "Dor na virilha em adultos jovens ativos, com teste FADIR positivo e alterações morfológicas (cam/pincer). Fisioterapia de 3 meses é a primeira linha; a artroscopia é uma opção se falhar.",
  "Dor noturna, sinais sistémicos|Fratura de stress do colo do fémur (corredores, dor ao saltar)|Necrose avascular (corticoides, álcool)",
  "Fortalecimento da anca e do tronco com progressão|Modificação temporária de flexão profunda e rotação interna sob carga|Pelo menos 3 meses de reabilitação ativa",
  "iHOT-33, HAGOS",
  [
    F("Fase 1 · Controlo e modificação", "0–4 semanas", "Reduzir a irritabilidade|Controlo lombopélvico|Ativação glútea",
      "Dor em AVD ≤ 3/10", "core_transverso core_dead_bug core_ponte anc_clam anc_iso_adut anc_ext_dv", "Agachamento profundo e flexão > 90° com dor"),
    F("Fase 2 · Força", "4–10 semanas", "Força da anca e do tronco em amplitude sem dor",
      "Força ≥ 80% do lado são", "anc_ponte_elastico anc_marcha_lateral anc_step_up core_prancha_lat core_bird_dog lom_rdl_uni anc_copenhagen", ""),
    F("Fase 3 · Funcional e desporto", "10+ semanas", "Potência e agilidade|Regresso ao desporto",
      "Testes funcionais simétricos", "joe_bulgaro joe_afundo_lat joe_salto_bi joe_corte core_chop", "")
  ],
  "Kemp JL et al. Physiotherapist-led treatment for young to middle-aged active adults with hip-related pain: consensus recommendations (Zurich 2018). Br J Sports Med 2020;54(9):504–511|Griffin DR et al. The Warwick Agreement on femoroacetabular impingement syndrome. Br J Sports Med 2016;50(19):1169–1176");

L("virilha_adutores", "Dor da virilha relacionada com os adutores", "pubalgia, tendinopatia dos adutores, groin pain", "anca",
  "Dor na inserção dos adutores no púbis, reproduzida com palpação e adução resistida (squeeze). Comum no futebol e desportos com mudanças de direção. Programa de fortalecimento ativo (Hölmich) tem bons resultados.",
  "Hérnia inguinal|Dor de origem visceral, urológica ou ginecológica|Fratura de stress do ramo púbico",
  "Fortalecimento progressivo dos adutores e do tronco|Programa de Copenhaga como prevenção (reduz lesões da virilha em cerca de 40%)|Regresso progressivo à corrida e ao remate",
  "HAGOS, squeeze test a 45° (dinamómetro)",
  [
    F("Fase 1 · Isometria", "0–2 semanas", "Analgesia e carga inicial dos adutores",
      "Squeeze test com dor ≤ 3/10", "anc_iso_adut core_transverso core_ponte anc_clam", "Remate, sprints e mudanças de direção"),
    F("Fase 2 · Força", "2–6 semanas", "Força excêntrica dos adutores|Força do tronco",
      "Força de adução ≥ 80% do lado são", "anc_copenhagen joe_afundo_lat core_prancha_lat core_bird_dog anc_marcha_lateral", ""),
    F("Fase 3 · Desporto", "6+ semanas", "Corrida, mudanças de direção e remate",
      "Força simétrica, HAGOS normal", "joe_corte joe_hop_lat card_corrida core_chop", "")
  ],
  "Weir A et al. Doha agreement meeting on terminology and definitions in groin pain in athletes. Br J Sports Med 2015;49(12):768–774|Hölmich P et al. Effectiveness of active physical training as treatment for long-standing adductor-related groin pain in athletes. Lancet 1999;353:439–443|Harøy J et al. The Adductor Strengthening Programme prevents groin problems among male football players. Br J Sports Med 2019;53(3):150–157");

L("pta_anca", "Artroplastia total da anca", "prótese da anca, PTA", "anca",
  "Reabilitação após prótese da anca. A carga total é geralmente permitida de imediato. As precauções de luxação dependem da via de abordagem (posterior vs. anterior) e do cirurgião.",
  "Edema da perna com dor na barriga da perna (TVP)|Dispneia súbita (embolia pulmonar)|Febre, exsudado da ferida|Encurtamento e rotação da perna com dor (luxação)",
  "Mobilização no próprio dia ou no dia seguinte|Respeitar precauções de luxação definidas pelo cirurgião (ex.: via posterior: evitar flexão > 90°, adução e rotação interna combinadas)|Fortalecimento progressivo do glúteo médio para a marcha sem claudicação",
  "HOOS JR, Timed Up and Go, 30 s chair stand",
  [
    F("Fase 1 · Hospitalar / inicial", "0–2 semanas", "Marcha segura com auxiliar|Transferências|Ativação muscular",
      "Marcha independente com canadianas|Transferências seguras", "fun_marcha_canad anc_heel_slide joe_quad_set core_ponte anc_iso_abd pe_alfabeto resp_expansao", "Movimentos fora das precauções"),
    F("Fase 2 · Força", "2–8 semanas", "Força da anca|Desmame das canadianas",
      "Marcha sem claudicação|Trendelenburg negativo", "anc_abd_dl anc_clam anc_step_up fun_levantar anc_marcha_lateral joe_bicicleta fun_escadas", ""),
    F("Fase 3 · Funcional", "8+ semanas", "Equilíbrio e atividade",
      "TUG < 10 s", "anc_step_lateral pe_unipodal fun_tandem_marcha fun_caminhada joe_agach_caixa", "")
  ],
  "NICE NG157. Joint replacement (primary): hip, knee and shoulder. 2020");

L("fratura_femur", "Fratura da extremidade proximal do fémur", "fratura do colo do fémur, fratura da anca, idoso", "anca global",
  "Fratura frequente em idosos após queda. A mobilização precoce e o treino de força e equilíbrio progressivos melhoram a função e reduzem a mortalidade. Inclui sempre prevenção de quedas e avaliação da osteoporose.",
  "Delirium agudo|TVP/embolia pulmonar|Dor súbita após nova queda",
  "Mobilização no 1.º dia pós-operatório|Treino de força progressivo de intensidade moderada a elevada|Treino de equilíbrio e prevenção de quedas a longo prazo",
  "Timed Up and Go, SPPB, 6MWT",
  [
    F("Fase 1 · Aguda", "0–2 semanas", "Levante precoce|Transferências e marcha com auxiliar",
      "Marcha com andarilho/canadianas", "fun_marcha_canad joe_quad_set anc_heel_slide core_ponte pe_alfabeto resp_expansao", ""),
    F("Fase 2 · Força e equilíbrio", "2–12 semanas", "Força dos membros inferiores|Equilíbrio",
      "TUG a melhorar|Levantar sem as mãos", "fun_levantar anc_step_up anc_abd_dl fun_tandem pe_gemeos_bi fun_escadas", ""),
    F("Fase 3 · Prevenção de quedas", "3+ meses", "Manter força e equilíbrio a longo prazo",
      "Programa domiciliário regular", "fun_tandem_marcha pe_unipodal fun_marcha_obst fun_caminhada joe_agach_caixa", "")
  ],
  "McDonough CM et al. Physical Therapy Management of Older Adults With Hip Fracture. JOSPT 2021;51(2):CPG1–CPG81");

/* ================= JOELHO ================= */
L("patelofemoral", "Dor patelofemoral", "condromalácia, joelho de corredor, dor anterior do joelho", "joelho anca",
  "Dor à volta ou atrás da rótula, agravada ao agachar, subir/descer escadas, correr e estar sentado muito tempo. Exercício de anca + joelho é o tratamento mais eficaz, combinado com educação e gestão da carga.",
  "Derrame articular marcado (pensar noutra patologia intra-articular)|Dor noturna, sinais sistémicos|Em crianças: dor referida da anca (epifisiólise)",
  "Combinar fortalecimento da anca e do joelho (superior a só joelho)|Gestão da carga (corrida, escadas)|Taping e ortóteses plantares podem ajudar a curto prazo",
  "AKPS (Kujala), NPRS, step-down",
  [
    F("Fase 1 · Acalmar", "0–2 semanas", "Reduzir a dor|Isometria do quadricípite|Ativação da anca",
      "Dor em AVD ≤ 3/10", "joe_quad_set joe_wall_sit joe_spanish anc_clam anc_abd_dl core_ponte", "Agachamentos profundos e saltos com dor"),
    F("Fase 2 · Força", "2–8 semanas", "Força do quadricípite e da anca|Controlo do valgo dinâmico",
      "Step-down controlado", "joe_mini_agach joe_ext_cadeira joe_leg_press anc_marcha_lateral anc_step_up joe_step_down core_ponte_uni", ""),
    F("Fase 3 · Funcional e corrida", "8+ semanas", "Força em amplitude completa|Regresso à corrida e ao desporto",
      "AKPS ≥ 90", "joe_bulgaro joe_afundo fun_goblet joe_salto_bi card_corrida pe_star", "")
  ],
  "Willy RW et al. Patellofemoral Pain. JOSPT 2019;49(9):CPG1–CPG95|Crossley KM et al. 2016 Patellofemoral pain consensus statement (Manchester). Br J Sports Med 2016;50(14):839–843");

L("tendinopatia_rotuliana", "Tendinopatia rotuliana (joelho de saltador)", "jumper's knee, tendinite rotuliana", "joelho",
  "Dor localizada no polo inferior da rótula, relacionada com a carga (saltos), que aquece durante o exercício e piora depois. A carga progressiva do tendão é o tratamento principal; o repouso isolado não resolve.",
  "Dor difusa e derrame (patologia intra-articular)|Dor em repouso intensa|Em adolescentes: Sinding-Larsen-Johansson / Osgood-Schlatter",
  "Modelo de monitorização da dor: ≤ 3–5/10 durante e normal no dia seguinte|Progressão: isometria → isotónico pesado lento → armazenamento de energia → pliometria específica|Programa de 12 semanas no mínimo",
  "VISA-P, dor no agachamento unipodal em declive",
  [
    F("Fase 1 · Isometria", "0–2 semanas", "Analgesia|Carga do tendão sem agravar",
      "Dor ≤ 3/10 no agachamento unipodal em declive", "joe_ext_iso joe_spanish joe_wall_sit core_ponte anc_clam", "Saltos e pliometria"),
    F("Fase 2 · Isotónico pesado", "2–8 semanas", "Força do quadricípite com carga elevada (HSR)",
      "Força ≥ 80% do lado são|VISA-P a melhorar", "joe_ext_cadeira joe_leg_press joe_declinado joe_bulgaro fun_goblet pe_gemeos_uni", ""),
    F("Fase 3 · Armazenamento de energia", "8–12 semanas", "Tolerância à pliometria",
      "Saltos com dor ≤ 3/10", "joe_salto_bi joe_queda pe_pogo joe_hop", ""),
    F("Fase 4 · Regresso ao desporto", "12+ semanas", "Saltos e mudanças de direção específicos do desporto",
      "VISA-P ≥ 80", "joe_corte joe_hop_lat card_corrida", "")
  ],
  "Malliaras P et al. Patellar tendinopathy: clinical diagnosis, load management, and advice for challenging case presentations. JOSPT 2015;45(11):887–898|Breda SJ et al. Effectiveness of progressive tendon-loading exercise therapy in patients with patellar tendinopathy (JUMPER). Br J Sports Med 2021;55(9):501–509");

L("lca", "Rotura / reconstrução do ligamento cruzado anterior (LCA)", "LCA, ligamentoplastia, ACL", "joelho",
  "Reabilitação após reconstrução do LCA (ou tratamento conservador). A progressão deve ser baseada em critérios. O regresso ao desporto antes dos 9 meses e com força assimétrica aumenta muito o risco de nova rotura.",
  "Febre, rubor e derrame crescente (artrite séptica)|Dor na barriga da perna e edema (TVP)|Perda de extensão que não melhora (ciclope)",
  "Prioridades iniciais: extensão completa, controlo do derrame, ativação do quadricípite|Cadeia aberta 90–45° segura desde cedo|Regresso ao desporto ≥ 9 meses, força e hop tests ≥ 90% do lado são, confiança psicológica (ACL-RSI)|Programas de prevenção (ex.: FIFA 11+) depois",
  "IKDC, KOOS, ACL-RSI, LSI de força do quadricípite e hop tests",
  [
    F("Fase 1 · Pós-operatório inicial", "0–2 semanas", "Extensão completa|Controlar o derrame|Ativar o quadricípite|Marcha",
      "Extensão 0°|Flexão ≥ 90°|SLR sem 'lag'|Derrame mínimo", "joe_ext_passiva joe_quad_set joe_slr anc_heel_slide pe_alfabeto fun_marcha_canad", "Perder extensão; corrida e torção"),
    F("Fase 2 · Força e controlo", "2–12 semanas", "Flexão completa|Força do quadricípite e isquiotibiais|Equilíbrio",
      "Marcha normal|Força do quadricípite ≥ 60–70%", "joe_tke joe_mini_agach joe_ext_cadeira joe_leg_press joe_bicicleta core_ponte joe_curl_isquios pe_unipodal anc_step_up", "Cadeia aberta 45–0° com carga elevada (até cerca das 12 semanas, conforme protocolo)"),
    F("Fase 3 · Força avançada e corrida", "3–6 meses", "Força ≥ 80%|Corrida em linha reta|Pliometria inicial",
      "Força do quadricípite ≥ 80%|Agachamento unipodal controlado", "joe_bulgaro joe_step_down lom_rdl_uni joe_nordico pe_star joe_salto_bi card_corrida", ""),
    F("Fase 4 · Regresso ao desporto", "6–9+ meses", "Agilidade e mudanças de direção|Treino específico do desporto|Prevenção",
      "LSI força e hop ≥ 90%|ACL-RSI adequado|≥ 9 meses", "joe_hop joe_hop_lat joe_queda joe_corte anc_copenhagen", "")
  ],
  "van Melick N et al. Evidence-based clinical practice update: practice guidelines for anterior cruciate ligament rehabilitation. Br J Sports Med 2016;50(24):1506–1515|Kotsifaki R et al. Aspetar clinical practice guideline on rehabilitation after anterior cruciate ligament reconstruction. Br J Sports Med 2023;57(9):500–514|Grindem H et al. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study. Br J Sports Med 2016;50(13):804–808");

L("lcm", "Entorse do ligamento colateral medial (LCM)", "entorse interna do joelho, MCL", "joelho",
  "Lesão por valgo do joelho. Os graus I–II têm excelente resposta ao tratamento conservador; o grau III isolado também, com proteção inicial em ortótese.",
  "Instabilidade em vários planos (lesão combinada LCA/canto posterolateral)|Derrame hemático volumoso imediato",
  "Ortótese articulada nos graus II–III|Carga conforme tolerado|Progressão de cadeia fechada e controlo do valgo",
  "KOOS, teste de stress em valgo",
  [
    F("Fase 1 · Proteção", "0–2 semanas", "Controlar a dor e o derrame|Amplitude",
      "Marcha sem claudicação", "joe_quad_set joe_slr anc_heel_slide joe_bicicleta pe_alfabeto", "Valgo e rotação"),
    F("Fase 2 · Força", "2–6 semanas", "Força do quadricípite e da anca|Equilíbrio",
      "Força ≥ 80%", "joe_mini_agach joe_tke anc_step_up anc_marcha_lateral pe_unipodal joe_leg_press", ""),
    F("Fase 3 · Regresso", "6+ semanas", "Agilidade e desporto",
      "Hop tests ≥ 90%", "joe_afundo_lat joe_hop joe_hop_lat joe_corte", "")
  ],
  "Logerstedt DS et al. Knee Stability and Movement Coordination Impairments: Knee Ligament Sprain Revision 2017. JOSPT 2017;47(11):A1–A47");

L("menisco", "Lesão meniscal (degenerativa ou traumática)", "menisco, rotura do menisco, meniscectomia", "joelho",
  "Na rotura degenerativa (> 35–40 anos), o exercício terapêutico tem resultados equivalentes à meniscectomia artroscópica e deve ser a primeira opção. Bloqueio verdadeiro do joelho é indicação cirúrgica.",
  "Joelho bloqueado (não estende): referenciar|Derrame volumoso recorrente|Instabilidade ligamentar associada",
  "Exercício neuromuscular e de força 2–3×/semana, 12 semanas|Após sutura meniscal, restrições de flexão e carga segundo o cirurgião",
  "KOOS, derrame, amplitude",
  [
    F("Fase 1 · Controlar sintomas", "0–2 semanas", "Derrame e dor|Amplitude",
      "Derrame mínimo|Extensão completa", "joe_quad_set joe_slr anc_heel_slide joe_bicicleta joe_ext_passiva", "Agachamento profundo em carga e torções"),
    F("Fase 2 · Força e controlo neuromuscular", "2–8 semanas", "Força do quadricípite e da anca|Controlo",
      "Força ≥ 80%", "joe_mini_agach joe_leg_press joe_ext_cadeira anc_step_up anc_marcha_lateral pe_unipodal core_ponte", ""),
    F("Fase 3 · Funcional", "8+ semanas", "Força em amplitude maior|Regresso às atividades",
      "KOOS a melhorar", "joe_agach_caixa joe_afundo joe_step_down pe_star joe_salto_bi", "")
  ],
  "Logerstedt DS et al. Knee Pain and Mobility Impairments: Meniscal and Articular Cartilage Lesions Revision 2018. JOSPT 2018;48(2):A1–A50|Kise NJ et al. Exercise therapy versus arthroscopic partial meniscectomy for degenerative meniscal tear in middle aged patients. BMJ 2016;354:i3740");

L("artrose_joelho", "Artrose do joelho", "gonartrose, osteoartrose do joelho", "joelho",
  "Dor relacionada com a atividade em pessoas > 45 anos, com rigidez matinal curta. Exercício, educação e controlo do peso são a primeira linha, independentemente da gravidade radiográfica.",
  "Joelho quente, rubro e com derrame agudo (artrite séptica ou microcristalina)|Dor noturna intensa e sinais sistémicos",
  "Exercício de força + neuromuscular (ex.: GLA:D) 2×/semana durante pelo menos 6–8 semanas|Perda de peso ≥ 5–10% se excesso de peso|Atividade aeróbia regular",
  "KOOS, 30 s chair stand, 40 m fast-paced walk, TUG",
  [
    F("Fase 1 · Ativação e mobilidade", "0–2 semanas", "Educação|Ativação do quadricípite|Mobilidade",
      "Adesão ao programa", "joe_quad_set joe_slr anc_heel_slide joe_bicicleta joe_ext_passiva core_ponte", ""),
    F("Fase 2 · Força e controlo neuromuscular", "2–8 semanas", "Força dos membros inferiores|Alinhamento do joelho",
      "30 s chair stand a melhorar", "fun_levantar joe_mini_agach anc_step_up joe_leg_press joe_ext_cadeira anc_marcha_lateral pe_unipodal", ""),
    F("Fase 3 · Funcional e manutenção", "8+ semanas", "Força funcional|Atividade física regular",
      "KOOS a melhorar|Caminhar 30 min", "joe_agach_caixa joe_step_down joe_afundo fun_goblet fun_caminhada pe_star", "")
  ],
  "NICE NG226. Osteoarthritis in over 16s: diagnosis and management. 2022|Bannuru RR et al. OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis. Osteoarthritis Cartilage 2019;27(11):1578–1589|Skou ST, Roos EM. GLA:D. BMC Musculoskelet Disord 2017;18:72");

L("ptj", "Artroplastia total do joelho", "prótese do joelho, PTJ", "joelho",
  "Reabilitação após prótese do joelho. Ganhar extensão e flexão nas primeiras 6 semanas é crucial; o fortalecimento progressivo do quadricípite determina a função a longo prazo.",
  "Edema da perna e dor na barriga da perna (TVP)|Febre, exsudado da ferida, dor crescente (infeção)|Flexão a estagnar < 90° às 6 semanas (considerar mobilização sob anestesia)",
  "Mobilização no próprio dia|Treino de força progressivo de intensidade moderada a elevada|Treino de marcha e equilíbrio",
  "KOOS JR, amplitude, TUG, 30 s chair stand",
  [
    F("Fase 1 · Inicial", "0–2 semanas", "Extensão completa|Flexão ≥ 90°|Marcha com auxiliar",
      "Extensão ≤ 5°|Flexão ≥ 90°|SLR sem 'lag'", "joe_ext_passiva joe_quad_set joe_slr anc_heel_slide joe_flex_sent pe_alfabeto fun_marcha_canad", ""),
    F("Fase 2 · Força", "2–8 semanas", "Flexão ≥ 110°|Força do quadricípite|Desmame do auxiliar",
      "Marcha sem auxiliar|Escadas alternadas", "joe_bicicleta joe_tke joe_mini_agach fun_levantar anc_step_up joe_ext_cadeira core_ponte fun_escadas", ""),
    F("Fase 3 · Funcional", "8+ semanas", "Força e equilíbrio|Atividade",
      "TUG < 10 s", "joe_step_down joe_leg_press pe_unipodal fun_tandem_marcha fun_caminhada", "")
  ],
  "Jette DU et al. Physical Therapist Management of Total Knee Arthroplasty. Phys Ther 2020;100(9):1603–1631");

/* ================= COXA ================= */
L("isquiotibiais", "Lesão muscular dos isquiotibiais", "rotura dos isquios, distensão, hamstring strain", "joelho anca",
  "Lesão frequente no sprint (bicípite femoral) e no alongamento extremo (semimembranoso, recuperação mais longa). Alta taxa de recidiva: a força excêntrica e o trabalho em comprimento longo são fundamentais.",
  "Avulsão proximal (equimose extensa, 'pop' na tuberosidade isquiática, défice marcado): referenciar para imagiologia/cirurgia|Sintomas neurológicos (ciático)",
  "Carga precoce (2–5 dias); progressão até ao limiar de dor é segura|Exercícios em comprimento longo (protocolo L de Askling)|Nórdicos na prevenção|Regresso ao sprint progressivo (velocidade máxima antes do regresso)",
  "Força isométrica/excêntrica, ASLR, H-test, dor à palpação",
  [
    F("Fase 1 · Aguda", "0–7 dias", "Proteger sem imobilizar|Carga isométrica precoce",
      "Marcha normal sem dor", "core_ponte joe_curl_isquios core_bird_dog fun_caminhada", "Alongamento intenso e sprint"),
    F("Fase 2 · Comprimento longo", "1–3 semanas", "Força em comprimento progressivo|Controlo lombopélvico",
      "Askling H-test sem apreensão|Força ≥ 80%", "joe_askling_ext joe_askling_diver joe_ponte_isquios lom_rdl_uni core_prancha_lat", ""),
    F("Fase 3 · Excêntrico e corrida", "3–6 semanas", "Força excêntrica|Progressão da corrida",
      "Sprint a ≥ 90% sem dor", "joe_askling_glider joe_nordico lom_peso_morto_kb card_corrida", ""),
    F("Fase 4 · Regresso ao desporto", "4–8 semanas", "Velocidade máxima|Treino completo|Prevenção de recidiva",
      "Força simétrica, sprint máximo, treino completo sem sintomas", "joe_nordico joe_corte joe_hop", "")
  ],
  "Askling CM et al. Acute hamstring injuries in Swedish elite football: a prospective randomised controlled clinical trial comparing two rehabilitation protocols. Br J Sports Med 2013;47(15):953–959|Hickey JT et al. Pain-free versus pain-threshold rehabilitation following acute hamstring strain injury: a randomized controlled trial. JOSPT 2020;50(2):91–103|van Dyk N et al. Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries. Br J Sports Med 2019;53(21):1362–1370");

/* ================= TORNOZELO / PÉ ================= */
L("entorse_tornozelo", "Entorse lateral do tornozelo (e instabilidade crónica)", "entorse do pé, torção do tornozelo, LPAA, instabilidade crónica", "tornozelo",
  "Lesão muito frequente do ligamento peroneoastragalino anterior. Carga precoce e exercício (equilíbrio, força, pliometria) superam a imobilização. Até 40% desenvolve instabilidade crónica se não houver reabilitação adequada.",
  "Regras de Otava positivas (excluir fratura): dor na borda posterior dos maléolos ou base do 5.º metatarsiano/navicular e incapacidade de dar 4 passos|Entorse alta (sindesmose): dor acima do tornozelo, teste de squeeze/rotação externa|Lesão do tendão de Aquiles ou peroneais",
  "Proteção funcional (ortótese) em vez de gesso|Carga conforme tolerado desde o início|Treino de equilíbrio reduz a recidiva em cerca de 35–40%|Ortótese ou ligadura na prática desportiva durante 6–12 meses",
  "CAIT, FAAM, Y-balance, hop tests",
  [
    F("Fase 1 · Aguda", "0–5 dias", "Controlar edema e dor|Carga conforme tolerado|Mobilidade",
      "Marcha sem dor", "pe_alfabeto pe_dorsiflexao pe_gemeos_bi fun_caminhada", "Imobilização prolongada"),
    F("Fase 2 · Força e mobilidade", "1–3 semanas", "Dorsiflexão completa|Força dos peroneais e gémeos|Equilíbrio inicial",
      "Knee to wall simétrico|Apoio unipodal 30 s", "pe_dorsi_parede pe_eversao pe_inversao pe_gemeos_uni pe_unipodal", ""),
    F("Fase 3 · Equilíbrio e controlo", "3–6 semanas", "Propriocepção dinâmica|Força em carga",
      "Y-balance anterior ≤ 4 cm de diferença", "pe_instavel pe_star anc_marcha_lateral joe_afundo pe_pogo", ""),
    F("Fase 4 · Regresso ao desporto", "6+ semanas", "Pliometria, agilidade, mudanças de direção",
      "Hop tests ≥ 90%|CAIT > 25", "joe_hop joe_hop_lat joe_corte card_corrida", "")
  ],
  "Martin RL et al. Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains Revision 2021. JOSPT 2021;51(4):CPG1–CPG80|Vuurberg G et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med 2018;52(15):956");

L("aquiles", "Tendinopatia de Aquiles", "tendinite de Aquiles, tendão de Aquiles", "tornozelo",
  "Dor e rigidez matinal no tendão (porção média: 2–6 cm acima da inserção; insercional: na inserção). Exercício de carga progressiva durante 12 semanas é o tratamento de primeira linha.",
  "Rotura (teste de Thompson positivo, 'pancada' na barriga da perna)|Uso de fluoroquinolonas|Doenças inflamatórias (espondiloartrite) com envolvimento bilateral",
  "Modelo de monitorização da dor (Silbernagel): dor ≤ 5/10 durante, normal na manhã seguinte|Excêntrico (Alfredson) ou carga lenta pesada (HSR): igualmente eficazes|Na insercional: evitar dorsiflexão abaixo da horizontal|Manter a atividade com modificação",
  "VISA-A, número de elevações unipodais, rigidez matinal",
  [
    F("Fase 1 · Isometria e gestão da carga", "0–2 semanas", "Reduzir a irritabilidade|Iniciar carga",
      "Rigidez matinal a diminuir", "pe_gemeos_bi pe_soleo_sent fun_caminhada", "Corrida em subidas e saltos"),
    F("Fase 2 · Força", "2–8 semanas", "Força dos gémeos e sóleo (carga elevada)",
      "≥ 25 elevações unipodais|Força ≥ 80%", "pe_gemeos_uni pe_alfredson pe_soleo_sent joe_leg_press", ""),
    F("Fase 3 · Pliometria", "8–12 semanas", "Armazenamento de energia",
      "Saltos com dor ≤ 3/10", "pe_pogo joe_salto_bi joe_hop", ""),
    F("Fase 4 · Regresso", "12+ semanas", "Corrida e desporto",
      "VISA-A ≥ 90", "card_corrida joe_corte joe_hop_lat", "")
  ],
  "Martin RL et al. Achilles Pain, Stiffness, and Muscle Power Deficits: Midportion Achilles Tendinopathy Revision 2018. JOSPT 2018;48(5):A1–A38|Silbernagel KG et al. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy. Am J Sports Med 2007;35(6):897–906|Beyer R et al. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy. Am J Sports Med 2015;43(7):1704–1711");

L("fasciopatia", "Fasciopatia plantar", "fasceíte plantar, esporão calcâneo, dor no calcanhar", "tornozelo",
  "Dor na face medial e plantar do calcanhar, típica nos primeiros passos da manhã e após repouso. Autolimitada na maioria (6–12 meses). Combinação de educação, alongamento, carga e calçado/ortóteses.",
  "Dor noturna ou em repouso constante|Parestesias (síndrome do túnel társico, nervo de Baxter)|Fratura de stress do calcâneo (squeeze test positivo)|Doença inflamatória",
  "Alongamento da fáscia plantar e dos gémeos|Fortalecimento com carga elevada (Rathleff)|Ligadura/taping e ortóteses de curto prazo|Gestão do peso e do tempo de pé",
  "FAAM, dor nos primeiros passos",
  [
    F("Fase 1 · Alívio", "0–2 semanas", "Reduzir a dor matinal|Educação",
      "Dor nos primeiros passos a diminuir", "pe_along_fascia pe_along_gemeos pe_rolar_bola pe_short_foot", ""),
    F("Fase 2 · Carga", "2–12 semanas", "Força dos gémeos e do pé com carga elevada",
      "Dor ≤ 3/10 nas AVD", "pe_rathleff pe_gemeos_uni pe_toalha pe_short_foot pe_dorsi_parede", ""),
    F("Fase 3 · Regresso à corrida", "12+ semanas", "Tolerância ao impacto",
      "Sem dor na marcha prolongada", "pe_pogo card_corrida pe_star", "")
  ],
  "Koc TA Jr et al. Heel Pain – Plantar Fasciitis: Revision 2023. JOSPT 2023;53(12):CPG1–CPG39|Rathleff MS et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scand J Med Sci Sports 2015;25(3):e292–e300");

/* ================= GERAL ================= */
L("quedas", "Risco de queda no idoso", "prevenção de quedas, equilíbrio, Otago", "global tornozelo",
  "As quedas são a principal causa de lesão no idoso. O exercício com componente de equilíbrio desafiante e força, ≥ 3 h/semana, reduz as quedas em cerca de 23–24%.",
  "Quedas recorrentes inexplicadas, síncope, hipotensão ortostática|Défices neurológicos novos|Medicação de risco (benzodiazepinas, anti-hipertensores)",
  "Exercício de equilíbrio progressivo e desafiante + força|Pelo menos 3 h/semana, de forma continuada|Avaliação multifatorial (visão, medicação, casa, calçado)",
  "Timed Up and Go, Berg, 30 s chair stand, SPPB, FES-I",
  [
    F("Fase 1 · Segurança e base", "0–4 semanas", "Força básica|Equilíbrio estático com apoio",
      "Levantar da cadeira sem as mãos", "fun_levantar pe_gemeos_bi fun_tandem anc_abd_dl joe_mini_agach fun_caminhada", ""),
    F("Fase 2 · Equilíbrio dinâmico", "4–12 semanas", "Equilíbrio dinâmico|Força progressiva",
      "TUG < 12 s", "fun_tandem_marcha pe_unipodal anc_step_up anc_marcha_lateral fun_escadas", ""),
    F("Fase 3 · Desafio e manutenção", "3+ meses", "Dupla tarefa|Manter o programa a longo prazo",
      "Programa autónomo", "fun_marcha_obst pe_instavel joe_agach_caixa pe_gemeos_uni", "")
  ],
  "Montero-Odasso M et al. World guidelines for falls prevention and management for older adults: a global initiative. Age Ageing 2022;51(9):afac205|Sherrington C et al. Exercise for preventing falls in older people living in the community. Cochrane Database Syst Rev 2019;1:CD012424");

L("osteoporose", "Osteoporose", "osteopenia, fragilidade óssea, fratura vertebral", "global lombar toracica",
  "O exercício de força progressivo e de impacto melhora a densidade óssea e reduz o risco de quedas. Mesmo com osteoporose estabelecida, o treino de força supervisionado de carga elevada mostrou-se seguro (LIFTMOR).",
  "Dor dorsal súbita após esforço mínimo (fratura vertebral)|Perda de altura > 4 cm",
  "Treino de força ≥ 2×/semana com progressão|Impacto moderado se tolerado|Equilíbrio ≥ 2 h/semana|Evitar flexão do tronco repetida com carga e torção forçada; ensinar a dobradiça da anca",
  "TUG, 30 s chair stand, risco FRAX",
  [
    F("Fase 1 · Base e postura", "0–4 semanas", "Extensores do tronco|Técnica de dobradiça|Equilíbrio",
      "Técnica segura", "tor_ext_sent omb_prone_t lom_dobradica fun_levantar fun_tandem core_ponte", "Abdominais em flexão (sit-ups) e flexão com rotação"),
    F("Fase 2 · Força progressiva", "4–12 semanas", "Força de membros inferiores e tronco",
      "Carga progressiva tolerada", "fun_goblet lom_peso_morto_kb omb_remada omb_press anc_step_up pe_gemeos_uni core_farmer", ""),
    F("Fase 3 · Impacto e manutenção", "3+ meses", "Impacto moderado|Manter a longo prazo",
      "Sem dor", "joe_salto_bi pe_pogo fun_marcha_obst fun_caminhada", "")
  ],
  "Giangregorio LM et al. Too Fit To Fracture: exercise recommendations for individuals with osteoporosis or osteoporotic vertebral fracture. Osteoporos Int 2014;25(3):821–835|Watson SL et al. High-intensity resistance and impact training improves bone mineral density and physical function in postmenopausal women with osteopenia and osteoporosis: the LIFTMOR randomized controlled trial. J Bone Miner Res 2018;33(2):211–220");

L("dpoc", "DPOC (reabilitação respiratória)", "doença pulmonar obstrutiva crónica, enfisema, bronquite crónica", "resp global",
  "A reabilitação respiratória (exercício + educação) reduz a dispneia, melhora a capacidade de exercício e a qualidade de vida e diminui os reinternamentos após exacerbação.",
  "SpO2 < 88% em esforço sem oxigénio prescrito|Dor torácica, arritmias|Exacerbação aguda: adaptar e referenciar",
  "Treino aeróbio (contínuo ou intervalado) + força, 2–3×/semana, ≥ 8 semanas|Técnicas de controlo da dispneia e de limpeza das vias aéreas|Monitorizar SpO2 e escala de Borg",
  "6MWT, CAT, mMRC, 1-min sit-to-stand",
  [
    F("Fase 1 · Controlo respiratório", "0–2 semanas", "Controlo da dispneia|Limpeza das vias aéreas",
      "Técnicas aprendidas", "resp_diafragma resp_labios resp_expansao resp_ciclo fun_caminhada", ""),
    F("Fase 2 · Condicionamento", "2–8 semanas", "Resistência aeróbia|Força dos membros",
      "6MWT a melhorar ≥ 30 m", "fun_caminhada joe_bicicleta fun_levantar omb_remada anc_step_up resp_labios", ""),
    F("Fase 3 · Manutenção", "8+ semanas", "Atividade física regular",
      "Programa autónomo", "card_intervalado fun_goblet fun_escadas", "")
  ],
  "Spruit MA et al. An official American Thoracic Society/European Respiratory Society statement: key concepts and advances in pulmonary rehabilitation. Am J Respir Crit Care Med 2013;188(8):e13–e64|Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global strategy for prevention, diagnosis and management of COPD (relatório anual)");
