/* Funcional, equilíbrio, prevenção de quedas, respiratório e cardiovascular. */

E("fun_levantar", "Levantar e sentar da cadeira", "sit to stand, STS, 30-second chair stand",
  "r:global,joelho,anca o:forca,funcional mu:quadricipite,gluteomax p:sent,pe m:cadeira n:1 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "Sentado na parte da frente de uma cadeira firme, pés ligeiramente atrás dos joelhos.|Incline o tronco à frente ('nariz sobre os dedos') e levante-se.|Sente-se devagar, sem cair na cadeira.|Progressão: sem usar as mãos, cadeira mais baixa, com carga, mais lento.",
  "Nariz sobre os dedos dos pés|Peso distribuído pelos dois pés",
  "Usar balanço|Deixar-se cair",
  "3 × 8–12; teste dos 30 s como medida de evolução", "joe_agach_caixa fun_goblet", "joe_mini_agach", "Base de quase todos os programas de prevenção de quedas (ex.: Otago).");

E("fun_goblet", "Agachamento goblet", "goblet squat, agachamento com kettlebell ao peito",
  "r:global,joelho,anca o:forca mu:quadricipite,gluteomax,abdominais p:pe m:kettlebell,halter n:3 f:3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "Segure um kettlebell junto ao peito.|Pés à largura dos ombros, ligeiramente rodados para fora.|Agache entre os joelhos, mantendo o peito alto.|Suba empurrando o chão.",
  "Cotovelos por dentro dos joelhos no fundo|Calcanhares no chão",
  "Arredondar as costas|Joelhos a fechar",
  "3–4 × 8–12 a RPE 6–8", "", "joe_agach_caixa", "");

E("fun_tandem", "Equilíbrio em tandem (pé à frente do pé)", "semi-tandem, tandem stance, Otago",
  "r:global,tornozelo o:equilibrio mu:gluteomed,peroneais p:pe m:nenhum,parede n:1 f:2,3 ct:isometrica c:fechada k:total pl:frontal l:bi",
  "Perto de uma bancada, coloque um pé à frente do outro (calcanhar a tocar nos dedos).|Mantenha o equilíbrio 10–30 s.|Troque o pé da frente.|Regressão: semi-tandem (pés lado a lado desfasados).",
  "Olhar em frente|Apoio só com a ponta dos dedos, se precisar",
  "Olhar para os pés|Prender a respiração",
  "3 × 10–30 s por lado", "fun_tandem_marcha pe_unipodal", "", "Supervisão nas fases iniciais em pessoas com risco de queda.");

E("fun_tandem_marcha", "Marcha em tandem", "andar sobre uma linha, calcanhar-dedos",
  "r:global o:equilibrio,funcional mu:gluteomed,peroneais p:pe m:nenhum,parede n:2 f:3 ct:dinamica c:fechada k:total pl:frontal l:bi",
  "Junto a uma bancada ou parede, ande colocando o calcanhar imediatamente à frente dos dedos do outro pé.|Dê 10 passos, vire-se e volte.|Progressão: para trás; sem apoio; com rotação da cabeça.",
  "Olhar num ponto à frente|Passos lentos",
  "Afastar os pés|Olhar para baixo",
  "2–4 percursos de 10 passos", "fun_marcha_obst", "fun_tandem", "");

E("fun_marcha_obst", "Marcha com obstáculos e mudanças de ritmo", "circuito de marcha, dual-task",
  "r:global o:equilibrio,funcional mu:gluteomed,quadricipite,tibialant p:pe m:step,outro n:3 f:3 ct:dinamica c:fechada k:total pl:multi l:bi",
  "Monte um circuito com pequenos obstáculos (livros, cones) e mudanças de direção.|Ande passando os obstáculos, variando a velocidade.|Dupla tarefa: contar para trás, segurar um copo, nomear palavras.",
  "Pés a subir bem sobre os obstáculos|Ambiente seguro e iluminado",
  "Arrastar os pés|Pressa",
  "5–10 min", "", "fun_tandem_marcha", "A dupla tarefa aproxima o treino das situações reais em que ocorrem as quedas.");

E("fun_escadas", "Subir e descer escadas", "treino de escadas, AVD",
  "r:global,joelho,anca o:funcional,forca mu:quadricipite,gluteomax p:pe m:step n:2 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "Com corrimão, suba primeiro com a perna boa e desça primeiro com a perna afetada ('sobe o bom, desce o mau').|Progrida para padrão alternado sem corrimão.",
  "Pé inteiro no degrau|Segure o corrimão com a mão do lado oposto à canadiana",
  "Olhar para trás|Degraus duplos cedo demais",
  "3–5 lanços", "anc_step_up joe_step_down", "", "");

E("fun_caminhada", "Caminhada progressiva", "marcha, programa de caminhada",
  "r:global o:cardio,resistencia,funcional mu:quadricipite,gemeos,gluteomax p:pe m:nenhum n:1 f:2,3 ct:dinamica c:fechada k:total pl:sagital l:bi",
  "Comece com uma duração que não agrave a dor (ex.: 10 min).|Aumente cerca de 10% por semana ou quando a dor estiver estável.|Objetivo geral: 150 min/semana de intensidade moderada (consegue falar mas não cantar).",
  "Ritmo confortável|Registe a resposta da dor nas 24 h",
  "Aumentar muito de uma só vez|Ignorar sinais de alarme",
  "3–5×/semana", "", "", "Na claudicação intermitente, caminhar até dor moderada, pausar e repetir.");

