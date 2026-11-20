/* =========================================================
   ÉDITE CES DONNÉES POUR PERSONNALISER LE SITE
   (utilisées par skills.html et projects.html)
   ========================================================= */

const SKILLS = [
  { name: "Python", level: 4 },
  { name: "WordPress", level: 4 },
  { name: "C#", level: 3 },
  { name: "HTML", level: 3 },
  { name: "CSS", level: 3 },
  { name: "PHP", level: 3 },
  { name: "Unity", level: 3 },
  { name: "JavaScript", level: 2 },
  { name: "Bash", level: 2 },
];

const PROFILE_LANGUAGES = {
  fr: [
    { name: "Anglais", level: "Avancé" },
    { name: "Allemand", level: "Intermédiaire" },
    { name: "Breton", level: "Débutant" },
  ],
  en: [
    { name: "English", level: "Advanced" },
    { name: "German", level: "Intermediate" },
    { name: "Breton", level: "Beginner" },
  ],
};

// Pré-remplis depuis le CV — remplace "link" par tes vraies URLs (GitHub, démo…)
// Chaque projet a un nom/description/tags par langue (fr/en) ; le lien est partagé.
const PROJECTS = [
  {
    link: "stage.html",
    fr: { name: "Stage — IP Développement", desc: "Présentation de mon stage : l'entreprise IP Développement et les missions que j'y ai menées.", tags: ["Stage"] },
    en: { name: "Internship — IP Développement", desc: "Overview of my internship: the company IP Développement and the tasks I worked on.", tags: ["Internship"] },
  },
  {
    link: "#",
    fr: { name: "Dijkstra Métro", desc: "Optimiseur de trajet dans le métro parisien basé sur l'algorithme de Dijkstra.", tags: ["Python", "Algo"] },
    en: { name: "Paris Metro Optimizer", desc: "Route optimizer for the Paris metro, built on Dijkstra's algorithm.", tags: ["Python", "Algorithm"] },
  },
  {
    link: "#",
    fr: { name: "Football Manager", desc: "Jeu de gestion de club de football inspiré de Football Manager.", tags: ["Python"] },
    en: { name: "Football Manager", desc: "A football club management game inspired by Football Manager.", tags: ["Python"] },
  },
  {
    link: "#",
    fr: { name: "FUT Card Generator", desc: "Page web permettant de générer sa propre carte FIFA Ultimate Team.", tags: ["HTML", "JS"] },
    en: { name: "FUT Card Generator", desc: "A web page that generates your own FIFA Ultimate Team card.", tags: ["HTML", "JS"] },
  },
  {
    link: "#",
    fr: { name: "Jeu du Craps", desc: "Implémentation du jeu de dés « Craps » avec gestion des mises.", tags: ["C#"] },
    en: { name: "Craps Game", desc: "Implementation of the dice game Craps, with bet management.", tags: ["C#"] },
  },
  {
    link: "#",
    fr: { name: "Gestion Course Cycliste", desc: "Site web de gestion d'une course de cyclisme (coureurs, étapes, classements).", tags: ["HTML", "PHP", "CSS"] },
    en: { name: "Cycling Race Manager", desc: "A website to manage a cycling race (riders, stages, standings).", tags: ["HTML", "PHP", "CSS"] },
  },
  {
    link: "#",
    fr: { name: "Jeu Unity", desc: "Petit jeu développé sous Unity dans le cadre du BTS SIO.", tags: ["Unity", "C#"] },
    en: { name: "Unity Game", desc: "A small game built in Unity as part of the BTS SIO program.", tags: ["Unity", "C#"] },
  },
  {
    link: "#",
    fr: { name: "Site Nao'Hed", desc: "Site web de l'association Nao'Hed, dont Lucas est président-fondateur.", tags: ["Web", "Asso"] },
    en: { name: "Nao'Hed Website", desc: "Website for Nao'Hed, the association Lucas founded and presides over.", tags: ["Web", "Club"] },
  },
];

// Certifications — même structure que PROJECTS.
// "link" : URL ou chemin du certificat (ex : "certificats/mon-certificat.pdf" ou "https://…"), "#" = pas encore de lien.
// Remplace les deux exemples ci-dessous par tes vraies certifications.
const CERTIFICATIONS = [
  {
    link: "#",
    fr: { name: "Certification 1", desc: "[Décris ici la certification : organisme, date d'obtention, compétences validées.]", tags: ["À compléter"] },
    en: { name: "Certification 1", desc: "[Describe the certification here: issuing body, date obtained, skills validated.]", tags: ["To fill in"] },
  },
  {
    link: "#",
    fr: { name: "Certification 2", desc: "[Décris ici la certification : organisme, date d'obtention, compétences validées.]", tags: ["À compléter"] },
    en: { name: "Certification 2", desc: "[Describe the certification here: issuing body, date obtained, skills validated.]", tags: ["To fill in"] },
  },
];

