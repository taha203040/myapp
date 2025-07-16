import React from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Sections1 = () => {
  return (
    <section className="h-screen flex flex-col">
      <NavBar />
      <article
        className={`flex flex-1 flex-col items-center justify-center text-center space-y-6 px-4 `}
      >
        <h1
          className={`text-lg/7 md:text-6xl font-bold max-w-4xl ${ibmPlexMono.className}`}
        >
          Transforming Ideas into Scalable Digital Solutions
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed">
          At Rabia Solutions, we empower you to create stunning, personalized
          websites that resonate with your audience. Elevate your brand and
          engage your customers with our innovative design services.
        </p>
        <p className="border rounded-2xl px-6 py-3 cursor-pointer hover:bg-gray-100 transition animate-pulse">
          Learn More
        </p>
      </article>
      {/* <Cards /> */}
    </section>
  );
};

export default Sections1;
