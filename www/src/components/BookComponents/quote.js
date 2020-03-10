import React from "react"

const Quote = ({ children }) => (
  <div className="py-12 text-grey-800 font-serif text-5xl leading-none text-center">
    <span className="relative top-1">“</span>
    <p className="font-bold text-3xl inline px-1">{children}</p>
    <span className="relative -bottom-1">”</span>
  </div>
)

export default Quote