"use client"

import Link from "next/link"

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
  return (
    <footer className="relative mt-[5rem] mb-[2.5rem] b__top text-lg margin__setter pc"
    >
      <div className="flex items-center justify-between pt-1">
        <p className="hc font-medium">William.Jones</p>
        <ul className="flex items-center justify-between gap-10 px-4 py-1 rounded-2xl">
          <li className="lg:text-lg">
            <button className="hover:opacity-50 transition-all duration-200" onClick={scrollTop}>Back to top</button>
          </li>
          <li className="lg:block">
            <Link className="hidden lg:block hover:opacity-50 transition-all duration-200" href={"/projects"}>Projects</Link>
          </li>
          <li className="">
            <Link className="hover:opacity-50 transition-all duration-200" href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      {Array.from({ length: 5 }, (_, index) => (
          <div
          className="global__bg"
            key={index}
            style={{
              width: '100%',
              marginTop: "1rem",
              height: `${1 + 0.5 * index}px`, 

            }}
          />
        ))}
    </footer>
  )
}

export default Footer