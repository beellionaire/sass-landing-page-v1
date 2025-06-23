"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="w-full md:w-[80%] md:mx-auto p-5">
        <div className="md:flex items-center">
          <div className="lg:max-w-[900px]">
            <div className="border-rainbow w-fit">
              <div className="inner text-md inline-flex tracking-tight max-w-[300px]">
                <p className="text-white font-semibold">
                  Version 1.0 of the landing page
                </p>
              </div>
            </div>
            <h1 className="text-5xl xl:text-8xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Grow your Business with Us
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, quas repellat illo eaque architecto velit aperiam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, numquam!
            </p>
            <div className="flex gap-5 mt-10 items-center">
              <button className="btn-black">Get For Free</button>
              <button className="btn-white">Learn More</button>
            </div>
          </div>
          <div className="mt-20 md:flex-1 md:h-[648px] relative">
            <motion.img
              src="/assets/cog.png"
              alt="cog"
              width={100000}
              height={800}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                y: [-20, 20],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/assets/cylinder.png"
              alt="cylinder"
              width={250}
              height={250}
              className="hidden md:block -top-24 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src="/assets/noodle.png"
              alt="noddle"
              width={250}
              height={250}
              className="hidden lg:block absolute top-[564px] left-[478px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