E("fun_marcha_canad", "Marcha com canadianas", "carga parcial, 3 pontos",
  "r:global,joelho,anca,tornozelo o:funcional mu:tricipite,quadricipite p:pe m:outro n:1 f:1 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Avance as duas canadianas ao mesmo tempo.|Avance a perna afetada entre elas, com a carga permitida.|Avance a perna boa, passando ligeiramente à frente.",
  "Use uma balança para ensinar a carga parcial (ex.: 20 kg)|Altura da canadiana: punho à altura do grande trocânter, cotovelo a 15–20°",
  "Carregar mais do que o permitido|Canadianas muito longe à frente",
  "Ao longo do dia, conforme orientação", "fun_escadas", "", "Respeitar as indicações de carga do cirurgião.");

/* ---------- RESPIRATÓRIO ---------- */
E("resp_diafragma", "Respiração diafragmática", "respiração abdominal, controlo ventilatório",
  "r:resp,core o:respiratorio,controlo mu:diafragma p:dd,sent m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Deitado ou sentado confortavelmente, uma mão no peito e outra no abdómen.|Inspire lentamente pelo nariz, deixando o abdómen subir (a mão do peito mexe pouco).|Expire devagar.",
  "Ombros relaxados|Ritmo calmo, sem forçar o volume",
  "Elevar os ombros na inspiração|Hiperventilar",
  "5–10 min, 2–3×/dia", "resp_expansao", "", "Também útil na gestão da dor persistente e da ansiedade.");

E("resp_labios", "Expiração com lábios semicerrados", "pursed lip breathing, freno labial",
  "r:resp o:respiratorio mu:diafragma p:sent,pe m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Inspire pelo nariz durante cerca de 2 s.|Expire lentamente pela boca, com os lábios como se fosse assobiar, durante 4–6 s.|Use durante esforços (subir escadas, caminhar).",
  "Expiração cerca de duas vezes mais longa do que a inspiração|Sem força exagerada",
  "Soprar com força|Inspirar pela boca",
  "Durante as atividades e nas crises de dispneia", "", "", "Usado em DPOC para reduzir a dispneia e a hiperinsuflação dinâmica.");

E("resp_expansao", "Expansão torácica com pausa inspiratória", "respiração costal, deep breathing",
  "r:resp,toracica o:respiratorio,mobilidade mu:diafragma p:sent,dl m:nenhum n:1 f:1,2 ct:dinamica c:aberta k:sem pl:frontal l:bi",
  "Sentado, mãos nas costelas laterais.|Inspire profundamente pelo nariz, expandindo as costelas contra as mãos.|Pause 2–3 s no topo e expire relaxadamente.",
  "Três inspirações profundas seguidas, no máximo, para evitar tonturas|Pode associar elevação do braço",
  "Elevar os ombros|Encadear muitas repetições",
  "3–4 respirações, várias vezes por dia", "resp_ciclo", "resp_diafragma", "Importante no pós-operatório torácico e abdominal.");

E("resp_ciclo", "Ciclo ativo das técnicas respiratórias (ACBT)", "ACBT, huffing, limpeza das vias aéreas",
  "r:resp o:respiratorio mu:diafragma,abdominais p:sent m:nenhum n:2 f:1,2,3 ct:dinamica c:aberta k:sem pl:sagital l:bi",
  "Controlo respiratório: respiração calma 20–30 s.|3–4 expansões torácicas profundas.|Controlo respiratório de novo.|1–2 'huffs' (expiração forçada de boca aberta, como para embaciar um espelho).|Repetir o ciclo até a expetoração estar mais solta; tossir quando necessário.",
  "O huff é longo e de média intensidade para mobilizar secreções periféricas|Sempre com pausas de controlo respiratório",
  "Tossir repetidamente sem controlo|Huffs demasiado fortes e curtos",
  "10–20 min, 1–2×/dia em fases de hipersecreção", "", "resp_expansao", "Para bronquiectasias, DPOC com hipersecreção e fibrose quística, sob orientação de fisioterapeuta respiratório.");

/* ---------- CARDIOVASCULAR / CONDICIONAMENTO ---------- */
E("card_intervalado", "Treino intervalado em cicloergómetro", "HIIT, intervalos",
  "r:global o:cardio,resistencia mu:quadricipite,gluteomax p:sent m:maquina n:3 f:3,4 ct:dinamica c:fechada k:parcial pl:sagital l:bi",
  "Aqueça 5–10 min a intensidade leve.|Alterne 1–4 min a intensidade elevada (RPE 15–17 em 20) com 1–3 min de recuperação ativa.|Repita 4–6 vezes; arrefeça 5 min.",
  "Use a escala de Borg para graduar|Interrompa se houver dor no peito ou sintomas anómalos",
  "Começar sem aquecimento|Intensidade máxima em pessoas não avaliadas",
  "2–3×/semana", "", "fun_caminhada", "Em doença cardiovascular ou metabólica, realizar após estratificação de risco.");

E("card_corrida", "Programa de regresso à corrida (marcha-corrida)", "return to run, walk-run",
  "r:global,joelho,tornozelo o:cardio,potencia,funcional mu:gemeos,quadricipite,gluteomax p:pe m:nenhum n:3 f:4 ct:pliometrica c:fechada k:total pl:sagital l:bi",
  "Critérios de entrada habituais: caminhar 30 min sem dor, 20+ elevações unipodais do calcanhar, 10 saltos unipodais sem dor.|Comece com blocos de marcha/corrida (ex.: 1 min corrida / 2 min marcha × 5).|Aumente a corrida e reduza a marcha ao longo de 4–8 semanas; correr em dias alternados.",
  "Dor ≤ 3/10 durante e normal no dia seguinte|Terreno plano e previsível no início",
  "Aumentar volume e intensidade ao mesmo tempo|Correr dias seguidos no início",
  "3×/semana, dias alternados", "", "pe_pogo", "");
