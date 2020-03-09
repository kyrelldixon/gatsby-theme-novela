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
    <section className="bg-indigo-800 text-white">
      <div className="container mx-auto text-center pt-16 pb-48">
        <div className="mb-16 px-12">
          {comingSoonTransition.map(({ item, key, props }) =>
            item && <animated.p className="mb-4 font-bold text-gray-400 uppercase tracking-wide" key={key} style={props}>Coming Soon</animated.p>
          )}
          <h1 className="mb-8 text-3xl font-semibold">Build websites that will get you paid,&nbsp;
            <span className="text-blue-400">without years of experience.</span></h1>
          <h2 className="text-lg text-gray-200">Learn how to turn side-projects and websites into profit by following a step-by-step process for developers at all levels.</h2>
        </div>
        {bookTransition.map(({ item, key, props }) =>
          item && <animated.div className="mb-4 font-bold text-gray-400 uppercase tracking-wide" key={key} style={props}><Book /></animated.div>
        )}
      </div>
    </section>
  )
}

export default Hero