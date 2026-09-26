export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

// ─── Work Experience ───────────────────────────────────────────
export const experienceItems: TimelineItem[] = [
  {
    period: "May 2026 – Present",
    role: "Graphic Designer — Kayan Events, Qatar",
    description:
      "Design event graphics, branding materials, banners, signage, and backdrops. Operate large-format printing machines and CNC cutting machines for customised signage, letters, and fabrication. Prepare production-ready artwork, tender presentations, and support on-site event branding and installation.",
    icon: { light: "/assets/images/brand/kayan.svg", dark: "/assets/images/brand/kayan.svg", width: 80, height: 32 },
  },
  {
    period: "Jan 2026 – May 2026",
    role: "Graphic Designer & Social Media Manager — So Cal Restaurant, Qatar",
    description:
      "Designed social media graphics, menus, banners, and in-store marketing materials. Managed daily content across Instagram, Facebook, and TikTok — creating Reels, stories, and promotional posts. Maintained brand identity across digital and print, and analysed content performance to improve engagement.",
    icon: { light: "/assets/images/brand/so-cal.svg", dark: "/assets/images/brand/so-cal.svg", width: 80, height: 32 },
  },
  {
    period: "Jan 2025 – Oct 2025",
    role: "Senior Digital Media Creator — ICST University Park, Sri Lanka",
    description:
      "Created digital marketing materials — graphics, videos, photography, and motion graphics — for university campaigns and events. Managed social media across Facebook, Instagram, and TikTok. Planned content calendars and produced promotional Reels to boost brand visibility and student engagement.",
    icon: { light: "/assets/images/brand/icst.svg", dark: "/assets/images/brand/icst.svg", width: 80, height: 32 },
  },
  {
    period: "May 2021 – Jan 2025",
    role: "Creative Designer & Digital Manager — Freelance",
    description:
      "Delivered branding, logo design, and graphic solutions for restaurants, small businesses, and e-commerce brands. Designed Arabic calligraphy artwork, social media creatives, and landing pages using WordPress & Elementor. Managed social media content, food and product photography, and image retouching for digital campaigns.",
    icon: { light: "/assets/images/logo/logo-kz.svg", dark: "/assets/images/logo/logo-kz.svg", width: 32, height: 32 },
  },
];

// ─── Training & Qualifications ─────────────────────────────────
export const qualificationItems: TimelineItem[] = [
  {
    period: "2023",
    role: "Blender 3D Modeling & Motion Graphics — Udemy",
    description:
      "3D modeling and animation fundamentals — learned to create product visualisations and motion sequences for brand campaigns.",
    icon: { light: "/assets/images/brand/udemy.svg", dark: "/assets/images/brand/udemy.svg", width: 80, height: 30 },
  },
  {
    period: "2021",
    role: "Video Editing & Motion Graphics — Professional Training",
    description:
      "Advanced training in Premiere Pro, After Effects, and CapCut — covering video editing, kinetic typography, and social-first motion content.",
    icon: { light: "/assets/images/brand/skillshare.svg", dark: "/assets/images/brand/skillshare.svg", width: 80, height: 40 },
  },
  {
    period: "2020",
    role: "Adobe Creative Suite — Skillshare",
    description:
      "Mastered Photoshop, Illustrator, and InDesign — building a strong foundation in raster/vector graphics, print design, and brand collateral.",
    icon: { light: "/assets/images/brand/skillshare.svg", dark: "/assets/images/brand/skillshare.svg", width: 80, height: 40 },
  },
  {
    period: "2020",
    role: "Foundation in IT & English — ESOFT Metro Campus, Sri Lanka",
    description:
      "Foundation programme covering information technology fundamentals and professional English communication skills.",
    icon: { light: "/assets/images/brand/esoft.png", dark: "/assets/images/brand/esoft.png", width: 100, height: 35 },
  },
];

// Keep backward-compat export (used nowhere now but safe to keep)
export const educationItems = [...experienceItems, ...qualificationItems];
