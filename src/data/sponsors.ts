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
    name: "Sponsor Us",
    logo: "https://placehold.co/300x300/ff6a00/ffffff?text=Sponsor+Us",
    tier: "tier3",
    isPlaceholder: true,
  },

  // Tier 2: เสนาบดีผู้มากเมตตา (฿9,999.99)
  {
    name: "Sponsor Us",
    logo: "https://placehold.co/250x250/d9006e/ffffff?text=Sponsor+Us",
    tier: "tier2",
    isPlaceholder: true,
  },
  {
    name: "Sponsor Us",
    logo: "https://placehold.co/250x250/d9006e/ffffff?text=Sponsor+Us",
    tier: "tier2",
    isPlaceholder: true,
  },
  {
    name: "Sponsor Us",
    logo: "https://placehold.co/250x250/d9006e/ffffff?text=Sponsor+Us",
    tier: "tier2",
    isPlaceholder: true,
  },
  {
    name: "Sponsor Us",
    logo: "https://placehold.co/250x250/d9006e/ffffff?text=Sponsor+Us",
    tier: "tier2",
    isPlaceholder: true,
  },

  // Tier 1: ผู้อุปถัมภ์รุ่นเยาว์ (฿5,555.55)
  {
    name: "Sponsor Us",
    logo: "https://placehold.co/200x200/ffe3f0/d9006e?text=Sponsor+Us",
    tier: "tier1",
    isPlaceholder: true,
  },
  {
    name: "Sponsor Us",
    logo: "https://placehold.co/200x200/ffe3f0/d9006e?text=Sponsor+Us",
    tier: "tier1",
    isPlaceholder: true,
  },
  {
    name: "Sponsor Us",
    logo: "https://placehold.co/200x200/ffe3f0/d9006e?text=Sponsor+Us",
    tier: "tier1",
    isPlaceholder: true,
  },

  // Individual Sponsors: ผู้อุปถัมภ์ใจกุศล (฿555.55+)
  {
    name: "Mom's cap",
    logo: "",
    url: "https://www.facebook.com/momscap",
    message: "Mom's cap",
    tier: "individual",
  },
  {
    name: "Patt Vira",
    logo: "",
    url: "https://www.youtube.com/@pattvira",
    message: "Will always support + participate in กิจกรรมสมองไหล 555",
    tier: "individual",
  },
  {
    name: "Sponsor Us",
    logo: "",
    tier: "individual",
    isPlaceholder: true,
  },
];

export const tierNames = {
  tier3: "เจ้าพระยามหาเพี้ยนบันลือโลก",
  tier2: "เสนาบดีผู้มากเมตตา",
  tier1: "ผู้อุปถัมภ์รุ่นเยาว์",
  individual: "ผู้อุปถัมภ์ใจกุศล",
};

export function getSponsorsByTier(tier: Sponsor["tier"]) {
  return sponsors.filter((sponsor) => sponsor.tier === tier);
}
