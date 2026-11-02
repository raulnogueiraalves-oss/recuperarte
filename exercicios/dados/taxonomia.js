/*
 * Taxonomia dos filtros.
 * Inspirada no CERT (Consensus on Exercise Reporting Template, Slade et al. 2016)
 * e na ontologia de descrição de exercícios de reabilitação (tipo de movimento,
 * lado, região, plano, posição, objetivo, dose).
 *
 * Cada faceta: chave usada nos dados -> rótulo mostrado.
 * A ordem aqui é a ordem em que aparecem nos filtros.
 */
window.TAXONOMIA = {
  facetas: [
    { id: "r", nome: "Região", valores: {
      cervical: "Cervical", toracica: "Torácica", lombar: "Lombar / lombopélvica",
      ombro: "Ombro / omoplata", cotovelo: "Cotovelo", punho: "Punho e mão",
      anca: "Anca", joelho: "Joelho", tornozelo: "Tornozelo e pé",
      core: "Core / tronco", global: "Corpo inteiro", resp: "Respiratória"
    }},
    { id: "o", nome: "Objetivo", valores: {
      mobilidade: "Mobilidade articular", flexibilidade: "Flexibilidade / alongamento",
      forca: "Força", resistencia: "Resistência muscular", potencia: "Potência / pliometria",
      controlo: "Controlo motor / estabilidade", equilibrio: "Equilíbrio / propriocepção",
      neuro: "Neurodinâmica", respiratorio: "Respiratório", cardio: "Cardiovascular",
      funcional: "Funcional / AVD"
    }},
    { id: "mu", nome: "Músculo / estrutura", valores: {
      flexcerv: "Flexores profundos do pescoço", extcerv: "Extensores cervicais", trapsup: "Trapézio superior",
      trapmed: "Trapézio médio / rombóides", trapinf: "Trapézio inferior", serratil: "Serrátil anterior",
      coifa: "Coifa dos rotadores", deltoide: "Deltoide", peitoral: "Peitoral", dorsal: "Grande dorsal",
      bicipite: "Bicípite", tricipite: "Tricípite", antebraco: "Flexores/extensores do antebraço", mao: "Músculos da mão",
      abdominais: "Abdominais", transverso: "Transverso do abdómen", obliquos: "Oblíquos", eretores: "Eretores / multífidos",
      quadrado: "Quadrado lombar", gluteomax: "Glúteo máximo", gluteomed: "Glúteo médio / mínimo",
      flexanca: "Flexores da anca", adutores: "Adutores", rotanca: "Rotadores da anca",
      quadricipite: "Quadricípite", isquios: "Isquiotibiais", gemeos: "Gémeos / sóleo",
      tibialant: "Tibial anterior", tibialpost: "Tibial posterior", peroneais: "Peroneais", intrinsecos: "Intrínsecos do pé",
      diafragma: "Diafragma", pelvico: "Pavimento pélvico", nervos: "Sistema nervoso periférico"
    }},
    { id: "p", nome: "Posição", valores: {
      dd: "Decúbito dorsal", dv: "Decúbito ventral", dl: "Decúbito lateral", sent: "Sentado",
      pe: "De pé", quad: "Quatro apoios", joel: "Ajoelhado / semi-ajoelhado", susp: "Suspensão / apoio de mãos"
    }},
    { id: "m", nome: "Material", valores: {
      nenhum: "Sem material", elastico: "Elástico / banda", halter: "Halteres", kettlebell: "Kettlebell",
      barra: "Barra", cabo: "Polia / cabo", maquina: "Máquina", bola: "Bola suíça", bolamed: "Bola medicinal",
      bolapeq: "Bola pequena / toalha", rolo: "Rolo de espuma", step: "Step / degrau", cadeira: "Cadeira",
      parede: "Parede", instavel: "Superfície instável", banco: "Banco / marquesa", suspensao: "Suspensão (TRX) / barra fixa",
      bastao: "Bastão", caneleira: "Caneleira", outro: "Outro"
    }},
    { id: "n", nome: "Nível", valores: { 1: "1 · Iniciação", 2: "2 · Básico", 3: "3 · Intermédio", 4: "4 · Avançado" }},
    { id: "f", nome: "Fase da reabilitação", valores: {
      1: "1 · Proteção / aguda", 2: "2 · Mobilidade e controlo", 3: "3 · Fortalecimento", 4: "4 · Potência e regresso à atividade"
    }},
    { id: "ct", nome: "Tipo de contração", valores: {
      isometrica: "Isométrica", dinamica: "Concêntrica-excêntrica", excentrica: "Ênfase excêntrica",
      pliometrica: "Pliométrica / balística", assistida: "Ativa-assistida / passiva", alongamento: "Alongamento sustentado"
    }},
    { id: "c", nome: "Cadeia cinética", valores: { aberta: "Aberta", fechada: "Fechada" }},
    { id: "k", nome: "Carga sobre o membro", valores: { sem: "Sem carga", parcial: "Carga parcial", total: "Carga total" }},
    { id: "pl", nome: "Plano de movimento", valores: { sagital: "Sagital", frontal: "Frontal", transversal: "Transversal", multi: "Multiplanar" }},
    { id: "l", nome: "Lateralidade", valores: { bi: "Bilateral", uni: "Unilateral" }},
    { id: "src", nome: "Fonte", valores: { clinica: "Reabilitação (curado, PT)", ginasio: "Ginásio (com fotos, EN)", meus: "Os meus exercícios" }}
  ],

  /* Termos em português que também procuram o equivalente em inglês (biblioteca de ginásio). */
  sinonimosEN: {
    agachamento: "squat", afundo: "lunge", passada: "lunge", "peso morto": "deadlift", ponte: "bridge",
    prancha: "plank", flexao: "push-up pushup", "flexoes": "push-up pushup", remada: "row", puxada: "pulldown pull-down",
    elevacao: "raise", alongamento: "stretch", supino: "bench press", press: "press", halter: "dumbbell",
    halteres: "dumbbell", barra: "barbell", elastico: "band", polia: "cable", maquina: "machine",
    gemeos: "calf", panturrilha: "calf", isquiotibiais: "hamstring", quadricipite: "quadriceps", gluteo: "glute",
    ombro: "shoulder", peito: "chest", peitoral: "chest", costas: "back", abdominal: "crunch ab", abdominais: "abdominals crunch",
    bicipite: "biceps curl", tricipite: "triceps", antebraco: "forearm wrist", pescoco: "neck", salto: "jump",
    saltos: "jump", rotacao: "rotation twist", lateral: "lateral side", adutores: "adductor", abdutores: "abductor",
    kettlebell: "kettlebell", bola: "ball", rolo: "foam roll", extensao: "extension", "rotacao externa": "external rotation"
  },

  /* Correspondência da biblioteca aberta (free-exercise-db) para a nossa taxonomia. */
  mapaGinasio: {
    musculo: {
      quadriceps: { mu: "quadricipite", r: ["joelho", "anca"] }, hamstrings: { mu: "isquios", r: ["anca", "joelho"] },
      glutes: { mu: "gluteomax", r: ["anca"] }, adductors: { mu: "adutores", r: ["anca"] }, abductors: { mu: "gluteomed", r: ["anca"] },
      calves: { mu: "gemeos", r: ["tornozelo"] }, abdominals: { mu: "abdominais", r: ["core"] }, "lower back": { mu: "eretores", r: ["lombar"] },
      "middle back": { mu: "trapmed", r: ["toracica", "ombro"] }, lats: { mu: "dorsal", r: ["ombro", "toracica"] }, traps: { mu: "trapsup", r: ["ombro", "cervical"] },
      chest: { mu: "peitoral", r: ["ombro"] }, shoulders: { mu: "deltoide", r: ["ombro"] }, biceps: { mu: "bicipite", r: ["cotovelo"] },
      triceps: { mu: "tricipite", r: ["cotovelo"] }, forearms: { mu: "antebraco", r: ["punho"] }, neck: { mu: "extcerv", r: ["cervical"] }
    },
    material: {
      barbell: "barra", dumbbell: "halter", other: "outro", "body only": "nenhum", cable: "cabo", machine: "maquina",
      kettlebells: "kettlebell", bands: "elastico", "medicine ball": "bolamed", "exercise ball": "bola", "foam roll": "rolo", "e-z curl bar": "barra"
    },
    nivel: { beginner: 2, intermediate: 3, expert: 4 },
    categoria: {
      strength: { o: ["forca"], f: [3], ct: "dinamica" }, powerlifting: { o: ["forca"], f: [3, 4], ct: "dinamica" },
      strongman: { o: ["forca", "potencia"], f: [4], ct: "dinamica" }, stretching: { o: ["flexibilidade"], f: [2], ct: "alongamento" },
      plyometrics: { o: ["potencia"], f: [4], ct: "pliometrica" }, "olympic weightlifting": { o: ["potencia", "forca"], f: [4], ct: "pliometrica" },
      cardio: { o: ["cardio", "resistencia"], f: [3, 4], ct: "dinamica" }
    }
  }
};
