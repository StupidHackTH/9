/**
 * Interface representing a team participating in Stupido Hackettino #9
 */
export interface Team {
  /** Unique URL-friendly identifier for the team */
  slug: string;
  
  /** Team name or title */
  name: string;
  
  /** List of team members, typically formatted as names with optional handles/usernames */
  members: string;
  
  /** Information about the project created by the team */
  project: {
    /** Name of the project */
    name: string;
    
    /** Description of what the project does, often in Thai with creative/humorous tone */
    description: string;
    
    /** Markdown-formatted image with alt text describing the project screenshot or logo */
    image: string;
    
    /** Markdown-formatted links to project resources (GitHub, Demo, Slides, etc.) */
    links: string;
  };
  
  /** 
   * Creative commentary about the project in Thai, written in a poetic/theatrical style
   * Often includes playful critiques and reveals the team name at the end
   */
  manorah: string;
}

export const teams: Team[] = [
  {
    slug: "viscut-extenshod",
    name: '""',
    members:
      "นาย A (Rufflogix)\nนาย B (MountEverestt)\nนาย C (BlackCatKnight)\nนาย D (Luckytime1996)\nนาย E (Makufff)\nนาย F (xHexlabx)\nนางสาว G (Pakpim)",
    project: {
      name: "viscut-extenshod",
      description:
        'โค้ดทั้งหลายจงฟังให้ดี\nวิถีนี้ “โง่ให้สุด” สุดแสนเฉลียว\nชื่อแปรใด meaningful อย่าเกี่ยว\nใช้แต่เพี้ยนเปลี่ยวใจให้ปั่นป่วน\n\nkeyword ใดถูกห้าม อย่าริแตะ\nลองพิมพ์แย่ๆ แก้ดีมั้ยสวน\nคอมเมนต์เสริมต้องมี emoji ล้วน\n🎉✨🔥 ให้รัญจวน coder หนอ\n\nแต่เมื่อ lint ยังแรงไม่ถึงฝัน\nFeature ถัดจึงบรรจบพบคำต่อ\n“Talk-Shit-Linter” เสริมสำเนียงคอ\nแปลงข้อความให้เหมาะพอคนเข้าใจ\n\nจะสุภาพก็มีกลอนให้เจ้าเลือก\n\n""ตัวแปรนี้เจ้าลืมใช้ไป\nใยเจ้าปล่อยให้หลับใหลเดียวดาย...""\n\nหรือดุดันด้วยวาจาไม่ละไม\n\n""มึงลืม semicolon? ห๊ะ?! มึงมาเขียนทำไม?""\n\nนี่แหละโค้ดแห่งยุคสุดบรรเจิด\nที่ความเพี้ยนบรรเลงเปิดด้วยหัวใจ\nViscut-Extenshod มิใช่เล่นไป\nแต่คือ lint สุดยิ่งใหญ่แห่งวงการ',
      image:
        "![The image appears to be a code snippet or a programming interface, displaying various lines of code and technical information.](https://usercontent.creatorsgarten.org/c/v1753682609/67db0f3ed3aaf9a062450264/image_bjwldq.webp)",
      links:
        '[GitHub](https://github.com/EmptyBrainNoIdea/viscut-extenshod)\n[Demo](https://drive.google.com/file/d/1Iegh166l-A9MzwQ7s4xsq0w4hnkNLeSz/view?usp=sharing)\n[Canva](https://www.canva.com/design/DAGuQuvJrBM/HU8G0jVZWx4QbWSoJgKO3g/edit?utm_content=DAGuQuvJrBM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)"',
    },
    manorah:
      'มโนราห์หลงระเริงในพลัง extension พิฆาตโค้ด ทุบหัว dev จนคีย์บอร์ดหัก มีทั้งสุภาพ รุนแรง แลยังเล่นกลอนใส่ ใช้ได้ทั้งขำและทรมานใจ dev ทั่วพิภพ แก้บัคก็ไม่กลัวลบไฟล์! ฤๅจะเป็น…"" เจ้าค่ะ!',
  },
  {
    slug: "shitty-ta-tool",
    name: "นักศึกษาแพทย์บางมด 🐜",
    members: "อันเนอร์ Anner อรุชา\n13D4C\nJetstream Sam\nkanyok.db8r",
    project: {
      name: "Shitty TA Tool",
      description:
        "A TA's revenge tool that run my custom Worm Apps built to confuse and/or distract students who won't stop playing roblox in classroom",
      image:
        "![A striking black and red feathered creature with sharp talons emerges from a vibrant pink background.](https://usercontent.creatorsgarten.org/c/v1753682539/67db0f3ed3aaf9a062450264/image_pw56mc.webp)",
      links:
        "[GitHub](https://github.com/Phiravit/SHiT9-TA-Tools)\n[Slides](https://www.canva.com/design/DAGuUsY3920/qgPZsG5ZZI9fSUakAgwTwA/edit?utm_content=DAGuUsY3920&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)",
    },
    manorah:
      'มโนราห์กล่าวใคร่ชื่นชมในเชาวน์วิปลาส แห่ง "ไวรัสแม่มึง" ผสมแก๊กเด็กติดเกมเอาอยู่ปานลมบ้าหมู แถมปล่อยความหายนะใส่เครื่องคอมไม่กั๊ก ล้ำค่านักหนาในทางตลกขบขันสมศักดิ์ศรี Stupido แล! นามของผู้สร้างนั้นคือ…นักศึกษาแพทย์บางมด เจ้าค่ะ!',
  },
  {
    slug: "nah-mor",
    name: "ถั่วเขียวเดี๋ยวเป็นถั่วงอก",
    members: "ซัน\nซิน\nนีร์\nแพร\nจ้อบ\nนิก",
    project: {
      name: "หน้าม่อ - Nah Mor",
      description:
        "เว็บไซต์วัดนิสัยในความสัมพันธ์จากโหงวเฮ้งของใบหน้าด้วย AI มีผลการวิเคราะห์ฝั่ง angel และ devil แล้วให้ AI สองฝั่งมาสู้กัน ว่าสุดท้ายคนนี้นิสัยในความสัมพันธ์ไปทางไหน angel หรือ devil พร้อมทั้งคำวิเคราะห์นิสัยในภาพรวม และให้คำแนะนำในการพัฒนาให้เป็นคนโหงวเฮ้งดีขึ้นผ่านการปรับใบหน้าหัตถการ co กับคลีนิคเสริมความงาม",
      image:
        "![A cartoon-style illustration depicts a yellow, bearded character with a watering can-like object pouring water onto their head, with green leaves or plants emerging from the top.](https://usercontent.creatorsgarten.org/c/v1753682671/67db0f3ed3aaf9a062450264/image_pagwze.webp)",
      links:
        "[GitHub](https://github.com/neennera/nah-mor)\n[Demo](https://nah-mor.vercel.app)\n[Canva](https://www.canva.com/design/DAGuQSwmolE/Y3ulf-v9g5Ncw0trSbYreg/edit?utm_content=DAGuQSwmolE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)",
    },
    manorah:
      "มโนราห์ชอบอกชอบใจกับการตัดสินความเจ้าชู้ด้วย AI โหงวเฮ้งสุดบิดเบี้ยว รับประกันความ Bias อย่างกล้าหาญ เล่นกับอคติอย่างแซ่บ สาระแทบสิ้นไร้ ทุกความหน้าหม้อเป็นเรื่องตลก! จึ่งจงรู้ไว้นะว่า…ถั่วเขียวเดี๋ยวเป็นถั่วงอก เจ้าค่ะ!",
  },
  {
    slug: "melanin-adder",
    name: "เอปาราเล่ เอปาราโล่ เป็นสัตว์ในตำนานจากคณะ ไอที ลาดกระบัง เกิดจากการอัดตัวบนรถ MG 3 Hybrid Plus",
    members: "ไนซ์\nเอปาล์ม\nวิน\nพี\nเก้า\nเซียน\nกีตาร์",
    project: {
      name: "Melanin Adder",
      description: "gives everyone more than enough melanin",
      image:
        "![The image shows a close-up portrait of a smiling Asian man with glasses against a dark background.](https://usercontent.creatorsgarten.org/c/v1753682756/67db0f3ed3aaf9a062450264/image_ejrfwg.webp)",
      links:
        "[Canva](https://www.canva.com/design/DAGuPzIVARo/xPF_Ejuh_fLaOaPW9yIspA/edit?utm_content=DAGuPzIVARo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)\n[GitHub](https://github.com/SHT9-APARALE/new_poc_ex.git)",
    },
    manorah:
      "มโนราห์ขำกลิ้งกับ Melanin Adder โหมด darkmode เปลี่ยน skin tone อัตโนมัติ เล่นกับ sensitive topic อย่างไร้เดียงสา กลายเป็นถ้อยคำล้อ AI bias ได้แสบทรวงนัก นามของผู้สร้างนั้นคือ…เอปาราเล่ เอปาราโล่ เป็นสัตว์ในตำนานจากคณะไอทีลาดกระบัง เจ้าค่ะ!",
  },
  {
    slug: "birthday",
    name: "วันสร้างตัว",
    members: "เนิส\nเพชร\nคอมต้า\nนัดที่ 9",
    project: {
      name: "วันสร้างตัว(อ่อน)",
      description:
        "เพราะทุกคนมีความฝัน แต่ก่อนจะสร้างอนาคต เราต้องรู้ก่อนว่าจุดเริ่มต้นของเราคือเมื่อไหร่",
      image:
        "![The image features a collage of various elements, including shirtless muscular men, a cat, and images of money and political figures in the background, all set against a Thai text.](https://usercontent.creatorsgarten.org/c/v1753682829/67db0f3ed3aaf9a062450264/image_pq5vet.webp)",
      links: "[GitHub](https://github.com/Varanapat/StupidHackathon9)",
    },
    manorah:
      "มโนราห์ขอดื่มด่ำไปกับสุ้มเสียงย้อนวัยอสุจิ พลิกวันเกิดเป็น humor existential แถมยังปั้นกลอนโดย AI สำแดงความคิดสร้างตัวในช่วงปฐมวัย ได้ฮาแฝงคม! อย่าให้ช้า จงรับรู้ว่า…วันสร้างตัว เจ้าค่ะ!",
  },
  {
    slug: "thai-superman-voiceover-challenge",
    name: "คนรักสถาบัน",
    members: "บีม\nJapan",
    project: {
      name: "Thai Superman voiceover challenge",
      description:
        "คือมันดีผมดูไป 2 รอบแต่มันก็สู้ zack synder ไม่ได้ แล้วผมจะไปดู zack synder ที่ไหน",
      image:
        '![The image shows a man in a suit speaking into a microphone, with text overlaying the image that reads "Thai Superman Voiceover Challenge" and "Zack Snyder".](https://usercontent.creatorsgarten.org/c/v1753682326/67db0f3ed3aaf9a062450264/team_superman_ydvrta.webp)',
      links: "[Demo](https://thai-superman-voiceover-challenge.vercel.app)",
    },
    manorah:
      "มโนราห์เอ็นดูในกลวิธีตรวจจับ “รักสถาบัน” ประหนึ่ง satire ขำๆเกมบ้าบอที่ทำท่าเคารพส่งเดช แม้อาจแอบเสียดแทงนิดๆ ท้ายสุดก็พาโต้ตอบฮาเฮ ท่านคงอยากรู้นามนี้แล้ว…คนรักสถาบัน เจ้าค่ะ!",
  },
  {
    slug: "stpid-brane-broke",
    name: "เป็ดปักกิ่ง Mixue",
    members:
      "[suwizx](https://suwizx.dev/)\nbaimon\ngusji (Cauze/Zealvy)\nflix (TeaTarius)\njxe",
    project: {
      name: "เสีย(ง)สติ",
      description:
        "เว็บเพลงหลอนประสาทซึ่งอุดมไปด้วยเสียงเพลงอันน่าพิศวงส่งตรงจากนรกที่พร้อมจะทำลายทุกอณูเซลล์หูของท่านเพียงแค่คลิกเปิดเว็บและท่านจะออกไม่ได้อีกเลย (พร้อมบริการขายโรงศพในเร็วๆนี้)",
      image:
        "![The image shows two individuals in the foreground, with text and graphics in the background.](https://usercontent.creatorsgarten.org/c/v1753682895/67db0f3ed3aaf9a062450264/image_knbh1x.webp)",
      links:
        "[GitHub](https://github.com/shit9-sutbunjeard/shit9-sudbunkeard)\n[Demo](https://stpid-brane-broke.vercel.app)\n[Canva](https://www.canva.com/design/DAGuP69yT10/VL0A5qsjScbA6od9nflb_g/edit?utm_content=DAGuP69yT10&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)",
    },
    manorah:
      "มโนราห์ครึ้มใจหนักหนากับ “เสียงสยอง” เว็บไซต์หมุนวนบทเพลงหลอนหู คล้ายจดหมายลูกโซ่สุดสยอง ผสมธุรกิจโลงศพอย่างเหลวไหลคณานับ เป็ดพันธุ์ใหม่ผู้นั้นคือ…เป็ดปักกิ่ง Mixue เจ้าค่ะ!",
  },
  {
    slug: "jaehong",
    name: "หยุดเ_ีย_ี",
    members: "Supeem\nJ-Pan\nPiang",
    project: {
      name: "Sister Hong Dating Simulator",
      description: "จีบเจ๊หงษ์",
      image:
        '![The image depicts a cartoon-style character with a large head and a red heart, along with the title "SISTER HONG DATING SIMULATOR" displayed prominently in the foreground. The background includes various kitchen-related items such as vegetables, flowers, and what appears to be a refrigerator.](https://usercontent.creatorsgarten.org/c/v1753682945/67db0f3ed3aaf9a062450264/image_vsstfr.webp)',
      links:
        "[Demo](https://jaehong.vercel.app/)\n[GitHub](https://github.com/SupeemAFK/Jaehong)",
    },
    manorah:
      "มโนราห์หัวร่อด้วยความเห็นใจให้ lone wolf แสนเหงา ที่มี solution เป็นโปรแกรมจีบสาวจีนแบบเจ้หง ของขวัญแด่ชาวโสดผู้เหน็บหนาว! จงทราบนาม…หยุดเ_ีย_ี เจ้าค่ะ!",
  },
  {
    slug: "paliscript",
    name: "ไม่เอาม.สีส้ม",
    members:
      "[Phuwit Puthipairoj](https://github.com/phuwit)\n[SeenamZaSodaSingha](https://github.com/SeenamZaSodaSingha)\n[Panuwit](https://github.com/panuseng)\n[Thanyanit Jongjitragan](https://github.com/Thanyanit-J)\n[IkaWaAyuMu](https://github.com/IkaWaAyuMu)\n[Boss](https://github.com/bossand142538)\n[Putthipong Soongsuwan](https://github.com/Jamamaboy)",
    project: {
      name: "บาลีสคริปต์ – PaliScript",
      description: "ใช้ภาษาบาลีเพิ่มความมงคลแก่โค้ด",
      image:
        '![The image features a close-up of a cartoon-like character with an exaggerated, surprised expression on their face, set against a dark background with the word "paliscript" prominently displayed.](https://usercontent.creatorsgarten.org/c/v1753683221/67db0f3ed3aaf9a062450264/image_vlcsee.webp)',
      links: "[GitHub](https://github.com/maiaowmorseesom/sht9-paliscript)",
    },
    manorah:
      "มโนราห์ครวญฮือกับ “npm package ภาษาบาลี” ที่พระก็โค้ดได้ เจริญพร compile .mp3 แถม effect สวดมนต์ cringy สาระและสารขันประสมกลมกล่อม ผู้ใดรังสรรค์ นั่นคือ…ไม่เอาม.สีส้ม เจ้าค่ะ!",
  },
  {
    slug: "younggu",
    name: "Younggu RuPiKad",
    members:
      "OpecZ\nรักคุณเสียยิ่งกว่าใคร\nฝันร้ายโรงทาน\nตัวร้ายยปราจีน\nเกือบได้สองที่คูเมือง",
    project: {
      name: "Younggu Alert",
      description:
        "เเจ้งเตือนเมื่อ Younggu รู้(อยู่ใน)พิกัดเมียคุณผ่าน Telegram bot ให้ Privacy กับเมียคุณด้วย ZK-SNARK -- Don't trust, Verify สามารถตรวจสอบได้ผ่าน Blockchain เตือนภัยวิบๆวับๆ Younggu จากเมียคุณด้วย Younggu Alert สิ",
      image:
        "![A person wearing a navy blue coat, a red scarf, and sunglasses stands with arms raised against a cloudy sky.](https://usercontent.creatorsgarten.org/c/v1753683273/67db0f3ed3aaf9a062450264/image_xcev74.webp)",
      links: "",
    },
    manorah:
      "มโนราห์ขำคางเคล็ดกับ blockchain privacy สำหรับที่อยู่ “ยังกู” รักษาความลับแฟนได้มากเท่าค่าแก๊สแลอารมณ์ซ่อนเปื้อน ขอเฉลยว่า…Younggu RuPiKad เจ้าค่ะ!",
  },
  {
    slug: "bangbreak",
    name: "คนเสพม้า",
    members:
      "[Minorin♪ (Big)](https://github.com/Phudit-2547)\n[J56164 (Jj)](https://github.com/J56164)\nWebbacillus (Web)\nOdin (Idin)\nMIRaGE666- (Ni)\nrrndm_r (Reo)",
    project: {
      name: "BangBreak",
      description:
        "อยากพักสายตางั้นเหรอ BangBreak ช่วยคุณได้\nด้วยการปา Flashbangใส่คุณ",
      image:
        '![The image features the text "BangBreak" prominently displayed in the center, surrounded by a radial burst of white lines against a dark background, creating a dynamic and visually striking composition.](https://usercontent.creatorsgarten.org/c/v1753683326/67db0f3ed3aaf9a062450264/image_atntln.webp)',
      links: "[GitHub](https://github.com/Phudit-2547/Bangbreak)",
    },
    manorah:
      "มโนราห์ใคร่เอ็นดูใน extension บังคับพักสายตา สลับสีจอกระพริบบังคับท่านไปตบะแตก ใครเป็นผู้เสพ คนดูไม่รอด ปลายจักเผยนาม…คนเสพม้า เจ้าค่ะ!",
  },
  {
    slug: "wake-me-up",
    name: "เมื่อชีวิตสงบสุขเกินไป!",
    members: "เก๊า\nโอ\nเจฟ\nเบล",
    project: {
      name: "Wake Me Up",
      description: "นาฬิกาปลุกที่จะช่วยให้คุณซวยได้ในบางสถานการณ์",
      image:
        '![The image depicts a colorful alarm clock with the text "Wake me up by" in English and Thai, along with a description of the alarm as "stupid alarm" in Thai.](https://usercontent.creatorsgarten.org/c/v1753683490/67db0f3ed3aaf9a062450264/image_pfbdg2.webp)',
      links:
        "[Demo](https://sleepingdroid.github.io/wake-me-up/)\n[GitHub](https://github.com/sleepingdroid/wake-me-up)",
    },
    manorah:
      "มโนราห์เฝ้าใคร่ครวญในนาฬิกาปลุก “ตั้งเองง่วงเอง” บังคับตื่นแบบย้อนแย้งสุดอัปรีย์ เฟรนด์ลี่จนฮือฮา ผลงานนี้มีชื่อว่า…เมื่อชีวิตสงบสุขเกินไป! เจ้าค่ะ!",
  },
  {
    slug: "toolazy2speak",
    name: "TooLazy2Speak",
    members: "Tackle",
    project: {
      name: "TooLazy2Speak",
      description:
        "เจ้าของโปรเจ็ก เขาขี้เกียจพูดเลยสร้างโปรแกรม งี่เง่านี้ขึ้นมา",
      image:
        "![The image shows a dark, shadowy figure with a mask-like face against a black background, accompanied by various text and audio information.](https://usercontent.creatorsgarten.org/c/v1753684589/67db0f3ed3aaf9a062450264/image_ksxf6o.webp)",
      links: "",
    },
    manorah:
      "มโนราห์เอ็นดูเหลือประมาณกับ Java text-to-speech เพื่อคนอู้วานให้น้อง AI พูดแทน ก้าวไกลสู่ระบบประกาศโรงเรียนและ LLM อันได้ชื่อว่า…TooLazy2Speak เจ้าค่ะ!",
  },
];
