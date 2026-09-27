export type NavItem = {
  href: string;
  label: string;
  icon: string;
  separator?: "before" | "after";
};

export const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: "icon-home", separator: "after" },
  { href: "#about", label: "About", icon: "icon-user-circle" },
  { href: "#education", label: "Experience", icon: "icon-edu" },
  { href: "#qualifications", label: "Training", icon: "icon-graduation" },
  { href: "#work", label: "Portfolio", icon: "icon-high-light" },
  { href: "#service", label: "Services", icon: "icon-service" },
  { href: "#tech", label: "Tools", icon: "icon-tech-stack" },
  { href: "#testimonial", label: "Testimonials", icon: "icon-tes", separator: "after" },
  { href: "#contact", label: "Contact", icon: "icon-send" },
];

