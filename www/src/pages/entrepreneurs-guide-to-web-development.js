import React from "react";

import Layout from "../components/BookComponents/layout"
import HeroSection from "../components/BookComponents/hero"
// import PainPoint from "../components/BookComponents/pain-point"
import WhatYouLearn from "../components/BookComponents/what-you-learn"
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";

const BookLandingPage = () => (
  <Layout>
    <SEO title="The Entrepreneur's Guide to Web Development" />
    <HeroSection />
    {/* <PainPoint /> */}
    <WhatYouLearn />
  </Layout>
);

export default BookLandingPage;


