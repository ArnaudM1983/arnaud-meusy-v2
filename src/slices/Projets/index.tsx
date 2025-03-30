import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Projets`.
 */
export type ProjetsProps = SliceComponentProps<Content.ProjetsSlice>;

/**
 * Component for "Projets" Slices.
 */
const Projets: FC<ProjetsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for projets (variation: {slice.variation}) Slices
    </section>
  );
};

export default Projets;
