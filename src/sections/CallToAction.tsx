"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="w-full mx-auto flex flex-col items-center justify-center">
        <div className="relative">
          <div className="text-center max-w-[900px]">
            <h2 className="title-section">Sign Up For Free</h2>
          </div>
          <p className="description-section">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            veniam excepturi amet. Alias, consectetur tempore excepturi eos
            laudantium pariatur aliquam.
          </p>
          <motion.img
            src="/assets/star.png"
            alt="star"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[100px]"
            style={{
              y: translateY,
            }}
          />
          <motion.img
            src="/assets/spring.png"
            alt="spring"
            width={360}
            height={360}
            className="absolute -right-[340px] -top-[19px]"
            style={{
              y: translateY,
            }}
          />
        </div>
        <div className="flex gap-5 mt-10 items-center">
          <button className="btn-black">Get Started</button>
          <button className="btn-white">Learn More</button>
        </div>
      </div>
    </section>
  );
};
