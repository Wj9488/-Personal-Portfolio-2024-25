"use client";

import Link from "next/link";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
      <footer className="relative pt-[5rem] mb-[2.5rem] text-lg padding__setter pc">
        <div className="flex items-center justify-between pt-1 b__top">
          <p className="font-medium">William.<span className="hc">Jones</span></p>
          <ul className="flex items-center justify-between gap-2 lg:gap-10 px-4 py-1 rounded-2xl">
            <li className="lg:text-lg">
              <p
                className="hover:opacity-50 hover:cursor-pointer transition-all duration-200"
                onClick={scrollTop}
              >
                Back to top
              </p>
            </li>
            <li className="lg:block">
              <Link
                className="hidden lg:block hover:opacity-50 transition-all duration-200"
                href={"/projects"}
              >
                Projects
              </Link>
            </li>
            <li className="">
              <Link
                className="hover:opacity-50 transition-all duration-200"
                href={"/about"}
              >
                About
              </Link>
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
  );
};

export default Footer;
