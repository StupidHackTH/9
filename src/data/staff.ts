export const {
  staffs,
  websiteRoles,
}: {
  staffs: {
    id: number;
    name: string;
    nickname: string;
    username?: string;
    websiteRoleIds: number[];
  }[];
  websiteRoles: {
    id: number;
    name: string;
    description: string;
  }[];
} = {
  staffs: [
    {
      id: 1,
      name: "Papatsiri Apipaiboon",
      nickname: "หยก",
      username: "yokpapatsiri",
      websiteRoleIds: [3, 25, 15, 26, 27, 6, 7, 39, 16, 16],
    },
    {
      id: 2,
      name: "Thai Pangsakulyanont",
      nickname: "ไท",
      username: "dtinth",
      websiteRoleIds: [16, 19, 8, 31, 35, 30, 27, 6, 32, 6, 17, 5, 4, 13],
    },
    {
      id: 6,
      name: "Prodpran Ananlertsakul",
      nickname: "เจมี่",
      websiteRoleIds: [16, 37, 36, 36, 25, 10, 20, 12, 14, 16],
    },
    {
      id: 13,
      name: "Khimjare Chodkaodee",
      nickname: "มีมี่",
      username: "khxmjarx",
      websiteRoleIds: [10, 6, 27, 6, 20, 22],
    },
    {
      id: 22,
      name: "Nattawatt Hongthong",
      nickname: "โขง",
      websiteRoleIds: [27, 21, 34, 2, 38, 22],
    },
    {
      id: 8,
      name: "Wasin Silakong",
      nickname: "อู๊ดดี้",
      websiteRoleIds: [25, 27, 28, 11, 18, 22],
    },
    {
      id: 21,
      name: "Pirawish Pratumngern",
      nickname: "พีม",
      websiteRoleIds: [14, 14, 38, 22],
    },
    {
      id: 23,
      name: "Supanat Deawrattanakun",
      nickname: "เอิร์ธ",
      websiteRoleIds: [10, 14, 2, 38],
    },
    {
      id: 5,
      name: "Chayapatr Archiwaranguprok",
      nickname: "ปั๊บ",
      username: "chayapatr",
      websiteRoleIds: [6, 23, 40],
    },
    {
      id: 11,
      name: "Kittiyaporn Takrudthieng",
      nickname: "เกรพ",
      websiteRoleIds: [9, 15, 9],
    },
    {
      id: 14,
      name: "Kornmada Piriyakiartsakul",
      nickname: "จาจ้า",
      username: "jajar",
      websiteRoleIds: [6, 18, 28],
    },
    {
      id: 3,
      name: "Nutthapat Pongtanyavichai",
      nickname: "ลีโอ",
      username: "leomotors",
      websiteRoleIds: [18, 2, 1],
    },
    {
      id: 24,
      name: "Pattarin Tamano",
      nickname: "แอม",
      websiteRoleIds: [10, 2, 38],
    },
    {
      id: 15,
      name: "Supratouch Suwatno",
      nickname: "กัส",
      websiteRoleIds: [28, 27, 6],
    },
    {
      id: 4,
      name: "Phoomparin Mano",
      nickname: "ภูมิ",
      username: "poom",
      websiteRoleIds: [6, 40],
    },
    {
      id: 7,
      name: "Phumrapee Limpianchop",
      nickname: "ริฟฟี่",
      username: "rayriffy",
      websiteRoleIds: [21, 2],
    },
    {
      id: 26,
      name: "Saruta Torat",
      nickname: "แบม",
      websiteRoleIds: [26, 24],
    },
    {
      id: 27,
      name: "Siravij Praevisavakij",
      nickname: "บีบี",
      username: "siravijbb",
      websiteRoleIds: [12, 22],
    },
    {
      id: 19,
      name: "Chanotai Krajeam",
      nickname: "บูม",
      username: "boomchanotai",
      websiteRoleIds: [29],
    },
    {
      id: 25,
      name: "Jirapol Wachirasub",
      nickname: "นีโม",
      websiteRoleIds: [10],
    },
    {
      id: 17,
      name: "Kongkeit Khunpanitchot",
      nickname: "ออม",
      username: "saltyaom",
      websiteRoleIds: [6],
    },
    {
      id: 18,
      name: "Pattranit Kongsaenkam",
      nickname: "ปัด",
      websiteRoleIds: [33],
    },
    {
      id: 20,
      name: "Phantip Kokilanon",
      nickname: "ช้าง",
      websiteRoleIds: [29],
    },
  ],
  websiteRoles: [
    {
      id: 40,
      name: "Advisor",
      description:
        "Guiding the team and preserving the foundational spirit of Stupid Hackathon Thailand since its inception",
    },
    {
      id: 4,
      name: "Automation & Systems",
      description:
        "Developing and managing automated systems for event operations (we used Grist & n8n)",
    },
    {
      id: 28,
      name: "Awards Ceremony Hosts",
      description: "Hosting the final awards ceremony and announcing winners",
    },
    {
      id: 6,
      name: "Challenge Designer",
      description:
        "Designing the various hackathon challenges for participants",
    },
    {
      id: 8,
      name: "Chatbot Developer",
      description: "Building and maintaining the event's chatbot (we used n8n)",
    },
    {
      id: 1,
      name: "Chauffeur",
      description:
        "Providing transportation for staff and essential event materials",
    },
    {
      id: 10,
      name: "Cleanliness Crew",
      description:
        "Maintaining the cleanliness and tidiness of the event venue",
    },
    {
      id: 11,
      name: "Coffee Station Assistant",
      description:
        "Assisting with the setup and operation of the coffee sponsor's station",
    },
    {
      id: 12,
      name: "Deposit Refund Staff",
      description: "Handling the cash deposit refund process for attendees",
    },
    {
      id: 13,
      name: "Discord Admin",
      description:
        "Managing the event's Discord server and engaging with the community",
    },
    {
      id: 22,
      name: "Fast Horse",
      description:
        "Running urgent errands and providing on-demand support wherever needed",
    },
    {
      id: 5,
      name: "Financial Reconciler",
      description:
        "Reconciling expense reports and financial slips for accurate accounting",
    },
    {
      id: 2,
      name: "Firefighter",
      description:
        "Tackling unexpected problems and emergencies (including potential literal fire that could stem from iron use) during the event",
    },
    {
      id: 20,
      name: "Food Coordinator",
      description:
        "Planning and coordinating all food and beverage orders for the event",
    },
    {
      id: 18,
      name: "Icebreaking Facilitator",
      description:
        "Leading icebreaking activities and helping participants form teams",
    },
    {
      id: 14,
      name: "Ironing Station Crew",
      description:
        "Overseeing the ironing station for attendees to apply their custom swag",
    },
    {
      id: 9,
      name: "Lead Designer",
      description:
        "Leading the overall visual identity and design for the event.",
    },
    {
      id: 3,
      name: "Lead Organizer",
      description: "Overseeing all aspects of event planning and execution",
    },
    {
      id: 21,
      name: "Livegarten Crew",
      description:
        "Managing the livestream production during the pitching sessions",
    },
    {
      id: 36,
      name: "On-site Lead",
      description:
        "Directing event flow and managing staff operations during the hackathon",
    },
    {
      id: 17,
      name: "Onboarding & Access",
      description: "Managing staff access to digital tools and work platforms",
    },
    {
      id: 23,
      name: "Opening Ceremony Host",
      description: "Hosting the opening ceremony and kicking off the event",
    },
    {
      id: 24,
      name: "Photographer",
      description:
        "Capturing photos and documenting the atmosphere of the event",
    },
    {
      id: 25,
      name: "Pitching Session Host",
      description:
        "Emceeing the project pitching sessions and introducing the teams",
    },
    {
      id: 27,
      name: "Prize Coordinator",
      description:
        "Coordinating the collection and organization of all prizes for winners",
    },
    {
      id: 37,
      name: "Project Manager",
      description:
        "Tracking tasks and coordinating to ensure the project timeline stays on schedule",
    },
    {
      id: 38,
      name: "Registration Staff",
      description: "Managing the check-in process and registering attendees",
    },
    {
      id: 26,
      name: "Social Media & PR",
      description: "Managing social media channels before and during the event",
    },
    {
      id: 29,
      name: "Sponsor Prize Facilitator",
      description: "Delivering prize contributions from sponsors",
    },
    {
      id: 7,
      name: "Sponsorship Content Creator",
      description:
        "Drafting the official 'Call for Sponsors' proposal and outreach materials",
    },
    {
      id: 16,
      name: "Swag Coordinator",
      description: "Coordinating the production and delivery of event swags",
    },
    {
      id: 15,
      name: "Swag Designer",
      description:
        "Designing the official event DTFs, stickers, and other swags",
    },
    {
      id: 30,
      name: "Team Registration Lead",
      description:
        "Overseeing the official team registration process during the hackathon",
    },
    {
      id: 31,
      name: "Ticketing",
      description: "Managing the ticketing system and ticket unlock codes",
    },
    {
      id: 39,
      name: "Treasurer",
      description:
        "Managing the event's central bank account, processing all sponsor income and expense disbursements",
    },
    {
      id: 33,
      name: "Venue Facilitator",
      description:
        "Assisting with on-site needs and ensuring smooth operation within the venue",
    },
    {
      id: 32,
      name: "Venue Liaison",
      description:
        "Acting as the main point of contact with the venue provider",
    },
    {
      id: 34,
      name: "Venue Setup & Logistics",
      description:
        "Setting up the event space and managing equipment logistics",
    },
    {
      id: 35,
      name: "Voting Facilitator",
      description:
        "Devising the voting scheme and facilitating the judging process",
    },
    {
      id: 19,
      name: "Web Developer",
      description:
        "Building, deploying, and maintaining the official event website",
    },
  ],
};