/* =========================================================
   TRADUCTIONS (FR / EN) — ajoute une langue en dupliquant un bloc
   et en l'ajoutant aussi à LANG_META plus bas.
   ========================================================= */

const TRANSLATIONS = {
  fr: {
    "nav.home": "ACCUEIL",
    "nav.profile": "PROFIL",
    "nav.pokedex": "COMPÉTENCES",
    "nav.education": "FORMATION",
    "nav.experience": "EXPéRIENCE",
    "nav.projects": "PROJETS",
    "nav.cv": "CV",
    "nav.contact": "CONTACT",
    "nav.menu": "MENU",
    "nav.close": "FERMER",

    "status.home": "ACCUEIL",
    "status.profile": "PROFIL",
    "status.pokedex": "COMPÉTENCES",
    "status.education": "FORMATION",
    "status.experience": "EXPÉRIENCE",
    "status.projects": "PROJETS",
    "status.cv": "CV",
    "status.contact": "CONTACT",

    "footer.tagline": "Portfolio de Lucas Debruyne — thème Pokémon Émeraude",

    "home.dialog.who": "LUCAS :",
    "home.intro": "Étudiant en BTS SIO SLAM, à la recherche d'une alternance en développement informatique dès septembre 2026.",
    "home.trainercard.title": "APERÇU",
    "home.trainercard.body": "BTS SIO SLAM — Lycée Carcouet, Nantes<br>Recherche alternance dès septembre 2026",
    "home.badge.python": "Python",
    "home.badge.web": "Web",
    "home.badge.unity": "Unity",
    "home.badge.music": "Musique",
    "home.badge.football": "Football",
    "home.quick.profile.label": "PROFIL",
    "home.quick.profile.desc": "Qui je suis, en bref",
    "home.quick.pokedex.label": "COMPÉTENCES",
    "home.quick.pokedex.desc": "Compétences & langues",
    "home.quick.education.label": "FORMATION",
    "home.quick.education.desc": "Mon parcours scolaire",
    "home.quick.projects.label": "PROJETS",
    "home.quick.projects.desc": "Mes réalisations techniques",
    "home.quick.cv.label": "CV",
    "home.quick.cv.desc": "Télécharger le PDF",
    "home.quick.contact.label": "CONTACT",
    "home.quick.contact.desc": "Mes coordonnées",

    "about.section.title": "À PROPOS",
    "about.dialog.who": "À PROPOS :",
    "about.intro": "Étudiant en 1<sup>ère</sup> année de BTS SIO, spécialité SLAM (Solutions Logicielles et Applications Métiers), au Lycée Carcouet à Nantes. Je recherche une alternance à partir de septembre 2026 en développement informatique.",
    "about.badge.foot": "FOOT",
    "about.badge.code": "CODE",
    "about.badge.music": "MUSIQUE",
    "about.badge.design": "GRAPHISME",

    "skills.title.tech": "COMPÉTENCES TECHNIQUES",
    "skills.title.languages": "LANGUES",

    "education.section.title": "ITINÉRAIRE — ÉDUCATION",
    "education.bts.date": "SEPT. 2025 — JUIN 2027",
    "education.bts.title": "BTS SIO SLAM — Lycée Carcouet, Nantes",
    "education.bts.list": `
        <li>Développement d'applications web/mobile (HTML, CSS, JavaScript, PHP, Python…)</li>
        <li>Conception et maintenance de bases de données (MySQL, SQL Server)</li>
        <li>Analyse des besoins utilisateurs et rédaction de documents techniques</li>
        <li>Apprentissage du framework web Bootstrap</li>
        <li>Mise en place, test et déploiement d'applications métiers</li>
        <li>Réalisations : jeu Unity, jeu du Craps en C#, site de gestion de course cycliste (HTML/PHP/CSS)</li>
      `,
    "education.bac.date": "SEPT. 2022 — JUILLET 2025",
    "education.bac.title": "Bac général — Lycée Caroline Aigle, Nort-sur-Erdre",
    "education.bac.list": `
        <li>Bases solides en algorithmique et programmation (Python majoritairement)</li>
        <li>Conception de programmes : fonctions, structures de données, récursivité</li>
        <li>Compréhension des architectures informatiques (réseaux, systèmes, bases de données)</li>
        <li>Raisonnement mathématique, logique, statistiques et modélisation</li>
        <li>Réalisations : optimiseur de trajet dans le métro parisien (algorithme de Dijkstra), jeu type « Football Manager » en Python, générateur de carte FIFA Ultimate Team (HTML/JS)</li>
      `,

    "experience.section.title": "ASSOCIATIF",
    "experience.naohed.date": "JANVIER 2025 — AUJOURD'HUI",
    "experience.naohed.title": "Président — Fondateur, Nao'Hed (Nantes)",
    "experience.naohed.list": `
      <li>Développement et maintenance des pages web de l'association</li>
      <li>Création de plus de 270 visuels et publications (Instagram, Twitter/X, Facebook)</li>
      `,

    "nav.internship": "STAGE",
    "status.internship": "STAGE",
    "stage.company.title": "L'ENTREPRISE — IP DÉVELOPPEMENT",
    "stage.company.text": `
      <p>IP Développement est l'entreprise dans laquelle j'ai effectué mon stage.</p>
      <ul class="stage-facts">
        <li><b>Secteur</b> : Vente de matériel informatique réseau</li>
        <li><b>Lieu</b> : 1 agence à Nantes (Treillières), 1 agence à Béziers</li>
        <li><b>Nombre d'employés</b> : 2</li>
        <li><b>Projet sur lequel on a travaillé</b> :</li>
      </ul>
      `,
    "stage.work.title": "CE QUE J'AI FAIT",
    "stage.work.text": `
      <p>Pendant mon stage, j'ai travaillé sur la partie Backend (celle que vous voyez en jaune sur le schéma). Concrètement, j'ai normalisé les appels API des fournisseurs pour les rendre compatibles avec notre API et j'ai construit les appels API vers les fournisseurs pour extraire les informations des produits que nous vendons auprès du fournisseur.</p>
      <p class="stage-techs"><b>Technologies utilisées</b> : <span class="tag">Postman</span> <span class="tag">Bruno</span> <span class="tag">PHP</span> <span class="tag">CURL</span></p>
      `,
    "stage.photo.hint": "Ajoute une photo ici",
    "experience.internship.date": "[Dates du stage]",
    "experience.internship.title": "Stagiaire Développeur Backend — IP Développement",
    "experience.internship.list": `
      <li>Normalisation des appels API des fournisseurs pour les rendre compatibles avec notre API</li>
      <li>Construction des appels API vers les fournisseurs pour extraire les informations des produits vendus</li>
      <li>Technologies : Postman, Bruno, PHP, CURL</li>
      `,
    "experience.internship.link": "Voir le détail du stage →",

    "projects.hero.title": "PROJETS",
    "projects.section.title": "PROJETS INFORMATIQUES",
    "projects.btn.party": "COMPÉTENCES",
    "projects.btn.close": "RETOUR",
    "projects.empty.hint": "Clique sur un projet<br>dans la boîte →",
    "projects.note": "Note pour Lucas : cette liste est pré-remplie à partir de ton CV. Ouvre script.js et modifie le tableau PROJECTS tout en haut du fichier pour ajouter tes vrais liens (GitHub, démo…), changer les descriptions ou ajouter de nouveaux projets — toutes les pages du site se mettent à jour automatiquement.",
    "projects.count.suffix": "PROJETS",
    "projects.link.pending": "LIEN À VENIR",
    "projects.link.view": "VOIR LE PROJET",
    "projects.data.label": "DÉTAIL DU PROJET",
    "projects.filter.all": "TOUS",
    "nav.certifications": "CERTIFICATIONS",
    "status.certifications": "CERTIFICATIONS",
    "certs.section.title": "MES CERTIFICATIONS",
    "certs.empty.hint": "Clique sur une certification<br>dans la boîte →",
    "certs.count.suffix": "CERTIFICATIONS",
    "certs.data.label": "DÉTAIL",
    "certs.link.pending": "LIEN À VENIR",
    "certs.link.view": "VOIR LE CERTIFICAT",

    "cv.section.title": "CURRICULUM VITAE",
    "cv.intro": "Retrouve l'intégralité de mon parcours, mes compétences et mes coordonnées dans mon CV.",
    "cv.download.button": "TÉLÉCHARGER LE CV",
    "cv.item.formation.label": "FORMATION",
    "cv.item.formation.value": "BTS SIO SLAM — Nantes",
    "cv.item.skills.label": "COMPÉTENCES",
    "cv.item.skills.value": "Python, C#, Web, Unity…",
    "cv.item.languages.label": "LANGUES",
    "cv.item.languages.value": "Anglais, Allemand, Breton",
    "cv.item.passions.label": "PASSIONS",
    "cv.item.passions.value": "Football, Musique, Graphisme",

    "contact.section.title": "CONTACT",
    "contact.label.email": "E-MAIL",
    "contact.label.location": "LOCALISATION",
    "contact.value.location": "Nort-sur-Erdre, France",
    "contact.note": "Note pour Lucas : ton numéro de téléphone et ton adresse complète (présents sur ton CV) ne sont pas affichés ici. Comme c'est un usage personnel, ajoute-les directement dans ce fichier si tu veux qu'ils apparaissent, ou remplace par tes liens GitHub / LinkedIn.",
  },

  en: {
    "nav.home": "HOME",
    "nav.profile": "PROFILE",
    "nav.pokedex": "POKéDEX",
    "nav.education": "EDUCATION",
    "nav.experience": "EXPERIENCE",
    "nav.projects": "PROJECTS",
    "nav.cv": "CV",
    "nav.contact": "CONTACT",
    "nav.menu": "MENU",
    "nav.close": "CLOSE",

    "status.home": "HOME",
    "status.profile": "PROFILE",
    "status.pokedex": "POKÉDEX",
    "status.education": "EDUCATION",
    "status.experience": "EXPERIENCE",
    "status.projects": "PROJECTS",
    "status.cv": "CV",
    "status.contact": "CONTACT",

    "footer.tagline": "Lucas Debruyne's portfolio — Pokémon Emerald theme",

    "home.dialog.who": "LUCAS:",
    "home.intro": "First-year BTS SIO SLAM student, looking for a work-study placement in software development starting September 2026.",
    "home.trainercard.title": "OVERVIEW",
    "home.trainercard.body": "BTS SIO SLAM — Lycée Carcouet, Nantes<br>Looking for a work-study placement from September 2026",
    "home.badge.python": "Python",
    "home.badge.web": "Web",
    "home.badge.unity": "Unity",
    "home.badge.music": "Music",
    "home.badge.football": "Football",
    "home.quick.profile.label": "PROFILE",
    "home.quick.profile.desc": "Who I am, in short",
    "home.quick.pokedex.label": "POKÉDEX",
    "home.quick.pokedex.desc": "Skills & languages",
    "home.quick.education.label": "EDUCATION",
    "home.quick.education.desc": "My academic background",
    "home.quick.projects.label": "PROJECTS",
    "home.quick.projects.desc": "My technical work",
    "home.quick.cv.label": "CV",
    "home.quick.cv.desc": "Download the PDF",
    "home.quick.contact.label": "CONTACT",
    "home.quick.contact.desc": "My contact details",

    "about.section.title": "ABOUT",
    "about.dialog.who": "ABOUT ME:",
    "about.intro": "First-year BTS SIO student, SLAM track (Software Solutions and Business Applications), at Lycée Carcouet in Nantes. I'm looking for a work-study placement (alternance) in software development starting September 2026.",
    "about.badge.foot": "FOOTBALL",
    "about.badge.code": "CODE",
    "about.badge.music": "MUSIC",
    "about.badge.design": "DESIGN",

    "skills.title.tech": "TECHNICAL SKILLS",
    "skills.title.languages": "LANGUAGES",

    "education.section.title": "JOURNEY — EDUCATION",
    "education.bts.date": "SEPT. 2025 — JUNE 2027",
    "education.bts.title": "BTS SIO SLAM — Lycée Carcouet, Nantes",
    "education.bts.list": `
        <li>Web/mobile application development (HTML, CSS, JavaScript, PHP, Python…)</li>
        <li>Database design and maintenance (MySQL, SQL Server)</li>
        <li>User needs analysis and technical documentation</li>
        <li>Learning the Bootstrap web framework</li>
        <li>Testing and deployment of business applications</li>
        <li>Projects: a Unity game, a Craps dice game in C#, a cycling race management website (HTML/PHP/CSS)</li>
      `,
    "education.bac.date": "SEPT. 2022 — JULY 2025",
    "education.bac.title": "General Baccalaureate — Lycée Caroline Aigle, Nort-sur-Erdre",
    "education.bac.list": `
        <li>Solid foundations in algorithms and programming (mostly Python)</li>
        <li>Program design: functions, data structures, recursion</li>
        <li>Understanding of computer architecture (networks, systems, databases)</li>
        <li>Mathematical and logical reasoning, statistics and modelling</li>
        <li>Projects: a Paris metro route optimizer (Dijkstra's algorithm), a "Football Manager"-style game in Python, a FIFA Ultimate Team card generator (HTML/JS)</li>
      `,

    "experience.section.title": "VOLUNTEER WORK",
    "experience.naohed.date": "JANUARY 2025 — PRESENT",
    "experience.naohed.title": "President — Founder, Nao'Hed (Nantes)",
    "experience.naohed.list": `
      <li>Development and maintenance of the association's web pages</li>
      <li>Creation of more than 270 visuals and posts (Instagram, Twitter/X, Facebook)</li>
      `,

    "nav.internship": "INTERNSHIP",
    "status.internship": "INTERNSHIP",
    "stage.company.title": "THE COMPANY — IP DÉVELOPPEMENT",
    "stage.company.text": `
      <p>IP Développement is the company where I completed my internship.</p>
      <ul class="stage-facts">
        <li><b>Industry</b>: Sale of networking IT equipment</li>
        <li><b>Location</b>: 1 office in Nantes (Treillières), 1 office in Béziers</li>
        <li><b>Number of employees</b>: 2</li>
        <li><b>Project we worked on</b>:</li>
      </ul>
      `,
    "stage.work.title": "WHAT I DID",
    "stage.work.text": `
      <p>During my internship, I worked on the Backend part (the one shown in yellow on the diagram). Specifically, I normalized the suppliers' API calls to make them compatible with our API, and I built the API calls to the suppliers to extract information about the products we sell through them.</p>
      <p class="stage-techs"><b>Technologies used</b>: <span class="tag">Postman</span> <span class="tag">Bruno</span> <span class="tag">PHP</span> <span class="tag">CURL</span></p>
      `,
    "stage.photo.hint": "Add a photo here",
    "experience.internship.date": "[Internship dates]",
    "experience.internship.title": "Backend Developer Intern — IP Développement",
    "experience.internship.list": `
      <li>Normalized suppliers' API calls to make them compatible with our API</li>
      <li>Built the API calls to suppliers to extract information about the products sold</li>
      <li>Technologies: Postman, Bruno, PHP, CURL</li>
      `,
    "experience.internship.link": "See internship details →",

    "projects.hero.title": "PROJECTS",
    "projects.section.title": "IT PROJECTS",
    "projects.btn.party": "SKILLS",
    "projects.btn.close": "BACK",
    "projects.empty.hint": "Click a project<br>in the box →",
    "projects.note": "Note for Lucas: this list is pre-filled from your CV. Open script.js and edit the PROJECTS array near the top of the file to add your real links (GitHub, demo…), change the descriptions, or add new projects — every page updates automatically.",
    "projects.count.suffix": "PROJECTS",
    "projects.link.pending": "LINK COMING SOON",
    "projects.link.view": "VIEW PROJECT",
    "projects.data.label": "PROJECT DETAILS",
    "projects.filter.all": "ALL",
    "nav.certifications": "CERTIFICATIONS",
    "status.certifications": "CERTIFICATIONS",
    "certs.section.title": "MY CERTIFICATIONS",
    "certs.empty.hint": "Click a certification<br>in the box →",
    "certs.count.suffix": "CERTIFICATIONS",
    "certs.data.label": "DETAILS",
    "certs.link.pending": "LINK COMING SOON",
    "certs.link.view": "VIEW CERTIFICATE",

    "cv.section.title": "CV",
    "cv.intro": "Find my full background, skills, and contact details in my CV.",
    "cv.download.button": "DOWNLOAD CV",
    "cv.item.formation.label": "EDUCATION",
    "cv.item.formation.value": "BTS SIO SLAM — Nantes",
    "cv.item.skills.label": "SKILLS",
    "cv.item.skills.value": "Python, C#, Web, Unity…",
    "cv.item.languages.label": "LANGUAGES",
    "cv.item.languages.value": "English, German, Breton",
    "cv.item.passions.label": "INTERESTS",
    "cv.item.passions.value": "Football, Music, Design",

    "contact.section.title": "CONTACT",
    "contact.label.email": "EMAIL",
    "contact.label.location": "LOCATION",
    "contact.value.location": "Nort-sur-Erdre, France",
    "contact.note": "Note for Lucas: your phone number and full address (from your CV) aren't shown here. Since this is for personal use, add them directly in this file if you want them to appear, or swap them for your GitHub / LinkedIn links.",
  },
};

