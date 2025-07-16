import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="h-screen flex flex-wrap p-10 items-center justify-center">
      <article className="h-40 mx-14 ">
        <p className="font-2xl">Innovate</p>
        <h1 className="text-4xl my-10">
          Transform Your Ideas into Scalable Solutions
        </h1>
      </article>
      <article className="-my-24 h-40 ">
        <p className="max-w-2xl">
          At Rabia Solutions, we specialize in scaling and optimizing
          applications to meet your growing needs. Our expertise in system
          design ensures that your app performs at its best while maintaining
          top-notch security. Trust us to elevate your project with high-quality
          MERN stack development.
        </p>
        <div className="my-8">
          <span className="border rounded p-3 mx-2  ">Learn More</span>
          <span className="border rounded p-3 mx-2 text-white bg-black transition-colors">
            Get Start
          </span>
        </div>
      </article>
      <Image
        src="/favicon.ico"
        className="w-fill"
        alt="photo"
        width={400}
        height={400}
      />
    </section>
  );
};

export default Section2;
