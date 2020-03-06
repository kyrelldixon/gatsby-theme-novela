import React from "react"

import EmailForm from "./email-form"
import Quote from "./quote"

const PainPoint = () => (
  <section>
    <div style={{ marginTop: "-8rem" }}>
      <EmailForm />
    </div>
    <div className="container px-6 pb-12 md:px-12 lg:px-24 mx-auto text-md max-w-4xl">
      <Quote>At first I didn't know <em>what</em> to learn, but then there was too much I felt I <em>had</em> to learn.</Quote>
      <p className="mb-6">Three years ago I was a broke college student with no practical experience writing useful software.</p>
      <p className="mb-6">I was spending hours and hours on Google and Reddit with so many different questions like:</p>
      <ul className="mb-6 list-disc list-inside px-4">
        <li className="mb-2">What are the best programming languages to learn?</li>
        <li className="mb-2">How do I get a junior level software position?</li>
        <li className="mb-2">How to build websites for businesses?</li>
        <li className="mb-2">What language do you use to build apps?</li>
      </ul>
      <p className="mb-6">I was doing everything I could to figure out how to code. 
        I was reading blog posts, watching tutorials on Youtube, building projects
         based on free online courses, buying courses and software books, and even switched my major to computer science.</p>
      <p className="mb-6">I was definitely learning a ton, but none of it was practical. Nothing I was doing was making me any money.</p>
      <p className="mb-6">I thought that if I just kept learning and building projects, 
        one day I would be ready to source my first client or apply for a junior level software position.</p>
      <p>About a year into my coding journey the dream came true, 
        and I got my first software internship and started getting paid to solve real business problems.</p>
      <Quote>I realized that if I only had more direction I could have been getting paid to code so much sooner.</Quote>
      <p className="mb-6">That was when I began to realize how much time and money I could have saved. 
      I realized that if I only had more direction I could have been getting paid to code so much sooner.</p>
      <p>This book aims to be the satellite GPS for your software journey.
        This book is the resource I wish I had when I got started.</p>
    </div>
  </section>
)

export default PainPoint