// Ajoute ici tout code de langue supplémentaire présent dans TRANSLATIONS
const LANG_META = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
];



/* =========================================================
   ICÔNES PIXEL (remplacent les emojis — tout est fait de carrés,
   rien n'est arrondi via CSS ; les silhouettes "rondes" comme le
   globe ou le badge sont dessinées en pixel-art, en escalier)
   ========================================================= */

const ICONS = {
  monitor: [ // code / développement
    ".########.",
    "#........#",
    "#........#",
    "#........#",
    "#........#",
    ".########.",
    "....##....",
    "...####...",
    "..######..",
  ],
  globe: [ // web
    "..######..",
    ".#......#.",
    "#...##...#",
    "#...##...#",
    "####..####",
    "####..####",
    "#...##...#",
    "#...##...#",
    ".#......#.",
    "..######..",
  ],
  cartridge: [ // Unity / jeux
    ".########.",
    "#........#",
    "#........#",
    "#........#",
    "#........#",
    "#........#",
    "#..####..#",
    "#..####..#",
    "#..####..#",
    "#........#",
    ".########.",
  ],
  music: [ // musique
    "....##..",
    "....##..",
    "....##..",
    "....##..",
    "..####..",
    ".######.",
    "##....#.",
    ".#####..",
  ],
  ball: [ // football / sport
    "..######..",
    ".########.",
    "##########",
    "##########",
    "##########",
    "##########",
    "##########",
    "##########",
    ".########.",
    "..######..",
  ],
  star: [ // badge / expérience
    "....#....",
    "....#....",
    "...###...",
    "..#####..",
    "#########",
    "..#####..",
    ".##...##.",
    "##.....##",
    "#.......#",
  ],
  gear: [ // compétences / outils
    "..#....#..",
    ".###..###.",
    "..######..",
    "###....###",
    "##..##..##",
    "##..##..##",
    "###....###",
    "..######..",
    ".###..###.",
    "..#....#..",
  ],
  envelope: [ // mail / contact
    "############",
    "#..........#",
    "#.#......#.#",
    "#..#....#..#",
    "#...#..#...#",
    "#....##....#",
    "#..........#",
    "############",
  ],
  pin: [ // localisation
    "..####..",
    ".######.",
    "########",
    "########",
    ".######.",
    "..####..",
    "...##...",
    "....#...",
  ],
  disk: [ // save
    "##########",
    "#........#",
    "#.######.#",
    "#.######.#",
    "#.######.#",
    "#........#",
    "#.####...#",
    "#.####...#",
    "#.####...#",
    "##########",
  ],
  bag: [ // sac / CV
    "...####...",
    "..#....#..",
    ".##....##.",
    "##########",
    "#........#",
    "#..####..#",
    "#..####..#",
    "#........#",
    "#........#",
    "#........#",
    "##########",
  ],
  gradcap: [ // formation
    "....####....",
    "...######...",
    "..########..",
    "############",
    "......##....",
    "......##....",
    "....#....#..",
  ],
  box: [ // projets
    "##########",
    "#.#....#.#",
    "#..#..#..#",
    "#...##...#",
    "##########",
    "#........#",
    "#........#",
    "#........#",
    "##########",
  ],
  person: [ // profil
    "..####..",
    ".######.",
    ".######.",
    "..####..",
    "........",
    ".######.",
    "########",
    "########",
    "########",
    "#..##..#",
  ],
  flag: [ // parcours
    "#.......",
    "#####...",
    "#######.",
    "#####...",
    "#.......",
    "#.......",
    "#.......",
    "#.......",
  ],
  menu: [ // bouton menu (hamburger pixelisé)
    "##########",
    "##########",
    "..........",
    "##########",
    "##########",
    "..........",
    "##########",
    "##########",
  ],
  camera: [ // photo à ajouter
    "..####....",
    ".########.",
    "#..####..#",
    "#.######.#",
    "#.######.#",
    "#.######.#",
    "#........#",
    "##########",
  ],
};

