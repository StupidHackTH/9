export type TicketStatus =
  | "sold-out"
  | "ongoing"
  | "confirming"
  | "evaluating"
  | "coming-soon";

export interface TicketBatch {
  name: string;
  releaseDate: string; // YYYY-MM-DD format
  status: TicketStatus;
  announcementLink: string;
  solutionLink?: string;
}

export const ticketBatches: TicketBatch[] = [
  {
    name: "ผู้กล้าหาญในยามรุ่งอรุณ (Early bird)",
    releaseDate: "2025-01-08",
    status: "sold-out",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1136647991842206",
    solutionLink:
      "https://www.facebook.com/1098892262284446/posts/1137511411755864",
  },
  {
    name: "ผู้ปิดม่านราตรี (Early Bird but Night)",
    releaseDate: "2025-01-08",
    status: "sold-out",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1137082831798722",
    solutionLink:
      "https://www.facebook.com/1098892262284446/posts/1137511411755864",
  },
  {
    name: "ม้วนหนังสือขึ้นทะเบียนทีมผู้อาจหาญในความโง่ (Team application)",
    releaseDate: "2025-01-09",
    status: "confirming",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1138203471686658",
    solutionLink:
      "https://www.facebook.com/creatorsgarten/posts/pfbid0ea83mLZyCwDGKhgfbZtvmSUsWZfYcUSANjgWSK6PFi84kWZ8LjGVMS5Sxn62UA3rl",
  },
  {
    name: "Find organizer's birth time challenge",
    releaseDate: "2025-01-10",
    status: "sold-out",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1138831264957212",
    solutionLink:
      "https://www.facebook.com/1098892262284446/posts/1139096018264070",
  },
  {
    name: "Human Only! Challenge",
    releaseDate: "2025-01-12",
    status: "ongoing",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1140794781427527",
  },
  {
    name: "0.01% gacha",
    releaseDate: "2025-01-13",
    status: "sold-out",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1141093324731006",
  },
  {
    name: "แตะหญ้า Online",
    releaseDate: "2025-01-14",
    status: "evaluating",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1141628484677490",
  },
  {
    name: "แตะหญ้า Chula",
    releaseDate: "2025-01-14",
    status: "ongoing",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1141860221320983",
  },
  {
    name: "แตะหญ้า KMITL",
    releaseDate: "2025-01-14",
    status: "sold-out",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1142482567925415",
  },
  {
    name: "It's Almost Working…!",
    releaseDate: "2025-01-15",
    status: "sold-out",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1142327827940889",
  },
  {
    name: "พาล ชาเลนจ์",
    releaseDate: "2025-01-15",
    status: "ongoing",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1142679694572369",
  },
  {
    name: "“กูเอาตั๋วไว้ไหนวะ” challenge 💀",
    releaseDate: "2025-01-16",
    status: "sold-out",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1143133847860287",
  },
  {
    name: "เข้าเฝ้าแสดงเจตจำนง (Individual application)",
    releaseDate: "2025-01-16",
    status: "confirming",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1143478487825823",
    solutionLink:
      "https://www.facebook.com/creatorsgarten/posts/pfbid0ea83mLZyCwDGKhgfbZtvmSUsWZfYcUSANjgWSK6PFi84kWZ8LjGVMS5Sxn62UA3rl",
  },
  {
    name: "Manchild Challenge",
    releaseDate: "2025-01-18",
    status: "ongoing",
    announcementLink:
      "https://www.facebook.com/1098892262284446/posts/1145007314339607",
  },
  {
    name: "วิหคอัสดง (Late Bird)",
    releaseDate: "",
    status: "coming-soon",
    announcementLink: "",
  },
];

export const statusInfo = {
  "sold-out": {
    label: "Sold Out",
    color: "bg-red-500",
    textColor: "text-red-400",
    icon: "mdi:close-circle",
  },
  ongoing: {
    label: "Ongoing",
    color: "bg-green-500",
    textColor: "text-green-400",
    icon: "mdi:clock",
  },
  confirming: {
    label: "Confirming Participation",
    color: "bg-blue-500",
    textColor: "text-blue-400",
    icon: "mdi:account-check",
  },
  evaluating: {
    label: "Evaluating",
    color: "bg-orange-500",
    textColor: "text-orange-400",
    icon: "mdi:eye",
  },
  "coming-soon": {
    label: "Coming Soon",
    color: "bg-purple-500",
    textColor: "text-purple-400",
    icon: "mdi:calendar-clock",
  },
} as const;

export function getTicketsByStatus(status: TicketStatus) {
  return ticketBatches.filter((ticket) => ticket.status === status);
}

export function getOngoingTickets() {
  return ticketBatches.filter(
    (ticket) => ticket.status === "ongoing" || ticket.status === "confirming"
  );
}

export function formatReleaseDate(dateString: string): string {
  if (!dateString || dateString === "") {
    return "TBD";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
