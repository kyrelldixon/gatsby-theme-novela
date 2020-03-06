import React from "react"
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Book = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div 
      className="text-gray-700 bg-gray-200 w-64 h-auto mx-auto flex flex-row shadow-lg rounded-sm"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
      <div className="w-4 border-r border-gray-400"></div>
      <div className="flex flex-col justify-end text-left px-8 py-8">
        <h1 className="text-blue-500 text-2xl pb-1 font-semibold">Make Money With Code</h1>
        <h2 className="text-sm pt-2 pb-24">A Complete Guide to Kickstart your Tech Career in 30 days</h2>
        <p className="text-xs text-left"><span className="text-blue-600">by&nbsp;</span>Kyrell Dixon</p>
      </div>
    </animated.div>
  )
}

export default Book