// ─────────────────────────────────────────────
//  CONTENT — edit semua teks di sini
// ─────────────────────────────────────────────

export const scene0 = {
  loading: "loading dikit hehe...",
  soon: "sebentar ya.",
  embarrassing: "aku lagi nyiapin sesuatu yang sebenarnya agak personal.",
  tagline: "[ a small home tour. for you. ]",
};

export const scene1 = {
  lines: [
    {
      text: "ceritanya ini rumah gw haha..engga semua orang",
      delay: 0,
      size: 26,
    },
    { text: "boleh masuk ke sini.", delay: 1500, size: 26 },
    { text: "tapi..", delay: 2400, size: 22, color: "var(--ink-dim)" },
    { text: "monggo pinarak..", delay: 1800, size: 30, className: "serif" },
  ],
  enterBtn: "[ masuk ]",
};

export const scene2 = {
  noteText: '"lepas gengsi sebelum masuk."',
  doorHint: "klik pintu untuk masuk",
};

export const scene3 = {
  tvLines: [
    "awalnya…",
    "aku pikir kamu cuma lewat.",
    "ternyata ampe sini juga ya.",
  ],
  polaroids: [
    {
      id: "p1",
      x: "18%",
      y: "20%",
      rot: -8,
      label: "01",
      text: "ini hari dimana aku mulai nunggu notif kamu.",
    },
    {
      id: "p2",
      x: "82%",
      y: "26%",
      rot: 6,
      label: "02",
      text: "masih pura-pura biasa aja waktu itu.",
    },
    {
      id: "p3",
      x: "12%",
      y: "62%",
      rot: 4,
      label: "03",
      text: '08:14 — "udah makan?"\n08:14 — "udah dong."\n08:15 — aku tahu itu bohong.',
    },
    {
      id: "p4",
      x: "85%",
      y: "66%",
      rot: -5,
      label: "04",
      text: "hari biasa. ga ada apa-apa.\ntapi aku masih inget.",
    },
  ],
  continueBtn: "[ dapur → ]",
  polaroidHint: "klik polaroid untuk lihat.",
};

export const scene4 = {
  notes: [
    {
      id: "n1",
      text: "kamu bilang terserah.\npadahal jawabannya\nudah ada di kepala.",
      color: "#f1cf5a",
      rot: -4,
      x: "18%",
      y: "26%",
      w: 150,
    },

    {
      id: "n2",
      text: "mood kamu kadang\nberubah pelan-pelan.\ndan aku selalu kena efeknya.",
      color: "#f49a7a",
      rot: 5,
      x: "32%",
      y: "44%",
      w: 130,
    },

    {
      id: "n3",
      text: 'kadang jawab chat\ncuma "iya".\nterus aku disuruh nebak\nlagi kenapa.',
      color: "#9adcc4",
      rot: -3,
      x: "44%",
      y: "28%",
      w: 110,
    },

    {
      id: "n4",
      text: "kalau kamu tiba-tiba\njadi manis,\naku langsung curiga.",
      color: "#c0b0e8",
      rot: 4,
      x: "56%",
      y: "46%",
      w: 130,
    },

    {
      id: "n5",
      text: 'kalau tiba-tiba diem,\naku langsung mikir:\n"salahku bagian mana ya?"',
      color: "#f1cf5a",
      rot: -2,
      x: "70%",
      y: "30%",
      w: 140,
    },

    {
      id: "n6",
      text: 'suka bilang\n"gapapa."\npadahal nadanya\nudah beda.',
      color: "#f49a7a",
      rot: 6,
      x: "82%",
      y: "44%",
      w: 130,
    },
  ],

  specialNote: "tapi anehnya…\naku tetap betah\nsama semua itu.",

  openHint: (count) => `buka semua note (${count}/6)`,

  continueBtn: "[ lanjut → ]",
};
export const scene5 = {
  lines: [
    { y: 0.08, text: "engga semua hari terasa ringan." },
    { y: 0.24, text: "kadang kita sama-sama diem." },
    { y: 0.42, text: "kadang sama-sama keras kepala." },
    { y: 0.6, text: "kadang sama-sama capek.", dim: true },
    {
      y: 0.78,
      text: "tapi sejauh ini…\nmasih oke gasih.",
      warm: true,
    },
  ],
  footstep: ["tap. tap.", "tap."],
  scrollHint: "↓ scroll",
  continueBtn: "[ jalan terus → ]",
};

export const scene6 = {
  doorSign: ["jangan", "dibuka."],
  openBtn: "[ buka ]",
  openHint: "(anehnya, yang dilarang justru bikin penasaran.)",
  recorder: [
    "sebenernya…",
    "aku juga suka bgt disium sium.",
    "cuma susah bilang aja.",
    "—",
    "(pritt pritt)",
  ],
  recLabel: ["tap", "● REC"],
  continueBtn: "[ tutup pintunya pelan-pelan → ]",
};

export const scene7 = {
  bedLines: [
    "aku susah romantis jujur.",
    "kadang malah nyebelin.",
    "kadang bikin kamu kesel.",
    "tapi soal perasaan…",
    "info lawan!!.",
  ],
  drawerLabel: "— laci kecil, isinya hal yang jarang aku omongin —",
  drawerItems: [
    "aku hafal cara kamu marah.",
    "aku hafal cara kamu pura-pura gapapa.",
    "aku hafal hal kecil yang bikin kamu ga nyaman...(mungkin)",
  ],
  drawerHint: "ada laci kecil di samping kasur.",
  continueBtn: "[ ke cermin → ]",
};

export const scene8 = {
  lines: [
    "kadang aku mikir…",
    "kenapa aku mikir?",
    "maaf kamu jadi ikut mikir kan sekarang.",
    "—",
    "skip skip skip.",
  ],
  clickHint: "(klik)",
  silentNote: "(sunyi beberapa detik.)",
  continueBtn: "[ naik ke atas → ]",
};

export const scene9 = {
  line1: "tapi tapi tapi... sebelum naik rooftop, aku cuma mau bilang satu hal.",
  line2: "kuat kuat yaapss, selalu ada tempat sampah disini",
  continueBtn: "[ rooftop ↑ ]",
};

export const scene10 = {
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
  "kamar",
  "cermin",
  "tangga",
  "rooftop",
];
