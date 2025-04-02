"use client";

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Heading from "./Heading";
import clsx from "clsx";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_kn45rnn",
        "template_j22tpy7",
        form.current,
        {
          publicKey: "x7Ec7giCQPSqh20_D",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset();
          alert("Email envoyé !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="px-4 py-10 md:px-6 md:py-14 lg:py-16 mx-auto w-full max-w-7xl min-h-screen">
      <Heading size="lg" className="text-slate-500 mb-12" as="h2">
        Contactez-moi
      </Heading>
      <div className="text-white text-2xl mb-10">
        N'hésitez pas à me contacter pour en savoir plus
      </div>
      <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
        {/* Champ Nom */}
        <div className="relative">
          <input
            type="text"
            name="your_name"
            placeholder="Votre nom"
            required
            className="w-full bg-transparent border-b border-white text-white outline-none p-2 placeholder-gray-300"
          />
        </div>

        {/* Champ Email */}
        <div className="relative">
          <input
            type="email"
            name="your_email"
            placeholder="Votre mail"
            required
            className="w-full bg-transparent border-b border-white text-white outline-none p-2 placeholder-gray-300"
          />
        </div>

        {/* Champ Message */}
        <div className="relative">
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="w-full bg-transparent border-b border-white text-white outline-none p-2 placeholder-gray-300 resize-none"
            rows={4}
          ></textarea>
        </div>

        {/* Bouton Envoyer avec le style demandé */}
        <div className="text-center">
          <button
            type="submit"
            className={clsx(
              "group relative flex w-fit mx-auto items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
            )}
          >
            <span
              className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            />
            <span className="relative flex items-center justify-center gap-2 text-slate-900">
              Envoyer
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