function gridIcon(rows){
  const h = rows.length;
  const w = rows[0].length;
  let rects = '';
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++){
      if (row[x] === '#'){
        rects += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
      }
    }
  });
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" fill="currentColor">${rects}</svg>`;
}

function renderIcons(){
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.getAttribute('data-icon');
    if (ICONS[key]) el.innerHTML = gridIcon(ICONS[key]);
  });
}

/* =========================================================
   MOTEUR I18N
   ========================================================= */

function getLang(){
  const saved = localStorage.getItem('site-lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  return 'fr';
}

function setLangStorage(lang){
  localStorage.setItem('site-lang', lang);
}

function t(key){
  const lang = getLang();
  const val = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
  if (val !== undefined) return val;
  return (TRANSLATIONS.fr && TRANSLATIONS.fr[key]) || '';
}

function applyTranslations(){
  const lang = getLang();
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = t(key);
    if (val) el.setAttribute('title', val);
  });

  const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
  if (titleKey) document.title = t(titleKey);

  updateLangSwitcherUI();
}

function updateLangSwitcherUI(){
  const lang = getLang();
  document.querySelectorAll('#lang-current').forEach(el => {
    el.textContent = lang.toUpperCase();
  });
  document.querySelectorAll('.lang-menu button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

function openLangMenu(){
  const menu = document.getElementById('lang-menu');
  const btn = document.getElementById('lang-btn');
  if (!menu) return;
  menu.removeAttribute('hidden');
  if (btn) btn.setAttribute('aria-expanded', 'true');
}

function closeLangMenu(){
  const menu = document.getElementById('lang-menu');
  const btn = document.getElementById('lang-btn');
  if (!menu) return;
  menu.setAttribute('hidden', '');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function setLang(lang){
  if (!TRANSLATIONS[lang]) return;
  setLangStorage(lang);
  applyTranslations();
  renderSkills();
  renderProjects();
  restartHomeIntro();
  closeLangMenu();
}

function initLangSwitcher(){
  const btn = document.getElementById('lang-btn');
  const menu = document.getElementById('lang-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.hasAttribute('hidden')) openLangMenu();
    else closeLangMenu();
  });

  menu.querySelectorAll('button[data-lang]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      setLang(b.getAttribute('data-lang'));
    });
  });

  document.addEventListener('click', () => closeLangMenu());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLangMenu();
  });
}

