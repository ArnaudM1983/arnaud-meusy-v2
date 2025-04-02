"use client";

import React, { FC, useEffect, useRef } from "react";
import Heading from "@/components/Heading";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiWordpress, SiPrismic, SiPhp, SiFigma } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "React", color: "#61DBFB", icon: <FaReact /> },
  { name: "Next.js", color: "#FFFFFF", icon: <SiNextdotjs /> },
  { name: "TypeScript", color: "#CAFE48", icon: <SiTypescript /> },
  { name: "TailwindCSS", color: "#38BDF8", icon: <SiTailwindcss /> },
  { name: "WordPress", color: "#F16529", icon: <SiWordpress /> },
  { name: "Prismic", color: "#FFFFFF", icon: <SiPrismic /> },
  { name: "PHP", color: "#9A7DFF", icon: <SiPhp /> }, 
  { name: "Figma", color: "#F24E1E", icon: <SiFigma /> },
];

const TechList: FC = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => (index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)),
        },
        {
          x: (index) => (index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)),
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" className="overflow-hidden" ref={component}>
      <div className="px-4 py-10 md:px-6 md:py-14 lg:py-16 mx-auto w-full max-w-7xl">
        <Heading size="lg" as="h2" className="text-slate-500">
          Technologies utilisées
        </Heading>
      </div>

      {techStack.map(({ name, color, icon }, index) => (
        <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700">
          {Array.from({ length: 15 }, (_, i) => (
            <React.Fragment key={i}>
              <span
                className="tech-item text-7xl font-extrabold uppercase tracking-tighter flex items-center gap-2"
                style={{ color: i === 7 ? color : "inherit" }}
              >
                {icon}
                {name}
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
