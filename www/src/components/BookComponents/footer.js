import React from "react"

import SocialIcons from "./social-icons"

const Footer = () => (
  <footer className="text-grey-800 container mx-auto flex flex-col justify-center items-center py-4">
    <SocialIcons />
    {/* <div className="flex flex-row">
      <p className="px-3">
        © {new Date().getFullYear()} Make Money With Code
      </p>
      <p>
        Made by <a href="https://www.kyrelldixon.com" target="_blank" rel="noopener noreferrer">Kyrell Dixon,</a> Built with
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer"> Gatsby</a>
      </p>
    </div> */}
  </footer>
)

export default Footer