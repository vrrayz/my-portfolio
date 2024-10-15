import Image from "next/image";
import selfie from "./images/selfie.png";
import { Dots, DotsLarge } from "./components/icons/Dots";
import { SquaresLarge, Squares } from "./components/icons/Squares";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h3>
            Elias is a <span>web designer</span> and{" "}
            <span>front-end developer</span>
          </h3>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
        </div>
        <div>
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
        </div>
      </section>
    </main>
  );
}
