"use client";

import { navItems } from "@/data/nav";

type DesktopSidebarProps = {
  positionClass?: string;
};

export function DesktopSidebar({ positionClass = "pst-v1" }: DesktopSidebarProps = {}) {
  const goTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`sidebar-tools ${positionClass}`}>
      <ul className="nav-list">
        {navItems.map((item, i) => (
            <li  key={item.href + i} className="nav-item">
              <a href={item.href} className="item-link scroll-link">
                <i className={`icon ${item.icon}`} />
                <p className="tool-tip text-caption">{item.label}</p>
              </a>
            </li>
        ))}
      </ul>
      <div className="nav-bottom">
        <a href="#" className="tf-btn-icon go-top" onClick={goTop}>
          <i className="icon icon-arrow-top" />
        </a>
      </div>
    </div>
  );
}
