"use client"

import Nav from "@/components/Nav"
import Transition from "@/components/common/Transition"
import Marquee from "react-fast-marquee"

const NotFound = () => {
  return (
    <Transition>
        <main>
            <Nav />
            <section className="relative z-[-10] min-h-[50vh] lg:min-h-[100dvh] flex items-center justify-center mt-[5rem]">
            <div>
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl lg:text-8xl xl:text-9xl">This page doesn't exist.</h1>
              <Marquee>
                <p className="pc text-9xl overflow-y-hidden opacity-5">
                Not Found 404 Not Found 404 Not Found 404
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee direction="right" speed={40}>
                <p className="pc text-9xl overflow-y-hidden opacity-5">
                Not Found 404 Not Found 404 Not Found 404
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee>
                <p className="pc text-9xl overflow-y-hidden opacity-5">
                Not Found 404 Not Found 404 Not Found 404
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee direction="right" speed={40}>
                <p className="pc text-9xl overflow-y-hidden opacity-5">
                Not Found 404 Not Found 404 Not Found 404
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee>
                <p className="pc text-9xl overflow-y-hidden opacity-5">
                Not Found 404 Not Found 404 Not Found 404
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              </div>
            </section>
        </main>
    </Transition>
  )
}

export default NotFound