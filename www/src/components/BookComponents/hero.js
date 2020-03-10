import React, { useRef } from "react"
import { useTransition, animated, config, useChain } from "react-spring";

import Book from "./book"

const Hero = () => {
  const comingSoonRef = useRef()
  const comingSoonTransition = useTransition(true, null, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)', },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)', },
    ref: comingSoonRef,
  })

  const bookRef = useRef()
  const bookTransition = useTransition(true, null, {
    config: config.stiff,
    from: { transform: 'scale(0)', },
    enter: { transform: 'scale(1)', },
    ref: bookRef,
  })

  useChain([comingSoonRef, bookRef], [0, 0.33])

  return (
    <section className="bg-black text-grey-100">
      <div className="flex flex-col items-center mx-auto lg:flex-row-reverse lg:text-right lg:pt-32 text-center pt-16 pb-32 md:px-12 max-w-6xl">
        <div className="flex flex-col items-center justify-between lg:items-end mb-16 px-12 max-w-2xl mx-auto">
          {comingSoonTransition.map(({ item, key, props }) =>
            item && <animated.p className="mb-10 font-bold text-grey-400 uppercase tracking-wide" key={key} style={props}>Coming Soon</animated.p>
          )}
          <h1 className="mb-12 text-4xl font-semibold lg:text-5xl leading-snug">Build websites that will get you paid,&nbsp;
            <span className="text-yellow-400">without years of experience.</span></h1>
          <h2 className="text-lg text-grey-300 max-w-sm">Learn how to code landing pages and websites that drive traffic and revenue to your business.</h2>
        </div>
        {bookTransition.map(({ item, key, props }) =>
          item && <animated.div className="mb-4 font-bold text-grey-400 uppercase tracking-wide" key={key} style={props}><Book /></animated.div>
        )}
      </div>
    </section>
  )
}

export default Hero