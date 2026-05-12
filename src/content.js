// ─────────────────────────────────────────────
//  CONTENT — edit semua teks di sini
// ─────────────────────────────────────────────

export const sceneJourney = {
  lines: [
    { text: "hai?", delay: 0 },
    { text: "luangin waktu buat nonton ini ya hehe", delay: 1800 },
    { text: "kita naik mobil dulu", delay: 2200 },
  ],
  enterBtn: "[ naik ]",
  angleBtn: "[ ganti angle ]",
  stopBtn: "[ berhenti ]",
};

export const scene0 = {
  loading: "pegangan karena bakal alay...",
  soon: "sebentar ya.",
  embarrassing: "aku lagi nyiapin sesuatu yang sebenarnya agak personal.",
  tagline: "[ a small home tour. for you. ]",
};

export const scene1 = {
  lines: [
    { text: "sampaii..", delay: 0, size: 30, className: "serif" },
  ],
  enterBtn: "[ masuk ]",
};


export const scene3 = {
  tvLines: [
    "yoo haiii..",
    "ini tv ceritanya wkwk",
    "[jelek beud tvnya]",
  ],
  polaroids: [
    {
      id: "p1",
      x: "18%",
      y: "20%",
      rot: -8,
      label: "01",
      img: "/assets/polaroid/1.png",
      text: "cie makan bareng",
    },
    {
      id: "p2",
      x: "82%",
      y: "26%",
      rot: 6,
      label: "02",
      img: "/assets/polaroid/2.png",
      text: "yah ujan ujanan",
    },
    {
      id: "p3",
      x: "12%",
      y: "62%",
      rot: 4,
      label: "03",
      img: "/assets/polaroid/3.png",
      text: "konyoll wlee",
    },
    {
      id: "p4",
      x: "85%",
      y: "66%",
      rot: -5,
      label: "04",
      img: "/assets/polaroid/4.png",
      text: "couple dikit",
    },
  ],
  continueBtn: "[ dapur → ]",
  polaroidHint: "klik polaroid untuk lihat WAJIB URUT DARI 1-4.",
};

export const scene4 = {
  notes: [
    {
      id: "n1",
      text: "13 mei",
      color: "#f1cf5a",
      rot: -4,
      x: "18%",
      y: "26%",
      w: 150,
    },

    {
      id: "n2",
      text: "13 mei",
      color: "#f49a7a",
      rot: 5,
      x: "32%",
      y: "44%",
      w: 130,
    },

    {
      id: "n3",
      text: "13 mei",
      color: "#9adcc4",
      rot: -3,
      x: "44%",
      y: "28%",
      w: 110,
    },

    {
      id: "n4",
      text: "13 mei",
      color: "#c0b0e8",
      rot: 4,
      x: "56%",
      y: "46%",
      w: 130,
    },

    {
      id: "n5",
      text: "13 mei",
      color: "#f1cf5a",
      rot: -2,
      x: "70%",
      y: "30%",
      w: 140,
    },

    {
      id: "n6",
      text: "13 mei",
      color: "#f49a7a",
      rot: 6,
      x: "82%",
      y: "44%",
      w: 130,
    },
  ],

  specialNote: "HARI APA YAAAA???",

  openHint: (count) => `buka semua note (${count}/6)`,

  continueBtn: "[ lorong → ]",
};
export const scene5 = {
  lines: [
    { text: "satu langkah.",        size: 22, btn: "[ langkah lagi → ]" },
    { text: "dua langkah.",         size: 26, btn: "[ terus → ]" },
    { text: "tiga.",                size: 30, btn: "[ hampir → ]" },
    { text: "ada pintu di ujung.", size: 28, dim: true, btn: "[ mendekat → ]" },
    { text: "yuk masuk.",           size: 34, warm: true, btn: "[ lihat → ]" },
  ],
};

export const scene6 = {
  doorSign: ["ruang rahasia", "private room"],
  openBtn: "[ buka ]",

  recorder: [
    "kalo kata bang sal priadi...",
  ],
  recLabel: ["tap", "● REC"],
  continueBtn: "[ rooftop ↑ ]",
};

export const scene7 = {
  lines: [
    { t: "selamat ulang tahun ya sayang.", size: 38, warm: true },
    { t: "semoga setiap hari yang kamu lewati", size: 22 },
    { t: "bisa jadi lebih baik.", size: 26 },
    { t: "—", size: 14, faint: true },
    {
      t: "aku bedoanya diem diem,\npanjang nanti ini kalo ditulis semua.",
      size: 28,
      warm: true,
    },
  ],
  pulangBtn: "[ pulang? ]",
  closingLine: "maaf ya lebay,\n.biar kamu inget aja sih haha",
  replayBtn: "↻ ulang dari awal",
};

export const scene10 = {
  lines: [
    { t: "kamu udah sampe.", size: 26 },
    { t: "ke puncak.", size: 30, warm: true },
    { t: "dan ...", size: 24, faint: true },
    { t: "selamat", size: 28 },
    { t: "selamat.", size: 34, warm: true },
  ],
  bigLine: "SELAMAAAT ULAAAH TAHUUUNNNN!!! WORLDDD!!!",
  pulangBtn: "[ pulang ↓ ]",
  replayBtn: "↻ ulang",
};

export const nav = {
  backBtn: "← balik",
  ambienceOn: "suasana on",
  ambienceOff: "suasana off",
};

export const sceneLabels = [
  "preload",
  "jalan malam",
  "teras",
  "ruang tamu",
  "dapur",
  "lorong",
  "ruang rahasia",
  "rooftop",
];
