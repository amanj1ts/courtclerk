/* ==========================================================================
   SSSC Clerk 2026 — guide manifest
   --------------------------------------------------------------------------
   This one file controls the left navigation, the dashboard cards and the
   "full module map" on the Exam Blueprint page.

   TO PUBLISH A NEW GUIDE
     1. Save the guide HTML in this folder (guides/) using the `file` name
        already written below — or change that field to match your filename.
     2. Change `ready: false` to `ready: true`.
     3. Optionally add `desc` and `chips` to get a dashboard card.

   Everything with `ready: false` still appears in the menu, greyed out with a
   "Soon" tag, so the complete module map is always visible.

   Field reference
     id      route id, used in the URL (#/gs-01a) — keep it unique
     section nav group / blueprint column
     code    short badge shown in the menu (GS-01a, E-07, …)
     nav     short label in the menu
     title   full title (used by cards and the browser tab)
     file    path relative to index.html (required once ready)
     ready   true = guide exists and is clickable
     hot     true = "Start here" badge and first dashboard card
     desc    one-line description for the dashboard card
     chips   2–4 keywords for the dashboard card
     search  extra search keywords (optional)
   ========================================================================== */
window.SSSC_GUIDES = [

  /* ---------------- Polity & Judiciary ---------------- */
  {
    id: 'gs-01a', section: 'Polity & Judiciary', code: 'GS-01a',
    nav: 'Constitution & Citizenship',
    title: 'Constitution, Fundamental Rights, DPSP & Citizenship',
    file: 'guides/gs-01a-constitution.html', ready: true,
    tag: 'Polity',
    desc: 'Preamble, Articles 5–11, Fundamental Rights, DPSP, Fundamental Duties, writs, amendments and schedules — with article-number traps called out.',
    chips: ['FR & DPSP', 'Citizenship', 'Writs', 'Schedules'],
    search: 'polity constitution preamble fundamental rights dpsp duties citizenship writs articles schedules amendments'
  },
  {
    id: 'gs-01b', section: 'Polity & Judiciary', code: 'GS-01b',
    nav: 'Judiciary & Legal Aid',
    title: 'Judiciary, Legal Aid, Tribunals & Criminal Laws',
    file: 'guides/gs-01b-judiciary.html', ready: true, hot: true,
    tag: 'Polity',
    desc: 'Supreme Court and High Court jurisdictions, Article 32 vs 226, Lok Adalats and NALSA, tribunals, family courts, BNS/BNSS/BSA and Punjab & Haryana High Court facts.',
    chips: ['SC & HC', 'Article 32 vs 226', 'NALSA', 'BNS / BNSS / BSA'],
    search: 'polity judiciary courts supreme court high court legal aid nalsa lok adalat tribunals criminal laws bns bnss bsa'
  },
  {
    id: 'gs-01c', section: 'Polity & Judiciary', code: 'GS-01c',
    nav: 'Executive & Parliament',
    title: 'Executive, Parliament, Legislature & Bodies',
    file: 'guides/gs-01c-executive-parliament.html', ready: true,
    tag: 'Polity',
    desc: 'President and VP, PM and Council of Ministers, Governor, Parliament and state legislature, Money Bills, committees, constitutional bodies and amendments.',
    chips: ['President & Governor', 'Money Bill', 'Committees', 'Bodies'],
    search: 'polity executive president parliament legislature governor money bill committees bodies amendments'
  },

  /* ---------------- History ---------------- */
  {
    id: 'gs-02', section: 'History', code: 'GS-02',
    nav: 'Ancient India',
    title: 'Ancient India',
    file: 'guides/gs-02-ancient-india.html', ready: false,
    tag: 'History',
    search: 'history ancient india indus valley vedic mahajanapadas mauryas guptas sangam'
  },
  {
    id: 'gs-03', section: 'History', code: 'GS-03',
    nav: 'Medieval India',
    title: 'Medieval India',
    file: 'guides/gs-03-medieval-india.html', ready: false,
    tag: 'History',
    search: 'history medieval india delhi sultanate mughals vijayanagara bhakti sufi'
  },
  {
    id: 'gs-04', section: 'History', code: 'GS-04',
    nav: 'Modern India & National Movement',
    title: 'Modern India & the National Movement',
    file: 'guides/gs-04-modern-india.html', ready: true,
    tag: 'History',
    desc: 'European advent, British Acts, Revolt of 1857, socio-religious reformers, INC sessions, Gandhian movements, viceroys and the road to 1947.',
    chips: ['British Acts', '1857', 'INC', 'Gandhian era'],
    search: 'history modern india national movement freedom struggle british acts 1857 inc gandhi viceroys'
  },
  {
    id: 'gs-15', section: 'History', code: 'GS-15',
    nav: 'Punjab & Haryana GK',
    title: 'Punjab & Haryana GK',
    file: 'guides/gs-15-punjab-haryana.html', ready: false,
    tag: 'History',
    search: 'punjab haryana gk districts rivers festivals history economy'
  },

  /* ---------------- Geography ---------------- */
  {
    id: 'gs-05a', section: 'Geography', code: 'GS-05a',
    nav: 'Physiography & Drainage',
    title: 'India: Physiography & Drainage',
    file: 'guides/gs-05a-physiography-drainage.html', ready: true,
    tag: 'Geography',
    desc: 'Six physiographic divisions, Himalayan ranges, plain zones, plateau, desert, coasts, islands, river systems, lakes and dams.',
    chips: ['Himalayas', 'River systems', 'Coasts & islands', 'Lakes & dams'],
    search: 'geography physiography drainage himalayas rivers plains plateau desert coasts islands lakes dams'
  },
  {
    id: 'gs-05b', section: 'Geography', code: 'GS-05b',
    nav: 'Climate, Soils & Agriculture',
    title: 'India: Climate, Vegetation, Soils, Agriculture, Minerals & Census',
    file: 'guides/gs-05b-climate-census.html', ready: true,
    tag: 'Geography',
    desc: 'Monsoon mechanism and local winds, rainfall extremes, forest types, soil–crop mapping, Green Revolution, minerals and Census 2011 extremes.',
    chips: ['Monsoon', 'Soils & crops', 'Forests', 'Census 2011'],
    search: 'geography climate monsoon winds rainfall forests vegetation soils agriculture green revolution minerals census 2011'
  },

  /* ---------------- Economy ---------------- */
  {
    id: 'gs-06a', section: 'Economy', code: 'GS-06a',
    nav: 'Basics, Budget & Inflation',
    title: 'Economy: Basics, Budget & Inflation',
    file: 'guides/gs-06a-economy-basics.html', ready: false,
    tag: 'Economy',
    search: 'economy basics budget inflation gdp national income taxation fiscal policy'
  },
  {
    id: 'gs-06b', section: 'Economy', code: 'GS-06b',
    nav: 'Banking, Policy & Planning',
    title: 'Economy: Banking, Policy & Planning',
    file: 'guides/gs-06b-banking-policy.html', ready: false,
    tag: 'Economy',
    search: 'economy banking rbi monetary policy planning five year plans financial institutions'
  },

  /* ---------------- Science ---------------- */
  {
    id: 'gs-07a', section: 'Science', code: 'GS-07a',
    nav: 'Chemistry I',
    title: 'Chemistry I',
    file: 'guides/gs-07a-chemistry-1.html', ready: false,
    tag: 'Science',
    search: 'science chemistry matter atoms acids bases metals non metals'
  },
  {
    id: 'gs-07b', section: 'Science', code: 'GS-07b',
    nav: 'Chemistry II',
    title: 'Chemistry II',
    file: 'guides/gs-07b-chemistry-2.html', ready: false,
    tag: 'Science',
    search: 'science chemistry organic compounds fuels polymers everyday chemistry'
  },
  {
    id: 'gs-08a', section: 'Science', code: 'GS-08a',
    nav: 'Biology I',
    title: 'Biology I',
    file: 'guides/gs-08a-biology-1.html', ready: false,
    tag: 'Science',
    search: 'science biology cell human body nutrition digestion circulation'
  },
  {
    id: 'gs-08b', section: 'Science', code: 'GS-08b',
    nav: 'Biology II',
    title: 'Biology II',
    file: 'guides/gs-08b-biology-2.html', ready: false,
    tag: 'Science',
    search: 'science biology plants diseases genetics ecology reproduction'
  },
  {
    id: 'gs-09', section: 'Science', code: 'GS-09',
    nav: 'Physics',
    title: 'Physics',
    file: 'guides/gs-09-physics.html', ready: false,
    tag: 'Science',
    search: 'science physics motion force energy light sound electricity magnetism'
  },

  /* ---------------- Static GK ---------------- */
  {
    id: 'gs-10', section: 'Static GK', code: 'GS-10',
    nav: 'UN & International Organisations',
    title: 'UN & International Organisations',
    file: 'guides/gs-10-un-organisations.html', ready: false,
    tag: 'Static GK',
    search: 'static gk un united nations international organisations world bank imf who'
  },
  {
    id: 'gs-11', section: 'Static GK', code: 'GS-11',
    nav: 'Art, Culture & Festivals',
    title: 'Art, Culture & Festivals',
    file: 'guides/gs-11-art-culture.html', ready: false,
    tag: 'Static GK',
    search: 'static gk art culture dance music festivals classical dances paintings'
  },
  {
    id: 'gs-12', section: 'Static GK', code: 'GS-12',
    nav: 'Sports',
    title: 'Sports',
    file: 'guides/gs-12-sports.html', ready: false,
    tag: 'Static GK',
    search: 'static gk sports cups tournaments olympics asian games venues'
  },
  {
    id: 'gs-13', section: 'Static GK', code: 'GS-13',
    nav: 'Awards, Books & Days',
    title: 'Awards, Books & Important Days',
    file: 'guides/gs-13-awards-books-days.html', ready: false,
    tag: 'Static GK',
    search: 'static gk awards books important days themes prizes'
  },

  /* ---------------- Current Affairs ---------------- */
  {
    id: 'gs-14a', section: 'Current Affairs', code: 'GS-14a',
    nav: "Appointments & Who's Who",
    title: "Current Affairs: Appointments & Who's Who",
    file: 'guides/gs-14a-appointments.html', ready: false,
    tag: 'Current Affairs',
    search: 'current affairs appointments who is who persons posts'
  },
  {
    id: 'gs-14b', section: 'Current Affairs', code: 'GS-14b',
    nav: 'Schemes, Reports & Summits',
    title: 'Current Affairs: Schemes, Reports & Summits',
    file: 'guides/gs-14b-schemes-reports.html', ready: false,
    tag: 'Current Affairs',
    search: 'current affairs schemes reports indices summits government programmes'
  },
  {
    id: 'gs-14c', section: 'Current Affairs', code: 'GS-14c',
    nav: 'Sci-tech, Defence & Space',
    title: 'Current Affairs: Sci-tech, Defence & Space',
    file: 'guides/gs-14c-sci-tech-defence.html', ready: false,
    tag: 'Current Affairs',
    search: 'current affairs science technology defence space isro missiles'
  },
  {
    id: 'gs-14d', section: 'Current Affairs', code: 'GS-14d',
    nav: 'Mixed Quick Drill',
    title: 'Current Affairs: Mixed Quick Drill',
    file: 'guides/gs-14d-mixed-drill.html', ready: false,
    tag: 'Current Affairs',
    search: 'current affairs mixed quick drill revision mcq'
  },

  /* ---------------- English objective ---------------- */
  {
    id: 'e-01', section: 'English Objective', code: 'E-01',
    nav: 'Narration (Direct & Indirect)',
    title: 'Narration: Direct & Indirect Speech',
    file: 'guides/e-01-narration.html', ready: false,
    tag: 'English',
    search: 'english grammar narration direct indirect speech reporting'
  },
  {
    id: 'e-02', section: 'English Objective', code: 'E-02',
    nav: 'Active & Passive Voice',
    title: 'Active & Passive Voice',
    file: 'guides/e-02-voice.html', ready: false,
    tag: 'English',
    search: 'english grammar active passive voice'
  },
  {
    id: 'e-03', section: 'English Objective', code: 'E-03',
    nav: 'Para-jumbles',
    title: 'Para-jumbles & Sentence Arrangement',
    file: 'guides/e-03-para-jumbles.html', ready: false,
    tag: 'English',
    search: 'english grammar para jumbles sentence arrangement'
  },
  {
    id: 'e-04', section: 'English Objective', code: 'E-04',
    nav: 'Articles',
    title: 'Articles: A, An, The',
    file: 'guides/e-04-articles.html', ready: false,
    tag: 'English',
    search: 'english grammar articles a an the'
  },
  {
    id: 'e-05', section: 'English Objective', code: 'E-05',
    nav: 'One-word Substitution',
    title: 'One-word & Phrase Substitution',
    file: 'guides/e-05-one-word.html', ready: false,
    tag: 'English',
    search: 'english vocabulary one word substitution phrases'
  },
  {
    id: 'e-06', section: 'English Objective', code: 'E-06',
    nav: 'Idioms & Phrases',
    title: 'Idioms & Phrases',
    file: 'guides/e-06-idioms.html', ready: false,
    tag: 'English',
    search: 'english vocabulary idioms phrases proverbs'
  },
  {
    id: 'e-07', section: 'English Objective', code: 'E-07',
    nav: 'Synonyms & Antonyms',
    title: 'Synonyms & Antonyms in Context',
    file: 'guides/e-07-synonyms-antonyms.html', ready: false,
    tag: 'English',
    search: 'english vocabulary synonyms antonyms'
  },
  {
    id: 'e-08', section: 'English Objective', code: 'E-08',
    nav: 'Spelling',
    title: 'Spelling & Confusable Words',
    file: 'guides/e-08-spelling.html', ready: false,
    tag: 'English',
    search: 'english spelling confusable words'
  },
  {
    id: 'e-09a', section: 'English Objective', code: 'E-09a',
    nav: 'Error Spotting',
    title: 'Error Spotting & Sentence Rectification',
    file: 'guides/e-09a-error-spotting.html', ready: false,
    tag: 'English',
    search: 'english grammar error spotting sentence correction rectification'
  },
  {
    id: 'e-09b', section: 'English Objective', code: 'E-09b',
    nav: 'Fillers',
    title: 'Fillers: Prepositions, Conjunctions & Modals',
    file: 'guides/e-09b-fillers.html', ready: false,
    tag: 'English',
    search: 'english grammar fillers prepositions conjunctions modals'
  },

  /* ---------------- English subjective ---------------- */
  {
    id: 'e-10', section: 'English Subjective', code: 'E-10',
    nav: 'Essay (150 words)',
    title: 'Essay Writing (150 words)',
    file: 'guides/e-10-essay.html', ready: false,
    tag: 'English',
    search: 'english subjective essay writing 150 words'
  },
  {
    id: 'e-11', section: 'English Subjective', code: 'E-11',
    nav: 'Letter Writing',
    title: 'Letter Writing',
    file: 'guides/e-11-letter.html', ready: false,
    tag: 'English',
    search: 'english subjective letter writing formal informal'
  },
  {
    id: 'e-12', section: 'English Subjective', code: 'E-12',
    nav: 'Precis',
    title: 'Precis Writing',
    file: 'guides/e-12-precis.html', ready: false,
    tag: 'English',
    search: 'english subjective precis summary writing'
  },
  {
    id: 'e-13', section: 'English Subjective', code: 'E-13',
    nav: 'Punjabi → English',
    title: 'Punjabi to English Translation',
    file: 'guides/e-13-punjabi-english.html', ready: false,
    tag: 'English',
    search: 'english subjective punjabi translation'
  }

];
