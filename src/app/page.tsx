'use client'

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-full overflow-y-hidden m-3">

        <p className="text-2xl md:text-4xl lg:text-6xl text-center text-orange-300 font-extrabold border rounded-lg px-7 py-5 shadow-lg">
            <TypeAnimation
              sequence={[
                'Welcome to my Portfolio!',
                1000,
                '',
                1000,
                'Sorry but for the current time the website is down :(',
                1000,
                '',
                1000,
                'My name is Tariq btw :)',
                1000,
                '',
                1000,
                'Here are my skills for the time.',
                1000,
                '',
                1000,
                'I am a full-stack developer',
                1000,
                '',
                1000,
                'For the front end I usually NextJS (built on react.js).',
                1000,
                '',
                1000,
                'For the backend I usually use NodeJS and expresJS.',
                1000,
                '',
                1000,
                'A professional clean coder!',
                1000,
                '',
                1000,
                'And here is everything!',
                1000,
                '',
                1000,
                'Hope you enjoyed your stay!',
                1000,
                '',
                1000,
                '',
                1000
              ]}
              speed={25}
              deletionSpeed={65}
              repeat={Infinity}
            />
        </p>

      </div>
    </>
  )
}
