import React from "react";
import Typical from "react-typical";
import Image from "./../assets/Home/profilephoto.png";
import Layout from "./../component/layout";
import Logo from "./../logo/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "./Home.css";
// // import homepng from "./../images/homepng.png";
// const Home = () => {
//   return (
//     // <div className="home_con">
//     //   {" "}
//     //   !
//     //   {/* <img
//     //     sr={require("./../images/homepng.png").default}
//     //     height={200}
//     //     width={200}
//     //   /> */}
//     // </div>
//     <div>
//       <div className="home-page">
//         <img src={homepng} alt="" className="homepng-img" />
//       </div>{" "}
//     </div>
//   );
// };
// export default Home;
export default function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {/* <Layout /> */}
      <div className="Home-container">
        <div className="Home-parent">
          <div className="Home-details">
            <div className="Home-details-name">
              <span className="primary-text1">
                {" "}
                Hello, I'M <span className="highlighted-text">Genie</span>
              </span>
            </div>
            <div className="Home-details-role">
              <span className="primary-text2">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Confused? 🎫",
                      2000,
                      "Managment 🎯",
                      2000,
                      "Why ⏰",
                      2000,
                      "Happy ⏰",
                      2000,
                      "Time ⏰",
                      2000,
                    ]}
                  />
                </h1>
                <span className="Home-role-tagline">
                  Take care of the minutes and the hours will take care of
                  themselves.
                </span>
              </span>
            </div>
            {/* <div className="Home-options"> */}
            {/* <button className="btn primary-btn">{""}Get Started </button> */}
            <Link to={user ? "/task" : "/signin"}>
              <button className="btn btn--white">Lets Go</button>
            </Link>
            {/* </div> */}
          </div>
          <div className="Home-picture">
            <div className="Home-picture-background">
              <img src={Image} className="Home-picture-background-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="u-center-text u-margin-bottom-big u-margin-top-big">
        <h2 class="heading-secondary">Organize Your Potential </h2>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Contact Us
                </span>
              </h4>
              <div class="card__details">
                <span>
                  Liked the website?? Or Wanna Contribute Or Suggest something?
                  Drop us a message...
                </span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <Link to={"/contactus"}>
                  <button className="btn btn--white">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2">
                  Planner
                </span>
              </h4>
              <div class="card__details">
                <span>
                  Focus on what matters now Your to-do list keeps track of your
                  priorities and shows you the best task to focus on next.It's
                  the best way to manage your time and achieve your targets.
                </span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <Link to={user ? "/task" : "/signin"}>
                  <button className="btn btn--white">Exlpore</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--3">
                  Calender
                </span>
              </h4>
              <div class="card__details">
                <span>
                  A calendar that is sure to become your best friend. Calendar
                  events and tasks in a single view help you manage your day,
                  week, and month.
                </span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <Link to={user ? "/calendar" : "/signin"}>
                  <button className="btn btn--white">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footer__logo-box">
          {/* <picture class="footer__logo">
            <source
              srcset="../images/logo.png 1x"
              media="(max-width: 37.5em)"
            /> */}
          <img src={Logo} alt="Full logo" className="footer__logo" />
          {/* </picture> */}
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">
                  <Link to={"/about"} className="footer__link">
                    Company
                  </Link>
                </li>
                <li class="footer__item">
                  <Link to={"/contactus"} className="footer__link">
                    Contact us
                  </Link>
                </li>
                {/* <li class="footer__item">
                  <a to="#" class="footer__link">
                    Carrers
                  </a>
                </li> */}
                <li class="footer__item">
                  <Link to={"#"} className="footer__link">
                    Privacy policy
                  </Link>
                </li>
                <li class="footer__item">
                  <Link to={"#"} className="footer__link">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Built by{" "}
              <Link to={"#"} className="footer__link">
                Pragya, Shivam and Lakshay
              </Link>{" "}
              as their{" "}
              <Link to={"#"} className="footer__link">
                Winter Project
              </Link>
              . Copyright &copy; by Busy Genie Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
