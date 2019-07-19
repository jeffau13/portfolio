import React from "react"

import Layout from "../components/Layout"
import SideBar from "../components/SideBar"

import Scroll from "../components/Scroll"

const sections = [
  { id: "top", name: "Intro", icon: "fa-home" },
  { id: "portfolio", name: "Portfolio", icon: "fa-th" },
  { id: "about", name: "About Me", icon: "fa-user" },
  { id: "contact", name: "Contact", icon: "fa-envelope" },
]

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <section id="top" className="one dark cover">
      <div className="container">
        <header>
          <h2 className="alt">
            <span role="img" aria-label="wave">
              👋
            </span>
            , I'm Jeff
            <br />
            Welcome to my portfolio!
          </h2>
          <p>I am a javascript developer. Check out my work below</p>
        </header>

        <footer>
          <Scroll type="id" element={"portfolio"}>
            <a href="#portfolio" className="">
              Show me
            </a>
          </Scroll>
        </footer>
      </div>
    </section>

    <section id="portfolio" className="two">
      <div className="container">
        <header>
          <h2>Portfolio</h2>
        </header>

        <p>
          Life will feel it is always a great need for eu valley, the valley CNN
          ridiculous smile at any time chat mainstream clinical homes. Mauris
          floor was very warm and we need it. One customer now nibh Bureau dark
          pools behavior.
        </p>
      </div>
    </section>

    <section id="about" className="three">
      <div className="container">
        <header>
          <h2>About Me</h2>
        </header>

        <a href="/#" className="image featured">
          {/* <img src={} alt="" /> */}
        </a>

        <p>
          Developers football competition in diameter big price to layer the
          pot. Chavez ultricies care who wants to CNN. Lobortis elementum
          aliquet eget a den of which they do not hold it in hatred developers
          nor the mountains of the deposit slip. The element of time, sem ante
          ullamcorper dolor nulla quam placerat viverra environment is not with
          our customers. Free makeup and skirt until the mouse or partners or to
          decorate each targeted.
        </p>
      </div>
    </section>

    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
        </header>

        <p>
          The element of time, sem ante ullamcorper dolor nulla quam placerat
          viverra environment is not with our customers. Free makeup and skirt
          until the mouse. Japan this innovative and ultricies carton salad
          clinical ridiculous now passes from enhanced. Mauris pot innovative
          care for my pain.
        </p>

        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </section>
    <section id="test">
      <div className="container">
        <header>
          <h2>Tester</h2>
        </header>
      </div>
    </section>
  </Layout>
)

export default IndexPage
