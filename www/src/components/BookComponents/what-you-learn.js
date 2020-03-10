import React from "react"

import SectionHeader from "./section-header"
import EmailForm from "./email-form"

const WhatYouLearn = () => (
  <section className="container px-6 pt-24 pb-12 md:px-24 mx-auto text-lg max-w-xl md:max-w-4xl">
    <SectionHeader>What You'll Learn</SectionHeader>
    <p className="mb-6">This guide walks you step-by-step through everything you need to know to save time and money while learning the exact skills you need to build websites.</p>
    <p className="mb-6">It covers topics like:</p>
    <ul className="px-4 list-disc list-inside mb-6 text-gray-900">
      <li className="mb-4">The fundamental development skills and concepts you need to be succesful</li>
      <li className="mb-4">Why code isn't enough to build your business</li>
      <li className="mb-4">The secrets to rapidly learning development skills that last</li>
      <li className="mb-4">How to turn your website into a mobile app with just a few lines of code</li>
      <li className="mb-4">How to determine if it's time to hire a developer</li>
      <li className="">The tools developers use to host infinitely scalable websites for free</li>
    </ul>
    <p className="mb-6">...and much more.</p>
    <EmailForm />
  </section>
)

export default WhatYouLearn