import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faUpRightAndDownLeftFromCenter,
  faShieldVirus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Section3 = () => {
  const Cards = [
    {
      icon: faUpRightAndDownLeftFromCenter,
      text: "Tailored System Design Solutions for Your Unique Application Needs",
      paragraphe:
        "Experience significant performance improvements that elevate user satisfaction and engagement.",
    },
    {
      icon: faShieldVirus,
      text: "Implementing Advanced Security Measures to Protect Your Applications and Data",
      paragraphe:
        "Experience significant performance improvements that elevate user satisfaction and engagement.",
    },
    {
      icon: faPenRuler,
      text: "Custom Solutions That Scale with Your Business Growth and Requirements",
      paragraphe:
        "Experience significant performance improvements that elevate user satisfaction and engagement.",
    },
  ];
  return (
    <section className="flex flex-col justify-center text-center h-screen">
      <h1 className="text-6xl font-bold ">
        Unlock Your App’s Potential with Our Performance Enhancements and
        Optimizations
      </h1>
      <div className="flex justify-evenly items-center gap-6 my-20 min-w-2xs ">
        {Cards.map(({ icon, text, paragraphe }, index) => (
          <div key={index} className="max-w-80 min-w-3xs flex-col md:w-80 text-center ">
            <FontAwesomeIcon
              icon={icon}
              height={40}
              width={40}
              className="w-full"
            />
            <h1 className="font-bold text-xl m-6 ">{text}</h1>
            <p>{paragraphe}</p>
            <p className="m-6 border rounded p-1 max-w-70">
              Learn more
              <FontAwesomeIcon   className="inline-block animate-pulse m-2" icon={faArrowRight} width={20} height={20} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
