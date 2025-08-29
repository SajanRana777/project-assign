import React from "react";
import "../Nav/page.css";
import Buttonimage from "../../src/assets/btn.png";
import Side from "../../src/assets/side.png"
import Element from "../../src/assets/element.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from "@mui/icons-material/Circle";
import { FiDollarSign } from "react-icons/fi";

const Page = () => {
  return (
    <section className="container">
      {/* Top Navigation */}
      <div className="Na">
        <div>
          <img src={Side} className="twoline" alt="twoline" />
        </div>
        <FiDollarSign className="dollar" />

        <div className="buttn">
          <button className="btn">WORK</button>
          <button className="btn2">CONTACT</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content">
          <img src="https://placehold.co/533x570" alt="profile" className="img1" />
          <h1 className="stark">I’M IVAN STARK</h1>
          <div className="divelement">
            <img src={Element} alt="element" className="element" />
          </div>
        </div>

        <div className="h2-grid">
          <h2 className="h2-flex">
            // A DIGITAL DESIGNER //
            <CircleIcon sx={{ color: "black", fontSize: "50px" }} />
          </h2>
          <h2 className="h2-flex-2">
            <CircleIcon sx={{ color: "black", fontSize: "50px" }} />
            // A DIGITAL DESIGNER //
          </h2>
        </div>

        <p className="p">
          My approach is to help my clients to visualize and communicate the
          best of themselves.
        </p>
      </div>

      {/* Creative Journey Section */}
      <div className="creative">
        <h1 className="h1-creative">MY CREATIVE JOURNEY</h1>
        <img src="https://placehold.co/620x707" alt="creative" className="img" />

        <div className="stats-section">
          <div className="stats">
            <div className="stat">
              <div className="number">8</div>
              <div className="text">
                Years <br /> Experience
              </div>
            </div>

            <div className="stat2">
              <div className="number2">14</div>
              <div className="text2">
                Clients <br /> Worldwide
              </div>
            </div>
          </div>

          <div className="description">
            MY CREATIVE JOURNEY STARTED <br />
            IN ROME WHERE I STUDIED FOR THE <br />
            PAST YEARS.
          </div>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="pdiv">
        <p className="parag">
          I’ve been lucky to work with talented people and unique brands. Growth
          hacking sales learning curve stealth A/B testing ownership scrum
          project. Equity paradigm shift channels monetization startup buyer
          vesting period.
        </p>
        <p className="parag">
          My approach is to help my clients to visualize and communicate the
          best of themselves. Conversion prototype crowdfunding influencer early
          adopters launch party innovator creative niche market low hanging
          fruit.
        </p>
      </div>

      {/* Experience Section */}
      <div className="div-main-container">
        <div className="Ex-container">
          <div className="Ex-d">EXPERIENCE</div>

          <div>
            <div className="exper">
              <div className="vector">
                <h5 className="h5">2023-Present </h5>
                <p className="part">ART DIRECTOR </p>
              </div>
              <div>
                <button className="btnimg">
                  <img src={Buttonimage} alt="btn" />
                </button>
              </div>
              <h4 className="vector-pad">vectori </h4>
            </div>
          </div>

          <div>
            <div className="exper-ux">
              <div className="present-cont">
                <h5 className="present-color">2023-Present</h5>
                <h4 className="ux-h4">UX/UI Designer & Developer</h4>
              </div>
              <div className="acumen">Acumen</div>
            </div>
          </div>

          <div className="exper-ux">
            <div className="present-cont-2">
              <div className="present-1">
                <h5 className="present-color">2023 - Present</h5>
                <h4 className="ux-h4">Creative Developer</h4>
              </div>
            </div>
            <div className="acumen-2">Designify</div>
          </div>
        </div>

        {/* Business Section */}
        <div className="business">
          <p>
            Business plan seed money value proposition startup client direct
            mailing bootstrapping MVP success hypotheses gen-z pivot iteration
            ecosystem. Hackathon burn rate influencer business-to-business
            series A financing metrics low hanging fruit advisor alpha iPhone
            disruptive seed round.
          </p>
          <div className="btn-contain">
            <button className="Resume">DOWNLOAD RESUME</button>
            <div className="arrow">
              <ArrowForwardIcon sx={{ fontSize: "30px", color: "#D3FD06" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Selected Works Section */}
      <div className="select">
        <div className="select-main">
          <h2 className="select-h2">SELECTED WORKS</h2>
        </div>
        <div className="class2">
          <div>
            <img src="https://placehold.co/484x506" alt="work1" className="img2" />
          </div>
          <div>
            <img src="https://placehold.co/484x506" alt="work2" className="img2" />
          </div>
          <div>
            <img src="https://placehold.co/484x506" alt="work3" className="img3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
