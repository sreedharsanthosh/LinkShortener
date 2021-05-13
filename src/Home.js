import React from "react";
import "./Home.css";
import icon1 from "./images/icon-brand-recognition.svg";
import icon2 from "./images/icon-detailed-records.svg";
import icon3 from "./images/icon-fully-customizable.svg";
import introImg from "./images/illustration-working.svg";
import instagram from "./images/icon-instagram.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: String,
      res: null,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${this.state.link}/`)
      .then((res) => {
        console.log(res);
        this.setState({ res: res.data });
      })
      .catch((err) => console.log(err));
  }
  onHamburgerClick() {
    document.querySelector("nav").classList.toggle("nav-active");
  }
  render() {
    return (
      <div>
        <div className="hamburger" onClick={this.onHamburgerClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav>
          <h1>Shortly</h1>
          <ul className="nav-links">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className="sign-in">
            <button className="login">Login</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </nav>
        <div className="home">
          <div className="home-text">
            <h1> More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="start">Get started</button>
          </div>
          <img src={introImg} alt="INtro-img" className="intro-img" />
        </div>
        <div className="input-section">
          <div className="input-box">
            <input
              type="text"
              name="url"
              id="url"
              placeholder="Shorten a link here..."
              onChange={(e) => {
                this.setState({ link: e.target.value });
                console.log(this.state.link);
              }}
            />
            <button className="submit" onClick={this.onClick}>
              Shorten it!
            </button>
          </div>
          {this.state.res ? (
            <ul className="links">
              <li>{this.state.res.result.full_short_link}</li>
              <li>{this.state.res.result.full_short_link2}</li>
            </ul>
          ) : (
            console.log("")
          )}
        </div>
        <div className="statistics">
          <div className="stati-text">
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="container">
            <div className="card">
              <img src={icon1} alt="" />
              <div className="card-text">
                <h1>Brand Recognition</h1>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={icon2} alt="" />
              <div className="card-text">
                <h1> Detailed Records</h1>
                <p>
                  {" "}
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={icon3} alt="" />
              <div className="card-text">
                <h1>Fully Customizable</h1>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <h1>Boost your links today</h1>
          <button className="start big-start">Get started</button>
        </div>
        <footer>
          <h1 className="logo">Shortly</h1>
          <ul className="features">
            <li>Link shortening</li>
            <li>Branded links</li>
            <li>Analytics</li>
          </ul>
          <ul className="resources">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <ul className="company">
            <li>About</li>
            <li>Our teem</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <div className="icons">
            <img src={instagram} alt="" className="icon" />
            <img src={facebook} alt="" className="icon" />
            <img src={twitter} alt="" className="icon" />
            <img src={pinterest} alt="" className="icon" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
