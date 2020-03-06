import React from "react"

import SectionHeader from "./section-header"
import EmailForm from "./email-form"

const WhatYouLearn = () => (
  <section className="container px-6 pb-12 md:px-12 lg:px-24 mx-auto text-md max-w-4xl">
    <SectionHeader>What You'll Learn</SectionHeader>
    <p className="mb-6">This course walks you step-by-step through each major break point in your career.</p>
    <p className="mb-6">It covers topics like:</p>
    <ul className="px-4 list-disc list-inside mb-6">
      <li className="mb-2">Crafting the mindset you need to maximize your success</li>
      <li className="mb-2">Finding the sweet spot between your skills and making money</li>
      <li className="mb-2">Picking the perfect portfolio projects to get you paid</li>
      <li className="mb-2">How to passively get clients and recruiters with minimal effort</li>
      <li>Networking effectively to fast-forward your journey</li>
    </ul>
    <p className="mb-6">...and much more.</p>
    <p className="mb-6">(This course is currently in development, so more details will be added later.)</p>
    <EmailForm />
  </section>
)

export default WhatYouLearn