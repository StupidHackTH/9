export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  message?: string;
  tier: "tier3" | "tier2" | "tier1" | "individual";
  isPlaceholder?: boolean;
}

export const sponsors: Sponsor[] = [
  // Tier 3: เจ้าพระยามหาเพี้ยนบันลือโลก (฿44,444.44)
  {
    name: "MyOrder",
    logo: "https://usercontent.creatorsgarten.org/c/v1751703223/644c35a6802c02345887f156/326746095_576316064312556_3156032521665886786_n_lxn9b8.webp",
    url: "https://www.facebook.com/MyOrder.official",
    message:
      "My Order - ระบบแจ้งเลขพัสดุ ระบบจัดการแอดมิน และจัดการร้านค้าออนไลน์ครบวงจร",
    tier: "tier3",
  },
  {
    name: "ODDS-TEAM",
    logo: "https://usercontent.creatorsgarten.org/c/v1752921933/644c35a6802c02345887f156/ODT-72dpi_omk0bz.webp",
    url: "https://odds.team/",
    message: "We are not hiring",
    tier: "tier3",
  },

  // Tier 2: เสนาบดีผู้มากเมตตา (฿9,999.99)
  {
    name: "World",
    logo: "https://usercontent.creatorsgarten.org/c/v1753103370/644c35a6802c02345887f156/Spon_World_pfyxil.webp",
    url: "https://world.org/th-th",
    tier: "tier2",
  },
  {
    name: "Phoomparin Mano",
    logo: "https://usercontent.creatorsgarten.org/c/v1753103444/644c35a6802c02345887f156/Spon_Poom_bnevmo.webp",
    url: "https://poom.dev",
    tier: "tier2",
  },

  // Individual Sponsors: ผู้อุปถัมภ์ใจกุศล (฿555.55+)
  {
    name: "Patt Vira",
    logo: "",
    url: "https://www.youtube.com/@pattvira",
    message: "Will always support + participate in กิจกรรมสมองไหล 555",
    tier: "individual",
  },
  {
    name: "narze",
    logo: "",
    message: "ඞ",
    tier: "individual",
  },
  {
    name: "พันธุ์ทิพา สุขสิริสรณ์",
    logo: "",
    tier: "individual",
  },
  {
    name: "Mom's cap",
    logo: "",
    url: "https://www.facebook.com/momscap",
    message: "Mom's cap",
    tier: "individual",
  },
  {
    name: "Sasarak Sutthisukon",
    logo: "",
    message: "Let's build stupid products.",
    tier: "individual",
  },
  {
    name: "bier",
    logo: "",
    url: "https://yuttakhanb.dev/",
    message:
      "ขอคำนับแด่ผู้จัดงาน ซึ่งจัดได้งดงามดุจบุปผาเบ่งบานในฤดูฝน งานดีจนสงสารคนไม่ทัน ปัญญาพลันไหลหลั่ง ดั่งน้ำหลากกลางวันฝน",
    tier: "individual",
  },
];

export const tierNames = {
  tier3: "เจ้าพระยามหาเพี้ยนบันลือโลก",
  tier2: "เสนาบดีผู้มากเมตตา",
  individual: "ผู้อุปถัมภ์ใจกุศล",
};

export function getSponsorsByTier(tier: Sponsor["tier"]) {
  return sponsors.filter((sponsor) => sponsor.tier === tier);
}