function restartHomeIntro(){
  const el = document.getElementById('typed-line');
  if (el) typeIntro('typed-line', t('home.intro'));
}

/* =========================================================
   MOTEUR — pas besoin d'y toucher
   ========================================================= */

function typeIntro(elId, text, speed = 22){
  const el = document.getElementById(elId);
  if (!el) return;
  let i = 0;
  (function step(){
    if (i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  })();
}

function hpColor(level, max){
  const ratio = level / max;
  if (ratio > 0.6) return 'var(--hp-green)';
  if (ratio > 0.3) return 'var(--hp-yellow)';
  return 'var(--hp-red)';
}

function renderSkills(){
  const lang = getLang();
  const skillsList = document.getElementById('skills-list');
  if (skillsList){
    skillsList.innerHTML = '';
    SKILLS.forEach(s => {
      const row = document.createElement('div');
      row.className = 'stat-row';
      row.innerHTML = `
        <div class="stat-label"><span>${s.name}</span><span>${s.level}/5</span></div>
        <div class="hp-bar"><div class="hp-fill" style="width:${(s.level/5*100)}%;background:${hpColor(s.level,5)}"></div></div>
      `;
      skillsList.appendChild(row);
    });
  }
  const langList = document.getElementById('lang-list');
  if (langList){
    langList.innerHTML = '';
    (PROFILE_LANGUAGES[lang] || PROFILE_LANGUAGES.fr).forEach(l => {
      const card = document.createElement('div');
      card.className = 'lang-card';
      card.innerHTML = `<b>${l.name}</b>${l.level}`;
      langList.appendChild(card);
    });
  }
}

// Original, simple pixel-critter icon (not based on any existing character design)
function critterSVG(hue){
  const body = `hsl(${hue}, 55%, 60%)`;
  const dark = `hsl(${hue}, 55%, 35%)`;
  return `
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="4" y="10" width="2" height="2" fill="${dark}"/>
    <rect x="10" y="10" width="2" height="2" fill="${dark}"/>
    <rect x="5" y="4" width="6" height="7" fill="${body}"/>
    <rect x="4" y="5" width="1" height="4" fill="${body}"/>
    <rect x="11" y="5" width="1" height="4" fill="${body}"/>
    <rect x="4" y="2" width="2" height="3" fill="${dark}"/>
    <rect x="10" y="2" width="2" height="3" fill="${dark}"/>
    <rect x="6" y="7" width="1" height="1" fill="#20202a"/>
    <rect x="9" y="7" width="1" height="1" fill="#20202a"/>
  </svg>`;
}

// Médaille pixel pour les certifications (même principe que critterSVG)
function badgeSVG(hue){
  const body = `hsl(${hue}, 55%, 60%)`;
  const dark = `hsl(${hue}, 55%, 35%)`;
  const light = `hsl(${hue}, 70%, 88%)`;
  return `
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="4" y="12" width="3" height="3" fill="${dark}"/>
    <rect x="9" y="12" width="3" height="3" fill="${dark}"/>
    <rect x="5" y="1" width="6" height="11" fill="${dark}"/>
    <rect x="3" y="3" width="10" height="7" fill="${dark}"/>
    <rect x="4" y="2" width="8" height="9" fill="${dark}"/>
    <rect x="6" y="2" width="4" height="9" fill="${body}"/>
    <rect x="4" y="4" width="8" height="5" fill="${body}"/>
    <rect x="5" y="3" width="6" height="7" fill="${body}"/>
    <rect x="7" y="5" width="2" height="3" fill="${light}"/>
    <rect x="6" y="6" width="4" height="1" fill="${light}"/>
  </svg>`;
}

let activeProjectIndex = 0;
let activeTagFilter = 'all';

function renderProjects(){
  const lang = getLang();
  const isCerts = document.body.dataset.collection === 'certifications';
  const ITEMS = isCerts ? CERTIFICATIONS : PROJECTS;
  const K = isCerts ? 'certs' : 'projects';
  const iconSVG = isCerts ? badgeSVG : critterSVG;
  const boxGrid = document.getElementById('box-grid');
  const previewEl = document.getElementById('pc-preview');
  const detailsEl = document.getElementById('pc-details');
  const filtersEl = document.getElementById('pc-filters');
  if (!boxGrid || !previewEl || !detailsEl) return;

  boxGrid.innerHTML = '';
  previewEl.innerHTML = '';
  detailsEl.innerHTML = `<div class="empty">${t(K + '.empty.hint')}</div>`;

  // Build the unique tag list (in the current language) for the filter bar.
  const allTags = [];
  ITEMS.forEach(p => {
    const tags = (p[lang] || p.fr).tags;
    tags.forEach(tag => { if (!allTags.includes(tag)) allTags.push(tag); });
  });
  if (activeTagFilter !== 'all' && !allTags.includes(activeTagFilter)) activeTagFilter = 'all';

  if (filtersEl){
    filtersEl.innerHTML = '';
    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'pc-filter-btn' + (activeTagFilter === 'all' ? ' active' : '');
    allBtn.textContent = t('projects.filter.all');
    allBtn.addEventListener('click', () => { activeTagFilter = 'all'; renderProjects(); });
    filtersEl.appendChild(allBtn);

    allTags.forEach(tag => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pc-filter-btn' + (activeTagFilter === tag ? ' active' : '');
      btn.textContent = tag;
      btn.addEventListener('click', () => { activeTagFilter = tag; renderProjects(); });
      filtersEl.appendChild(btn);
    });
  }

  const visibleIndices = ITEMS
    .map((p, i) => i)
    .filter(i => activeTagFilter === 'all' || (ITEMS[i][lang] || ITEMS[i].fr).tags.includes(activeTagFilter));

  const countEl = document.getElementById('box-count');
  if (countEl) countEl.textContent = visibleIndices.length + ' ' + t(K + '.count.suffix');

  function showProject(p, hue, idx){
    const loc = p[lang] || p.fr;
    previewEl.innerHTML = `
      <div class="proj-number">#${String(idx + 1).padStart(2, '0')}</div>
      <div class="proj-icon">${iconSVG(hue)}</div>
      <div class="proj-name">${loc.name}</div>
    `;
    detailsEl.innerHTML = `
      <h4>${t(K + '.data.label')}</h4>
      <div class="proj-desc">${loc.desc}</div>
      <div class="proj-tags">${loc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <a class="proj-link" href="${p.link}"${(p.link.startsWith('http') || p.link.endsWith('.pdf')) ? ' target="_blank" rel="noopener"' : ''}>${p.link === '#' ? t(K + '.link.pending') : t(K + '.link.view')}</a>
    `;
  }

  const slotByIndex = {};
  ITEMS.forEach((p, i) => {
    if (!visibleIndices.includes(i)) return;
    const hue = Math.round((360 / ITEMS.length) * i);
    const loc = p[lang] || p.fr;
    const slot = document.createElement('div');
    slot.className = 'box-slot';
    slot.innerHTML = iconSVG(hue);
    slot.title = loc.name;
    slot.addEventListener('click', () => {
      activeProjectIndex = i;
      document.querySelectorAll('.box-slot').forEach(s => s.classList.remove('active'));
      slot.classList.add('active');
      showProject(p, hue, i);
    });
    boxGrid.appendChild(slot);
    slotByIndex[i] = slot;
  });

  if (visibleIndices.length){
    const idx = visibleIndices.includes(activeProjectIndex) ? activeProjectIndex : visibleIndices[0];
    activeProjectIndex = idx;
    const hue = Math.round((360 / ITEMS.length) * idx);
    slotByIndex[idx].classList.add('active');
    showProject(ITEMS[idx], hue, idx);
  }
}

