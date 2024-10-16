import Image from "next/image";
import selfie from "./images/selfie.png";
import { Dots, DotsLarge } from "./components/icons/Dots";
import { SquaresLarge, Squares } from "./components/icons/Squares";
import { QuotationMark } from "./components/icons/QuotationMark";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h3>
            TheGrimSavage is a <span>full-stack developer</span>
          </h3>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
        </div>
        <div className="profile">
          <div className="picture-container">
            <Image src={selfie} alt={"picture"} />
            <div
              className="canvas hidden md:block"
              style={{ width: "156px", height: "156px" }}
            >
              <div className="dot"></div>
              <SquaresLarge />
            </div>
            <div
              className="canvas md:hidden"
              style={{ width: "106px", height: "106px" }}
            >
              <div className="dot"></div>
              <Squares />
            </div>
            <Dots className="dots md:hidden" />
            <DotsLarge className="dots hidden md:block" />
          </div>
          <div className="current-work">
            <div className="box"></div>
            <p className="text">
              Currently working on <span>Portfolio</span>
            </p>
          </div>
        </div>
      </section>
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote">
            <span className="quotation-mark top">
              <QuotationMark />
            </span>
            <p>With great power comes great electricity bill</p>
            <span className="quotation-mark bottom">
              <QuotationMark />
            </span>
          </div>
          <div className="author">- Dr. Who</div>
        </div>
        <div className="background-box hidden lg:block"></div>
      </section>
    </main>
  );
}
