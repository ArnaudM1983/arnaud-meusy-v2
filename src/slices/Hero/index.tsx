"use client";

import { FC } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Shapes from "./Shapes";
import Header from "@/components/Header";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {

  const component = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(".name-animation", {
        x: -100, opacity: 0, rotate: -10
      },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          }
        }
      );

      tl.fromTo(".job-title", {
        y: 20, opacity: 0, scale: 1.2
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: "elastic.out(1,0.3)",
      }
      );

    }, component)
    return () => ctx.revert();
  }, []);


  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>
        {letter}
      </span>
    ))

  }

  return (
    <section id="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component} className="px-4 py-10 md:px-6 md:py-14 lg:py-16 mx-auto w-full max-w-7xl min-h-screen"
    >
      <Header />
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center mt-16">
        <Shapes />
        <div className="col-start-1 md:row-start-1">
          <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={slice.primary.prenom + " " + slice.primary.nom}>
            <span className="block text-slate-300">{renderLetters(slice.primary.prenom, "first")}</span>
            <span className="-mt-[0,2em] block text-slate-500">{renderLetters(slice.primary.nom, "first")}</span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl 
          font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-5xl">{slice.primary.accroche}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