function initMenuToggle(){
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('ingame-menu');
  const closeBtn = document.getElementById('menu-close-btn');
  if (!btn || !menu) return;

  function items(){
    return Array.from(menu.querySelectorAll('a, button'));
  }

  function open(){
    menu.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
    const list = items();
    if (list.length) list[0].focus();
  }
  function close(){
    menu.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.hasAttribute('hidden')) open();
    else close();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);

  document.addEventListener('click', () => close());
  menu.addEventListener('click', (e) => e.stopPropagation());

  // Navigation façon "D-pad" : flèches haut/bas pour se déplacer dans le menu,
  // Entrée/Espace pour valider (comportement natif des <a>/<button> focus),
  // Échap pour fermer.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
      close();
      return;
    }
    if (menu.hasAttribute('hidden')) return;

    const list = items();
    if (!list.length) return;
    const currentIndex = list.indexOf(document.activeElement);

    if (e.key === 'ArrowDown'){
      e.preventDefault();
      const next = list[(currentIndex + 1 + list.length) % list.length];
      next.focus();
    } else if (e.key === 'ArrowUp'){
      e.preventDefault();
      const prev = list[(currentIndex - 1 + list.length) % list.length];
      prev.focus();
    }
  });
}

// Highlight current nav link based on filename
(function markActiveNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.ingame-menu a').forEach(a => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
    applyTranslations();
    renderSkills();
    renderProjects();
    renderIcons();
    initLangSwitcher();
    initMenuToggle();
    restartHomeIntro();
  });
})();
