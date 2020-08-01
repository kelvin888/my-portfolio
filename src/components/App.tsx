import React from "react";
import { hot } from "react-hot-loader";

import Preloader from "./Preloader";
import GoToTopBtn from "./GoToTopBtn";
import SiteWrapper from "./SiteWrapper";
import MobileHeader from "./MobileHeader";
import SiteHeader from "./SiteHeader";
import MainContentArea from "./MainContentArea";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Facts from "./Sections/Facts/Facts";
import Services from "./Sections/Services";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Pricing from "./Sections/Pricing";
import Testimonials from "./Sections/Testimonials";
import Clients from "./Sections/Clients";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";
import { initializePage } from "../utils/pageControls";

import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  componentDidMount() {
    initializePage();
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

            {/* <Pricing />

            <Testimonials /> */}

            <Clients />

            {/* <Blog /> */}

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
