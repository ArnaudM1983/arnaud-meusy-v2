import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { MdCircle } from "react-icons/md";


/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList: FC<TechListProps> = ({ slice }) => {
  return (
    <section id="tech"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:px-6 md:py-14 lg:py-16 mx-auto w-full max-w-7xl min-h-screen"
    >
      <Heading size="lg" as="h2" className=" text-slate-500">
        {slice.primary.heading}
      </Heading>
      {slice.primary.tech.map(({ tech_name, tech_color }, index) => ( 
        <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700">
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span className="tech-item text-7xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit"
                }}>
                {tech_name}
              </span>
              <span>
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




