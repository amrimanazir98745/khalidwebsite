import { ImageSwitch } from "@/components/ImageSwitch";
import { qualificationItems } from "@/data/education";

export function Qualifications() {
  return (
    <div id="qualifications" className="section-education-experience flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-graduation" />
        Training &amp; Qualifications
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        How I sharpened <br className="d-none d-sm-block" />
        my craft
      </h4>
      <div className="timeline scroll-down">
        <div className="timeline-line">
          <div className="prg-line" />
        </div>
        {qualificationItems.map((item, i) => (
          <div className="timeline-item effectFade fadeUp no-div" key={i}>
            <p className="timeline-date text-black-56">{item.period}</p>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="icon">
                <ImageSwitch
                  light={item.icon.light}
                  dark={item.icon.dark}
                  width={item.icon.width}
                  height={item.icon.height}
                />
              </div>
              <p className="timeline-role fw-medium text-black-72">{item.role}</p>
              <p className="timeline-desc text-body-3 text-black-56">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
