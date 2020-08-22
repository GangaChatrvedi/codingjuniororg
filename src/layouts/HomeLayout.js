// src/layouts/index.js

import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Team from "../components/team"
import Promoters from "../components/Promoters";
import WatchVideosView from "../components/WatchVideos";
import CTA from "../components/cta"
import React from "react"
import { graphql } from "gatsby"
import Domains from "../components/domains";
import Choices from "../components/choices";


const HomeLayout = ({ data }) => (
  <React.Fragment>
    <Header logoImage={ data.logoImage } />
    <Hero />
    <Promoters associationImages={ data.associationImages } />
    <Domains domainImages = { data.domainImages } />
    <Choices choiceImages = { data.choiceImages } />

    <Team teamImages={ data.teamImages } />


    <WatchVideosView />
    <CTA />
    <Footer logoImage={ data.logoImage } />
  </React.Fragment>
  );
  
  export default HomeLayout;
