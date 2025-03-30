"use client"

import React, { FC, useEffect, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList: FC<TechListProps> = ({ slice }) => {

  const component = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        }
      })

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400)
          }
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400)
          }
        }
      )
    }, component)
    return () => ctx.revert()
  })

  return (
    <section id="tech"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
      ref={component}
    >
      <div className="px-4 py-10 md:px-6 md:py-14 lg:py-16 mx-auto w-full max-w-7xl">
        <Heading size="lg" as="h2" className=" text-slate-500">
          {slice.primary.heading}
        </Heading>
      </div>

      {slice.primary.tech.map(({ tech_name, tech_color }, index) => (
        <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700" aria-label={tech_name || undefined}>
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span className="tech-item text-7xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit"
                }}>
                {tech_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;



// import React, { FC } from "react";
// import Heading from "@/components/Heading";
// import { FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// const techStack = [
//   { name: "React", color: "#61DBFB", icon: <FaReact /> },
//   { name: "Tailwind", color: "#38B2AC", icon: <SiTailwindcss /> },
//   { name: "Next.js", color: "#000000", icon: <SiNextdotjs /> },
// ];

// const TechList: FC = () => {
//   return (
//     <section id="tech" className="overflow-hidden">
//       <div className="px-4 py-10 md:px-6 md:py-14 lg:py-16 mx-auto w-full max-w-7xl">
//         <Heading size="lg" as="h2" className="text-slate-500">
//           Technologies utilisées
//         </Heading>
//       </div>

//       {techStack.map(({ name, color, icon }, index) => (
//         <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700">
//           {Array.from({ length: 15 }, (_, i) => (
//             <React.Fragment key={i}>
//               <span
//                 className="tech-item text-7xl font-extrabold uppercase tracking-tighter flex items-center gap-2"
//                 style={{ color: i === 7 ? color : "inherit" }}
//               >
//                 {icon}
//                 {name}
//               </span>
//             </React.Fragment>
//           ))}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default TechList;

