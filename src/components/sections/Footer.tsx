import { ImageSwitch } from "@/components/ImageSwitch";

export function Footer() {
  return (
    <div id="footer" className="tf-footer flat-spacing">
      <div className="block-quote effectFade fadeUp no-div">
        <h5 className="quote-text font-3 fw-normal text-black-72">
          <span className="text-black-56">&ldquo;</span>
          Design is not just what it looks like and feels like. Design is how it works.
          <span className="text-black-56">&rdquo;</span>
        </h5>
        <p className="quote-author font-3 text-black-56 h6 text-end">Steve Jobs</p>
      </div>
      <div className="br-line" />
      <div className="foot-inner">
        <div className="isak effectFade fadeUp no-div">
          <svg
            viewBox="0 0 700 120"
            width="100%"
            height="auto"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
            overflow="visible"
          >
            <text
              x="0"
              y="105"
              fontFamily="inherit"
              fontSize="120"
              fontWeight="700"
              letterSpacing="-4"
              fill="rgba(0,0,0,0.72)"
              textLength="700"
              lengthAdjust="spacingAndGlyphs"
            >
              KHALID
            </text>
          </svg>
        </div>
        <a href="#" className="f-logo effectFade fadeZoom">
          <div className="logo">
            <ImageSwitch
              light="/assets/images/logo/logo-kz.svg"
              dark="/assets/images/logo/logo-kz.svg"
              width={32}
              height={32}
            />
          </div>
        </a>
      </div>
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          All rights reserved <br />© 2026 Khalid Mohamed Zarook
        </p>
        <div className="isak effectFade fadeUp no-div">
          <svg
            viewBox="0 0 700 105"
            width="100%"
            height="auto"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
            overflow="visible"
          >
            <text
              x="0"
              y="92"
              fontFamily="inherit"
              fontSize="105"
              fontWeight="700"
              letterSpacing="-4"
              fill="transparent"
              stroke="rgba(0,0,0,0.56)"
              strokeWidth="1.5"
              textLength="700"
              lengthAdjust="spacingAndGlyphs"
            >
              ZAROOK
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
