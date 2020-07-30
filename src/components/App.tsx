import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/App.scss";
import { fade } from "../utils/functions";
import Preloader from "./Preloader";
import GoToTopBtn from "./GoToTopBtn";
import SiteWrapper from "./SiteWrapper";
import MobileHeader from "./MobileHeader";
import SiteHeader from "./SiteHeader";
import MainContentArea from "./MainContentArea";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Facts from "./Sections/Facts";
import Services from "./Sections/Services";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Pricing from "./Sections/Pricing";
import Testimonials from "./Sections/Testimonials";
import Clients from "./Sections/Clients";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";

class App extends React.Component<Record<string, unknown>, undefined> {
  componentDidMount() {
    /*=========================================================================
        Preloader
    =========================================================================*/
    // $("#preloader").delay(350).fadeOut("slow");
    fade("out", 500, document.querySelector("#preloader"));

    document.querySelector(".menu-icon").addEventListener("click", function () {
      document.querySelector("header.left").classList.toggle("open");
      document
        .querySelectorAll(".mobile-header, main.content")
        .forEach((el) => el.classList.toggle("push"));
    });

    document
      .querySelector("main.content, header.left button.close")
      .addEventListener("click", function () {
        document.querySelector("header.left").classList.remove("open");
        document
          .querySelectorAll(".mobile-header, main.content")
          .forEach((el) => el.classList.remove("push"));
      });

    /*=========================================================================
     Add (nav-link) class to main menu.
     =========================================================================*/
    document.querySelector(".vertical-menu li a").classList.add("nav-link");

    /*=========================================================================
     Progress bar animation with Waypoint JS
     =========================================================================*/
    document.querySelectorAll(".progress-bar").forEach((el) => {
      const bar_value = el.getAttribute("aria-valuenow") + "%";
      el.setAttribute("style", `width: ${bar_value}`);
    });

    /*=========================================================================
     Background Image with Data Attribute
     =========================================================================*/
    const bg_img = document.getElementsByClassName("background");

    for (let i = 0; i < bg_img.length; i++) {
      const src = bg_img[i].getAttribute("data-image-src");
      bg_img[i].setAttribute("style", `backgroundImage: url(${src}); `);
    }

    /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
    const list = document.getElementsByClassName("spacer");

    for (let i = 0; i < list.length; i++) {
      const size = list[i].getAttribute("data-height");
      list[i].setAttribute("style", `height:${size}px`);
    }
  }

  public render() {
    return (
      <>
        <Preloader />
        <SiteWrapper>
          <MobileHeader />
          <SiteHeader />

          <MainContentArea>
            <Hero />

            <About />

            <Skills />

            <Facts />

            <Services />

            <Experience />

            <Works />

            <Pricing />

            <Testimonials />

            <Clients />

            <Blog />

            <Contact />
          </MainContentArea>
        </SiteWrapper>
        <GoToTopBtn />
      </>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
