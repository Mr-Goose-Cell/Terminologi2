const questions = [
  // =========================
  // EASY LEVEL - TERMINOLOGI
  // =========================
  {
    question: "Apa arti istilah 'anterior' dalam anatomi?",
    options: [
      "Bagian belakang",
      "Bagian depan",
      "Bagian atas",
      "Bagian bawah"
    ],
    answer: 1,
    explanation: "Anterior berarti bagian depan tubuh dalam posisi anatomi standar.",
    level: "easy"
  },

  {
    question: "Apa arti 'posterior'?",
    options: [
      "Depan",
      "Belakang",
      "Samping",
      "Tengah"
    ],
    answer: 1,
    explanation: "Posterior berarti bagian belakang tubuh.",
    level: "easy"
  },

  {
    question: "Istilah 'medial' mengacu pada arah menuju...",
    options: [
      "Jauh dari tubuh",
      "Garis tengah tubuh",
      "Bagian luar",
      "Bagian bawah"
    ],
    answer: 1,
    explanation: "Medial berarti menuju garis tengah tubuh.",
    level: "easy"
  },

  {
    question: "Apa arti 'lateral'?",
    options: [
      "Menuju tengah tubuh",
      "Menjauhi tengah tubuh",
      "Ke atas",
      "Ke bawah"
    ],
    answer: 1,
    explanation: "Lateral berarti menjauhi garis tengah tubuh.",
    level: "easy"
  },

  // =========================
  // MEDIUM - ANATOMI DASAR
  // =========================
  {
    question: "Apa fungsi utama tulang femur?",
    options: [
      "Membentuk tengkorak",
      "Tulang lengan",
      "Tulang paha penopang tubuh",
      "Tulang rusuk"
    ],
    answer: 2,
    explanation: "Femur adalah tulang paha dan merupakan tulang terpanjang serta penopang utama tubuh.",
    level: "medium"
  },

  {
    question: "Ligamen berfungsi untuk...",
    options: [
      "Menghubungkan otot ke tulang",
      "Menghubungkan tulang ke tulang",
      "Menghasilkan darah",
      "Menghantarkan impuls saraf"
    ],
    answer: 1,
    explanation: "Ligamen menghubungkan tulang dengan tulang untuk stabilitas sendi.",
    level: "medium"
  },

  {
    question: "Tendon adalah jaringan yang menghubungkan...",
    options: [
      "Tulang ke tulang",
      "Otot ke tulang",
      "Saraf ke otot",
      "Otot ke kulit"
    ],
    answer: 1,
    explanation: "Tendon menghubungkan otot ke tulang untuk menghasilkan gerakan.",
    level: "medium"
  },

  // =========================
  // HARD - MUSCULOSKELETAL
  // =========================
  {
    question: "Apa nama gerakan menjauhi garis tengah tubuh?",
    options: [
      "Adduksi",
      "Abduksi",
      "Fleksi",
      "Ekstensi"
    ],
    answer: 1,
    explanation: "Abduksi adalah gerakan menjauhi garis tengah tubuh.",
    level: "hard"
  },

  {
    question: "Gerakan menekuk sendi disebut...",
    options: [
      "Ekstensi",
      "Fleksi",
      "Rotasi",
      "Pronasi"
    ],
    answer: 1,
    explanation: "Fleksi adalah gerakan menekuk sendi.",
    level: "hard"
  },

  {
    question: "Apa fungsi utama sistem muskuloskeletal?",
    options: [
      "Transportasi oksigen",
      "Produksi hormon",
      "Gerakan dan penopang tubuh",
      "Pencernaan makanan"
    ],
    answer: 2,
    explanation: "Sistem muskuloskeletal berfungsi untuk gerakan, stabilitas, dan penopang tubuh.",
    level: "hard"
  },

  // =========================
  // BONUS LEVEL - TRICK FK
  // =========================
  {
    question: "Istilah 'proximal' berarti...",
    options: [
      "Jauh dari titik asal",
      "Dekat titik asal",
      "Bagian luar",
      "Bagian bawah"
    ],
    answer: 1,
    explanation: "Proximal berarti lebih dekat ke titik asal atau pangkal.",
    level: "medium"
  },

  {
    question: "Istilah 'distal' berarti...",
    options: [
      "Dekat pangkal",
      "Jauh dari pangkal",
      "Bagian dalam",
      "Bagian tengah"
    ],
    answer: 1,
    explanation: "Distal berarti lebih jauh dari titik asal atau pangkal.",
    level: "medium"
  },
  {
  question: "Istilah 'inferior' dalam anatomi berarti...",
  options: [
    "Bagian atas",
    "Bagian bawah",
    "Bagian depan",
    "Bagian belakang"
  ],
  answer: 1,
  explanation: "Inferior berarti posisi lebih rendah atau bagian bawah tubuh.",
  level: "easy"
},

{
  question: "Apa arti 'superior' dalam anatomi?",
  options: [
    "Bagian bawah",
    "Bagian atas",
    "Bagian dalam",
    "Bagian luar"
  ],
  answer: 1,
  explanation: "Superior berarti lebih tinggi atau bagian atas tubuh.",
  level: "easy"
},

{
  question: "Gerakan 'adduksi' adalah...",
  options: [
    "Menjauhi garis tengah tubuh",
    "Mendekati garis tengah tubuh",
    "Memutar sendi",
    "Meluruskan sendi"
  ],
  answer: 1,
  explanation: "Adduksi adalah gerakan menuju garis tengah tubuh.",
  level: "medium"
},

{
  question: "Apa fungsi utama tulang humerus?",
  options: [
    "Tulang paha",
    "Tulang lengan atas",
    "Tulang betis",
    "Tulang tengkorak"
  ],
  answer: 1,
  explanation: "Humerus adalah tulang lengan atas.",
  level: "medium"
},

{
  question: "Sendi yang memungkinkan gerakan bebas ke segala arah disebut...",
  options: [
    "Sendi engsel",
    "Sendi peluru",
    "Sendi geser",
    "Sendi putar"
  ],
  answer: 1,
  explanation: "Sendi peluru memungkinkan gerakan multi arah seperti bahu.",
  level: "medium"
},

{
  question: "Otot yang bekerja tanpa disadari (involunter) adalah...",
  options: [
    "Otot rangka",
    "Otot polos",
    "Otot lurik",
    "Otot skeletal"
  ],
  answer: 1,
  explanation: "Otot polos bekerja tanpa kesadaran, seperti di usus.",
  level: "hard"
},

{
  question: "Apa istilah untuk gerakan meluruskan sendi?",
  options: [
    "Fleksi",
    "Ekstensi",
    "Rotasi",
    "Abduksi"
  ],
  answer: 1,
  explanation: "Ekstensi adalah gerakan meluruskan sendi.",
  level: "easy"
},

{
  question: "Apa arti 'proximal' dalam anatomi?",
  options: [
    "Jauh dari titik asal",
    "Dekat dengan titik asal",
    "Bagian luar tubuh",
    "Bagian dalam tubuh"
  ],
  answer: 1,
  explanation: "Proximal berarti lebih dekat ke pangkal atau titik asal.",
  level: "medium"
},

{
  question: "Tulang yang membentuk rangka utama lengan bawah adalah...",
  options: [
    "Femur dan tibia",
    "Radius dan ulna",
    "Humerus dan scapula",
    "Clavicula dan sternum"
  ],
  answer: 1,
  explanation: "Radius dan ulna membentuk lengan bawah.",
  level: "medium"
},

{
  question: "Apa fungsi utama sistem muskuloskeletal?",
  options: [
    "Transportasi oksigen",
    "Pencernaan makanan",
    "Gerakan dan penopang tubuh",
    "Produksi hormon"
  ],
  answer: 2,
  explanation: "Sistem muskuloskeletal berfungsi untuk gerakan dan menopang tubuh.",
  level: "hard"
    },
    {
  question: "Istilah 'superficial' berarti...",
  options: ["Dalam", "Dekat permukaan", "Atas", "Bawah"],
  answer: 1,
  explanation: "Superficial berarti dekat permukaan tubuh.",
  level: "easy"
},
{
  question: "Istilah 'deep' berarti...",
  options: ["Permukaan", "Dalam", "Atas", "Samping"],
  answer: 1,
  explanation: "Deep berarti bagian dalam tubuh.",
  level: "easy"
},
{
  question: "Istilah 'cranial' berkaitan dengan...",
  options: ["Kaki", "Kepala", "Tangan", "Punggung"],
  answer: 1,
  explanation: "Cranial berarti menuju kepala.",
  level: "easy"
},
{
  question: "Istilah 'caudal' berarti...",
  options: ["Ke kepala", "Ke kaki", "Ke tangan", "Ke dada"],
  answer: 1,
  explanation: "Caudal berarti menuju bagian bawah/kaki.",
  level: "easy"
},
{
  question: "Fungsi utama sistem rangka adalah...",
  options: ["Transportasi", "Penopang tubuh", "Pencernaan", "Respirasi"],
  answer: 1,
  explanation: "Sistem rangka menopang tubuh.",
  level: "easy"
},
{
  question: "Jumlah tulang manusia dewasa adalah sekitar...",
  options: ["106", "206", "306", "406"],
  answer: 1,
  explanation: "Tulang manusia dewasa sekitar 206.",
  level: "easy"
},
{
  question: "Tulang tengkorak disebut...",
  options: ["Skapula", "Kranium", "Femur", "Tibia"],
  answer: 1,
  explanation: "Kranium adalah tulang tengkorak.",
  level: "easy"
},
{
  question: "Tulang paha disebut...",
  options: ["Humerus", "Femur", "Radius", "Ulna"],
  answer: 1,
  explanation: "Femur adalah tulang paha.",
  level: "easy"
},
{
  question: "Sendi engsel terdapat pada...",
  options: ["Bahu", "Lutut", "Pinggul", "Leher"],
  answer: 1,
  explanation: "Sendi engsel terdapat di lutut dan siku.",
  level: "medium"
},
{
  question: "Sendi peluru memungkinkan gerakan...",
  options: ["Satu arah", "Dua arah", "Segala arah", "Tidak bergerak"],
  answer: 2,
  explanation: "Sendi peluru bergerak ke segala arah.",
  level: "medium"
},
{
  question: "Otot polos terdapat pada...",
  options: ["Lengan", "Jantung", "Organ dalam", "Kaki"],
  answer: 2,
  explanation: "Otot polos terdapat di organ dalam.",
  level: "medium"
},
{
  question: "Otot jantung bekerja secara...",
  options: ["Sadar", "Tidak sadar", "Setengah sadar", "Volunter"],
  answer: 1,
  explanation: "Otot jantung bekerja tidak sadar.",
  level: "medium"
},
{
  question: "Gerakan pronasi adalah...",
  options: ["Telapak ke atas", "Telapak ke bawah", "Menekuk", "Meluruskan"],
  answer: 1,
  explanation: "Pronasi = telapak tangan ke bawah.",
  level: "medium"
},
{
  question: "Gerakan supinasi adalah...",
  options: ["Telapak ke atas", "Telapak ke bawah", "Menekuk", "Memutar"],
  answer: 0,
  explanation: "Supinasi = telapak tangan ke atas.",
  level: "medium"
},
{
  question: "Ligamen menghubungkan...",
  options: ["Otot ke tulang", "Tulang ke tulang", "Saraf ke otot", "Darah ke tulang"],
  answer: 1,
  explanation: "Ligamen menghubungkan tulang dengan tulang.",
  level: "medium"
},
{
  question: "Tendon menghubungkan...",
  options: ["Tulang ke tulang", "Otot ke tulang", "Saraf ke otot", "Otot ke kulit"],
  answer: 1,
  explanation: "Tendon menghubungkan otot ke tulang.",
  level: "medium"
},
{
  question: "Abduksi adalah gerakan...",
  options: ["Mendekat", "Menjauh", "Memutar", "Menekuk"],
  answer: 1,
  explanation: "Abduksi = menjauhi garis tengah.",
  level: "medium"
},
{
  question: "Adduksi adalah gerakan...",
  options: ["Menjauh", "Mendekat", "Memutar", "Meluruskan"],
  answer: 1,
  explanation: "Adduksi = mendekati garis tengah.",
  level: "medium"
},
{
  question: "Radius dan ulna berada di...",
  options: ["Kaki", "Lengan bawah", "Paha", "Tengkorak"],
  answer: 1,
  explanation: "Radius dan ulna adalah tulang lengan bawah.",
  level: "medium"
},
{
  question: "Femur berada di...",
  options: ["Lengan", "Paha", "Betis", "Tangan"],
  answer: 1,
  explanation: "Femur adalah tulang paha.",
  level: "easy"
},
  {
  question: "Istilah 'flexi' dalam anatomi berarti...",
  options: ["Meluruskan", "Menekuk", "Memutar", "Menjauh"],
  answer: 1,
  explanation: "Fleksi adalah gerakan menekuk sendi.",
  level: "easy"
},
{
  question: "Istilah 'ekstensi' berarti...",
  options: ["Menekuk", "Meluruskan", "Memutar", "Menjauh"],
  answer: 1,
  explanation: "Ekstensi adalah gerakan meluruskan sendi.",
  level: "easy"
},
{
  question: "Tulang rusuk berfungsi untuk...",
  options: [
    "Menggerakkan tangan",
    "Melindungi organ dada",
    "Menghasilkan darah",
    "Mengatur hormon"
  ],
  answer: 1,
  explanation: "Tulang rusuk melindungi jantung dan paru-paru.",
  level: "easy"
},
{
  question: "Skapula adalah tulang...",
  options: ["Paha", "Belikat", "Lengan bawah", "Betis"],
  answer: 1,
  explanation: "Skapula adalah tulang belikat.",
  level: "easy"
},
{
  question: "Klavikula disebut juga...",
  options: ["Tulang selangka", "Tulang paha", "Tulang betis", "Tulang tengkorak"],
  answer: 0,
  explanation: "Klavikula adalah tulang selangka.",
  level: "easy"
},
{
  question: "Otot rangka bekerja secara...",
  options: ["Tidak sadar", "Sadar", "Otomatis", "Refleks"],
  answer: 1,
  explanation: "Otot rangka bekerja secara sadar.",
  level: "easy"
},
{
  question: "Otot polos terdapat pada...",
  options: ["Lengan", "Organ dalam", "Tulang", "Kulit"],
  answer: 1,
  explanation: "Otot polos terdapat di organ dalam seperti usus.",
  level: "medium"
},
{
  question: "Otot jantung memiliki sifat...",
  options: ["Sadar", "Tidak sadar", "Bergantung kemauan", "Skeletal"],
  answer: 1,
  explanation: "Otot jantung bekerja tidak sadar.",
  level: "medium"
},
{
  question: "Sendi yang tidak dapat digerakkan disebut...",
  options: ["Diartrosis", "Amfiartrosis", "Sinartrosis", "Engsel"],
  answer: 2,
  explanation: "Sinartrosis adalah sendi tidak bergerak.",
  level: "medium"
},
{
  question: "Sendi engsel memungkinkan gerakan...",
  options: ["Segala arah", "Satu arah", "Tidak bergerak", "Memutar bebas"],
  answer: 1,
  explanation: "Sendi engsel bergerak satu arah seperti siku.",
  level: "medium"
},
{
  question: "Gerakan rotasi adalah...",
  options: ["Menekuk", "Meluruskan", "Memutar", "Menjauh"],
  answer: 2,
  explanation: "Rotasi adalah gerakan memutar.",
  level: "medium"
},
{
  question: "Plantar berarti...",
  options: ["Telapak tangan", "Telapak kaki", "Punggung tangan", "Lengan"],
  answer: 1,
  explanation: "Plantar berkaitan dengan telapak kaki.",
  level: "medium"
},
{
  question: "Palmar berarti...",
  options: ["Telapak tangan", "Telapak kaki", "Punggung kaki", "Betis"],
  answer: 0,
  explanation: "Palmar berarti telapak tangan.",
  level: "medium"
},
{
  question: "Humerus adalah tulang...",
  options: ["Paha", "Lengan atas", "Betis", "Tengkorak"],
  answer: 1,
  explanation: "Humerus adalah tulang lengan atas.",
  level: "easy"
},
{
  question: "Tibia adalah tulang...",
  options: ["Lengan", "Betis", "Paha", "Tangan"],
  answer: 1,
  explanation: "Tibia adalah tulang kering/betis bagian depan.",
  level: "easy"
},
{
  question: "Fibula adalah tulang...",
  options: ["Betis samping", "Paha", "Lengan", "Tengkorak"],
  answer: 0,
  explanation: "Fibula adalah tulang betis bagian samping.",
  level: "easy"
},
{
  question: "Fungsi utama sistem muskuloskeletal adalah...",
  options: [
    "Pencernaan",
    "Gerakan dan penopang tubuh",
    "Respirasi",
    "Ekskresi"
  ],
  answer: 1,
  explanation: "Sistem muskuloskeletal untuk gerakan dan penopang tubuh.",
  level: "hard"
},
{
  question: "Ligamen berfungsi menghubungkan...",
  options: ["Otot ke tulang", "Tulang ke tulang", "Saraf ke otot", "Darah ke otot"],
  answer: 1,
  explanation: "Ligamen menghubungkan tulang dengan tulang.",
  level: "medium"
},
{
  question: "Tendon berfungsi menghubungkan...",
  options: ["Otot ke tulang", "Tulang ke tulang", "Saraf ke otot", "Kulit ke otot"],
  answer: 0,
  explanation: "Tendon menghubungkan otot ke tulang.",
  level: "medium"
},
{
  question: "Gerakan abduksi adalah...",
  options: ["Mendekati garis tengah", "Menjauhi garis tengah", "Memutar", "Menekuk"],
  answer: 1,
  explanation: "Abduksi = menjauhi garis tengah tubuh.",
  level: "medium"
}
];
