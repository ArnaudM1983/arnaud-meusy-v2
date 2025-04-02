import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { asLink } from "@prismicio/helpers";

/**
 * Props for `Projets`.
 */
export type ProjetsProps = SliceComponentProps<Content.ProjetsSlice>;

/**
 * Component for "Projets" Slices.
 */
const Projets: FC<ProjetsProps> = ({ slice }) => {
  return (
    <section id="projets"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:px-6 md:py-14 lg:py-16 mx-auto w-full max-w-7xl min-h-screen"
    >
      {/* Titre principal */}
      <Heading size="lg" className=" text-slate-500 mb-12" as="h2">
        {slice.primary.heading}
      </Heading>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center ">
        {slice.primary.card.map((item, index) => {
          const projectLink = asLink(item.link); // Convertir le lien Prismic en URL

          return (
            <div
              key={index}
              className="bg-slate-900 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 w-full max-w-[400px]"
            >
              {/* Image du projet */}
              <PrismicNextImage
                field={item.image}
                width={400}
                height={250}
                imgixParams={{ q: 75 }}
                alt=""
                className="w-full h-60 object-cover"
              />

              {/* Contenu de la card */}
              <div className="p-5">
                {/* Titre du projet */}
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>

                {/* Description */}
                <p className="prose prose-sm prose-slate prose-invert mb-6 ">{item.description}</p>


                {/* Icônes et lien */}
                <div className="flex justify-between ">
                  <div className="flex items-center gap-1">
                    <PrismicNextImage
                      field={item.icone1}
                      width={30}
                      height={30}
                      imgixParams={{ q: 75 }}
                      alt=""
                      className="object-cover"
                    />
                    <PrismicNextImage
                      field={item.icone2}
                      width={30}
                      height={30}
                      imgixParams={{ q: 75 }}
                      alt=""
                      className="object-cover"
                    />
                    <PrismicNextImage
                      field={item.icone3}
                      width={30}
                      height={30}
                      imgixParams={{ q: 75 }}
                      alt=""
                      className="object-cover"
                    />
                    <PrismicNextImage
                      field={item.icone4}
                      width={30}
                      height={30}
                      imgixParams={{ q: 75 }}
                      alt=""
                      className="object-cover"
                    />
                  </div>
                  {projectLink && (
                    <Link
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-md font-medium flex items-center gap-1 hover:text-yellow-300"
                    >
                      Voir le site →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projets;
