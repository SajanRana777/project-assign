import React from "react";
import "../Nav/page.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";
import { FiDollarSign } from "react-icons/fi";

const Page = () => {
  return (
    <section className="container">
      {/* Top Navigation */}
      <div className="Na">
        <div>
          <img src="/side.png" className="twoline" alt="twoline" />
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
          <img
            src="https://placehold.co/533x570"
            alt="profile"
            className="img1"
          />
          <h1 className="stark">I’M IVAN STARK</h1>
          <div className="divelement">
            <img src="/element.png" alt="element" className="element" />
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
        <img
          src="https://placehold.co/620x707"
          alt="creative"
          className="img"
        />

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

          <div className="border">
            <div className="exper">
              <div className="vector">
                <h5 className="h5">2023-Present </h5>
                <p className="part">ART DIRECTOR </p>
              </div>
              <div>
                <button className="btnimg">
                  <img src="/btn.png" alt="btn" />
                </button>
              </div>
              <h4 className="vector-pad">vectori </h4>
            </div>
          </div>

          <div className="border2">
            <div className="exper-ux">
              <div className="present-cont">
                <h5 className="present-color">2023-Present</h5>
                <h4 className="ux-h4">UX/UI Designer & Developer</h4>
              </div>
              <div className="acumen">Acumen</div>
            </div>
          </div>
          <div className="border2">
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
        </div>

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
            <img
              src="https://placehold.co/484x506"
              alt="work1"
              className="img2"
            />
          </div>
          <div>
            <img
              src="https://placehold.co/484x506"
              alt="work2"
              className="img2"
            />
          </div>
        </div>
        <div className="btn-clients">
              <button className="btn1">
                <KeyboardArrowLeftIcon sx={{fontSize:"50px", }} />
              </button>
              <button className="btn3">
                <KeyboardArrowRightIcon sx={{fontSize:"50px", color:"#D3FD06" }} />
              </button>
            </div>
      </div>

      <div className="graphic-main">
        <div className="graphic">
          <p className="graphic-p">01</p>
          <h2 className="graphic-h">GRAPHIC DESIGN</h2>
        </div>
        <img className="imagepic2" src="/Image.png" alt="#"></img>
      </div>

      <div className="graphic1-main">
        <div className="graphic1">
          <p className="graphic-p1">02</p>
          <h2 className="graphic-h1">ART DIRECTION</h2>
        </div>
      </div>

      <div className="brand2-main">
        <div className="brand2">
          <p className="brand-p2">03</p>
          <h2 className="brand-h2">BRAND STRATEGY</h2>
        </div>
      </div>
      <div className="motion3-main">
        <div className="motion3">
          <p className="motion-p3">04</p>
          <h2 className="motion-h3">MOTION</h2>
        </div>
      </div>

      <div>
        <div className="clients-main">
          <div className="clients">
            <h2 className="clients-h">MY CLIENTS</h2>

            <div className="btn-clients">
              <button className="btn1">
                <ArrowBackIosIcon  sx={{fontSize:"50px"}}/>
              </button>
              <button className="btn3">
                <ArrowForwardIosIcon sx={{fontSize:"50px", color:"#D3FD06" }}/>
              </button>
            </div>
          </div>
          <div className="fleximg">
            <div>
              <img
                src="https://placehold.co/483x480"
                alt="profile"
                className="imgup"
              />
            </div>
            <div className="p-img">
              <p className="p-bg">
                long tail equity interaction design creative. Deployment
                paradigm shif rockstar sales supply chain twitter. Monetization
                succses customer iteration iPad early adopters. Research &
                development A/B testing gen-z stock ramen creative leverage
                early adopters branding innovator pivot.
              </p>
              <div className="p-name">
                <p className="roby"> Roby Gala</p>
                <p className="slaes">President of Sales</p>
              </div>
              <div className="vector">
                <img src="/Vector.png" className="vector-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reach-main">
        <div className="reach">
          <h1>HOW TO REACH ME</h1>
        </div>
        <div className="p-reach">
          <div className="p-reach-main">
            <p>
              Advisor leverage infographic influencer. Equity business plan
              virality monetization lean startup validation conversion seed
              round hackathon crowdsource entrepreneur low hanging fruit
              ecosystem buzz.
            </p>
          </div>
          <div className="add-main">
            <p className="p-address">Address</p>
            <p className="p-via">VIA FRANCESCO DEL GUIDICE 86 ROME, ITALY</p>
            <p className="p-address">CALL</p>
            <p className="p-via">(862) 258-1210</p>
          </div>

          
            
          
          <div className="follow-main">
            <p className="p-address">Follow Me</p>
            <p className="p-via"> BEHANCE DRIBBLE LINKEDIN INSTAGRAM </p>
          </div>
        </div>
      </div>

      <div className="line"></div>
      <footer className="footer-main">
        <p>© Ivan Stark. All rights reserved</p>
        <p>Privacy Policy</p>
      </footer>
    </section>
  );
};

export default Page;
