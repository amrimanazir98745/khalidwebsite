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

      {/* KHALID + ZAROOK big footer name */}
      <div className="foot-inner">
        <div className="foot-names">
          {/* KHALID — solid filled */}
          <div className="isak effectFade fadeUp no-div">
            <svg
              viewBox="0 0 700 130"
              width="100%"
              height="auto"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
              overflow="visible"
            >
              <text
                x="0"
                y="115"
                fontFamily="'Inter', sans-serif"
                fontSize="128"
                fontWeight="900"
                letterSpacing="-6"
                fill="rgba(0,0,0,0.72)"
                textLength="700"
                lengthAdjust="spacingAndGlyphs"
              >
                KHALID
              </text>
            </svg>
          </div>
          {/* ZAROOK — solid filled, same weight */}
          <div className="isak effectFade fadeUp no-div">
            <svg
              viewBox="0 0 700 115"
              width="100%"
              height="auto"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
              overflow="visible"
            >
              <text
                x="0"
                y="102"
                fontFamily="'Inter', sans-serif"
                fontSize="112"
                fontWeight="900"
                letterSpacing="-6"
                fill="rgba(0,0,0,0.72)"
                textLength="700"
                lengthAdjust="spacingAndGlyphs"
              >
                ZAROOK
              </text>
            </svg>
          </div>
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

      {/* Copyright always at the very bottom */}
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          All rights reserved <br />© 2026 Khalid Mohamed Zarook
        </p>
      </div>
    </div>
  );
}

